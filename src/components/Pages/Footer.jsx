import { Button } from "@/components/ui/button"
import { useState } from "react"
import BookingModal from "./BookingModal"

export default function Footer() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  return (
    <footer className="relative flex flex-col items-center justify-center p-4  z-40 bg-gray-200 rounded-t-[44px] shadow-xl -mt-16 py-20">
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
          onClick={() => setIsModalOpen(true)}
            size="lg"
            className="cursor-pointer heartbeat-gentle bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105"
          >
            Start Your Healing Journey
          </Button>
        </div>

        <div className="border-t border-border ">
          <div className="flex flex-col md:flex-row justify-between items-center mt-20">
            <div className="flex items-center space-x-2 mb-2 md:mb-0">
              <img src="https://res.cloudinary.com/dzvwqhzgf/image/upload/v1757405404/Untitled_design_58_udmbsi.png" className="w-28 h-22 scale-160 " />
            </div>

            <div className="text-muted-foreground mt-10 text-sm">© 2025 The Mystic Healers. All rights reserved.</div>
          </div>
        </div>
      </div>
       <BookingModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </footer>
  )
}
