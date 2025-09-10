import { useState, useEffect } from "react"
// import BookingModal from "./BookingModal"

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  // const [isModalOpen, setIsModalOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
     <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/20 backdrop-blur-md shadow-md"
            : ""
        }`}
      >
      <div className="mx-auto px-6 sm:px-8 lg:px-12 py-4">
        <div className="flex ml-40 items-center justify-start">
          <div className="flex items-center space-x-20">
            <img src="https://res.cloudinary.com/dzvwqhzgf/image/upload/v1757405404/Untitled_design_58_udmbsi.png" className="w-28 h-22 scale-140 " />
            
          </div>

          {/* <button
            onClick={() => setIsModalOpen(true)}
          className="cursor-pointer hidden md:block bg-primary text-primary-foreground px-6 py-2 rounded-full font-medium hover:bg-primary/90 transition-colors heartbeat-gentle">
            Book a Session
          </button> */}
        </div>
      </div>
       {/* <BookingModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} /> */}
    </header>
  )
}
