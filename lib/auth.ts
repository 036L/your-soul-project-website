export interface User {
  id: string
  email: string
  role: "admin" | "user"
  name: string
}

export interface AuthState {
  user: User | null
  isAuthenticated: boolean
  isAdmin: boolean
}

// Simple admin credentials (in production, this would be in a secure database)
const ADMIN_CREDENTIALS = {
  email: "admin@yoursoulproject.com",
  password: "admin123", // In production, this would be hashed
  user: {
    id: "admin-1",
    email: "admin@yoursoulproject.com",
    role: "admin" as const,
    name: "Admin User",
  },
}

export class AuthService {
  private static instance: AuthService
  private authState: AuthState = {
    user: null,
    isAuthenticated: false,
    isAdmin: false,
  }
  private listeners: ((state: AuthState) => void)[] = []

  static getInstance(): AuthService {
    if (!AuthService.instance) {
      AuthService.instance = new AuthService()
    }
    return AuthService.instance
  }

  constructor() {
    this.loadAuthState()
  }

  private loadAuthState() {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem("auth_state")
      if (stored) {
        try {
          const parsed = JSON.parse(stored)
          this.authState = parsed
        } catch (error) {
          console.error("Failed to parse auth state:", error)
        }
      }
    }
  }

  private saveAuthState() {
    if (typeof window !== "undefined") {
      localStorage.setItem("auth_state", JSON.stringify(this.authState))
    }
    this.notifyListeners()
  }

  private notifyListeners() {
    this.listeners.forEach((listener) => listener(this.authState))
  }

  subscribe(listener: (state: AuthState) => void) {
    this.listeners.push(listener)
    return () => {
      this.listeners = this.listeners.filter((l) => l !== listener)
    }
  }

  async login(email: string, password: string): Promise<{ success: boolean; error?: string }> {
    // Simple credential check
    if (email === ADMIN_CREDENTIALS.email && password === ADMIN_CREDENTIALS.password) {
      this.authState = {
        user: ADMIN_CREDENTIALS.user,
        isAuthenticated: true,
        isAdmin: true,
      }
      this.saveAuthState()
      return { success: true }
    }

    return { success: false, error: "Invalid credentials" }
  }

  logout() {
    this.authState = {
      user: null,
      isAuthenticated: false,
      isAdmin: false,
    }
    this.saveAuthState()
  }

  getAuthState(): AuthState {
    return { ...this.authState }
  }

  isAuthenticated(): boolean {
    return this.authState.isAuthenticated
  }

  isAdmin(): boolean {
    return this.authState.isAdmin
  }

  getUser(): User | null {
    return this.authState.user
  }
}
