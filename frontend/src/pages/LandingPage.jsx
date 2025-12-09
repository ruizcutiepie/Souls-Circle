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
            {/* Souls Circle Logo - Adjusts visibility on scroll */}
            <img
              src="https://customer-assets.emergentagent.com/job_biz-launchpad-7/artifacts/repyviae_sclogo-removebg-preview.png"
              alt="Souls Circle"
              className={`h-16 w-auto transition-all duration-300 ${
                isScrolled 
                  ? 'brightness-0 drop-shadow-md' 
                  : 'drop-shadow-lg'
              }`}
            />
          </div>
          <div className="hidden md:flex items-center gap-8">
            {navigationLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => scrollToSection(link.href)}
                className="text-base font-semibold text-navy hover:text-gold transition-colors duration-300"
              >
                {link.label}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Section 1: Hero/Hook */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-warm-white">
        {/* Background Image with Ken Speaking */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://customer-assets.emergentagent.com/job_biz-launchpad-7/artifacts/aat5gqms_20250411_083912%20%281%29.jpg"
            alt="Ken Franceschi"
            className="w-full h-full object-cover opacity-25 scale-110"
            style={{ objectPosition: 'center 35%' }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-warm-white/95 via-warm-white/85 to-warm-white/70"></div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 py-32 text-center">
          <h1 className="text-6xl md:text-8xl font-bold text-navy mb-8 leading-tight animate-fade-in-up" 
              style={{ fontFamily: 'Playfair Display' }}>
            You've Done The Work.<br />
            <span style={{ color: '#6B8F71' }}>Now Step Into Your Full Mission.</span>
          </h1>

          <p className="text-2xl md:text-3xl text-charcoal mb-12 max-w-5xl mx-auto leading-relaxed animate-fade-in-up font-medium" 
             style={{ animationDelay: '0.2s' }}>
            Helping successful spiritual entrepreneurs transmute their final energetic blocks, unlock their full power, 
            and access the intuitive clarity needed to make their greatest impact.
          </p>

          {/* Social Proof Badge */}
          <div className="inline-block mb-12 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <div className="bg-white/80 backdrop-blur-sm px-8 py-4 rounded-full border-2 border-sage/20 shadow-lg">
              <p className="text-charcoal/80 text-lg">
                <span className="font-bold text-navy text-xl">Over 250+</span> Purpose-Driven Souls Impacted
              </p>
            </div>
          </div>

          {/* CTA Box */}
          <div className="max-w-3xl mx-auto bg-white/90 backdrop-blur-sm rounded-3xl p-10 shadow-2xl border-2 border-gold/20 animate-fade-in-up" 
               style={{ animationDelay: '0.6s' }}>
            <h3 className="text-3xl font-bold text-navy mb-4" style={{ fontFamily: 'Playfair Display' }}>
              Connect to the Power Within in 15 Minutes
            </h3>
            <p className="text-lg text-charcoal/80 mb-6 leading-relaxed">
              Don't settle for generic tools. Take the 30-second quiz to receive a premium Activation Meditation 
              tailored to your goals—the same caliber of tool my private clients use.
            </p>
            <Button 
              size="lg" 
              className="w-full bg-gold hover:bg-gold/90 text-navy px-10 py-7 text-xl font-bold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              onClick={() => window.location.href = externalLinks.challengeRegistration}
            >
              GET MY FREE TAILORED MEDITATION
              <ArrowRight className="ml-2 w-6 h-6" />
            </Button>
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
                {/* Main featured image - Ken's framed photo from hero */}
                <div className="relative group">
                  {/* Main photo with subtle frame */}
                  <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                    <img
                      src="https://customer-assets.emergentagent.com/job_biz-launchpad-7/artifacts/v1jts1vn_20250311_130413.jpg"
                      alt="Ken - The Ascension Activator"
                      className="w-full h-[450px] object-cover transform group-hover:scale-105 transition-all duration-700"
                    />
                    {/* Subtle gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-navy/30 via-transparent to-transparent"></div>
                    
                    {/* Video play button overlay */}
                    <div className="absolute inset-0 flex items-center justify-center cursor-pointer">
                      <div className="w-20 h-20 bg-gold/90 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 group-hover:bg-gold transition-all duration-300 shadow-xl">
                        <Play className="w-8 h-8 text-navy ml-1" />
                      </div>
                    </div>
                    
                    {/* Caption for video */}
                    <div className="absolute bottom-0 left-0 right-0 p-8">
                      <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20">
                        <p className="text-white font-semibold text-lg mb-1">My Journey of Transformation</p>
                        <p className="text-white/90 text-sm">Watch how I discovered the path to helping spiritual entrepreneurs embody their soul mission</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Decorative accent bar */}
                  <div className="absolute -bottom-3 left-8 right-8 h-2 bg-gradient-to-r from-sage via-gold to-sage rounded-full shadow-lg"></div>
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

      {/* Section 3: Challenge */}
      <section id="challenge" className="py-24 bg-navy text-white relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-sage/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl"></div>

        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block mb-6 text-gold font-bold text-base tracking-wider uppercase">
              Free 3-Day Live Challenge
            </div>
            <h2 className="text-5xl md:text-7xl font-bold mb-8 leading-tight" 
                style={{ fontFamily: 'Playfair Display' }}>
              Mission Block Clarity<br />
              <span className="text-gold">3-Day Challenge</span>
            </h2>
            <p className="text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed font-medium mb-4">
              Discover how the unresolved <span className="font-bold text-gold">Soul Blueprint</span> is stopping you from completing your mission to your greatest potential.
            </p>
            <p className="text-xl text-gold font-bold">
              December 15-17th, 2025 | 12:00 PM EST | LIVE with Ken Franceschi
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Day 1 */}
            <Card className="bg-white/10 backdrop-blur-sm border-2 border-gold/30 text-white p-8">
              <div className="text-center mb-6">
                <div className="text-6xl font-bold text-gold mb-2" style={{ fontFamily: 'Playfair Display' }}>01</div>
                <div className="text-gold font-bold text-sm mb-2">12:00 - 12:30 PM EST</div>
                <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: 'Playfair Display' }}>
                  How the Soul Blueprint Stops You
                </h3>
              </div>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-2">
                  <ChevronRight className="w-4 h-4 text-gold mt-1 flex-shrink-0" />
                  <span>What is the Soul Blueprint</span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="w-4 h-4 text-gold mt-1 flex-shrink-0" />
                  <span>Why you feel blocked from your mission</span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="w-4 h-4 text-gold mt-1 flex-shrink-0" />
                  <span>Channelled insights about planetary shifts</span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="w-4 h-4 text-gold mt-1 flex-shrink-0" />
                  <span>Why traditional methods can't fix the root problem</span>
                </li>
              </ul>
            </Card>

            {/* Day 2 */}
            <Card className="bg-white/10 backdrop-blur-sm border-2 border-gold/30 text-white p-8">
              <div className="text-center mb-6">
                <div className="text-6xl font-bold text-gold mb-2" style={{ fontFamily: 'Playfair Display' }}>02</div>
                <div className="text-gold font-bold text-sm mb-2">12:00 - 12:30 PM EST</div>
                <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: 'Playfair Display' }}>
                  What Your Higher Self Has to Tell You
                </h3>
              </div>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-2">
                  <ChevronRight className="w-4 h-4 text-gold mt-1 flex-shrink-0" />
                  <span>Live channeled activation experience</span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="w-4 h-4 text-gold mt-1 flex-shrink-0" />
                  <span>Receive divine wisdom about your path</span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="w-4 h-4 text-gold mt-1 flex-shrink-0" />
                  <span>Embody the "readiness" for your next step</span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="w-4 h-4 text-gold mt-1 flex-shrink-0" />
                  <span>Connect with your soul's mission clarity</span>
                </li>
              </ul>
            </Card>

            {/* Day 3 */}
            <Card className="bg-white/10 backdrop-blur-sm border-2 border-gold/30 text-white p-8">
              <div className="text-center mb-6">
                <div className="text-6xl font-bold text-gold mb-2" style={{ fontFamily: 'Playfair Display' }}>03</div>
                <div className="text-gold font-bold text-sm mb-2">12:00 - 1:00 PM EST</div>
                <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: 'Playfair Display' }}>
                  How to Resolve the Blueprint
                </h3>
              </div>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-2">
                  <ChevronRight className="w-4 h-4 text-gold mt-1 flex-shrink-0" />
                  <span>Advanced energetic patterns most teachers don't discuss</span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="w-4 h-4 text-gold mt-1 flex-shrink-0" />
                  <span>Quantum-level blueprint resolution</span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="w-4 h-4 text-gold mt-1 flex-shrink-0" />
                  <span>Clear path forward for your mission</span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="w-4 h-4 text-gold mt-1 flex-shrink-0" />
                  <span>Invitation to begin your transformation journey</span>
                </li>
              </ul>
            </Card>
          </div>

          <div className="text-center">
            <Button 
              size="lg" 
              className="bg-gold hover:bg-gold/90 text-navy px-12 py-8 text-2xl font-bold rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105"
              onClick={() => window.location.href = externalLinks.challengeRegistration}
            >
              Join the FREE 3-Day Challenge
              <ArrowRight className="ml-3 w-7 h-7" />
            </Button>
            <p className="text-white/70 mt-6 text-lg">
              Limited spots available - Reserve your seat now
            </p>
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
              <div className="inline-block mb-6 text-gold font-bold text-base tracking-wider uppercase">
                Join The Family
              </div>
              <h2 className="text-5xl md:text-6xl font-bold mb-8 leading-tight" 
                  style={{ fontFamily: 'Playfair Display' }}>
                This Is Where You<br />Find Your Tribe
              </h2>
              <p className="text-2xl text-white/90 mb-10 leading-relaxed font-medium">
                A safe space for spiritual entrepreneurs, practitioners and change-makers to connect, 
                share their stories, and feel truly seen.
              </p>

              <div className="space-y-5 mb-10">
                {[
                  'Live coaching calls and channeled energy activations with Ken',
                  'Weekly Light List - receive channeled portals and light codes',
                  'Event replay archive - on-demand access to all past events',
                  'Spiritual toolkit - meditations, routines, and practical tools',
                  'Dedicated community space to connect with your soul family'
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-7 h-7 rounded-full bg-gold/20 flex items-center justify-center flex-shrink-0 mt-1">
                      <ChevronRight className="w-5 h-5 text-gold" />
                    </div>
                    <span className="text-white/90 text-lg">{item}</span>
                  </div>
                ))}
              </div>

              <Button 
                size="lg" 
                className="bg-gold hover:bg-gold/90 text-navy px-10 py-7 text-xl font-bold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                onClick={() => window.location.href = externalLinks.soulCircleFamily}
              >
                Join The Family - $44/Month
                <ArrowRight className="ml-2 w-6 h-6" />
              </Button>
            </div>

            <div className="space-y-6">
              {testimonials.slice(1, 3).map((testimonial) => (
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

      {/* Section 7: Resources - YouTube & Blog */}
      <section id="resources" className="py-24 bg-warm-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-block mb-6 text-sage font-bold text-base tracking-wider uppercase">
              Resources & Insights
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-navy mb-6 leading-tight" 
                style={{ fontFamily: 'Playfair Display' }}>
              Channeled Wisdom &<br />Soul Mission Insights
            </h2>
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
            <div className="text-center mt-10">
              <Button 
                variant="outline" 
                size="lg" 
                className="border-2 border-navy text-navy hover:bg-navy hover:text-white px-10 py-7 text-xl font-bold rounded-full transition-all duration-300"
                onClick={() => window.location.href = externalLinks.youtube}
              >
                Watch More on YouTube
              </Button>
            </div>
          </div>

          {/* Blog Posts - MOVED TO BOTTOM */}
          <div className="mt-20">
            <h3 className="text-3xl font-bold text-navy mb-10" style={{ fontFamily: 'Playfair Display' }}>
              Latest Soul Mission Insights
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
                      <span className="px-3 py-1 bg-navy text-white text-xs font-semibold rounded-full">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  <CardHeader>
                    <CardDescription className="text-charcoal/60 text-sm mb-2">
                      {post.date}
                    </CardDescription>
                    <CardTitle className="text-xl font-bold text-navy group-hover:text-gold transition-colors duration-300" 
                                style={{ fontFamily: 'Playfair Display' }}>
                      {post.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-charcoal/80 mb-4 leading-relaxed">{post.excerpt}</p>
                    <div className="flex items-center text-navy font-semibold text-sm group-hover:gap-2 transition-all duration-300">
                      Read More
                      <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="text-center mt-10">
              <Button 
                variant="outline" 
                size="lg" 
                className="border-2 border-navy text-navy hover:bg-navy hover:text-white px-10 py-7 text-xl font-bold rounded-full transition-all duration-300"
                onClick={() => window.location.href = externalLinks.blog}
              >
                Read More Articles
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

        <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-5xl md:text-7xl font-bold mb-8 leading-tight" 
              style={{ fontFamily: 'Playfair Display' }}>
            Ready to Resolve Your Soul Blueprint<br />
            <span className="text-gold">And Embody Your Mission?</span>
          </h2>
          <p className="text-2xl text-white/90 mb-12 leading-relaxed font-medium max-w-4xl mx-auto">
            Join the Mission Block Clarity Challenge and discover the advanced energetic patterns keeping you from your highest potential.
          </p>
          <Button 
            size="lg" 
            className="bg-gold hover:bg-gold/90 text-navy px-12 py-8 text-2xl font-bold rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105"
            onClick={() => window.location.href = externalLinks.challengeRegistration}
          >
            Join the FREE 3-Day Challenge
            <ArrowRight className="ml-3 w-7 h-7" />
          </Button>
          <p className="text-white/70 mt-8 text-lg font-medium">
            December 15-17, 2025 | 12:00 PM EST | Live with Ken
          </p>
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