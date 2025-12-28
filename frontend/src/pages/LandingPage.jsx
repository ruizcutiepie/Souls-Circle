import React, { useState, useEffect, useMemo } from "react";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import {
  BookOpen,
  Sparkles,
  Lightbulb,
  Calendar,
  ArrowRight,
  Play,
  Eye,
  ChevronRight,
  Instagram,
  Youtube,
  Facebook,
} from "lucide-react";
import {
  blogPosts,
  youtubVideos,
  upcomingEvents,
  oneOnOneServices,
  navigationLinks,
  socialLinks,
  externalLinks,
} from "../data/mock";

const iconMap = {
  BookOpen,
  Sparkles,
  Lightbulb,
  Instagram,
  Youtube,
  Facebook,
};

/** Small reusable testimonial UI (no section labels shown) */
const QuoteCard = ({ quote, name, title, now }) => {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-6 shadow-lg">
      <p className="text-white/90 leading-relaxed italic">&quot;{quote}&quot;</p>
      {(name || title || now) && (
        <div className="mt-5 pt-4 border-t border-white/10">
          <p className="text-white font-semibold">{name || "Community Member"}</p>
          {(title || now) && (
            <p className="text-white/65 text-sm mt-1">
              {title || ""}
              {now ? ` · ${now}` : ""}
            </p>
          )}
        </div>
      )}
    </div>
  );
};

const QuoteCardLight = ({ quote, name, title, now }) => {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-lg">
      <p className="text-charcoal leading-relaxed italic">&quot;{quote}&quot;</p>
      {(name || title || now) && (
        <div className="mt-5 pt-4 border-t border-slate-200">
          <p className="text-navy font-semibold">{name || "Client"}</p>
          {(title || now) && (
            <p className="text-charcoal/70 text-sm mt-1">
              {title || ""}
              {now ? ` · ${now}` : ""}
            </p>
          )}
        </div>
      )}
    </div>
  );
};

