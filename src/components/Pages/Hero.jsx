import { useState, useRef } from "react";
import { Instagram, Facebook, Users, Volume2, VolumeX } from "lucide-react";
import { Button } from "@/components/ui/button";
import GalaxyBackground from "./GalaxyBackground";
import audiotune from "../../assets/audiotune.mp3";

export default function LandingPage() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [isValidName, setIsValidName] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const audioRef = useRef(null);

  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  // simple validation: name is not empty and at least 2 chars
  const validateName = (name) => name.trim().length >= 2;

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);
    setIsValidEmail(value ? validateEmail(value) : true);
  };

  const handleNameChange = (e) => {
    const value = e.target.value;
    setName(value);
    setIsValidName(value ? validateName(value) : true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validName = validateName(name);
    const validEmail = validateEmail(email);
    setIsValidName(validName);
    setIsValidEmail(validEmail);

    if (email && name && validEmail && validName) {
      setIsLoading(true); // start loader
      try {
        const response = await fetch(
          "https://mystic-backend-nine.vercel.app/api/user/register",
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name, email }),
          }
        );

        if (response.ok) {
          setIsSubmitted(true);
          setTimeout(() => {
            setEmail("");
            setName("");
            setIsSubmitted(false);
          }, 6000);
        }
      } catch (err) {
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    }
  };

  const toggleAudio = () => {
    if (audioRef.current) {
      if (isMuted) {
        audioRef.current.play();
        setIsMuted(false);
      } else {
        audioRef.current.pause();
        setIsMuted(true);
      }
    }
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-black flex flex-col">
      {/* Background Audio */}
      <audio ref={audioRef} loop preload="auto" className="hidden">
        <source src={audiotune} type="audio/mpeg" />
      </audio>

      {/* Galaxy Background */}
      <div className="absolute inset-0 z-0">
        <GalaxyBackground />
      </div>

      {/* Audio Control Button - Top Right */}
      <div className="absolute top-6 right-6 z-30">
        <button
          onClick={toggleAudio}
          className="w-12 h-12 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 hover:scale-110 shadow-2xl"
          aria-label={isMuted ? "Unmute audio" : "Mute audio"}
        >
          {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
        </button>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center flex-1 px-4 sm:px-6 lg:px-8 text-center">
        {/* Headings */}
        <div className="max-w-4xl mx-auto mb-10">
          <p className="text-2xl text-purple-200 font-semibold mb-6 drop-shadow-lg animate-pulse ">
            We're Launching Soon...!
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight mb-6">
            Access the World's Finest <br />
            <span className="text-transparent bg-gradient-to-r from-purple-300 via-pink-300 to-cyan-300 bg-clip-text font-extrabold">
              Holistic Healers
            </span>{" "}
            Online
          </h1>
          <p className="text-gray-100 text-base sm:text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Find holistic spiritual practitioners with The Mystic Healers, and
            explore the power of spirituality and healing all in one place.
          </p>
        </div>
        {/* Email + Name Form */}
        <div className="bg-black/40 backdrop-blur-md border border-white/30 rounded-2xl p-6 w-80 shadow-2xl">
          {!isSubmitted ? (
            <>
              <h3 className="text-white text-lg sm:text-xl font-semibold mb-2">
                Be the First to Experience Magic ✨
              </h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <input
                    type="text"
                    value={name}
                    onChange={handleNameChange}
                    placeholder="Enter your name"
                    className={`w-full px-4 py-3 mb-2 bg-white/10 backdrop-blur-sm border rounded-lg text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:border-transparent transition-all duration-300 ${
                      !isValidName
                        ? "border-red-400 focus:ring-red-400/50"
                        : "border-white/30 focus:ring-purple-400/50"
                    }`}
                    required
                  />
                  {!isValidName && (
                    <p className="text-red-300 text-xs mt-1">
                      Please enter your name (min 2 chars)
                    </p>
                  )}
                  <input
                    type="email"
                    value={email}
                    onChange={handleEmailChange}
                    placeholder="Enter your email address"
                    className={`w-full px-4 py-3 bg-white/10 backdrop-blur-sm border rounded-lg text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:border-transparent transition-all duration-300 ${
                      !isValidEmail
                        ? "border-red-400 focus:ring-red-400/50"
                        : "border-white/30 focus:ring-purple-400/50"
                    }`}
                    required
                  />
                  {!isValidEmail && (
                    <p className="text-red-300 text-xs mt-1">
                      Please enter a valid email address
                    </p>
                  )}
                </div>
                <Button
                  type="submit"
                  disabled={
                    isLoading ||
                    !email ||
                    !name ||
                    !isValidEmail ||
                    !isValidName
                  }
                  className="relative z-20 cursor-pointer w-full bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-600 
     hover:from-purple-700 hover:via-pink-700 hover:to-cyan-700 text-white rounded-lg py-3 
     font-semibold transition-all duration-300 hover:scale-105 shadow-lg border-0 
     disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                >
                  {isLoading ? (
                    <div className="flex items-center justify-center gap-2 pointer-events-none">
                      <svg
                        className="animate-spin h-5 w-5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                        />
                      </svg>
                      sending...
                    </div>
                  ) : (
                    "Join the Healing Journey"
                  )}
                </Button>
              </form>
            </>
          ) : (
            <div className="text-center py-6">
              <div className="text-emerald-400 text-2xl mb-3">
                ✨ Welcome to the Journey! ✨
              </div>
              <p className="text-white/90 text-sm">
                Thank you for joining our mystical community. You'll be the
                first to know when we launch our healing platform!
              </p>
            </div>
          )}
        </div>
        <div className="mt-12 lg:hidden">
          <Button
            onClick={() =>
              window.open(
                "https://www.instagram.com/channel/AbbascEjvW5_w-yY/?igsh=MXJqN3R1bWExeWM2dg==",
                "_blank"
              )
            }
            className="cursor-pointer flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 text-white px-6 py-3 rounded-xl shadow-lg"
          >
            <Users size={20} /> Join Our Community
          </Button>
        </div>
      </div>

      {/* Social Icons (bottom-left) */}
      <div className="absolute bottom-6 sm:bottom-8 w-full flex justify-center lg:justify-start lg:left-8 space-x-3 sm:space-x-4 z-20">
        <a
          href="#"
          className="w-12 h-12 sm:w-14 sm:h-14 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-gradient-to-br hover:from-pink-500 hover:via-purple-500 hover:to-indigo-500 transition-all duration-300 hover:scale-110 shadow-2xl group"
          aria-label="Follow us on Instagram"
        >
          <Instagram size={20} />
        </a>
        <a
          href="#"
          className="w-12 h-12 sm:w-14 sm:h-14 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-blue-600 transition-all duration-300 hover:scale-110 shadow-2xl group"
          aria-label="Follow us on Facebook"
        >
          <Facebook size={20} />
        </a>
      </div>

      {/* Join Our Community Button (large screen bottom-right) */}
      <div className="hidden lg:flex absolute bottom-8 right-8 z-20">
        <Button
          onClick={() =>
            window.open(
              "https://www.instagram.com/channel/AbbascEjvW5_w-yY/?igsh=MXJqN3R1bWExeWM2dg==",
              "_blank"
            )
          }
          className="cursor-pointer flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 text-white px-6 py-3 rounded-xl shadow-lg"
        >
          <Users size={20} /> Join Our Community
        </Button>
      </div>
    </div>
  );
}
