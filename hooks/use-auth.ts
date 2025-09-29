"use client"

import { useState, useEffect } from "react"
import { AuthService, type AuthState } from "@/lib/auth"

export function useAuth() {
  const [authState, setAuthState] = useState<AuthState>({
    user: null,
    isAuthenticated: false,
    isAdmin: false,
  })
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const authService = AuthService.getInstance()

    // Get initial state
    setAuthState(authService.getAuthState())
    setLoading(false)

    // Subscribe to changes
    const unsubscribe = authService.subscribe((state) => {
      setAuthState(state)
    })

    return unsubscribe
  }, [])

  const login = async (email: string, password: string) => {
    const authService = AuthService.getInstance()
    return await authService.login(email, password)
  }

  const logout = () => {
    const authService = AuthService.getInstance()
    authService.logout()
  }

  return {
    ...authState,
    loading,
    login,
    logout,
  }
}
