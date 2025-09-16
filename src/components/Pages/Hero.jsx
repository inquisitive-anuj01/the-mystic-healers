import { useState, useRef } from "react";
import {
  Instagram,
  Facebook,
  // Twitter,
  Youtube,
  Users,
  Volume2,
  VolumeX,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import GalaxyBackground from "./GalaxyBackground";
import audiotune from "../../assets/audiotune.mp3";
import { FaXTwitter } from "react-icons/fa6";
import { FaTiktok } from "react-icons/fa";

const socials = [
  {
    key: "instagram",
    icon: <Instagram size={18} />,
    href: "https://www.instagram.com/themystichealers",
    hoverClass:
      "hover:bg-[linear-gradient(90deg,#f58529,#dd2a7b,#515bd4)] hover:border-transparent",
    aria: "Instagram",
  },
  {
    key: "facebook",
    icon: <Facebook size={18} />,
    href: "https://www.facebook.com/themystichealers11",
    hoverClass: "hover:bg-[#1877F2] hover:border-transparent",
    aria: "Facebook",
  },
  {
    key: "twitter",
    icon: <FaXTwitter size={18} />,
    href: "https://x.com/mystichealers11?s=21",
    hoverClass:
      "hover:bg-[linear-gradient(#000000,#FFFFFF)] hover:border-transparent",
    aria: "Twitter",
  },
  {
    key: "youtube",
    icon: <Youtube size={18} />,
    href: "https://youtube.com/@themystichealers?feature=shared",
    hoverClass: "hover:bg-[#FF0000] hover:border-transparent",
    aria: "YouTube",
  },
  {
    key: "tiktok",
    icon: <FaTiktok size={18} />,
    href: "https://www.tiktok.com/@themystichealers",
    hoverClass:
      "hover:bg-[linear-gradient(#EE1D52,#25F4EE,#000000)]  hover:border-transparent",
    aria: "TikTok",
  },
];

export default function LandingPage() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [isValidName, setIsValidName] = useState(true);
  const [isValidPhone, setIsValidPhone] = useState(true);
  const [isValidCity, setIsValidCity] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const audioRef = useRef(null);

  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const validateName = (name) => name.trim().length >= 2;
  const validatePhone = (phone) => /^\d{10}$/.test(phone.trim());
  const validateCity = (city) => city.trim().length >= 2;

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);
    setIsValidEmail(value ? validateEmail(value) : true);
  };
  const handleNameChange = (e) => {
    const value = e.target.value.replace(/[^A-Za-z\s]/g, "");
    setName(value);
    setIsValidName(value ? validateName(value) : true);
  };

  const handlePhoneChange = (e) => {
    const value = e.target.value.replace(/[^0-9]/g, "");
    setPhone(value);
    setIsValidPhone(value ? validatePhone(value) : true);
  };

  const handleCityChange = (e) => {
    const value = e.target.value;
    const lettersOnly = value.replace(/[^A-Za-z\s]/g, "");
    setCity(lettersOnly);
    setIsValidCity(lettersOnly ? validateCity(lettersOnly) : true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validName = validateName(name);
    const validEmail = validateEmail(email);
    const validPhone = validatePhone(phone);
    const validCity = validateCity(city);

    setIsValidName(validName);
    setIsValidEmail(validEmail);
    setIsValidPhone(validPhone);
    setIsValidCity(validCity);

    if (
      email &&
      name &&
      phone &&
      city &&
      validEmail &&
      validName &&
      validPhone &&
      validCity
    ) {
      setIsLoading(true);
      try {
        const response = await fetch(
          "https://mystic-backend-nine.vercel.app/api/user/register",
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name, email, phone, city }),
          }
        );
        if (response.ok) {
          setIsSubmitted(true);
          setEmail("");
          setName("");
          setPhone("");
          setCity("");
        }
      } catch (err) {
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    }
  };

  // mute unmute toggle button

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
      {/*  Audio */}
      <audio ref={audioRef} loop preload="auto" className="hidden">
        <source src={audiotune} type="audio/mpeg" />
      </audio>

      {/* Galaxy Background */}
      <div className="absolute inset-0 z-0">
        <GalaxyBackground />
      </div>

      {/* Audio Control Button with inline "Click me" */}
      <div className="absolute top-4 right-4 z-10 flex items-center gap-2">
        {/* Show text only when muted */}
        {isMuted && (
          <span className="flex items-center text-white text-sm font-medium animate-bounce-x">
            Click me →
          </span>
        )}

        <button
          onClick={toggleAudio}
          className="w-10 h-10 bg-white/10 backdrop-blur-md border border-white/20 
         rounded-full flex items-center justify-center text-white 
         hover:bg-white/20 transition-all duration-300 hover:scale-110 
         shadow-2xl cursor-pointer"
          aria-label={isMuted ? "Unmute audio" : "Mute audio"}
        >
          {isMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
        </button>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center top-0 md:top-16 flex-1 px-4 sm:px-6 lg:px-8 text-center scale-90 sm:scale-100 font-inter ">
        <div className="max-w-7xl mx-auto mb-6 px-4">
          <div className="w-full mt-10">
            <div className="text-left flex flex-wrap gap-x-2">
              <span className="text-white text-xl sm:text-2xl md:text-4xl font-semibold text-shadow">
                Access
              </span>
              <span className="text-white text-xl sm:text-2xl md:text-4xl text-shadow">
                the
              </span>
              <span className="italic text-white text-xl sm:text-2xl md:text-4xl text-shadow">
                World’s
              </span>
              <span className="text-white text-xl sm:text-2xl md:text-4xl font-bold text-shadow">
                Finest
              </span>
            </div>

            <div className="text-center">
              <span className="uppercase text-white font-bold text-3xl sm:text-5xl md:text-7xl lg:text-8xl tracking-wide text-shadow">
                Holistic Healers
              </span>
            </div>

            <div className="text-right">
              <span className="text-white text-xl sm:text-2xl md:text-4xl ">
                Online.
              </span>
            </div>
          </div>
        </div>

        {/* Form */}
        <div className="bg-black/40 mt-10 backdrop-blur-md border border-white/30 rounded-2xl p-6 w-[100%] max-w-2xl shadow-2xl">
          {!isSubmitted ? (
            <>
              <h3 className="text-white text-xl md:text-3xl  font-semibold mb-4 whitespace-nowrap text-center">
                Be the First to Experience Magic
              </h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Name and Email Row */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="text"
                    value={name}
                    onChange={handleNameChange}
                    placeholder="Enter your name"
                    className={`flex-1 px-4 py-3 bg-white/10 backdrop-blur-sm border rounded-lg text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:border-transparent transition-all duration-300 ${
                      !isValidName
                        ? "border-red-400 focus:ring-red-400/50"
                        : "border-white/30 focus:ring-purple-400/50"
                    }`}
                    required
                  />
                  <input
                    type="email"
                    value={email}
                    onChange={handleEmailChange}
                    placeholder="Enter your email"
                    className={`flex-1 px-4 py-3 bg-white/10 backdrop-blur-sm border rounded-lg text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:border-transparent transition-all duration-300 ${
                      !isValidEmail
                        ? "border-red-400 focus:ring-red-400/50"
                        : "border-white/30 focus:ring-purple-400/50"
                    }`}
                    required
                  />
                </div>
                {/* Phone and City Row */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="tel"
                    value={phone}
                    onChange={handlePhoneChange}
                    placeholder="Enter your phone number"
                    maxLength={10}
                    className={`flex-1 px-4 py-3 bg-white/10 backdrop-blur-sm border rounded-lg text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:border-transparent transition-all duration-300 ${
                      !isValidPhone
                        ? "border-red-400 focus:ring-red-400/50"
                        : "border-white/30 focus:ring-purple-400/50"
                    }`}
                    required
                  />
                  <input
                    type="text"
                    value={city}
                    onChange={handleCityChange}
                    placeholder="Enter your city"
                    pattern="[A-Za-z\s]+"
                    title="City name should only contain letters"
                    className={`flex-1 px-4 py-3 bg-white/10 backdrop-blur-sm border rounded-lg text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:border-transparent transition-all duration-300 ${
                      !isValidCity
                        ? "border-red-400 focus:ring-red-400/50"
                        : "border-white/30 focus:ring-purple-400/50"
                    }`}
                    required
                  />
                </div>
                {/* Error messages */}
                {!isValidName && (
                  <p className="text-red-300 text-xs mt-1 text-left">
                    Please enter your name (min 2 chars)
                  </p>
                )}
                {!isValidEmail && (
                  <p className="text-red-300 text-xs mt-1 text-left">
                    Please enter a valid email address
                  </p>
                )}
                {!isValidPhone && (
                  <p className="text-red-300 text-xs mt-1 text-left">
                    Phone number must be exactly 10 digits
                  </p>
                )}

                {!isValidCity && (
                  <p className="text-red-300 text-xs mt-1 text-left">
                    Please enter your city (min 2 chars)
                  </p>
                )}
                {/* Button */}
                <div className="flex justify-center">
                  <Button
                    type="submit"
                    disabled={
                      isLoading ||
                      !email ||
                      !name ||
                      !phone ||
                      !city ||
                      !isValidEmail ||
                      !isValidName ||
                      !isValidPhone ||
                      !isValidCity
                    }
                    className="bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-lg px-6 py-3 cursor-pointer font-semibold transition-all duration-300 hover:scale-105 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                  >
                    {isLoading ? "Sending..." : "Join the Healing Journey"}
                  </Button>
                </div>
              </form>
            </>
          ) : (
            <div className="text-center py-6">
              <div className="text-white text-2xl mb-3">
                Welcome to the Journey...!
              </div>
              <p className="text-white/90 text-sm">
                Thank you for joining our mystical community. You'll be the
                first to know when we launch our healing platform!
              </p>
            </div>
          )}
        </div>

        {/* join our community button for mobile */}
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

      {/* Social Icons */}
      <div
        className="absolute bottom-18 sm:bottom-6 lg:bottom-4 w-full 
                flex flex-wrap justify-center lg:justify-start lg:left-8 gap-3 z-10"
      >
        {socials.map((s) => (
          <a
            key={s.key}
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={s.aria}
            className={
              "group relative w-10 h-10 sm:w-14 sm:h-14 bg-white/10 backdrop-blur-md " +
              "border border-white/20 rounded-full flex items-center justify-center " +
              "text-white transition-all duration-300 transform hover:scale-110 shadow-2xl " +
              s.hoverClass
            }
          >
            {s.icon}

            {/* Tooltip */}
            <span
              className="absolute bottom-full mb-2 px-2 py-1 rounded-md 
                       bg-black/80 text-white text-xs opacity-0 group-hover:opacity-100 
                       transition-opacity duration-150 whitespace-nowrap"
            >
              {s.aria}
            </span>
          </a>
        ))}
      </div>

      {/* Desktop Join Button */}
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
