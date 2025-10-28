'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Pickaxe, Compass, Heart, Sparkles, Download, Users, Globe, Zap } from 'lucide-react'

export default function MinecraftLandingPage() {
  const [selectedImage, setSelectedImage] = useState(null)

  const features = [
    {
      icon: <Pickaxe className="w-8 h-8" />,
      title: 'Build & Create',
      description: 'Construct magnificent structures from simple blocks. Your imagination is the only limit.'
    },
    {
      icon: <Compass className="w-8 h-8" />,
      title: 'Explore Worlds',
      description: 'Discover infinite procedurally generated worlds filled with mysteries and adventures.'
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: 'Survive & Thrive',
      description: 'Gather resources, craft tools, and battle monsters to survive in challenging environments.'
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: 'Endless Possibilities',
      description: 'From redstone engineering to artistic masterpieces, create whatever you can dream.'
    }
  ]

  const stats = [
    { icon: <Users className="w-6 h-6" />, value: '140M+', label: 'Active Players' },
    { icon: <Globe className="w-6 h-6" />, value: '200+', label: 'Countries' },
    { icon: <Zap className="w-6 h-6" />, value: '1T+', label: 'Blocks Placed' }
  ]

  const gallery = [
    {
      url: 'https://images.unsplash.com/photo-1524685794168-52985e79c1f8',
      title: 'Iconic Characters'
    },
    {
      url: 'https://images.unsplash.com/photo-1697479670670-d2a299df749c',
      title: 'Block Building'
    },
    {
      url: 'https://images.unsplash.com/photo-1697479665524-3e06cf37b2b7',
      title: 'Minecraft Cubes'
    },
    {
      url: 'https://images.unsplash.com/photo-1633469924738-52101af51d87',
      title: 'Creative Building'
    },
    {
      url: 'https://images.unsplash.com/photo-1638802538115-041e14d28d6a',
      title: 'Craft & Build'
    },
    {
      url: 'https://images.unsplash.com/photo-1511512578047-dfb367046420',
      title: 'Gaming Experience'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-emerald-950">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-emerald-500/20">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-green-600 rounded-lg flex items-center justify-center">
              <Pickaxe className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold text-white">Minecraft</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-slate-300 hover:text-emerald-400 transition-colors">Features</a>
            <a href="#gallery" className="text-slate-300 hover:text-emerald-400 transition-colors">Gallery</a>
            <a href="#about" className="text-slate-300 hover:text-emerald-400 transition-colors">About</a>
            <Button className="bg-emerald-600 hover:bg-emerald-700 text-white">
              <Download className="w-4 h-4 mr-2" />
              Play Now
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-500/10 to-transparent"></div>
        <div className="container mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-block px-4 py-2 bg-emerald-500/20 border border-emerald-500/30 rounded-full">
                <span className="text-emerald-400 font-semibold">#1 Sandbox Game</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
                Build Your
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-green-500">
                  Infinite World
                </span>
              </h1>
              <p className="text-xl text-slate-300 leading-relaxed">
                Join millions of players in the ultimate sandbox adventure. Build, explore, and survive in procedurally generated worlds limited only by your imagination.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white text-lg px-8">
                  <Download className="w-5 h-5 mr-2" />
                  Start Playing
                </Button>
                <Button size="lg" variant="outline" className="border-emerald-500/50 text-emerald-400 hover:bg-emerald-500/10 text-lg px-8">
                  Learn More
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-emerald-500/20 blur-3xl rounded-full"></div>
              <img 
                src="https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&h=600&fit=crop" 
                alt="Minecraft Gaming" 
                className="relative rounded-2xl shadow-2xl border border-emerald-500/20 w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 px-4 border-y border-emerald-500/20 bg-slate-950/50">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="flex items-center justify-center gap-4">
                <div className="w-12 h-12 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400">
                  {stat.icon}
                </div>
                <div>
                  <div className="text-3xl font-bold text-white">{stat.value}</div>
                  <div className="text-slate-400">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Endless Adventures Await
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Experience the freedom to create, explore, and survive in a world that's uniquely yours.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="bg-slate-900/50 border-emerald-500/20 hover:border-emerald-500/40 transition-all duration-300 hover:scale-105 backdrop-blur-sm">
                <CardContent className="p-6 space-y-4">
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-emerald-500/20 to-green-600/20 flex items-center justify-center text-emerald-400">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white">{feature.title}</h3>
                  <p className="text-slate-400">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 px-4 bg-slate-950/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Explore the Possibilities
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              From simple blocks to incredible creations - see what's possible in Minecraft.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {gallery.map((item, index) => (
              <div 
                key={index} 
                className="group relative overflow-hidden rounded-xl cursor-pointer aspect-video"
                onClick={() => setSelectedImage(item)}
              >
                <img 
                  src={`${item.url}?w=600&h=400&fit=crop`}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform">
                  <h3 className="text-xl font-bold text-white">{item.title}</h3>
                </div>
                <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-emerald-500/20 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <Sparkles className="w-5 h-5 text-emerald-400" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="bg-slate-900/50 border border-emerald-500/20 rounded-2xl p-8 md:p-12 backdrop-blur-sm">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                What is Minecraft?
              </h2>
              <div className="space-y-4 text-lg text-slate-300 leading-relaxed">
                <p>
                  Minecraft is a sandbox video game that allows players to build and explore virtual worlds made up of blocks. 
                  With its simple yet powerful mechanics, players can create anything from small houses to massive cities, 
                  intricate redstone machines to artistic masterpieces.
                </p>
                <p>
                  Whether you prefer creative building, survival challenges, or multiplayer adventures, Minecraft offers 
                  endless possibilities. Join millions of players worldwide and discover why Minecraft has become one of 
                  the best-selling games of all time.
                </p>
              </div>
              <div className="mt-8 flex flex-wrap gap-4">
                <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white">
                  <Download className="w-5 h-5 mr-2" />
                  Download Now
                </Button>
                <Button size="lg" variant="outline" className="border-emerald-500/50 text-emerald-400 hover:bg-emerald-500/10">
                  View System Requirements
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-emerald-600 to-green-600">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Start Your Adventure?
          </h2>
          <p className="text-xl text-emerald-50 mb-8 max-w-2xl mx-auto">
            Join millions of players and begin building your dream world today.
          </p>
          <Button size="lg" className="bg-white text-emerald-600 hover:bg-slate-100 text-lg px-8">
            <Download className="w-5 h-5 mr-2" />
            Get Minecraft
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-slate-950 border-t border-emerald-500/20">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-green-600 rounded-lg flex items-center justify-center">
                  <Pickaxe className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold text-white">Minecraft</span>
              </div>
              <p className="text-slate-400">Build, explore, and survive in infinite worlds.</p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Game</h4>
              <ul className="space-y-2 text-slate-400">
                <li><a href="#" className="hover:text-emerald-400 transition-colors">Download</a></li>
                <li><a href="#" className="hover:text-emerald-400 transition-colors">Updates</a></li>
                <li><a href="#" className="hover:text-emerald-400 transition-colors">Marketplace</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Community</h4>
              <ul className="space-y-2 text-slate-400">
                <li><a href="#" className="hover:text-emerald-400 transition-colors">Forums</a></li>
                <li><a href="#" className="hover:text-emerald-400 transition-colors">Discord</a></li>
                <li><a href="#" className="hover:text-emerald-400 transition-colors">Events</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-slate-400">
                <li><a href="#" className="hover:text-emerald-400 transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-emerald-400 transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-emerald-400 transition-colors">Bug Reports</a></li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-emerald-500/20 text-center text-slate-400">
            <p>&copy; 2025 Minecraft Fan Site. This is an unofficial fan-made website. Minecraft is a trademark of Mojang Studios.</p>
          </div>
        </div>
      </footer>

      {/* Image Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 bg-slate-950/95 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-5xl w-full">
            <button 
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 text-white hover:text-emerald-400 transition-colors"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <img 
              src={`${selectedImage.url}?w=1200&h=800&fit=crop`}
              alt={selectedImage.title}
              className="w-full h-auto rounded-xl shadow-2xl border border-emerald-500/20"
            />
            <div className="mt-4 text-center">
              <h3 className="text-2xl font-bold text-white">{selectedImage.title}</h3>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}