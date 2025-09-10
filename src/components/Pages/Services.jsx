import React from 'react';

// The provided services data
const services = [
  {
    title: "Pranic Healing",
    description: "Harness the power of prana (life force) to cleanse and energize your energy body for optimal health.",
    image: "https://themystichealers.com/uploads/healing_1752492933312_1752733546221.png",
    benefits: ["Energy Cleansing", "Chakra Balancing", "Physical Wellness"],
  },
  {
    title: "Reiki Healing",
    description: "Experience the gentle flow of universal life energy to restore balance and promote natural healing.",
    image: "https://themystichealers.com/uploads/Reiki-Modalities_1716355297901.jpg",
    benefits: ["Stress Relief", "Energy Balance", "Emotional Healing"],
  },
  {
    title: "Numerology",
    description:
      "Discover the mystical significance of numbers in your life and unlock your destiny through numerical wisdom.",
    image: "https://themystichealers.com/uploads/Numerology_1716355277436.jpg",
    benefits: ["Life Path Insights", "Personal Numbers", "Future Guidance"],
  },
  {
    title: "Akashic Reading",
    description:
      "Access your soul's eternal records to gain profound insights into your life purpose and spiritual journey.",
    image: "https://themystichealers.com/uploads/Akashic-Alt_1752072764288.jpg",
    benefits: ["Soul Guidance", "Past Life Insights", "Life Purpose"],
  },
  {
    title: "Tarot Reading",
    description: "Receive divine guidance through the ancient wisdom of tarot cards to illuminate your path forward.",
    image: "https://themystichealers.com/uploads/Tarot-Reading_1716534681239.jpg",
    benefits: ["Future Insights", "Decision Guidance", "Spiritual Clarity"],
  },
  {
    title: "Subconscious Programming",
    description: "Reprogram limiting beliefs and unlock your full potential through powerful subconscious techniques.",
    image: "https://themystichealers.com/uploads/Theta-Modalities_1716534707265.jpg",
    benefits: ["Belief Transformation", "Mental Clarity", "Personal Growth"],
  },
  {
    title: "Hypnotherapy",
    description: "Enter deep states of relaxation and healing to address trauma, habits, and emotional blockages.",
    image: "https://themystichealers.com/uploads/Sound-Modalities_1716534730867.jpg",
    benefits: ["Trauma Healing", "Habit Change", "Deep Relaxation"],
  },
    {
    title: "Animal Communication",
    description: "Connect telepathically with your beloved pets to understand their needs, feelings, and messages.",
    image: "https://themystichealers.com/uploads/dog_1752492889832.png",
    benefits: ["Pet Understanding", "Behavioral Insights", "Emotional Connection"],
  },
  {
    title: "Chakra Healing",
    description: "Balance and align your seven energy centers to restore harmony and vitality to your entire being.",
    image: "https://themystichealers.com/uploads/4_1757320664470.jpeg",
    benefits: ["Energy Alignment", "Emotional Balance", "Spiritual Harmony"],
  },
];

