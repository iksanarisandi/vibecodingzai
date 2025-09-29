"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Lightbulb, Wand2, Rocket, Wrench } from "lucide-react";

export default function Home() {
  const scrollToRoadmap = () => {
    const roadmapSection = document.getElementById("roadmap");
    if (roadmapSection) {
      roadmapSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const joinCommunity = () => {
    window.open("https://t.me/vibecodingindonesia", "_blank");
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center px-4 py-24 md:py-32 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Vibe Coding Basic Guide
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Wujudkan idemu, mari ngeprompt bersamaku.
          </p>
          <Button 
            size="lg" 
            className="px-8 py-3 text-lg font-medium bg-primary hover:bg-primary/90 transition-all duration-200 shadow-lg hover:shadow-xl"
            onClick={scrollToRoadmap}
          >
            Mulai Belajar Sekarang
          </Button>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="flex flex-col items-center justify-center px-4 py-16 md:py-24">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Apa itu Vibe Coding?
          </h2>
          <div className="space-y-6 text-lg text-foreground/80 leading-relaxed">
            <p>
              Vibe Coding adalah alur kerja modern dimana kamu mengubah ide menjadi aplikasi fungsional dengan bantuan AI. 
              Fokusmu bukan lagi menulis kode baris per baris, melainkan merancang perintah (prompt) yang detail untuk 
              diproses oleh AI.
            </p>
            <p>
              Panduan ini akan membawamu melalui setiap langkah, dari brainstorming ide hingga deployment, semuanya 
              dipercepat oleh tools AI terkini.
            </p>
          </div>
        </div>
      </section>

      {/* Roadmap Section */}
      <section id="roadmap" className="px-4 py-16 md:py-24 bg-muted/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Alur Kerja Vibe Coding
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {/* Card 1 */}
            <Card className="bg-card border border-border shadow-sm hover:shadow-md transition-all duration-200 hover:-translate-y-1">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Lightbulb className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">Tahap 1: Ideasi & Prompt</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  Brainstorming ide, memvalidasinya, dan merancang prompt yang detail dengan bantuan AI seperti 
                  ChatGPT atau Gemini.
                </CardDescription>
              </CardContent>
            </Card>

            {/* Card 2 */}
            <Card className="bg-card border border-border shadow-sm hover:shadow-md transition-all duration-200 hover:-translate-y-1">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Wand2 className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">Tahap 2: Generasi UI</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  Mengubah prompt menjadi antarmuka (UI) fungsional menggunakan platform seperti v0.dev, Lovable, 
                  atau Bolt.
                </CardDescription>
              </CardContent>
            </Card>

            {/* Card 3 */}
            <Card className="bg-card border border-border shadow-sm hover:shadow-md transition-all duration-200 hover:-translate-y-1">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Rocket className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">Tahap 3: Deployment</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  Menghubungkan hasil ke GitHub dan mendeploy aplikasi secara instan ke seluruh dunia melalui Vercel 
                  atau Netlify.
                </CardDescription>
              </CardContent>
            </Card>

            {/* Card 4 */}
            <Card className="bg-card border border-border shadow-sm hover:shadow-md transition-all duration-200 hover:-translate-y-1">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Wrench className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">Tahap 4: Kustomisasi Lokal</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  Menyempurnakan detail dan menambah logika kompleks menggunakan editor kode AI-native seperti Cursor 
                  atau VS Code + Copilot.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="px-4 py-16 md:py-24 bg-primary/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Siap Memulai Perjalananmu?
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Bergabunglah dengan komunitas developer dan antusias AI untuk berdiskusi, berbagi ilmu, dan tumbuh bersama.
          </p>
          <Button 
            size="lg" 
            className="px-8 py-3 text-lg font-medium bg-primary hover:bg-primary/90 transition-all duration-200 shadow-lg hover:shadow-xl"
            onClick={joinCommunity}
          >
            Join Komunitas Vibe Coding
          </Button>
        </div>
      </section>
    </div>
  );
}