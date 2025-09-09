import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="relative z-0 min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://res.cloudinary.com/dzvwqhzgf/image/upload/v1757404046/serene-mountain-landscape-with-person-meditating-a_1_fr7gae.jpg')`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-background/60 via-background/60 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full px-6 sm:px-10 lg:px-16">
        <div className="max-w-5xl mx-auto">
          <div className="text-left float">
            <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-bold text-foreground mb-4 leading-tight">
              Access the World's Finest{" "}
              <span className="text-primary">Holistic Healers</span> Online
            </h1>
            <p className="text-lg font-bold md:font-normal sm:text-xl md:text-2xl xl:text-3xl text-gray-800 max-w-3xl mb-8">
              Find holistic spiritual practitioners with The Mystic Healers, and
              explore the power of spirituality and healing all in one place.
            </p>

<Button
  size="lg"
  className="heartbeat-gentle bg-primary hover:bg-primary/90 text-primary-foreground 
             w-44 sm:w-52 lg:w-60 
             h-14 sm:h-16 lg:h-18
             flex items-center justify-center
             rounded-full text-base sm:text-lg lg:text-xl font-semibold 
             transition-all duration-300 hover:scale-105"
>
  Book Now
</Button>

          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 right-20 w-20 h-20 bg-primary/20 rounded-full blur-xl float"></div>
      <div
        className="absolute bottom-40 left-20 w-32 h-32 bg-secondary/20 rounded-full blur-xl float"
        style={{ animationDelay: "2s" }}
      ></div>
    </section>
  );
}
