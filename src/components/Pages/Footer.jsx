import { Button } from "@/components/ui/button"

export default function Footer() {
  return (
    <footer className="relative flex flex-col items-center justify-center min-h-screen p-4  z-40 bg-gray-200 rounded-t-[44px] shadow-xl -mt-16 py-10">
      <div className=" mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-card-foreground mb-4 text-balance">
            Begin Your Journey of Self-Discovery and Healing
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto text-pretty">
            If you are looking for a permanent relief from emotional, mental and physical issues that harness your
            day-to-day life, our healing solutions are perfect for you.
          </p>
          <Button
            size="lg"
            className="heartbeat-gentle bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105"
          >
            Start Your Healing Journey
          </Button>
        </div>

        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                <span className="text-primary-foreground font-bold">✨</span>
              </div>
              <span className="text-lg font-bold text-card-foreground">The Mystic Healers</span>
            </div>

            <div className="text-muted-foreground text-sm">© 2025 The Mystic Healers. All rights reserved.</div>
          </div>
        </div>
      </div>
    </footer>
  )
}
