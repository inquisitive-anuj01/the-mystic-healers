"use client";
import { motion } from "framer-motion";

export default function WhyChooseUs() {
  const reasons = [
    {
      title: "Trusted & Certified Healers",
      desc: "We connect seekers to verified professionals offering Reiki, Pranic Healing, Akashic Reading, and more. Each practitioner ensures the highest level of expertise and compassion.",
    },
    {
      title: "Transformative Healing",
      desc: "Our sessions address your spiritual and emotional needs, paving the way for wellbeing, peace, and self-discovery.",
    },
    {
      title: "A Safe & Supportive Community",
      desc: "Join an open community of like-minded individuals. Share, learn, and grow in a collaborative and accepting environment.",
    },
    {
      title: "Convenient & Accessible",
      desc: "Book healing sessions online at your convenience. Access our holistic practitioners from anywhere, anytime.",
    },
    {
      title: "A Holistic Approach to Well-being",
      desc: "We unify mind, body, and spirit, aligning energies for emotional balance, clarity, and spiritual guidance.",
    },
    {
      title: "Step-by-Step Guidance for Lasting Change",
      desc: "Our healers make sure you receive complete support from your initial session through ongoing development, offering the guidance needed to create a lasting impact on your life and others around you.",
    },
  ];

  return (
    <section className="relative z-30 min-h-screen flex items-center justify-center overflow-hidden rounded-t-[44px] shadow-xl -mt-20 py-20">
      {/* Background */}
      <div
        className="absolute inset-0 bg-center bg-no-repeat "
        style={{
          backgroundImage: `url('https://res.cloudinary.com/dzvwqhzgf/image/upload/v1757485644/Untitled_design_59_rob2g8.png')`,
          backgroundSize: "contain", 
          backgroundPosition: "center", 
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/40 to-black/80"></div>
      </div>

      {/* Content */}
      <div className="relative z-40 w-full px-6 sm:px-10 lg:px-16">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-primary mb-6"
          >
            Why Choose <span className="text-foreground">The Mystic Healers?</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto mb-14"
          >
            Finding reliable, professional healers who will do right by you can be a challenge. At The Mystic Healers, we
            recognise this struggle and are dedicated to connecting you with the most suitable healing practitioners for
            your unique needs.
          </motion.p>

          {/* Reasons Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {reasons.map((reason, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                className="p-6 bg-card/90 rounded-2xl shadow-xl backdrop-blur-md hover:scale-105 transition-transform"
              >
                <h3 className="text-xl font-semibold text-primary mb-3">{reason.title}</h3>
                <p className="text-muted-foreground text-base">{reason.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Floating Orbs */}
      <div className="absolute top-28 left-20 w-24 h-24 bg-primary/30 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-32 right-28 w-32 h-32 bg-secondary/30 rounded-full blur-3xl animate-pulse"></div>
    </section>
  );
}