const LandingPage = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isStoryExpanded, setIsStoryExpanded] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setIsMobileMenuOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  /**
   * Ken testimonials (Placement-only "section" key; never displayed)
   */
  const kenTestimonials = useMemo(() => {
    return [
      // Story/About
      {
        id: "t_story_francesco",
        section: "Story / About",
        name: "Francesco Cracolici",
        title: "CEO - Nomadic Minds",
        now: "Now Spiritual Entrepreneur",
        quote:
          "In our very first call, you told me things about myself that were impossible for you to know. It was like you accessed a different plane of information, and I just knew I had to work with Ken. The biggest problem is that you don't know what's secretly holding you back. Every week Ken would point out a new blind spot, like anger from a past life I never knew existed, and we'd fix it. It was like he just turned on the lights in a dark room. I was successful, but I always felt like I wasn't fully in my purpose. After working with Ken, I found that missing piece, and now my life is full of so much more synchronicities and new opportunities.",
        featured: true,
      },
      {
        id: "t_story_deb",
        section: "Story / About",
        name: "Deb Ojedas",
        title: "Organization coach",
        now: "Now Spiritual Children’s Book Author",
        quote:
          "Allow me to share how I feel when being guided by Ken. Held. Understood. Safe. Ken meets me where I am. No judgement. His guidance is rooted in love and immense wisdom. These experiences continue to unfold in ways that empower and deepen my connection to my True Essence. Thank you Ken",
        featured: false,
      },
      {
        id: "t_story_jenn",
        section: "Story / About",
        name: "Jenn Tomko",
        title: "Psychotherapist",
        now: "Now Spiritual Coach",
        quote:
          "My work with Ken has been incredibly eye-opening. He has helped me expand my awareness and tap into higher levels of understanding, allowing me to see my life path with more clarity. I’ve gained confidence in trusting my intuition and honoring my own gifts, which has made a meaningful difference in how I move through life.  I can FEEL my power in a way that I didn't know possible. I am forever grateful for Ken and his role in my journey.",
        featured: false,
      },
      {
        id: "t_story_christiene",
        section: "Story / About",
        name: "Christiene Renée",
        title: "Intuitive coach and feminine leadership guide",
        now: null,
        quote:
          "Ken is awesome! He’s a magical, multidimensional soul and a supportive, intuitive and genuinely loving guide. I’ve been utilizing his powerful, consciousness raising container for some fine-tuning and deep dives, and it’s been incredible! I’ve moved through so much stuff I thought had already done. He's fun too!",
        featured: false,
      },

      // Challenge
      {
        id: "t_challenge_elishama",
        section: "Challenge",
        name: "Elishama Spicer",
        title: "Spiritual Coach and Somatic Dance Practitioner",
        now: null,
        quote:
          "Trust your gut and take this Challenge! I almost didn't start this journey because I had done so much spiritual work already, but it turned out to be the greatest gift. Ken’s methods address blocks on a 'quantum level' in a way nothing else ever had. The ceiling I had hit finally dissolved, and I emerged with a new sense of clarity, tons of energy, and greater discernment of my own empathic abilities. Don't let your hesitation stop you; this is the missing piece.",
        featured: true,
      },
      {
        id: "t_challenge_ditra",
        section: "Challenge",
        name: "Ditra Walsh",
        title: "Intuitive Guide and Teacher",
        now: null,
        quote:
          "I strongly encourage you to take this 3-day challenge to identify the energy blocks holding you back, it gave me a crucial flavor of the transformation to come. It led me to join the full VTS program, which provided the deep tools required to actually transmute those obstacles. Because of this journey, I know myself better, feel more connected, love myself more, and I have significantly less fear & imposter syndrome.",
        featured: false,
      },

      // Work-with-me (Energy Reading)
      {
        id: "t_workwithme_mark",
        section: "Work With Me",
        name: "Mark Piorecky",
        title: "Biologist & Business Owner",
        now: "Now Environmental Impact leader",
        quote:
          "The energy reading was incredible—the insights were spot-on and gave me the absolute certainty I needed to dive deeper. Just starting the work, the shift has already been profound and 'times a thousand' compared to other practices I’ve tried. I’ve gone from feeling depleted to being 'lit up like a Christmas tree,' connecting with my Higher Self in a way that feels totally new. If you are looking for a clear path forward, this is it.",
        featured: false,
      },
      {
        id: "t_workwithme_brendan",
        section: "Work With Me",
        name: "Brendan Mullan",
        title: "Construction Consultant",
        now: "Now Mental Sovereignty Advocate & Author",
        quote:
          "What drew me to Ken specifically was the synchronicity of how we connected. I followed my intuition and the entire chain of events felt purposeful rather than coincidental. The confirmation and clarity he shared in the session provided me with the clarity and the path for what I need right now. I can already feel it's creating some sort of movement.",
        featured: false,
      },

      // Events
      {
        id: "t_events_1",
        section: "Events",
        name: null,
        title: null,
        now: null,
        quote:
          "Wow! In just a few short minutes at one of Ken’s coaching events and he pointed out an insights that had kept me stuck for years even with all my intuitive knowledge and self development work. It was like the missing puzzle piece clicked and the clarity was incredible.",
        featured: false,
      },
      {
        id: "t_events_2",
        section: "Events",
        name: null,
        title: null,
        now: null,
        quote:
          "I always enjoy going to Ken’s events because every time I walk away with insights, and can feel my vibration rising and rising. I always feel uplifted, inspired afterwards.",
        featured: false,
      },
      {
        id: "t_events_3",
        section: "Events",
        name: null,
        title: null,
        now: null,
        quote:
          "And yesterday the way Ken articulated his insights was so strong and relatable and I could connect with a lot of it. And the timing of everything like that was an exact event I needed it at the exact time. Absolutely awesome I loved everything about it.",
        featured: false,
      },
      {
        id: "t_events_4",
        section: "Events",
        name: null,
        title: null,
        now: null,
        quote:
          "Every time I join Ken’s meetings, there's always something new and insightful from him or something useful from connecting with others who have similar experiences to me",
        featured: false,
      },

      // Community
      {
        id: "t_community_kimberly",
        section: "Community",
        name: "Kimberly Barrett",
        title: "Founder and Coach of a Spiritual Development Community",
        now: null,
        quote:
          "Having done so much work already, I struggled to find a community that offered the depth I was looking for. This space is different. Ken’s channeled guidance is profound and consistently feels like it speaks specifically to me and my situation. It’s an incredibly comfortable space to share, collaborate, and grow alongside peers who are on the same frequency. It is incredible to have a comfortable space to connect with true peers and finally receive the high-level support I need.",
        featured: false,
      },
      {
        id: "t_community_elishama",
        section: "Community",
        name: "Elishama Spicer",
        title: "Spiritual Coach and Somatic Dance Practitioner",
        now: null,
        quote:
          "I was divinely guided to this group and instantly felt the joy of connecting with so many who speak my language, my soul family. But the real power here is the access to Ken’s guidance. The weekly live coaching keeps me motivated, provides clarity, and keeps my mission on track. I’ve been a part of lot’s of things but I’ve not seen something quite like this, Ken pulls together the most powerful techniques to get straight to the root cause, which just shows the power of channeled wisdom. I am so grateful to have this space and this support!",
        featured: false,
      },

      // 7-day challenge (testimonials)
      {
        id: "t_7day_larry_1",
        section: "7-Day Challenge",
        name: "Larry Horowitz",
        title: "PMO",
        now: "Now Spiritual Writer",
        quote:
          "Day 1 meditation gave me a strong sense of connection, like I was one with everything. I repeated it and had an even greater connection the second time around!",
        featured: false,
      },
      {
        id: "t_7day_larry_2",
        section: "7-Day Challenge",
        name: "Larry Horowitz",
        title: "PMO",
        now: "Now Spiritual Writer",
        quote:
          "My closing feedback for the past 7 days is that there seems to be a subtle buildup from day to day, meaning that I couldn't detect anything on a daily basis, but I do feel more energized, more energetic, more peaceful on day seven than I did on day one.",
        featured: false,
      },
      {
        id: "t_7day_erica",
        section: "7-Day Challenge",
        name: "Erica Tocci",
        title: "Empath & Intuitive",
        now: null,
        quote:
          "I loved every one and how I felt physically and spiritually during and afterwards. I also noticed waking up the last few mornings with more energy and feeling lighter, calmer, more optimistic and focused with way less anxiety..which is HUGE!!!",
        featured: false,
      },
    ];
  }, []);

  const bySection = (sectionName) => kenTestimonials.filter((t) => t.section === sectionName);

  const storyQuotes = useMemo(() => bySection("Story / About"), [kenTestimonials]);
  const challengeQuotes = useMemo(() => bySection("Challenge"), [kenTestimonials]);
  const workWithMeQuotes = useMemo(() => bySection("Work With Me"), [kenTestimonials]);
  const eventsQuotes = useMemo(() => bySection("Events"), [kenTestimonials]);
  const communityQuotes = useMemo(() => bySection("Community"), [kenTestimonials]);
  const sevenDayQuotes = useMemo(() => bySection("7-Day Challenge"), [kenTestimonials]);

  const featuredStory = storyQuotes.find((t) => t.featured) || storyQuotes[0];

  return (
    <div className="landing-page w-full overflow-x-hidden">
      {/* Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-navy/90 backdrop-blur-md shadow-md" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-5 flex items-center justify-between">
          <div className="flex items-center gap-3 min-w-0">
            <img
              src="https://customer-assets.emergentagent.com/job_biz-launchpad-7/artifacts/repyviae_sclogo-removebg-preview.png"
              alt="Souls Circle"
              className="h-14 sm:h-16 w-auto drop-shadow-lg"
            />
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-4 py-2 text-white font-semibold"
            onClick={() => setIsMobileMenuOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? "Close" : "Menu"}
          </button>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {navigationLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => scrollToSection(link.href)}
                className="text-base font-semibold text-white hover:text-gold transition-colors duration-300"
              >
                {link.label}
              </button>
            ))}
          </div>
        </div>

        {/* Mobile dropdown */}
        {isMobileMenuOpen && (
          <div className="md:hidden px-4 sm:px-6 pb-5">
            <div className="mt-3 rounded-2xl border border-white/10 bg-navy/95 backdrop-blur-md p-3 shadow-lg">
              {navigationLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    scrollToSection(link.href);
                  }}
                  className="w-full text-left px-4 py-3 rounded-xl text-white font-semibold hover:bg-white/10 transition"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Section 1: Hero with VIDEO background */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-warm-white">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <video
            className="w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            poster="https://customer-assets.emergentagent.com/job_biz-launchpad-7/artifacts/aat5gqms_20250411_083912%20%281%29.jpg"
          >
            <source src="/hero-background.mp4" type="video/mp4" />
          </video>

          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.45)_0%,rgba(0,0,0,0.55)_60%,rgba(0,0,0,0.7)_100%)] pointer-events-none" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 pt-28 pb-20 md:py-32 text-center">
          <h1
            className="text-4xl sm:text-5xl md:text-8xl font-bold mb-8 leading-tight animate-fade-in-up"
            style={{ fontFamily: "Playfair Display", color: "#F9FAFB" }}
          >
            You&apos;ve Done The Work.
            <br />
            <span style={{ color: "#A3B8A2" }}>Now Step Into Your Full Mission.</span>
          </h1>

          <p
            className="text-lg sm:text-xl md:text-3xl mb-10 md:mb-12 max-w-5xl mx-auto leading-relaxed animate-fade-in-up font-medium"
            style={{ animationDelay: "0.2s", color: "rgba(249,250,251,0.9)" }}
          >
            Helping successful spiritual entrepreneurs transmute their final energetic blocks, unlock their full power,
            and access the intuitive clarity needed to make their greatest impact.
          </p>

          {/* Social Proof (ONLY what’s in the brief) */}
          <div
            className="mx-auto mb-10 md:mb-12 flex w-full max-w-xl items-center gap-4 rounded-full bg-white/90 px-5 py-3 text-left shadow-lg backdrop-blur-sm animate-fade-in-up"
            style={{ animationDelay: "0.4s" }}
          >
            <div className="flex -space-x-2 flex-shrink-0">
              <img
                src="https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=200&q=80"
                alt="Community member"
                className="h-9 w-9 rounded-full border-2 border-white object-cover"
              />
              <img
                src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=200&q=80"
                alt="Community member"
                className="h-9 w-9 rounded-full border-2 border-white object-cover"
              />
              <img
                src="https://images.unsplash.com/photo-1525134479668-1bee5c7c6845?auto=format&fit=crop&w=200&q=80"
                alt="Community member"
                className="h-9 w-9 rounded-full border-2 border-white object-cover"
              />
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-sm font-semibold text-navy truncate">250+ Purpose-Driven Souls Impacted</p>
            </div>
          </div>

          <div
            className="w-full max-w-3xl mx-auto rounded-[40px] border border-white/70 bg-slate-900/80 backdrop-blur-md p-7 sm:p-8 md:p-10 shadow-2xl animate-fade-in-up"
            style={{ animationDelay: "0.6s" }}
          >
            <h3 className="text-2xl md:text-4xl font-bold text-white mb-4 leading-tight" style={{ fontFamily: "Playfair Display" }}>
              Connect to the Power Within in 15 Minutes
            </h3>
            <p className="text-base md:text-xl text-white/90 mb-8 leading-relaxed">
              Don&apos;t settle for generic tools. Take the 30-second quiz to receive a premium Activation Meditation
              tailored to your goals—the same caliber of tool my private clients use.
            </p>
            <Button
              size="lg"
              className="w-full bg-gold hover:bg-gold/90 text-navy px-8 py-6 md:px-10 md:py-7 text-lg md:text-xl font-bold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              onClick={() => (window.location.href = externalLinks.challengeRegistration)}
            >
              GET MY FREE TAILORED MEDITATION
              <ArrowRight className="ml-2 w-6 h-6" />
            </Button>
          </div>
        </div>
      </section>

      {/* Section 2: Story / About */}
      <section id="story" className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-start">
            <div className="order-1 min-w-0">
              <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                <img
                  src="https://customer-assets.emergentagent.com/job_biz-launchpad-7/artifacts/v1jts1vn_20250311_130413.jpg"
                  alt="Ken Franceschi"
                  className="w-full h-[360px] sm:h-[420px] md:h-[500px] object-cover"
                />
              </div>

              {/* Testimonials fold until "Read more" */}
              <div
                className={`mt-8 overflow-hidden transition-all duration-500 ${
                  isStoryExpanded ? "max-h-[1400px] opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                {featuredStory ? (
                  <div className="bg-warm-white p-6 rounded-xl shadow-lg border-l-4 border-gold">
                    <p className="text-charcoal italic leading-relaxed">&quot;{featuredStory.quote}&quot;</p>
                    <p className="font-semibold text-navy mt-4">{featuredStory.name}</p>
                    {(featuredStory.title || featuredStory.now) && (
                      <p className="text-sm text-charcoal/70">
                        {featuredStory.title || ""}
                        {featuredStory.now ? ` · ${featuredStory.now}` : ""}
                      </p>
                    )}
                  </div>
                ) : null}

                <div className="mt-6 grid gap-4">
                  {storyQuotes
                    .filter((t) => t.id !== featuredStory?.id)
                    .slice(0, 2)
                    .map((t) => (
                      <div key={t.id} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-md">
                        <p className="text-charcoal italic leading-relaxed">&quot;{t.quote}&quot;</p>
                        <p className="font-semibold text-navy mt-4">{t.name}</p>
                        {(t.title || t.now) && (
                          <p className="text-sm text-charcoal/70">
                            {t.title || ""}
                            {t.now ? ` · ${t.now}` : ""}
                          </p>
                        )}
                      </div>
                    ))}
                </div>
              </div>
            </div>

            <div className="order-2 min-w-0">
              <div className="inline-block mb-4 md:mb-6 text-sage font-bold text-base tracking-wider uppercase">MY STORY</div>

              <h2
                className="text-3xl sm:text-4xl md:text-6xl font-bold text-navy mb-6 md:mb-8 leading-tight"
                style={{ fontFamily: "Playfair Display" }}
              >
                I know what it&apos;s like to do “all the right things”
                <br className="hidden sm:block" />
                and still feel a missing piece.
              </h2>

              <div className="space-y-5 text-base sm:text-lg text-charcoal leading-relaxed">
                <p>
                  My journey started in the clinical field. I was driven by a desire to help, but I quickly realized we
                  were often treating symptoms rather than root causes.
                </p>
                <p>
                  That logical world was shattered when a chance encounter with a medium triggered trauma, memories and
                  spiritual abilities I had suppressed since a child. It launched me onto a new path—mastering Reiki,
                  mediumship, and channeling.
                </p>
                <p>
                  I became an established practitioner. I was helping people. I was doing the deep inner work, keeping
                  my vibration high, and consuming all the spiritual &amp; self development self-help books and courses
                  I could get my hands on.
                </p>

                {!isStoryExpanded && (
                  <button
                    onClick={() => setIsStoryExpanded(true)}
                    className="inline-flex items-center bg-gold text-navy px-6 py-3 rounded-full font-semibold shadow-md hover:bg-gold/90 transition"
                  >
                    Read more
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </button>
                )}

                {isStoryExpanded && (
                  <>
                    <p className="font-semibold text-navy">But then, life threw me a curveball.</p>
                    <p>
                      Despite doing everything &quot;right,&quot; I experienced a major negative event that made no
                      sense. It forced me to ask the question that changed everything:{" "}
                      <span className="italic font-semibold">
                        “If I’m managing my energy and mindset so perfectly, why is this happening?”
                      </span>
                    </p>
                    <p>
                      That question led me into years of hermiting and deep channeling the Akashic Records. I explored
                      many of my past lives and discovered something I&apos;ve never heard anyone else talk about. While I
                      was “maintaining” my Energy Field, my Soul Blueprint (my &quot;source code&quot;) was still running
                      an old story. I was pouring pure water into a &quot;rusty cup.&quot;
                    </p>
                    <p>
                      Once I learned to resolve the Blueprint itself, the struggle dissolved. My intuition became crystal
                      clear, I stepped fully into my full authentic power and mission.
                    </p>
                    <p className="text-lg sm:text-xl font-semibold text-navy">Now, I’m here to help you do the same.</p>
                    <p className="font-semibold text-navy">
                      My mission is to create a Butterfly Effect: by helping leaders like you unlock your full power, we
                      shift the consciousness of the entire planet together.
                    </p>

                    <div className="pt-4">
                      <p className="text-sm text-charcoal/70">Ken Franceschi</p>
                      <p className="text-sm text-charcoal/70">Founder of Souls Circle</p>
                      <p className="text-sm text-charcoal/70">Speaker, coach &amp; Akashic channel</p>
                    </div>

                    <button
                      onClick={() => setIsStoryExpanded(false)}
                      className="inline-flex items-center mt-2 text-navy font-semibold hover:text-gold transition"
                    >
                      Show less
                      <ChevronRight className="ml-1 h-4 w-4 rotate-90" />
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Challenge */}
      <section id="challenge" className="py-16 md:py-24 bg-navy text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-sage/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="text-center mb-10 md:mb-12">
            <div className="inline-block mb-4 text-gold font-bold text-sm tracking-wider uppercase">
              Free 3-Day Live Challenge
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4 leading-tight" style={{ fontFamily: "Playfair Display" }}>
              Mission Block Clarity
              <br />
              <span className="text-gold">3-Day Challenge</span>
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed font-medium">
              Discover how the unresolved <span className="font-bold text-gold">Soul Blueprint</span> is stopping you
              from completing your mission to your greatest potential.
            </p>
            <p className="text-base md:text-lg text-gold font-semibold mt-4">LIVE with Ken Franceschi</p>
          </div>

          <div className="max-w-4xl mx-auto mb-10 md:mb-12 bg-slate-900/70 rounded-3xl border border-gold/30 shadow-2xl px-6 sm:px-8 md:px-12 py-8 md:py-10 text-center">
            <div className="space-y-5 text-base md:text-lg text-white/90 leading-relaxed">
              <p>
                Through years of deep channeling the Akashic Records, I uncovered the true mechanics of why so many
                Purpose-Driven Souls hit a ceiling in their journey.
              </p>
              <p>
                To step into your highest potential, you must resolve the{" "}
                <span className="font-semibold text-gold">Soul Blueprint</span>—the old &quot;source code&quot; you came
                in with—so you become the vessel that is fully compatible with the impact waiting for you.
              </p>
              <p>
                Over three short, value-packed sessions, we will uncover the &quot;Missing Link&quot; that most teachings
                miss. No fluff. Just my genuine insights from years of channeling and doing this work.
              </p>
              <p>
                This is for the spiritual entrepreneur who is ready to stop wasting time figuring it out on their own.
                Your mission is too important to wait—it’s time to take the next step toward full embodiment.
              </p>
            </div>
          </div>

          <div className="text-center">
            <Button
              size="lg"
              className="w-full sm:w-auto bg-gold hover:bg-gold/90 text-navy px-8 py-6 md:px-12 md:py-8 text-xl md:text-2xl font-bold rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105"
              onClick={() => (window.location.href = externalLinks.challengeRegistration)}
            >
              Join the FREE 3-Day Challenge
              <ArrowRight className="ml-3 w-7 h-7" />
            </Button>
            <p className="text-white/70 mt-6 text-base md:text-lg">Discover the Missing Link - Limited spots available.</p>
          </div>

          {challengeQuotes.length > 0 && (
            <div className="mt-12 md:mt-16">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {challengeQuotes.slice(0, 2).map((t) => (
                  <QuoteCard key={t.id} quote={t.quote} name={t.name} title={t.title} now={t.now} />
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Section 4: Work With Me */}
      <section id="work-with-me" className="py-16 md:py-24 bg-warm-white border-t border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <div className="inline-block mb-3 text-sage font-semibold text-sm tracking-wider uppercase">
              Personalized Support
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-navy mb-4 leading-tight" style={{ fontFamily: "Playfair Display" }}>
              Get Immediate Clarity.
              <br />
              Let&apos;s Pinpoint the Root Cause.
            </h2>
            <p className="text-lg md:text-xl text-charcoal/80">Book a 1:1 Energy Reading &amp; Discovery Call</p>
          </div>

          <div className="bg-white rounded-3xl shadow-2xl border border-slate-200 px-6 sm:px-8 md:px-12 py-8 md:py-10 space-y-6">
            <ul className="space-y-4 text-base md:text-lg text-charcoal leading-relaxed">
              <li className="flex items-start gap-3 min-w-0">
                <span className="mt-1 flex-shrink-0">
                  <ChevronRight className="w-5 h-5 text-sage" />
                </span>
                <span className="min-w-0">
                  <span className="font-semibold">Go straight to the root.</span> I will read your energetic field to
                  pinpoint the specific root cause of your most persistent blocks and the &quot;Source Code&quot;
                  patterns keeping you stuck.
                </span>
              </li>
              <li className="flex items-start gap-3 min-w-0">
                <span className="mt-1 flex-shrink-0">
                  <ChevronRight className="w-5 h-5 text-sage" />
                </span>
                <span className="min-w-0">
                  <span className="font-semibold">Get Clarity.</span> Receive direct, spirit-led guidance on exactly what
                  is holding you back on your unique path, so you stop guessing and know where to focus your energy next.
                </span>
              </li>
              <li className="flex items-start gap-3 min-w-0">
                <span className="mt-1 flex-shrink-0">
                  <ChevronRight className="w-5 h-5 text-sage" />
                </span>
                <span className="min-w-0">
                  <span className="font-semibold">Map the Path Forward.</span> We will assess your readiness for the
                  deeper work. If we are a match, I will map out how my Channeled 3-Step Process can help you resolve
                  these blocks so you can fulfill your mission at the highest level.
                </span>
              </li>
            </ul>

            <div className="text-center pt-2">
              <Button
                size="lg"
                className="w-full sm:w-auto bg-gold hover:bg-gold/90 text-navy px-8 py-6 md:px-10 md:py-7 text-lg md:text-xl font-bold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                onClick={() => {
                  const url =
                    externalLinks.energyReading || externalLinks.oneOnOneMentorship || externalLinks.challengeRegistration;
                  if (url) window.location.href = url;
                }}
              >
                YES, BOOK MY ENERGY READING WITH KEN
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>

            {workWithMeQuotes.length > 0 && (
              <div className="pt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {workWithMeQuotes.slice(0, 2).map((t) => (
                    <QuoteCardLight key={t.id} quote={t.quote} name={t.name} title={t.title} now={t.now} />
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Section 5: 1:1 Offers */}
      <section id="mentorship" className="py-16 md:py-24 bg-warm-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 md:mb-16">
            <div className="inline-block mb-4 text-sage font-semibold text-sm tracking-wider uppercase">
              High-Level Mentorship
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-navy mb-6 leading-tight" style={{ fontFamily: "Playfair Display" }}>
              For Direct Guidance and
              <br />
              High-Level Support
            </h2>
            <p className="text-lg md:text-xl text-charcoal max-w-3xl mx-auto leading-relaxed">
              Ready for deeper, personalized work? I offer targeted 1:1 sessions for clarity, energy clearing, and
              spiritual business mentorship.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 mb-12">
            {oneOnOneServices.map((service) => {
              const IconComponent = iconMap[service.icon];
              return (
                <Card
                  key={service.id}
                  className="bg-white border border-slate-200 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
                >
                  <CardHeader>
                    <div className="w-14 h-14 bg-navy rounded-2xl flex items-center justify-center mb-5 shadow-md">
                      {IconComponent ? <IconComponent className="w-7 h-7 text-white" /> : null}
                    </div>
                    <CardTitle className="text-2xl font-bold text-navy mb-1" style={{ fontFamily: "Playfair Display" }}>
                      {service.title}
                    </CardTitle>
                    {service.subtitle ? <CardDescription className="text-charcoal/70">{service.subtitle}</CardDescription> : null}
                  </CardHeader>
                  <CardContent>
                    <p className="text-charcoal/90 mb-6 leading-relaxed font-medium">{service.description}</p>
                    <div className="space-y-3">
                      {service.benefits.map((benefit, idx) => (
                        <div key={idx} className="flex items-start gap-3 min-w-0">
                          <div className="w-6 h-6 bg-sage rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                            <ChevronRight className="w-3 h-3 text-white" />
                          </div>
                          <span className="text-sm text-charcoal/90 font-medium min-w-0">{benefit}</span>
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
              className="w-full sm:w-auto bg-navy hover:bg-navy/90 text-white px-8 py-6 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              onClick={() => (window.location.href = externalLinks.oneOnOneMentorship)}
            >
              Explore 1:1 Mentorship
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Section 6: Live Events */}
      <section id="events" className="py-16 md:py-24 bg-navy text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 md:mb-16">
            <div className="inline-block mb-4 text-gold font-semibold text-sm tracking-wider uppercase">Live Events</div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 leading-tight text-white" style={{ fontFamily: "Playfair Display" }}>
              Join Us for Live Transformation.
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-white/85 max-w-3xl mx-auto leading-relaxed">
              Whether you need clarity on your blocks, coaching on your mission, or a deep energetic reset—our live events
              are where the shift happens.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-12">
            {upcomingEvents.map((event) => (
              <Card
                key={event.id}
                className="bg-gradient-to-br from-slate-900/60 to-slate-800/60 border border-white/10 shadow-lg hover:shadow-2xl transition-all duration-300 text-white"
              >
                <CardHeader>
                  <div className="flex items-start justify-between mb-3 gap-3">
                    <div className="px-3 py-1 bg-gold/15 text-gold rounded-full text-xs font-semibold">
                      {event.type}
                    </div>
                    <Calendar className="w-5 h-5 text-gold flex-shrink-0" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-white" style={{ fontFamily: "Playfair Display" }}>
                    {event.title}
                  </CardTitle>
                  <CardDescription className="text-white/70">
                    {event.date} &middot; {event.time}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-white/80 leading-relaxed">{event.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button
              size="lg"
              className="w-full sm:w-auto bg-gold hover:bg-gold/90 text-navy px-8 py-6 md:px-10 md:py-7 text-lg md:text-xl font-bold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              onClick={() => (window.location.href = externalLinks.upcomingEvents)}
            >
              Browse Upcoming Events
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>

          {eventsQuotes.length > 0 && (
            <div className="mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-2 gap-6">
              {eventsQuotes.slice(0, 4).map((t) => (
                <QuoteCard key={t.id} quote={t.quote} name={t.name} title={t.title} now={t.now} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Section 7: Community */}
      <section id="community" className="py-14 md:py-20 bg-dark-grey text-white relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1496008889433-9b938d8ac880?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzF8MHwxfHNlYXJjaHwzfHxlbmVyZ3klMjBoZWFsaW5nfGVufDB8fHx8MTc1OTk1ODMyNnww&ixlib=rb-4.1.0&q=85"
            alt="Community"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-dark-grey via-dark-grey/95 to-dark-grey/90" />
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-10 md:gap-14 items-start">
            <div className="min-w-0">
              <div className="inline-block mb-4 text-gold font-bold text-sm tracking-wider uppercase">Join The Family</div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-5 leading-tight" style={{ fontFamily: "Playfair Display" }}>
                Finally,
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-white/90 mb-7 leading-relaxed font-medium">
                A dedicated space for spiritual entrepreneurs, practitioners, and change-makers to connect, collaborate,
                and receive the guidance &amp; energetic support needed to fuel your mission.
              </p>

              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                {[
                  "Live Coaching & Activations: Direct access to Ken for real-time guidance and energetic upgrades.",
                  'The "Light List": Receive weekly channeled light codes & insights to navigate this current energetic shift.',
                  "The Full Archive: Instant on-demand access to every past workshop, activation, and event.",
                  'Your Spiritual Toolkit: A library of practical tools, meditations, and my 21-day "Activate the Power Within" challenge.',
                  "Peer-to-Peer Connection: Connect & collaborate with a network of peers who actually speak your language.",
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3 min-w-0">
                    <div className="w-7 h-7 rounded-full bg-gold/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <ChevronRight className="w-5 h-5 text-gold" />
                    </div>
                    <span className="text-white/90 text-sm md:text-base leading-relaxed min-w-0">{item}</span>
                  </div>
                ))}
              </div>

              <Button
                size="lg"
                className="w-full sm:w-auto bg-gold hover:bg-gold/90 text-navy px-8 py-6 md:px-10 md:py-7 text-base sm:text-lg md:text-xl font-bold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                onClick={() => (window.location.href = externalLinks.soulCircleFamily)}
              >
                JOIN THE FAMILY
                <ArrowRight className="ml-2 w-6 h-6" />
              </Button>
            </div>

            <div className="space-y-5 min-w-0">
              {communityQuotes.slice(0, 2).map((t) => (
                <div key={t.id} className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
                  <p className="text-white/90 italic mb-4 leading-relaxed">&quot;{t.quote}&quot;</p>
                  <div className="min-w-0">
                    <p className="font-semibold text-white">{t.name || "Community Member"}</p>
                    {(t.title || t.now) && (
                      <p className="text-sm text-white/60">
                        {t.title || ""}
                        {t.now ? ` · ${t.now}` : ""}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 8: Insights */}
      <section id="resources" className="py-16 md:py-24 bg-warm-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 md:mb-16">
            <div className="inline-block mb-6 text-sage font-bold text-base tracking-wider uppercase">Insights</div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-navy mb-6 leading-tight" style={{ fontFamily: "Playfair Display" }}>
              Channeled Wisdom
              <br />&amp; Coaching Insights
            </h2>
          </div>

          {/* YouTube Videos */}
          <div>
            <h3 className="text-2xl font-bold text-navy mb-8" style={{ fontFamily: "Playfair Display" }}>
              Latest YouTube Videos
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
              {youtubVideos.map((video) => (
                <Card
                  key={video.id}
                  className="bg-white border-0 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group cursor-pointer overflow-hidden"
                >
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
                    <CardTitle
                      className="text-lg font-bold text-navy group-hover:text-sage transition-colors duration-300"
                      style={{ fontFamily: "Playfair Display" }}
                    >
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
                className="w-full sm:w-auto border-2 border-navy text-navy hover:bg-navy hover:text-white px-8 py-6 md:px-10 md:py-7 text-lg md:text-xl font-bold rounded-full transition-all duration-300"
                onClick={() => (window.location.href = externalLinks.youtube)}
              >
                Watch More on YouTube
              </Button>
            </div>
          </div>

          {/* Articles */}
          <div className="mt-16 md:mt-20">
            <h3 className="text-2xl md:text-3xl font-bold text-navy mb-10" style={{ fontFamily: "Playfair Display" }}>
              Latest Articles
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
              {blogPosts.map((post) => (
                <Card
                  key={post.id}
                  className="bg-white border-0 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group cursor-pointer overflow-hidden"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-navy text-white text-xs font-semibold rounded-full">{post.category}</span>
                    </div>
                  </div>
                  <CardHeader>
                    <CardDescription className="text-charcoal/60 text-sm mb-2">{post.date}</CardDescription>
                    <CardTitle
                      className="text-xl font-bold text-navy group-hover:text-gold transition-colors duration-300"
                      style={{ fontFamily: "Playfair Display" }}
                    >
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
                className="w-full sm:w-auto border-2 border-navy text-navy hover:bg-navy hover:text-white px-8 py-6 md:px-10 md:py-7 text-lg md:text-xl font-bold rounded-full transition-all duration-300"
                onClick={() => (window.location.href = externalLinks.blog)}
              >
                Read More Articles
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Section 9: 7-Day Challenge */}
      <section id="7-day-challenge" className="py-16 md:py-24 bg-white border-t border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10 md:mb-12">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-navy mb-6 leading-tight" style={{ fontFamily: "Playfair Display" }}>
              Experience a Shift Daily. For Free.
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl text-charcoal/80 max-w-4xl mx-auto leading-relaxed font-medium">
              Join the 7-Day &quot;Activate the Power Within&quot; Challenge
            </p>
          </div>

          <div className="max-w-4xl mx-auto bg-warm-white rounded-3xl border border-slate-200 shadow-xl px-6 sm:px-8 md:px-12 py-8 md:py-10">
            <div className="space-y-5 text-base md:text-lg text-charcoal leading-relaxed">
              <p>Your power isn&apos;t something you find; it&apos;s something you embody.</p>
              <p>
                I’ve compiled a series of 7 powerful activation meditations—taken from $111 private sessions—and packaged
                them into a free 7-day inbox experience.
              </p>
            </div>

            <div className="mt-8">
              <p className="font-semibold text-navy text-lg mb-4">🔥 WARNING! May Cause Side Effects of:</p>
              <ul className="space-y-3">
                {["Feeling connected", "Boosted energy", "Feeling powerful", "Increased confidence", "Groundedness and presence"].map(
                  (item) => (
                    <li key={item} className="flex items-start gap-3 min-w-0">
                      <div className="w-6 h-6 bg-sage rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <ChevronRight className="w-3 h-3 text-white" />
                      </div>
                      <span className="text-charcoal/90 min-w-0">{item}</span>
                    </li>
                  )
                )}
              </ul>
            </div>

            <div className="text-center mt-10">
              <Button
                size="lg"
                className="w-full sm:w-auto bg-gold hover:bg-gold/90 text-navy px-8 py-6 md:px-12 md:py-7 text-lg md:text-xl font-bold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                onClick={() => (window.location.href = externalLinks.challengeRegistration)}
              >
                SEND ME DAY 1
                <ArrowRight className="ml-2 w-6 h-6" />
              </Button>
            </div>

            {sevenDayQuotes.length > 0 && (
              <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {sevenDayQuotes.slice(0, 3).map((t) => (
                  <QuoteCardLight key={t.id} quote={t.quote} name={t.name} title={t.title} now={t.now} />
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Section 10: Final CTA */}
      <section className="py-16 md:py-24 bg-navy text-white relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1542157565-4607d82cf417?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzB8MHwxfHNlYXJjaHwzfHxwZWFjZWZ1bCUyMG5hdHVyZXxlbnwwfHx8fDE3NTk5NTgzMzZ8MA&ixlib=rb-4.1.0&q=85"
            alt="Transformation"
            className="w-full h-full object-cover opacity-10"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-navy via-navy/95 to-navy" />
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center relative z-10">
          <h2 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-8 leading-tight" style={{ fontFamily: "Playfair Display" }}>
            Ready to Resolve Your Soul Blueprint
            <br />
            <span className="text-gold">And Embody Your Mission?</span>
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-white/90 mb-10 md:mb-12 leading-relaxed font-medium max-w-4xl mx-auto">
            Join the Mission Block Clarity Challenge and discover the advanced energetic patterns keeping you from your
            highest potential.
          </p>
          <Button
            size="lg"
            className="w-full sm:w-auto bg-gold hover:bg-gold/90 text-navy px-8 py-6 md:px-12 md:py-8 text-xl md:text-2xl font-bold rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105"
            onClick={() => (window.location.href = externalLinks.challengeRegistration)}
          >
            Join the FREE 3-Day Challenge
            <ArrowRight className="ml-3 w-7 h-7" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-dark-grey text-white py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="text-center">
            <h4 className="font-bold text-2xl mb-3" style={{ fontFamily: "Playfair Display" }}>
              Stay Connected
            </h4>
            <p className="text-white/70 text-sm mb-6">Get weekly insights and channeled guidance:</p>

            <div className="flex flex-col sm:flex-row items-center gap-3 justify-center">
              <input
                type="email"
                placeholder="Your email"
                className="w-full sm:w-[360px] max-w-full px-4 py-3 rounded-full bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-gold transition-colors duration-300"
              />
              <Button className="w-full sm:w-auto bg-gold hover:bg-gold/90 text-navy rounded-full font-semibold px-8 py-3">
                Subscribe
              </Button>
            </div>

            <div className="mt-8 flex items-center justify-center gap-4">
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
                    {IconComponent ? <IconComponent className="w-5 h-5" /> : null}
                  </a>
                );
              })}
            </div>

            <div className="border-t border-white/10 mt-10 pt-6 text-white/60 text-sm">
              <p>&copy; {new Date().getFullYear()} Souls Circle. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
