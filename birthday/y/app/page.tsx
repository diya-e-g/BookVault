"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import { Heart, Moon, Sun, Star, Sparkles, Camera, Feather, Gift } from "lucide-react"

export default function BirthdayWebsite() {
  const [messages, setMessages] = useState<string[]>([])
  const [newMessage, setNewMessage] = useState("")
  const [authorName, setAuthorName] = useState("")
  const [stars, setStars] = useState<Array<{ id: number; x: number; y: number; delay: number }>>([])

  // Generate random stars for animation
  useEffect(() => {
    const generateStars = () => {
      const newStars = []
      for (let i = 0; i < 50; i++) {
        newStars.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          delay: Math.random() * 3,
        })
      }
      setStars(newStars)
    }
    generateStars()
  }, [])

  const addMessage = () => {
    if (newMessage.trim() && authorName.trim()) {
      setMessages([...messages, `${newMessage} - ${authorName}`])
      setNewMessage("")
      setAuthorName("")
    }
  }

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Import Google Fonts */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@300;400;500;600&family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400;1,500;1,600&family=Playfair+Display:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400;1,500;1,600&family=Crimson+Text:ital,wght@0,400;0,600;1,400;1,600&display=swap');
        
        .font-cinzel { font-family: 'Cinzel', serif; letter-spacing: 0.05em; }
        .font-cormorant { font-family: 'Cormorant Garamond', serif; letter-spacing: 0.02em; }
        .font-playfair { font-family: 'Playfair Display', serif; letter-spacing: 0.03em; }
        .font-crimson { font-family: 'Crimson Text', serif; letter-spacing: 0.01em; }
      `}</style>

      {/* Darker Animated Sky Background */}
      <div className="fixed inset-0 bg-gradient-to-br from-slate-900 via-purple-950 to-indigo-950">
        <div
          className="absolute inset-0 opacity-15"
          style={{
            backgroundImage: `url('/placeholder.svg?height=1080&width=1920&text=Dark+Mystical+Sky')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            animation: "slowFloat 20s ease-in-out infinite",
          }}
        />
      </div>

      {/* Floating Stars Animation */}
      <div className="fixed inset-0 pointer-events-none">
        {stars.map((star) => (
          <div
            key={star.id}
            className="absolute w-0.5 h-0.5 bg-purple-200 rounded-full animate-pulse"
            style={{
              left: `${star.x}%`,
              top: `${star.y}%`,
              animationDelay: `${star.delay}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      {/* Floating Celestial Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 text-purple-400/20 animate-bounce" style={{ animationDuration: "3s" }}>
          <Star size={20} />
        </div>
        <div className="absolute top-32 right-20 text-pink-400/25 animate-pulse" style={{ animationDuration: "2s" }}>
          <Sparkles size={28} />
        </div>
        <div className="absolute bottom-20 left-20 text-purple-400/20 animate-spin" style={{ animationDuration: "8s" }}>
          <Star size={16} />
        </div>
        <div
          className="absolute bottom-40 right-10 text-pink-400/25 animate-bounce"
          style={{ animationDuration: "4s" }}
        >
          <Star size={24} />
        </div>
        <div className="absolute top-1/2 left-1/4 text-purple-400/15 animate-pulse" style={{ animationDuration: "3s" }}>
          <Sparkles size={32} />
        </div>
        <div className="absolute top-1/3 right-1/3 text-pink-400/20 animate-spin" style={{ animationDuration: "12s" }}>
          <Moon size={30} />
        </div>
        <div
          className="absolute bottom-1/3 left-1/3 text-yellow-400/20 animate-pulse"
          style={{ animationDuration: "2.5s" }}
        >
          <Sun size={28} />
        </div>
      </div>

      <div className="relative z-10">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center px-4 relative">
          <div className="text-center max-w-4xl mx-auto">
            <div className="flex justify-center items-center gap-6 mb-10">
              <div className="relative group">
                <Sun className="w-16 h-16 text-pink-400/80 animate-spin-slow drop-shadow-xl" />
                <div className="absolute inset-0 bg-pink-400/10 rounded-full blur-xl animate-pulse"></div>
              </div>

              <div className="animate-heartbeat">
                <Heart className="w-12 h-12 text-purple-400/80 drop-shadow-lg" />
              </div>

              <div className="relative group">
                <Moon className="w-16 h-16 text-purple-400/80 animate-pulse drop-shadow-xl" />
                <div className="absolute inset-0 bg-purple-400/10 rounded-full blur-xl animate-pulse"></div>
              </div>
            </div>

            {/* Decorative Border */}
            <div className="flex justify-center mb-6">
              <div className="flex items-center gap-2 text-purple-400/40">
                <div className="w-16 h-px bg-gradient-to-r from-transparent via-purple-400/30 to-pink-400/30"></div>
                <Sparkles size={16} className="animate-pulse" />
                <div className="w-6 h-px bg-gradient-to-r from-purple-400/30 to-pink-400/30"></div>
                <Gift size={12} className="animate-bounce" />
                <div className="w-6 h-px bg-gradient-to-r from-pink-400/30 to-purple-400/30"></div>
                <Sparkles size={16} className="animate-pulse" />
                <div className="w-16 h-px bg-gradient-to-r from-pink-400/30 via-purple-400/30 to-transparent"></div>
              </div>
            </div>

            <h1 className="font-cinzel text-5xl md:text-7xl font-light bg-gradient-to-r from-pink-300/90 via-purple-300/90 to-pink-300/90 bg-clip-text text-transparent mb-6 animate-glow leading-tight">
              Happy 22nd
            </h1>
            <h2 className="font-playfair text-3xl md:text-5xl font-medium text-purple-200/90 mb-4 animate-slideInUp">
              Birthday
            </h2>
            <h3 className="font-cormorant text-2xl md:text-3xl text-purple-300/80 mb-10 animate-slideInUp">
              Evelyn Elizabeth Siby
            </h3>

            <div className="bg-black/20 backdrop-blur-lg rounded-2xl p-8 border border-purple-400/20 animate-fadeInUp shadow-2xl relative max-w-3xl mx-auto">
              {/* Decorative corners */}
              <div className="absolute top-3 left-3 text-purple-400/30">
                <Star size={18} className="animate-pulse" />
              </div>
              <div className="absolute top-3 right-3 text-pink-400/30">
                <Star size={18} className="animate-pulse" />
              </div>
              <div className="absolute bottom-3 left-3 text-pink-400/30">
                <Sparkles size={18} className="animate-pulse" />
              </div>
              <div className="absolute bottom-3 right-3 text-purple-400/30">
                <Sparkles size={18} className="animate-pulse" />
              </div>

              <p className="font-crimson text-lg md:text-xl text-purple-100/90 leading-relaxed">
                To my amazing moon sister, as you celebrate another year of being absolutely incredible! 🌙 Your light
                has been my guide through so many adventures, and I can't wait to see what magic this new year brings.
                Here's to our beautiful sun and moon friendship that makes every day brighter! ✨
              </p>
            </div>
          </div>
        </section>

        {/* Photo Gallery Section */}
        <section className="py-20 px-4 relative">
          {/* Background Sky Image */}
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `url("/photos/eve4.jpg")`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />

          <div className="max-w-6xl mx-auto relative z-10">
            <div className="text-center mb-16">
              {/* Decorative Header */}
              <div className="flex justify-center mb-6">
                <div className="flex items-center gap-3 text-purple-400/40">
                  <div className="w-20 h-px bg-gradient-to-r from-transparent to-purple-400/30"></div>
                  <Camera size={20} className="animate-bounce" />
                  <div className="w-8 h-px bg-purple-400/30"></div>
                  <Heart size={16} className="animate-pulse" />
                  <div className="w-8 h-px bg-purple-400/30"></div>
                  <Camera size={20} className="animate-bounce" />
                  <div className="w-20 h-px bg-gradient-to-r from-purple-400/30 to-transparent"></div>
                </div>
              </div>

              <h3 className="font-cinzel text-3xl md:text-4xl font-light text-purple-200/90 mb-4 animate-slideInDown">
                Our Beautiful Memories
              </h3>
              <p className="font-cormorant text-purple-300/80 text-lg animate-fadeIn">
                All the amazing moments we've shared together
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                "First Adventures",
                "Midnight Conversations",
                "Celebration Moments",
                "Random Fun Times",
                "Special Occasions",
                "Just Being Us",
              ].map((title, i) => (
                <Card
                  key={i}
                  className="bg-black/25 backdrop-blur-lg border-purple-400/20 overflow-hidden group hover:scale-105 hover:rotate-1 transition-all duration-500 animate-fadeInUp shadow-xl"
                  style={{ animationDelay: `${i * 0.1}s` }}
                >
                  <CardContent className="p-0">
                    <div className="aspect-square bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center relative overflow-hidden">
                    
                      <div className="text-center text-purple-200/80 z-10">
                        <Camera className="w-12 h-12 mx-auto mb-3 opacity-50 animate-pulse" />
                        <p className="font-playfair text-base font-medium mb-1">{title}</p>
                        <p className="font-cormorant text-sm opacity-70">Click to add photo</p>
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-purple-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      {/* Floating sparkles */}
                      <div className="absolute top-3 right-3 text-pink-400/30 animate-ping">
                        <Sparkles size={16} />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Messages Section */}
        <section className="py-20 px-4 relative">
          {/* Celestial Background */}
          <div
            className="absolute inset-0 opacity-15"
            style={{
              backgroundImage:`url("/photos/first-adventure.jpg")`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />

          <div className="max-w-4xl mx-auto relative z-10">
            <div className="text-center mb-16">
              {/* Decorative Header */}
              <div className="flex justify-center mb-6">
                <div className="flex items-center gap-3 text-purple-400/40">
                  <div className="w-20 h-px bg-gradient-to-r from-transparent to-purple-400/30"></div>
                  <Feather size={20} className="animate-wiggle" />
                  <div className="w-8 h-px bg-purple-400/30"></div>
                  <Heart size={16} className="animate-pulse" />
                  <div className="w-8 h-px bg-purple-400/30"></div>
                  <Feather size={20} className="animate-wiggle" />
                  <div className="w-20 h-px bg-gradient-to-r from-purple-400/30 to-transparent"></div>
                </div>
              </div>

              <h3 className="font-cinzel text-3xl md:text-4xl font-light text-purple-200/90 mb-4 animate-slideInLeft">
                Birthday Wish
              </h3>
              <p className="font-cormorant text-purple-300/80 text-lg animate-fadeIn">
                To my Moon...
              </p>
            </div>

           

            {/* Display Messages */}
            <div className="space-y-6">
              {messages.map((message, index) => (
                <Card
                  key={index}
                  className="bg-black/25 backdrop-blur-lg border-purple-400/20 animate-slideInRight shadow-lg hover:shadow-xl transition-shadow duration-300 relative"
                >
                  <CardContent className="p-6">
                    <div className="absolute top-3 left-3 text-purple-400/25">
                      <Heart size={16} className="animate-pulse" />
                    </div>
                    <p className="font-crimson text-purple-100/90 text-lg leading-relaxed pl-6">{message}</p>
                  </CardContent>
                </Card>
              ))}

              {/* Default Messages */}
              <Card className="bg-black/25 backdrop-blur-lg border-purple-400/20 animate-slideInRight shadow-lg relative">
                <CardContent className="p-6">
                  <div className="absolute top-3 left-3 text-purple-400/25">
                    <Heart size={16} className="animate-pulse" />
                  </div>
                  <p className="font-crimson text-purple-100/90 text-lg leading-relaxed pl-6">
                    "Happy 22nd Birthday, Evelyn! 🎉 You're such an incredible person and an amazing friend. Your
                    kindness, laughter, and beautiful spirit light up every room you enter. I'm so grateful to have you
                    in my life, and I can't wait to celebrate many more birthdays with you! Here's to another year of
                    adventures, memories, and our wonderful friendship! 🌙✨"
                    <span className="font-playfair block mt-3 text-pink-300/80 text-base">— Your Sun Sister</span>
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Special Memories Section */}
        <section className="py-20 px-4 relative">
          <div className="absolute inset-0 opacity-10">
            <img
              src="/photos/eve2.jpg"
              alt="Aurora"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="max-w-4xl mx-auto relative z-10">
            <div className="text-center mb-16">
              {/* Decorative Header */}
              <div className="flex justify-center mb-6">
                <div className="flex items-center gap-3 text-purple-400/40">
                  <div className="w-24 h-px bg-gradient-to-r from-transparent to-purple-400/30"></div>
                  <Heart size={20} className="animate-heartbeat" />
                  <div className="w-8 h-px bg-purple-400/30"></div>
                  <Star size={16} className="animate-pulse" />
                  <div className="w-8 h-px bg-purple-400/30"></div>
                  <Heart size={20} className="animate-heartbeat" />
                  <div className="w-24 h-px bg-gradient-to-r from-purple-400/30 to-transparent"></div>
                </div>
              </div>

              <h3 className="font-cinzel text-3xl md:text-4xl font-light text-purple-200/90 mb-4 animate-glow">
                22 Things I Love About You
              </h3>
              <p className="font-cormorant text-purple-300/80 text-lg animate-fadeIn">
                Would it even be us without the cringe?
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {[
                "Your contagious laughter that brightens everyone's day",
                "How you light up every room you walk into",
                "Your incredible kindness to everyone you meet",
                "Your obsession with purple (and how cute it is!)",
                "The way you really listen when people talk",
                "Your amazing creative spirit and ideas",
                "How much you care about the people you love",
                "Your beautiful, genuine smile",
                "Your strength during tough times",
                "How you make ordinary moments feel special",
                "Your unwavering loyalty as a friend",
                "Your unique perspective on everything",
                "How you embrace being our moon sister",
                "Your compassionate heart",
                "The way you inspire everyone around you",
                "How authentic and real you always are",
                "All the incredible memories we've made together",
                "Your wisdom that goes beyond your years",
                "How you always make me laugh",
                "Your beautiful, caring heart",
                "The way you shine so brightly",
                "Being the best moon sister I could ask for",
              ].map((item, index) => (
                <Card
                  key={index}
                  className="bg-black/25 backdrop-blur-lg border-purple-400/20 hover:bg-black/30 hover:scale-105 transition-all duration-300 animate-fadeInUp shadow-lg relative"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <CardContent className="p-5">
                    <div className="absolute top-2 right-2 text-pink-400/25">
                      <Star size={12} className="animate-pulse" />
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="font-cinzel text-pink-400/80 font-medium text-lg animate-pulse min-w-[2.5rem]">
                        {(index + 1).toString().padStart(2, "0")}.
                      </span>
                      <p className="font-crimson text-purple-100/90 leading-relaxed">{item}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 px-4 text-center relative">
          <div className="absolute inset-0 opacity-20">
            <img
              src="/photos/first-adventure.jpg"
              alt="Mystical Sunset"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="max-w-2xl mx-auto relative z-10">
            {/* Decorative Border */}
            <div className="flex justify-center mb-6">
              <div className="flex items-center gap-3 text-purple-400/40">
                <div className="w-20 h-px bg-gradient-to-r from-transparent to-purple-400/30"></div>
                <Sun size={16} className="animate-spin-slow" />
                <Heart size={12} className="animate-heartbeat" />
                <Moon size={16} className="animate-pulse" />
                <div className="w-20 h-px bg-gradient-to-r from-purple-400/30 to-transparent"></div>
              </div>
            </div>

            <div className="flex justify-center items-center gap-5 mb-6">
              <Sun className="w-8 h-8 text-pink-400/80 animate-spin-slow" />
              <Heart className="w-6 h-6 text-purple-400/80 animate-heartbeat" />
              <Moon className="w-8 h-8 text-purple-400/80 animate-pulse" />
            </div>

            <p className="font-cinzel text-purple-200/90 text-xl animate-glow mb-3">
              Happy 22nd Birthday, Evelyn Elizabeth Siby! 🎉
            </p>
            <p className="font-cormorant text-purple-300/80 text-lg animate-fadeIn">
              With all my love from your Sun Sister ☀️💜
            </p>

            {/* Final Decorative Element */}
            <div className="flex justify-center mt-6">
              <div className="flex items-center gap-2 text-purple-400/30">
                <Sparkles size={12} className="animate-pulse" />
                <div className="w-12 h-px bg-purple-400/30"></div>
                <Star size={10} className="animate-pulse" />
                <div className="w-12 h-px bg-purple-400/30"></div>
                <Sparkles size={12} className="animate-pulse" />
              </div>
            </div>
          </div>
        </footer>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        @keyframes float-reverse {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(-3deg); }
        }
        @keyframes slowFloat {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes heartbeat {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.1); }
        }
        @keyframes glow {
          0%, 100% { text-shadow: 0 0 15px rgba(168, 85, 247, 0.4); }
          50% { text-shadow: 0 0 25px rgba(168, 85, 247, 0.6), 0 0 35px rgba(236, 72, 153, 0.4); }
        }
        @keyframes wiggle {
          0%, 100% { transform: rotate(0deg); }
          25% { transform: rotate(5deg); }
          75% { transform: rotate(-5deg); }
        }
        @keyframes slideInUp {
          from { transform: translateY(50px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        @keyframes slideInDown {
          from { transform: translateY(-50px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        @keyframes slideInLeft {
          from { transform: translateX(-50px); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
        @keyframes slideInRight {
          from { transform: translateX(50px); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes fadeInUp {
          from { transform: translateY(30px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        
        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-float-reverse { animation: float-reverse 8s ease-in-out infinite; }
        .animate-spin-slow { animation: spin-slow 20s linear infinite; }
        .animate-heartbeat { animation: heartbeat 2s ease-in-out infinite; }
        .animate-glow { animation: glow 3s ease-in-out infinite; }
        .animate-wiggle { animation: wiggle 2s ease-in-out infinite; }
        .animate-slideInUp { animation: slideInUp 1s ease-out; }
        .animate-slideInDown { animation: slideInDown 1s ease-out; }
        .animate-slideInLeft { animation: slideInLeft 1s ease-out; }
        .animate-slideInRight { animation: slideInRight 1s ease-out; }
        .animate-fadeIn { animation: fadeIn 1.5s ease-out; }
        .animate-fadeInUp { animation: fadeInUp 1s ease-out; }
      `}</style>
    </div>
  )
}
