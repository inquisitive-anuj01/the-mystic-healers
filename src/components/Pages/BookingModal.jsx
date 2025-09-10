"use client"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { X } from "lucide-react"

export default function BookingModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
  })

  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  const validateForm = () => {
    const newErrors = {}

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = "Name is required"
    }

    // Phone validation (exactly 10 digits)
    const phoneRegex = /^\d{10}$/
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required"
    } else if (!phoneRegex.test(formData.phone)) {
      newErrors.phone = "Phone number must be exactly 10 digits"
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!formData.email.trim()) {
      newErrors.email = "Email is required"
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email address"
    }

    // Address validation
    if (!formData.address.trim()) {
      newErrors.address = "Address is required"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!validateForm()) return

    setIsSubmitting(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000))

    console.log("[v0] Form submitted:", formData)
    alert("Booking request submitted successfully!")

    // Reset form
    setFormData({ name: "", phone: "", email: "", address: "" })
    setErrors({})
    setIsSubmitting(false)
    onClose()
  }

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }))
    }
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          onClick={onClose}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />

          {/* Modal */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="relative w-full max-w-md bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Glass effect overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-white/5 rounded-2xl" />

            <div className="relative p-6">
              {/* Close button */}
              <button
                onClick={onClose}
                className="cursor-pointer absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              >
                <X className="w-5 h-5 text-white" />
              </button>

              {/* Header */}
              <div className="text-center mb-6">
                <h2 className="text-2xl font-bold text-white mb-2">Book Your Session</h2>
                <p className="text-white/80">Fill in your details to get started</p>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Input
                    placeholder="Full Name *"
                    value={formData.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:border-white/40"
                  />
                  {errors.name && <p className="text-red-300 text-sm mt-1">{errors.name}</p>}
                </div>

                <div>
                  <Input
                    placeholder="Phone Number (10 digits) *"
                    value={formData.phone}
                    onChange={(e) =>
                      handleInputChange("phone", e.target.value.replace(/\D/g, "").slice(0, 10))
                    }
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:border-white/40"
                  />
                  {errors.phone && <p className="text-red-300 text-sm mt-1">{errors.phone}</p>}
                </div>

                <div>
                  <Input
                    type="email"
                    placeholder="Email Address *"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:border-white/40"
                  />
                  {errors.email && <p className="text-red-300 text-sm mt-1">{errors.email}</p>}
                </div>

                <div>
                  <Textarea
                    placeholder="Address *"
                    value={formData.address}
                    onChange={(e) => handleInputChange("address", e.target.value)}
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:border-white/40 min-h-[80px]"
                  />
                  {errors.address && <p className="text-red-300 text-sm mt-1">{errors.address}</p>}
                </div>

                {/* Submit button */}
                <div className="pt-4">
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="cursor-pointer w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-3 rounded-xl transition-all duration-300 hover:scale-105"
                  >
                    {isSubmitting ? "Submitting..." : "Get Quote"}
                  </Button>
                </div>
              </form>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
