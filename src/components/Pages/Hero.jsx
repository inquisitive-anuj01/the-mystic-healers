import { useState, useEffect, useRef } from "react";
import { Instagram, Facebook, Users } from "lucide-react";
import Galaxy from "../Pages/Galaxy.jsx";
import audiotune from "../../assets/audiotune.mp3";

export default function Hero() {
  const audioRef = useRef(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      audio.loop = true;
      audio.muted = true;

      const tryPlay = async () => {
        try {
          await audio.play();
          console.log("Autoplay success ");
        } catch (error) {
          console.log("Autoplay blocked ");
          const enableAudio = () => {
            audio.muted = false;
            audio.play();
            document.removeEventListener("click", enableAudio);
          };
          document.addEventListener("click", enableAudio);
        }
      };

      tryPlay();
    }
  }, []);


  return (
    <section className=" bg-black relative z-0 min-h-screen flex items-center justify-center overflow-hidden">


      <audio ref={audioRef} src={audiotune} preload="auto" />


      {/* bg animation galaxy */}
      <div className="absolute inset-0 -z-10">
        <Galaxy
          mouseInteraction={true}
          mouseRepulsion={true}
          density={1}
          glowIntensity={0.7}
          saturation={0.6}
          hueShift={230}
          twinkleIntensity={0.8}
          rotationSpeed={0.15}
          repulsionStrength={0.5}
          autoCenterRepulsion={0}
          starSpeed={0.5}
          animationSpeed={1.1}
        />
      </div>


      {/* social icons  */}
      <div className="absolute bottom-8 left-8 flex space-x-4 z-20">
        <a
          href="#"
          className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-gradient-to-br hover:from-purple-600 hover:via-pink-600 hover:to-orange-400 hover:text-white transition-all duration-300 hover:scale-110 float-gentle"
        >
          <Instagram size={24} />
        </a>
        <a
          href="#"
          className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-blue-600 hover:text-white transition-all duration-300 hover:scale-110 float-gentle"
          style={{ animationDelay: "1s" }}
        >
          <Facebook size={24} />
        </a>
        <a
          href="#"
          className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-green-600 hover:text-white transition-all duration-300 hover:scale-110 float-gentle"
          style={{ animationDelay: "2s" }}
        >
          <Users size={24} />
        </a>
      </div>


    </section>
  );
}
