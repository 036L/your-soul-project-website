import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Leaf, Heart, Users, Sprout, Sun, Droplets } from "lucide-react"
import Image from "next/image"

export default function LogoStoryPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/10" />
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <Badge variant="secondary" className="bg-secondary/20 text-secondary-foreground border-secondary/30">
              ロゴに込めた想い
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold text-balance leading-tight">
              シンボルに宿る
              <span className="text-primary block">魂の物語</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              Your Soul Projectのロゴには、私たちの理念と未来への想いが込められています。
              一つひとつの要素に込められた意味をご紹介します。
            </p>
          </div>
        </div>
      </section>

      {/* Logo Display */}
      <section className="py-16 bg-card/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-background rounded-2xl shadow-lg p-12 mb-8">
              <Image
                src="/images/logo-main.png"
                alt="Your Soul Project ロゴ"
                width={400}
                height={300}
                className="mx-auto"
                priority
              />
            </div>
            <p className="text-lg text-muted-foreground">「一持たざる者達の豊かな現活動」</p>
          </div>
        </div>
      </section>

      {/* Logo Elements Breakdown */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">ロゴの構成要素</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                それぞれの要素が持つ深い意味と、私たちの想いをご紹介します
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
              {/* Green Leaf Element */}
              <Card className="bg-background border-border hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <div className="bg-primary/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <Leaf className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-2xl text-primary">緑の葉</CardTitle>
                  <CardDescription>自然との調和と成長</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    ロゴの上部に配置された緑の葉は、<strong>自然との調和</strong>と<strong>持続可能な成長</strong>
                    を象徴しています。
                    私たちは自然の一部として生きることの大切さを表現し、環境に配慮した生活を目指しています。
                  </p>
                  <div className="bg-primary/10 rounded-lg p-4">
                    <p className="text-sm text-primary font-medium">
                      「自然と共に生きる知恵を大切にし、地球に優しい暮らしを実践する」
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Flowing S Shape */}
              <Card className="bg-background border-border hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <div className="bg-secondary/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <Droplets className="h-8 w-8 text-secondary" />
                  </div>
                  <CardTitle className="text-2xl text-secondary">流れるS字</CardTitle>
                  <CardDescription>魂の流れと循環</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    中央の流れるようなS字は、<strong>魂（Soul）の流れ</strong>と<strong>生命の循環</strong>
                    を表現しています。 人と人、人と自然のつながりが生み出す豊かな循環を象徴しています。
                  </p>
                  <div className="bg-secondary/10 rounded-lg p-4">
                    <p className="text-sm text-secondary font-medium">
                      「すべてのものは繋がり合い、循環の中で豊かさを生み出す」
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Blue Typography */}
              <Card className="bg-background border-border hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <div className="bg-accent/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <Heart className="h-8 w-8 text-accent" />
                  </div>
                  <CardTitle className="text-2xl text-accent">青い文字</CardTitle>
                  <CardDescription>信頼と安らぎ</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    「Your Soul Project」の青い文字は、<strong>信頼</strong>と<strong>安らぎ</strong>、そして
                    <strong>深い精神性</strong>を表現しています。
                    空や海のような広がりと深さを持つ、心の平安を象徴しています。
                  </p>
                  <div className="bg-accent/10 rounded-lg p-4">
                    <p className="text-sm text-accent font-medium">「信頼できる仲間と共に、心の平安を見つける場所」</p>
                  </div>
                </CardContent>
              </Card>

              {/* Subtitle Message */}
              <Card className="bg-background border-border hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <div className="bg-primary/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <Users className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-2xl text-primary">サブタイトル</CardTitle>
                  <CardDescription>プロジェクトの本質</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    「一持たざる者達の豊かな現活動一」というサブタイトルは、私たちの<strong>核となる理念</strong>
                    を表現しています。
                    物質的な豊かさではなく、心の豊かさと人とのつながりを大切にする想いが込められています。
                  </p>
                  <div className="bg-primary/10 rounded-lg p-4">
                    <p className="text-sm text-primary font-medium">「真の豊かさは、分かち合いと支え合いの中にある」</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Overall Message */}
            <Card className="bg-gradient-to-r from-primary/10 via-secondary/5 to-accent/10 border-primary/20">
              <CardHeader className="text-center">
                <div className="bg-primary/20 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                  <Sun className="h-10 w-10 text-primary" />
                </div>
                <CardTitle className="text-3xl text-primary mb-4">ロゴに込められた総合的なメッセージ</CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-6">
                <p className="text-lg text-muted-foreground leading-relaxed max-w-4xl mx-auto">
                  Your Soul Projectのロゴは、<strong>自然との調和</strong>、<strong>魂の循環</strong>、
                  <strong>信頼関係</strong>、 そして<strong>真の豊かさ</strong>
                  という4つの要素が一体となって、私たちの理念を表現しています。
                </p>
                <div className="bg-background/80 rounded-xl p-8 max-w-3xl mx-auto">
                  <p className="text-xl font-medium text-primary mb-4">
                    「物質的な所有を超えた、心の豊かさと人とのつながりを大切にする」
                  </p>
                  <p className="text-muted-foreground">
                    これが私たちYour Soul Projectの根本的な想いであり、
                    このロゴを見るたびに、その理念を思い出し、実践していくことを願っています。
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Design Process */}
      <section className="py-20 bg-card/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">デザインプロセス</h2>
              <p className="text-xl text-muted-foreground">ロゴ制作に込めた想いと過程</p>
            </div>

            <div className="space-y-8">
              <Card className="bg-background border-border">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className="bg-primary/20 rounded-full w-12 h-12 flex items-center justify-center">
                      <Sprout className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-xl">1. コンセプトの明確化</CardTitle>
                      <CardDescription>プロジェクトの本質を見つめ直す</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    まず、Your Soul Projectが目指すものは何かを深く考えました。
                    「持たざる者達の豊かな現活動」という言葉に込められた想いを、 視覚的に表現する方法を模索しました。
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-background border-border">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className="bg-secondary/20 rounded-full w-12 h-12 flex items-center justify-center">
                      <Leaf className="h-6 w-6 text-secondary" />
                    </div>
                    <div>
                      <CardTitle className="text-xl">2. 自然要素の取り入れ</CardTitle>
                      <CardDescription>環境との調和を表現</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    自然との共生を大切にする私たちの価値観を表現するため、
                    葉のモチーフを採用しました。成長と再生、そして生命力を象徴する
                    緑色を使用することで、持続可能性への想いを込めました。
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-background border-border">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className="bg-accent/20 rounded-full w-12 h-12 flex items-center justify-center">
                      <Droplets className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <CardTitle className="text-xl">3. 流れと循環の表現</CardTitle>
                      <CardDescription>つながりと循環を視覚化</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    人と人、人と自然のつながりを表現するため、流れるようなS字のデザインを採用しました。
                    これは魂（Soul）の頭文字でもあり、生命の循環と継続性を表現しています。
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-background border-border">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className="bg-primary/20 rounded-full w-12 h-12 flex items-center justify-center">
                      <Heart className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-xl">4. 色彩とタイポグラフィ</CardTitle>
                      <CardDescription>感情と信頼を伝える</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    青色は信頼と安らぎを表現し、緑色は自然と成長を象徴します。
                    フォントは親しみやすさと信頼性を両立させ、
                    誰もが安心して参加できるコミュニティであることを表現しました。
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
