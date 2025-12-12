import React from "react";

const HeroSection = () => {
  // 🔧 CONFIG:
  // If you want to use VIDEO, put the file in `public/media/hero-loop.mp4`
  // and set `useVideo = true`. If you just want an image, set `useVideo = false`
  // and use `heroImageSrc` instead.
  const useVideo = false; // change to true when you have the video file ready

  const heroVideoSrc = "/media/hero-loop.mp4"; // update path if needed
  const heroImageSrc = "/images/hero-main.jpg"; // put your chosen hero image here

  return (
    <section className="relative h-[80vh] min-h-[520px] overflow-hidden">
      {/* Background: video or image */}
      {useVideo ? (
        <video
          className="absolute inset-0 h-full w-full object-cover"
          src={heroVideoSrc}
          autoPlay
          muted
          loop
          playsInline
        />
      ) : (
        <img
          src={heroImageSrc}
          alt="SoulCircle energy session"
          className="absolute inset-0 h-full w-full object-cover"
        />
      )}

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/55" />

      {/* Content */}
      <div className="relative z-10 flex h-full items-center">
        <div className="mx-auto flex w-full max-w-5xl flex-col gap-6 px-6 text-left text-slate-50 md:gap-8">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-amber-300">
            SoulCircle
          </p>

          <h1 className="max-w-2xl text-3xl font-semibold leading-tight md:text-5xl">
            Energy healing, guidance, and community for your spiritual journey.
          </h1>

          <p className="max-w-xl text-sm leading-relaxed text-slate-200 md:text-base">
            Release old patterns, reconnect with your essence, and step into a
            more grounded, heart-led life — with live events, personalized
            support, and a growing global community.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <a
              href="#work-with-me"
              className="inline-flex items-center rounded-full bg-amber-400 px-6 py-3 text-sm font-semibold text-slate-900 shadow-md transition hover:bg-amber-300"
            >
              Work with Ken
            </a>

            <a
              href="#community"
              className="inline-flex items-center rounded-full border border-slate-300/70 px-6 py-3 text-sm font-semibold text-slate-50/90 hover:border-amber-300 hover:text-amber-200 transition"
            >
              Explore the community
            </a>
          </div>

          {/* 250+ community stat (text style, not a button) */}
          <div className="mt-4 flex flex-wrap items-center gap-3 text-sm text-slate-200">
            <div className="flex -space-x-2">
              {/* Placeholder avatars now – replace with real community photos later */}
              <img
                src="/images/avatar-1.jpg"
                alt=""
                className="h-8 w-8 rounded-full border border-slate-900/70 object-cover"
              />
              <img
                src="/images/avatar-2.jpg"
                alt=""
                className="h-8 w-8 rounded-full border border-slate-900/70 object-cover"
              />
              <img
                src="/images/avatar-3.jpg"
                alt=""
                className="h-8 w-8 rounded-full border border-slate-900/70 object-cover"
              />
            </div>
            <p>
              <span className="font-semibold">250+ </span>
              people in the SoulCircle community (and growing)
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
