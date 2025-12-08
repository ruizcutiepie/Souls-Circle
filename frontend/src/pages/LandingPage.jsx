import React, { useState, useEffect } from 'react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { 
  BookOpen, 
  Sparkles, 
  Lightbulb, 
  Calendar, 
  Users, 
  ArrowRight,
  Play,
  Clock,
  Eye,
  ChevronRight,
  Mail,
  Instagram,
  Youtube,
  Facebook,
  Heart,
  Zap,
  Star
} from 'lucide-react';
import {
  testimonials,
  blogPosts,
  youtubVideos,
  upcomingEvents,
  oneOnOneServices,
  navigationLinks,
  socialLinks,
  externalLinks
} from '../data/mock';

const iconMap = {
  BookOpen,
  Sparkles,
  Lightbulb,
  Instagram,
  Youtube,
  Facebook
};

const LandingPage = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="landing-page">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-md' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            {/* Placeholder for logo - Ken to provide actual logo */}
            <div className="w-14 h-14 bg-gradient-to-br from-sage to-gold rounded-full flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-2xl" style={{ fontFamily: 'Playfair Display' }}>SC</span>
            </div>
            <div className="text-3xl font-bold text-navy" style={{ fontFamily: 'Playfair Display' }}>
              Souls Circle
            </div>
          </div>
          <div className="hidden md:flex items-center gap-8">
            {navigationLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => scrollToSection(link.href)}
                className="text-sm font-medium text-charcoal hover:text-gold transition-colors duration-300"
              >
                {link.label}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Section 1: Hero/Hook */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-warm-white">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1551678843-b1dc560f1688?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzB8MHwxfHNlYXJjaHwxfHxzcGlyaXR1YWwlMjBlbXBvd2VybWVudHxlbnwwfHx8fDE3NTk5NTgzMTd8MA&ixlib=rb-4.1.0&q=85"
            alt="Spiritual Empowerment"
            className="w-full h-full object-cover opacity-15"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-warm-white/90 via-warm-white/70 to-warm-white"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-32">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Left side - Ken's Photo with Natural Integration */}
            <div className="order-2 md:order-1">
              <div className="relative group">
                {/* Main photo with subtle frame */}
                <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                  <img
                    src="https://customer-assets.emergentagent.com/job_biz-launchpad-7/artifacts/v1jts1vn_20250311_130413.jpg"
                    alt="Ken - The Ascension Activator"
                    className="w-full h-[500px] object-cover transform group-hover:scale-105 transition-all duration-700"
                  />
                  {/* Subtle gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/20 via-transparent to-transparent"></div>
                  
                  {/* Floating badge */}
                  <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg">
                    <p className="text-navy font-semibold text-sm">Ken - The Ascension Activator</p>
                  </div>
                </div>
                
                {/* Decorative accent bar */}
                <div className="absolute -bottom-4 left-8 right-8 h-2 bg-gradient-to-r from-sage via-gold to-sage rounded-full shadow-lg"></div>
              </div>
            </div>

            {/* Right side - Text Content */}
            <div className="order-1 md:order-2 text-center md:text-left">
          <div className="inline-block mb-8 animate-fade-in">
            <div className="flex items-center gap-2 text-sage px-6 py-3 rounded-full bg-sage/10 backdrop-blur-sm">
              <Star className="w-5 h-5" />
              <span className="text-base font-medium">For Spiritual Entrepreneurs & Practitioners</span>
            </div>
          </div>

          <h1 className="text-6xl md:text-8xl font-bold text-navy mb-8 leading-tight animate-fade-in-up" 
              style={{ fontFamily: 'Playfair Display' }}>
            Feel Called to Embody Your Full Power<br />
            <span className="text-sage">And Complete Your Soul Mission?</span>
          </h1>

          <p className="text-2xl md:text-3xl text-charcoal mb-12 max-w-4xl mx-auto leading-relaxed animate-fade-in-up font-medium" 
             style={{ animationDelay: '0.2s' }}>
            Discover how the unresolved <span className="font-bold text-navy">Soul Blueprint</span> is stopping you from completing your mission to your greatest potential.
          </p>

          <div className="flex flex-col sm:flex-row items-center md:justify-start justify-center gap-4 animate-fade-in-up" 
               style={{ animationDelay: '0.4s' }}>
            <Button 
              size="lg" 
              className="bg-gold hover:bg-gold/90 text-navy px-10 py-7 text-xl font-bold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              onClick={() => window.location.href = externalLinks.challengeRegistration}
            >
              Join the FREE 3-Day Challenge
              <ArrowRight className="ml-2 w-6 h-6" />
            </Button>
          </div>

          <div className="mt-12 flex items-center md:justify-start justify-center gap-8 text-base text-charcoal/70 animate-fade-in-up" 
               style={{ animationDelay: '0.6s' }}>
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5 text-sage" />
              <span className="font-medium">December 15-17, 2025</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5 text-gold" />
              <span className="font-medium">Live with Ken Franceschi</span>
            </div>
          </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Story/Connection */}
      <section id="story" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1">
              <div className="inline-block mb-4 text-sage font-semibold text-sm tracking-wider uppercase">
                My Story
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-navy mb-6 leading-tight" 
                  style={{ fontFamily: 'Playfair Display' }}>
                I Know the Exhaustion of a<br />Never-Ending Healing Journey
              </h2>
              <div className="space-y-4 text-lg text-charcoal leading-relaxed">
                <p>
                  For years, I thought I was broken. I tried every healing modality, read every self-help book, 
                  attended countless workshops. On the surface, I was doing everything right.
                </p>
                <p>
                  But deep down, I still felt disconnected. Like there was an invisible wall between me and my true power. 
                  Between me and my purpose. Between who I was and who I knew I was meant to be.
                </p>
                <p>
                  That's when I discovered the truth: <span className="font-semibold text-navy">traditional healing methods 
                  don't touch the 7 core energetic blocks that keep empaths stuck.</span>
                </p>
                <p>
                  Through channeled guidance and deep energetic work, I finally broke free. And now, I help other empaths 
                  do the same—clearing what's been holding them back and activating their soul's true mission.
                </p>
              </div>
            </div>

            <div className="order-1 md:order-2">
              <div className="space-y-6">
                {/* Main featured image with video overlay */}
                <div className="relative rounded-3xl overflow-hidden shadow-2xl group cursor-pointer">
                  <img
                    src="https://customer-assets.emergentagent.com/job_biz-launchpad-7/artifacts/j048tym4_20250410_193334.jpg"
                    alt="Ken - The Ascension Activator"
                    className="w-full h-[400px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-navy/20 to-transparent group-hover:from-navy/50 transition-all duration-300"></div>
                  
                  {/* Play button for video */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-20 h-20 bg-gold/90 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 group-hover:bg-gold transition-all duration-300 shadow-xl">
                      <Play className="w-8 h-8 text-navy ml-1" />
                    </div>
                  </div>
                  
                  {/* Caption integrated naturally */}
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20">
                      <p className="text-white font-semibold text-base mb-1">My Journey of Transformation</p>
                      <p className="text-white/80 text-sm">Watch how I discovered the path to helping empaths activate their true power</p>
                    </div>
                  </div>
                </div>
                
                {/* Secondary photos in elegant card layout */}
                <div className="grid grid-cols-3 gap-4">
                  <div className="relative rounded-2xl overflow-hidden shadow-lg group/card">
                    <img
                      src="https://customer-assets.emergentagent.com/job_biz-launchpad-7/artifacts/2lhp2855_20250411_083914.jpg"
                      alt="Ken - Channeling Session"
                      className="w-full h-32 object-cover group-hover/card:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy/40 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <div className="relative rounded-2xl overflow-hidden shadow-lg group/card">
                    <img
                      src="https://customer-assets.emergentagent.com/job_biz-launchpad-7/artifacts/iw5f617e_20250411_083912.jpg"
                      alt="Ken - Energy Work"
                      className="w-full h-32 object-cover group-hover/card:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-sage/40 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <div className="relative rounded-2xl overflow-hidden shadow-lg group/card">
                    <img
                      src="https://customer-assets.emergentagent.com/job_biz-launchpad-7/artifacts/0n2iq7gi_20250411_083855.jpg"
                      alt="Ken - Soul Activation"
                      className="w-full h-32 object-cover group-hover/card:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gold/40 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </div>

                {/* Testimonial Card */}
                <div className="mt-8 bg-warm-white p-6 rounded-xl shadow-lg border-l-4 border-gold">
                  <div className="flex items-start gap-4">
                    <img
                      src={testimonials[0].image}
                      alt={testimonials[0].name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div className="flex-1">
                      <p className="text-charcoal italic mb-3 leading-relaxed">
                        "{testimonials[0].quote.substring(0, 180)}..."
                      </p>
                      <div>
                        <p className="font-semibold text-navy">{testimonials[0].name}</p>
                        <p className="text-sm text-charcoal/70">{testimonials[0].role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Workshop Funnel */}
      <section id="workshop" className="py-24 bg-navy text-white relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-sage/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl"></div>

        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="text-center mb-12">
            <div className="inline-block mb-4 text-gold font-semibold text-sm tracking-wider uppercase">
              Free Workshop
            </div>
            <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight" 
                style={{ fontFamily: 'Playfair Display' }}>
              Ready to Clear What's Holding You Back?<br />
              <span className="text-sage">Permanently?</span>
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
              Join the <span className="font-semibold text-gold">7 Energy Blocks Workshop</span> and discover 
              the hidden patterns keeping you from your true power—then learn exactly how to clear them for good.
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-white/10">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold mb-6" style={{ fontFamily: 'Playfair Display' }}>
                  In This Free Workshop, You'll Discover:
                </h3>
                <ul className="space-y-4">
                  {[
                    'The 7 core energy blocks that traditional healing misses',
                    'Why you keep attracting the same patterns despite all your inner work',
                    'How to identify which blocks are active in YOUR energy field',
                    'The exact channeled method I use to clear blocks permanently',
                    'Your personalized roadmap to full soul activation'
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-gold/20 flex items-center justify-center flex-shrink-0 mt-1">
                        <ChevronRight className="w-4 h-4 text-gold" />
                      </div>
                      <span className="text-white/90">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white rounded-xl p-8 text-charcoal">
                <div className="text-center mb-6">
                  <div className="inline-block px-4 py-2 bg-gold/10 text-gold rounded-full text-sm font-semibold mb-4">
                    Limited Seats Available
                  </div>
                  <h4 className="text-2xl font-bold text-navy mb-2" style={{ fontFamily: 'Playfair Display' }}>
                    Your Transformation Starts Here
                  </h4>
                  <p className="text-charcoal/70">Join thousands of empaths who've cleared their blocks</p>
                </div>

                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-3 text-sm">
                    <Calendar className="w-5 h-5 text-sage" />
                    <span>Next Workshop: <span className="font-semibold">March 20, 2024</span></span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <Clock className="w-5 h-5 text-sage" />
                    <span>Duration: <span className="font-semibold">90 Minutes</span></span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <Users className="w-5 h-5 text-sage" />
                    <span>Format: <span className="font-semibold">Live Online</span></span>
                  </div>
                </div>

                <Button 
                  size="lg" 
                  className="w-full bg-navy hover:bg-navy/90 text-white py-6 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                  onClick={() => window.location.href = externalLinks.workshopRegistration}
                >
                  Save My Seat in the Workshop
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>

                <p className="text-xs text-center text-charcoal/60 mt-4">
                  This workshop is the gateway to the VTS Program
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: 1:1 Offers */}
      <section id="mentorship" className="py-24 bg-warm-white relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-sage/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-gold/20 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-navy/10 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block mb-4 text-sage font-semibold text-sm tracking-wider uppercase">
              Personalized Support
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-navy mb-6 leading-tight" 
                style={{ fontFamily: 'Playfair Display' }}>
              For Direct Guidance and<br />High-Level Support
            </h2>
            <p className="text-xl text-charcoal max-w-3xl mx-auto leading-relaxed">
              Ready for deeper, personalized work? I offer targeted 1:1 sessions for clarity, 
              energy clearing, and spiritual business mentorship.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {oneOnOneServices.map((service, index) => {
              const IconComponent = iconMap[service.icon];
              const cardColors = [
                { 
                  glassBg: 'bg-sage/30', 
                  border: 'border-sage/40', 
                  iconBg: 'bg-sage', 
                  iconColor: 'text-white', 
                  accentColor: 'text-sage',
                  glowShadow: 'shadow-sage/20'
                },
                { 
                  glassBg: 'bg-gold/30', 
                  border: 'border-gold/40', 
                  iconBg: 'bg-gold', 
                  iconColor: 'text-navy', 
                  accentColor: 'text-gold',
                  glowShadow: 'shadow-gold/20'
                },
                { 
                  glassBg: 'bg-navy/30', 
                  border: 'border-navy/40', 
                  iconBg: 'bg-navy', 
                  iconColor: 'text-white', 
                  accentColor: 'text-navy',
                  glowShadow: 'shadow-navy/20'
                }
              ];
              const colors = cardColors[index];
              
              return (
                <Card 
                  key={service.id} 
                  className={`${colors.glassBg} backdrop-blur-xl border-2 ${colors.border} shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 hover:scale-105 group overflow-hidden relative`}
                  style={{
                    background: `linear-gradient(135deg, ${
                      index === 0 ? 'rgba(163, 184, 162, 0.15)' : 
                      index === 1 ? 'rgba(212, 175, 55, 0.15)' : 
                      'rgba(20, 32, 61, 0.15)'
                    } 0%, rgba(255, 255, 255, 0.4) 100%)`,
                    backdropFilter: 'blur(20px)',
                    WebkitBackdropFilter: 'blur(20px)'
                  }}
                >
                  {/* Animated gradient border */}
                  <div className={`absolute top-0 left-0 right-0 h-1 ${colors.iconBg} group-hover:h-2 transition-all duration-300`}></div>
                  
                  {/* Subtle shimmer effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <CardHeader className="relative z-10">
                    <div className={`w-20 h-20 ${colors.iconBg} rounded-3xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-2xl`}>
                      <IconComponent className={`w-10 h-10 ${colors.iconColor}`} />
                    </div>
                    <CardTitle className={`text-2xl font-bold ${colors.accentColor} mb-2`} style={{ fontFamily: 'Playfair Display' }}>
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="relative z-10">
                    <p className="text-charcoal/95 mb-6 leading-relaxed font-medium">
                      {service.description}
                    </p>
                    <div className="space-y-3 mb-6">
                      {service.benefits.map((benefit, idx) => (
                        <div key={idx} className="flex items-start gap-3 group/item">
                          <div className={`w-6 h-6 ${colors.iconBg} rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 group-hover/item:scale-110 transition-transform duration-300 shadow-md`}>
                            <ChevronRight className={`w-3 h-3 ${colors.iconColor}`} />
                          </div>
                          <span className="text-sm text-charcoal/90 font-medium">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="text-center">
            <Button 
              size="lg" 
              className="bg-navy hover:bg-navy/90 text-white px-8 py-6 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              onClick={() => window.location.href = externalLinks.oneOnOneMentorship}
            >
              Explore 1:1 Mentorship
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Section 5: Events Portal */}
      <section id="events" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-block mb-4 text-sage font-semibold text-sm tracking-wider uppercase">
              Live Connection
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-navy mb-6 leading-tight" 
                style={{ fontFamily: 'Playfair Display' }}>
              Join Me for a<br />Live Channeled Event
            </h2>
            <p className="text-xl text-charcoal max-w-3xl mx-auto leading-relaxed">
              Experience the power of collective energy work. Join our live transmissions, 
              meditations, and sacred circle gatherings.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {upcomingEvents.map((event) => (
              <Card key={event.id} className="bg-gradient-to-br from-warm-white to-white border-0 shadow-lg hover:shadow-2xl transition-all duration-300">
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <div className="px-3 py-1 bg-gold/10 text-gold rounded-full text-xs font-semibold">
                      {event.type}
                    </div>
                    <Calendar className="w-5 h-5 text-sage" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-navy" style={{ fontFamily: 'Playfair Display' }}>
                    {event.title}
                  </CardTitle>
                  <CardDescription className="text-charcoal/70">
                    {event.date} at {event.time}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-charcoal/80 leading-relaxed">
                    {event.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button 
              size="lg" 
              className="bg-sage hover:bg-sage/90 text-white px-8 py-6 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              onClick={() => window.location.href = externalLinks.upcomingEvents}
            >
              See Upcoming Events & Register
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Section 6: Community */}
      <section id="community" className="py-24 bg-dark-grey text-white relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1496008889433-9b938d8ac880?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzF8MHwxfHNlYXJjaHwzfHxlbmVyZ3klMjBoZWFsaW5nfGVufDB8fHx8MTc1OTk1ODMyNnww&ixlib=rb-4.1.0&q=85"
            alt="Community"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-dark-grey via-dark-grey/95 to-dark-grey/90"></div>
        </div>

        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-block mb-4 text-gold font-semibold text-sm tracking-wider uppercase">
                Souls Circle Family
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight" 
                  style={{ fontFamily: 'Playfair Display' }}>
                You Don't Have to Walk<br />This Path Alone
              </h2>
              <p className="text-xl text-white/80 mb-8 leading-relaxed">
                Join a sacred community of empaths and lightworkers who truly understand your journey. 
                A space for integration, connection, and belonging.
              </p>

              <div className="space-y-4 mb-8">
                {[
                  'Monthly group energy clearings and activations',
                  'Private community platform for support and connection',
                  'Exclusive channeled content and teachings',
                  'Integration support between your personal work',
                  'A family who speaks your language'
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-gold/20 flex items-center justify-center flex-shrink-0 mt-1">
                      <ChevronRight className="w-4 h-4 text-gold" />
                    </div>
                    <span className="text-white/90">{item}</span>
                  </div>
                ))}
              </div>

              <Button 
                size="lg" 
                className="bg-gold hover:bg-gold/90 text-navy px-8 py-6 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                onClick={() => window.location.href = externalLinks.soulCircleFamily}
              >
                Join The Souls Circle Family
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>

            <div className="space-y-6">
              {testimonials.slice(1).map((testimonial) => (
                <div key={testimonial.id} className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
                  <p className="text-white/90 italic mb-4 leading-relaxed">
                    "{testimonial.quote}"
                  </p>
                  <div className="flex items-center gap-3">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <p className="font-semibold text-white">{testimonial.name}</p>
                      <p className="text-sm text-white/60">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 7: Blog & YouTube */}
      <section id="blog" className="py-24 bg-warm-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-block mb-4 text-sage font-semibold text-sm tracking-wider uppercase">
              Resources & Insights
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-navy mb-6 leading-tight" 
                style={{ fontFamily: 'Playfair Display' }}>
              Explore My Latest<br />Insights & Transmissions
            </h2>
          </div>

          {/* Blog Posts */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-navy mb-8" style={{ fontFamily: 'Playfair Display' }}>
              Latest from the Blog
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              {blogPosts.map((post) => (
                <Card key={post.id} className="bg-white border-0 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group cursor-pointer overflow-hidden">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-sage text-white text-xs font-semibold rounded-full">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  <CardHeader>
                    <CardDescription className="text-charcoal/60 text-sm mb-2">
                      {post.date}
                    </CardDescription>
                    <CardTitle className="text-xl font-bold text-navy group-hover:text-sage transition-colors duration-300" 
                                style={{ fontFamily: 'Playfair Display' }}>
                      {post.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-charcoal/80 mb-4">{post.excerpt}</p>
                    <div className="flex items-center text-sage font-semibold text-sm group-hover:gap-2 transition-all duration-300">
                      Read More
                      <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="text-center mt-8">
              <Button 
                variant="outline" 
                size="lg" 
                className="border-2 border-navy text-navy hover:bg-navy hover:text-white px-8 py-6 text-lg font-semibold rounded-full transition-all duration-300"
                onClick={() => window.location.href = externalLinks.blog}
              >
                Go to the Blog
              </Button>
            </div>
          </div>

          {/* YouTube Videos */}
          <div>
            <h3 className="text-2xl font-bold text-navy mb-8" style={{ fontFamily: 'Playfair Display' }}>
              Latest YouTube Transmissions
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              {youtubVideos.map((video) => (
                <Card key={video.id} className="bg-white border-0 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group cursor-pointer overflow-hidden">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={video.thumbnail}
                      alt={video.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-navy/40 group-hover:bg-navy/30 transition-all duration-300 flex items-center justify-center">
                      <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Play className="w-6 h-6 text-navy ml-1" />
                      </div>
                    </div>
                    <div className="absolute bottom-2 right-2 px-2 py-1 bg-navy/90 text-white text-xs font-semibold rounded">
                      {video.duration}
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-lg font-bold text-navy group-hover:text-sage transition-colors duration-300" 
                                style={{ fontFamily: 'Playfair Display' }}>
                      {video.title}
                    </CardTitle>
                    <CardDescription className="flex items-center gap-2 text-charcoal/60 text-sm">
                      <Eye className="w-4 h-4" />
                      {video.views} views
                    </CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
            <div className="text-center mt-8">
              <Button 
                variant="outline" 
                size="lg" 
                className="border-2 border-navy text-navy hover:bg-navy hover:text-white px-8 py-6 text-lg font-semibold rounded-full transition-all duration-300"
                onClick={() => window.location.href = externalLinks.youtube}
              >
                Watch on YouTube
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Section 8: Final CTA & Footer */}
      <section className="py-24 bg-navy text-white relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1542157565-4607d82cf417?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzB8MHwxfHNlYXJjaHwzfHxwZWFjZWZ1bCUyMG5hdHVyZXxlbnwwfHx8fDE3NTk5NTgzMzZ8MA&ixlib=rb-4.1.0&q=85"
            alt="Transformation"
            className="w-full h-full object-cover opacity-10"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-navy via-navy/95 to-navy"></div>
        </div>

        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight" 
              style={{ fontFamily: 'Playfair Display' }}>
            Your Soul's Mission Is Waiting
          </h2>
          <p className="text-xl text-white/80 mb-12 leading-relaxed">
            Stop spinning in the never-ending healing cycle. Clear the final blocks, 
            activate your power, and step into your purpose.
          </p>
          <Button 
            size="lg" 
            className="bg-gold hover:bg-gold/90 text-navy px-10 py-7 text-xl font-semibold rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105"
            onClick={() => window.location.href = externalLinks.workshopRegistration}
          >
            Join the 7 Energy Blocks Workshop
            <ArrowRight className="ml-2 w-6 h-6" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-dark-grey text-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            {/* Brand */}
            <div className="md:col-span-2">
              <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: 'Playfair Display' }}>
                Souls Circle
              </h3>
              <p className="text-white/70 mb-6 leading-relaxed">
                Helping empaths clear their final energy blocks and activate their soul's true mission 
                through channeled methods and deep energetic work.
              </p>
              <div className="flex items-center gap-4">
                {socialLinks.map((social) => {
                  const IconComponent = iconMap[social.icon];
                  return (
                    <a
                      key={social.platform}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-white/10 hover:bg-gold/20 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                    >
                      <IconComponent className="w-5 h-5" />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-bold text-lg mb-4" style={{ fontFamily: 'Playfair Display' }}>Quick Links</h4>
              <ul className="space-y-2">
                {navigationLinks.map((link) => (
                  <li key={link.label}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-white/70 hover:text-gold transition-colors duration-300"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h4 className="font-bold text-lg mb-4" style={{ fontFamily: 'Playfair Display' }}>Stay Connected</h4>
              <p className="text-white/70 text-sm mb-4">Get weekly insights and channeled guidance:</p>
              <div className="flex flex-col gap-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-gold transition-colors duration-300"
                />
                <Button 
                  className="bg-gold hover:bg-gold/90 text-navy rounded-full font-semibold"
                >
                  Subscribe
                </Button>
              </div>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8 text-center text-white/60 text-sm">
            <p>&copy; {new Date().getFullYear()} Souls Circle. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;