const ServicesCarousel = () => {

      // <div className="relative z-10 w-full px-6 sm:px-10 lg:px-16">
      //   <div className="max-w-5xl mx-auto">
      //     <div className="text-left float">
      //       <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-bold text-white mb-4 leading-tight">
      //         Access the World's Finest{" "}
      //         <span className="text-primary">Holistic Healers</span> Online
      //       </h1>
      //       <p className="text-lg font-bold md:font-normal sm:text-xl md:text-2xl xl:text-3xl text-white max-w-3xl mb-8">
      //         Find holistic spiritual practitioners with The Mystic Healers,
      //         and explore the power of spirituality and healing all in one
      //         place.
      //       </p>
      //     </div>
      //   </div>
      // </div>

      // <div className="absolute bottom-8 left-8 flex space-x-4 z-20">
      //   <a
      //     href="#"
      //     className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-gradient-to-br hover:from-purple-600 hover:via-pink-600 hover:to-orange-400 hover:text-white transition-all duration-300 hover:scale-110 float-gentle"
      //   >
      //     <Instagram size={24} />
      //   </a>
      //   <a
      //     href="#"
      //     className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-blue-600 hover:text-white transition-all duration-300 hover:scale-110 float-gentle"
      //     style={{ animationDelay: "1s" }}
      //   >
      //     <Facebook size={24} />
      //   </a>
      //   <a
      //     href="#"
      //     className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-green-600 hover:text-white transition-all duration-300 hover:scale-110 float-gentle"
      //     style={{ animationDelay: "2s" }}
      //   >
      //     <Users size={24} />
      //   </a>
      // </div>

      // <div className="absolute bottom-8 right-8 z-20">
      //   <div className="bg-black/40 backdrop-blur-md border border-white/30 rounded-2xl p-6 w-80 shadow-2xl">
      //     <h3 className="text-white text-xl font-semibold mb-2">
      //       Are you interested?
      //     </h3>
      //     <p className="text-white/90 text-sm mb-4">
      //       Register for early access to our mystical healing platform
      //     </p>

      //     {!isSubmitted ? (
      //       <form onSubmit={handleEmailSubmit} className="space-y-4">
      //         <input
      //           type="email"
      //           value={email}
      //           onChange={(e) => setEmail(e.target.value)}
      //           placeholder="Enter your email"
      //           className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent"
      //           required
      //         />
      //         <Button
      //           type="submit"
      //           className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg py-3 font-semibold transition-all duration-300 hover:scale-105"
      //         >
      //           Subscribe Now
      //         </Button>
      //       </form>
      //     ) : (
      //       <div className="text-center py-4">
      //         <div className="text-green-400 text-lg font-semibold mb-2">
      //           ✨ Thank you!
      //         </div>
      //         <p className="text-white/90 text-sm">
      //           You'll be notified when we launch
      //         </p>
      //       </div>
      //     )}
      //   </div>
      // </div>




  return (
    <>
      <style>
        {`
        @keyframes scroll-right-to-left {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-100%);
          }
        }
        @keyframes heartbeat-gentle {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.05);
          }
        }
        .heartbeat-gentle {
          animation: heartbeat-gentle 1.5s ease-in-out infinite;
        }

        .custom-primary-bg {
          background-color: oklch(0.55 0.15 85);
        }
        .custom-primary-text {
          color: oklch(0.55 0.15 85);
        }
        `}
      </style>
      <div className="relative flex flex-col items-center justify-center min-h-screen p-4 font-inter z-10 bg-gray-200 rounded-t-[44px] shadow-xl -mt-8 pb-20">
        <h1 className="text-2xl sm:text-4xl md:text-4xl xl:text-6xl font-bold text-foreground mb-1 leading-tight">Our Healing Modalities</h1>
        <p className="text-lg font-bold md:font-normal sm:text-xl md:text-2xl xl:text-3xl text-gray-800 max-w-3xl mb-8">
          Find the Right Healing Practice for You
        </p>

        {/* Carousel Container */}
        <div className="relative w-full overflow-hidden mx-auto">
          {/* Duplicate the services array to create a seamless infinite loop effect */}
          <div className="flex items-stretch w-[200%] md:w-[150%] xl:w-[125%] animate-[scroll-right-to-left_20s_linear_infinite] md:animate-[scroll-right-to-left_40s_linear_infinite]">
            {[...services, ...services].map((service, index) => (
              <div key={index} className="flex-shrink-0 w-80 sm:w-96 p-4 h-full">
                <div className="flex flex-col h-full bg-white rounded-3xl shadow-xl overflow-hidden group hover:shadow-xl transition-all duration-300 hover:scale-105">
                  <div className="relative w-full h-48 overflow-hidden rounded-t-3xl">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/400x300/e5e7eb/4b5563?text=Image+Not+Found" }}
                    />
                  </div>
                  <div className="p-6 flex flex-col justify-between flex-grow">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                        {service.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {service.benefits.map((benefit, i) => (
                          <span key={i} className="px-3 py-1 bg-gray-100 text-gray-800 text-sm rounded-full">
                            {benefit}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="mt-auto pt-4 text-center">
                      <button
                        onClick={() => console.log(`Booking session for ${service.title}...`)}
                        className="w-full px-6 py-3 text-white font-semibold rounded-full shadow-lg transform transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 custom-primary-bg hover:scale-105 heartbeat-gentle"
                        style={{ backgroundColor: 'oklch(0.55 0.15 85)' }}
                      >
                        Book Session
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ServicesCarousel;
