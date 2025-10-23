import React, { useEffect, useState } from "react";

const navLinks = [
  { label: "Home", target: "hero" },
  { label: "About", target: "about" },
  { label: "Videos", target: "video" },
  { label: "Contact", target: "contact" },
  { label: "Transformation", target: "transformation" },
];

const heroHighlights = [
  "Individuals and couples ages 11 through senior adults",
  "Consultations for parents of children ages 3–10 (anxiety, depression, IEPs, 504 plans)",
];

const videoLibrary = [
  {
    title: "Understanding Attachment Theory",
    duration: "8:45",
    category: "Foundational",
  },
  {
    title: "Cognitive Behavioral Approaches",
    duration: "10:20",
    category: "Therapeutic Models",
  },
  {
    title: "Psychodynamic Perspectives",
    duration: "9:15",
    category: "Therapeutic Models",
  },
  {
    title: "Family Systems Theory",
    duration: "7:30",
    category: "Foundational",
  },
  {
    title: "Trauma-Informed Care Principles",
    duration: "11:05",
    category: "Clinical Practice",
  },
  {
    title: "Developmental Psychology Across Lifespan",
    duration: "12:40",
    category: "Foundational",
  },
  {
    title: "Neuroplasticity and Change",
    duration: "8:55",
    category: "Clinical Practice",
  },
  {
    title: "Emotion Regulation Theories",
    duration: "9:30",
    category: "Clinical Practice",
  },
  {
    title: "Social Cognitive Theory",
    duration: "7:45",
    category: "Therapeutic Models",
  },
  {
    title: "Mindfulness-Based Interventions",
    duration: "10:15",
    category: "Therapeutic Models",
  },
];

const videosPerPage = 3;

const transformationBefore = [
  "Struggling with anxiety, depression, or relationship challenges without clear direction.",
  "Feeling disconnected from yourself and unsure how to process difficult emotions.",
  "Navigating life transitions, identity questions, or family dynamics alone.",
];

const transformationAfter = [
  "Developing practical coping strategies and deeper self-awareness through evidence-based therapy.",
  "Building healthier relationships and communication patterns with support and guidance.",
  "Working collaboratively with a therapist who provides clinical expertise and compassionate care.",
];

const contactInfo = {
  phone: "(708) 261-3028",
  email: "mtamillowtherapycom@gmail.com",
  address: "15 Salt Creek, Suite 401, Hinsdale, IL 60521",
  vitaeUrl:
    "https://mtamillowtherapy.com/wp-content/uploads/2024/12/2025-Curriculum-VITAE.pdf",
  linkedin: "https://www.linkedin.com/in/maureen-tamillow-0ba45738",
};

const socialLinks = [
  { name: "LinkedIn", icon: "in", href: contactInfo.linkedin },
  { name: "Email", icon: "✉️", href: `mailto:${contactInfo.email}` },
  {
    name: "Phone",
    icon: "📞",
    href: `tel:${contactInfo.phone.replace(/[^0-9]/g, "")}`,
  },
];

const MenuIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    className="h-5 w-5"
  >
    <line x1="4" y1="6" x2="20" y2="6" strokeLinecap="round" />
    <line x1="4" y1="12" x2="20" y2="12" strokeLinecap="round" />
    <line x1="4" y1="18" x2="20" y2="18" strokeLinecap="round" />
  </svg>
);

const BookmarkIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    className="h-5 w-5"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z"
    />
  </svg>
);

const LinkIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    className="h-5 w-5"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244"
    />
  </svg>
);

const ShareIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    className="h-5 w-5"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z"
    />
  </svg>
);

export default function App() {
  const [showShare, setShowShare] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [videoPage, setVideoPage] = useState(0);

  useEffect(() => {
    const sectionIds = ["hero", "about", "video", "contact", "transformation"];

    const handleScroll = () => {
      const midpoint = window.scrollY + window.innerHeight / 3;
      let currentId = sectionIds[0];
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (!el) continue;
        const top = el.offsetTop;
        const height = el.offsetHeight;
        if (midpoint >= top && midpoint < top + height) {
          currentId = id;
          break;
        }
      }
      setActiveSection(currentId);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (target) => {
    setShowShare(false);
    setShowMenu(false);
    const element = document.getElementById(target);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleShare = async () => {
    const shareData = {
      title: "Maureen Tamillow Therapy",
      text: "The therapy and coaching you need to feel like yourself again.",
      url: window.location.href,
    };

    try {
      if (navigator.share) {
        await navigator.share(shareData);
      } else {
        // Fallback for desktop - copy to clipboard
        await navigator.clipboard.writeText(window.location.href);
        alert("Link copied to clipboard!");
      }
    } catch (err) {
      if (err.name !== "AbortError") {
        console.error("Error sharing:", err);
      }
    }
  };

  const handleBookmark = () => {
    if (window.sidebar && window.sidebar.addPanel) {
      // Firefox
      window.sidebar.addPanel(
        "Maureen Tamillow Therapy",
        window.location.href,
        ""
      );
    } else if (window.external && "AddFavorite" in window.external) {
      // IE
      window.external.AddFavorite(
        window.location.href,
        "Maureen Tamillow Therapy"
      );
    } else {
      // Modern browsers - show instruction
      alert(
        "To bookmark this page:\n\n" +
          "• Press Ctrl+D (Windows/Linux) or Cmd+D (Mac)\n" +
          "• Or use your browser's bookmark button"
      );
    }
  };

  const totalVideoPages = Math.ceil(videoLibrary.length / videosPerPage);
  const currentVideos = videoLibrary.slice(
    videoPage * videosPerPage,
    videoPage * videosPerPage + videosPerPage
  );

  const handleVideoNav = (direction) => {
    setVideoPage((prev) => {
      if (direction === "next") {
        return (prev + 1) % totalVideoPages;
      }
      return (prev - 1 + totalVideoPages) % totalVideoPages;
    });
  };

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100">
      <div className="mx-auto flex max-w-6xl flex-col gap-20 px-6 pb-32 pt-16 sm:px-8 lg:px-10">
        <header
          id="hero"
          className="rounded-3xl border border-blue-500/40 bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900/30 p-8 shadow-[0_30px_80px_rgba(15,76,129,0.35)] backdrop-blur"
        >
          <div className="flex flex-col gap-10 lg:flex-row">
            <div className="flex-1 space-y-6">
              <span className="inline-flex items-center gap-2 rounded-full border border-blue-500/40 bg-blue-500/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-blue-200">
                Growth. Healing. Momentum.
              </span>
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
                The therapy and coaching you need to feel like yourself again.
              </h1>
              <p className="text-lg text-slate-300">
                It is hard enough to move through life feeling alone with your
                worries. Maureen Tamillow, LCPC, walks alongside you so you gain
                clarity, confidence, and sustainable change.
              </p>
              <ul className="grid gap-2 text-sm text-blue-100/90 sm:text-base">
                {heroHighlights.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-1 h-2 w-2 rounded-full bg-orange-400"></span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-3 pt-2 text-sm text-blue-100/80">
                <button
                  onClick={() => scrollToSection("contact")}
                  className="rounded-full bg-gradient-to-r from-blue-500 via-orange-500 to-pink-500 px-6 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-white shadow-[0_18px_38px_rgba(59,130,246,0.45)] transition-transform hover:scale-105"
                >
                  Schedule a Discovery Call
                </button>
                <a
                  href={contactInfo.vitaeUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-blue-400/60 px-6 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-blue-200 transition hover:border-orange-400/70 hover:text-orange-200"
                >
                  View Curriculum Vitae
                </a>
              </div>
            </div>
            <div className="lg:w-72">
              <div className="overflow-hidden rounded-[32px] border border-orange-400/30 bg-gradient-to-br from-orange-500/20 via-pink-500/10 to-blue-500/20 shadow-[0_25px_50px_rgba(249,115,22,0.35)]">
                <img
                  src="/images/maureen.webp"
                  alt="Maureen Tamillow with an orange background"
                  className="h-full w-full object-cover"
                />
              </div>
              <p className="mt-4 text-sm text-slate-400">
                “Therapy is a partnership. You deserve a guide who holds hope,
                offers structure, and celebrates your wins.”
              </p>
            </div>
          </div>
        </header>

        <section
          id="about"
          className="rounded-3xl border border-blue-500/30 bg-slate-900/80 p-8 shadow-[0_18px_60px_rgba(15,76,129,0.35)] backdrop-blur"
        >
          <div className="grid gap-8 md:grid-cols-[1.2fr_0.8fr] md:items-start">
            <div className="space-y-5">
              <h2 className="text-3xl font-bold text-white sm:text-4xl">
                Meet Maureen Tamillow, LCPC
              </h2>
              <p className="text-slate-300">
                Maureen is dedicated to growth and healing across a wide range
                of emotional and behavioral concerns. Her exacting approach
                addresses developmental crises, psychodynamic counseling,
                parental support, couples work, and identity formation.
              </p>
              <p className="text-slate-300">
                With more than three decades of experience, Maureen has
                witnessed how chronic health conditions intersect with mental
                wellness. Practicum work at the Rehabilitation Institute of
                Chicago and school-based collaborations inform her mind-body
                perspective and the practical way she equips families to thrive.
              </p>
              <a
                href={contactInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold text-blue-300 transition hover:text-orange-300"
              >
                Connect on LinkedIn
                <span aria-hidden>→</span>
              </a>
            </div>
            <div className="space-y-4 rounded-2xl border border-orange-400/20 bg-orange-500/10 p-6 text-sm text-orange-100/90">
              <h3 className="text-base font-semibold uppercase tracking-[0.25em] text-orange-200">
                What Clients Notice
              </h3>
              <p>“Maureen goes beyond a typical therapy session.”</p>
              <p>
                “She blends clinical expertise with creative problem-solving.”
              </p>
              <p>
                “She remembers the details, advocates fiercely, and makes sure
                next steps are clear.”
              </p>
            </div>
          </div>
        </section>

        <section
          id="video"
          className="rounded-3xl border border-blue-500/30 bg-gradient-to-br from-slate-900 via-blue-900/20 to-indigo-900/30 p-8 shadow-[0_20px_60px_rgba(15,76,129,0.35)]"
        >
          <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="text-3xl font-bold text-white sm:text-4xl">
                Theory of Mental Health
              </h2>
              <p className="mt-3 max-w-3xl text-slate-300">
                Explore the foundational theories and evidence-based approaches
                that inform therapeutic practice. These educational resources
                provide insight into the clinical frameworks used in counseling
                and psychology.
              </p>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => handleVideoNav("prev")}
                className="rounded-full border border-blue-500/40 px-3 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-blue-200 transition hover:border-orange-400/70 hover:text-orange-200"
                aria-label="Previous videos"
              >
                ←
              </button>
              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-blue-200/70">
                {videoPage + 1} / {totalVideoPages}
              </span>
              <button
                onClick={() => handleVideoNav("next")}
                className="rounded-full border border-blue-500/40 px-3 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-blue-200 transition hover:border-orange-400/70 hover:text-orange-200"
                aria-label="Next videos"
              >
                →
              </button>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {currentVideos.map((video) => (
              <div
                key={video.title}
                className="group rounded-2xl border border-blue-500/30 bg-slate-900/70 p-6 transition hover:border-orange-500/40 hover:shadow-[0_20px_45px_rgba(249,115,22,0.25)]"
              >
                <div className="mb-4 flex items-center justify-between text-xs font-semibold uppercase tracking-[0.3em] text-blue-200/70">
                  <span>{video.category}</span>
                  <span>{video.duration}</span>
                </div>
                <h3 className="text-lg font-semibold text-white group-hover:text-orange-200">
                  {video.title}
                </h3>
                <div className="mt-6 flex h-36 items-center justify-center rounded-xl border border-blue-500/20 bg-gradient-to-br from-blue-900/30 to-orange-900/30">
                  <div className="text-center text-3xl text-blue-200/80 group-hover:text-orange-300">
                    ▶
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section
          id="contact"
          className="rounded-3xl border border-blue-500/30 bg-gradient-to-br from-slate-900 via-blue-900/10 to-slate-900 p-6 sm:p-8 shadow-[0_18px_60px_rgba(59,130,246,0.3)]"
        >
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-white sm:text-3xl md:text-4xl">
              Start your growth today
            </h2>
            <p className="text-slate-300">
              There is a time to grow and change. Maureen will be with you every
              step of the way, helping you or your loved one feel brand new.
            </p>
            <div className="space-y-3 text-sm text-blue-100/85">
              <div className="flex items-center gap-3 rounded-xl border border-blue-500/30 bg-slate-900/70 px-4 py-3">
                <span className="text-lg">📞</span>
                <a
                  href={`tel:${contactInfo.phone.replace(/[^0-9]/g, "")}`}
                  className="font-semibold text-blue-200/90 transition hover:text-orange-200"
                >
                  {contactInfo.phone}
                </a>
              </div>
              <div className="flex items-center gap-3 rounded-xl border border-blue-500/30 bg-slate-900/70 px-4 py-3">
                <span className="text-lg">✉️</span>
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="font-semibold text-blue-200/90 transition hover:text-orange-200 break-all"
                >
                  {contactInfo.email}
                </a>
              </div>
              <div className="flex items-center gap-3 rounded-xl border border-blue-500/30 bg-slate-900/70 px-4 py-3">
                <span className="text-lg">📍</span>
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                    contactInfo.address
                  )}`}
                  target="_blank"
                  rel="noreferrer"
                  className="font-semibold text-blue-200/90 transition hover:text-orange-200"
                >
                  {contactInfo.address}
                </a>
              </div>
            </div>
          </div>
        </section>

        <section
          id="transformation"
          className="rounded-3xl border border-blue-500/40 bg-slate-900/85 p-8 shadow-[0_18px_60px_rgba(249,115,22,0.25)]"
        >
          <div className="mb-8 max-w-3xl space-y-3">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              Your journey with therapy
            </h2>
            <p className="text-slate-300">
              Professional counseling provides a structured path toward healing
              and growth. Here's how therapy with Maureen can support your
              mental health journey.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-slate-700 bg-slate-800/70 p-6">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-yellow-400 text-3xl">
                  😞
                </div>
                <div>
                  <h3 className="text-lg font-semibold uppercase tracking-[0.3em] text-slate-200">
                    Before
                  </h3>
                  <p className="text-xs uppercase tracking-[0.3em] text-slate-400">
                    How it feels walking in
                  </p>
                </div>
              </div>
              <ul className="space-y-3 text-sm text-slate-300">
                {transformationBefore.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-1 text-orange-400">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-blue-500/40 bg-gradient-to-br from-blue-500/20 via-blue-500/10 to-slate-900 p-6 shadow-[0_0_35px_rgba(59,130,246,0.35)]">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-yellow-400 text-3xl">
                  😊
                </div>
                <div>
                  <h3 className="text-lg font-semibold uppercase tracking-[0.3em] text-white">
                    After
                  </h3>
                  <p className="text-xs uppercase tracking-[0.3em] text-blue-100/70">
                    What clients experience
                  </p>
                </div>
              </div>
              <ul className="space-y-3 text-sm text-blue-100/85">
                {transformationAfter.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-1 text-blue-300">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </div>

      <nav className="pointer-events-none fixed bottom-3 left-1/2 z-50 flex w-full max-w-md -translate-x-1/2 justify-center px-3 md:max-w-5xl md:bottom-[18px] md:px-4">
        <div className="pointer-events-auto w-full md:w-auto">
          {/* Navigation Menu - shows when menu button is clicked */}
          {showMenu && (
            <div className="mb-3 rounded-[32px] border border-orange-400/30 bg-gradient-to-br from-blue-500/30 via-pink-500/30 to-orange-500/30 p-4 shadow-[0_20px_60px_rgba(249,115,22,0.4)] backdrop-blur-xl">
              <div className="grid grid-cols-2 gap-2 md:grid-cols-3">
                {navLinks.map(({ label, target }) => {
                  const isActive = activeSection === target;
                  return (
                    <button
                      key={label}
                      onClick={() => scrollToSection(target)}
                      className={`rounded-2xl border-2 px-4 py-3 text-[11px] font-bold uppercase tracking-[0.2em] transition-all duration-200 md:text-[10px] ${
                        isActive
                          ? "border-white/80 bg-white/20 text-white shadow-[0_0_20px_rgba(255,255,255,0.3)]"
                          : "border-white/30 bg-white/5 text-white/80 hover:border-white/50 hover:bg-white/10"
                      }`}
                    >
                      {label}
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* Main Navigation Bar */}
          <div className="rounded-[32px] border border-orange-400/30 bg-gradient-to-br from-blue-500/30 via-pink-500/30 to-orange-500/30 p-4 shadow-[0_20px_60px_rgba(249,115,22,0.4)] backdrop-blur-xl md:rounded-full">
            {/* Mobile Layout */}
            <div className="flex items-center justify-between gap-3 md:hidden">
              {/* Center - Menu Button */}
              <button
                onClick={() => setShowMenu((prev) => !prev)}
                className="flex h-14 w-14 items-center justify-center rounded-[20px] border-2 border-white/20 bg-white/5 text-white transition-all hover:border-white/40 hover:bg-white/10"
                aria-label="Toggle menu"
              >
                <MenuIcon />
              </button>

              {/* Right Side - Bookmark, Share & Phone Buttons */}
              <div className="flex items-center gap-3">
                <button
                  onClick={handleBookmark}
                  className="flex h-14 w-14 items-center justify-center rounded-[20px] bg-gradient-to-br from-purple-500 to-indigo-600 text-white shadow-[0_10px_30px_rgba(139,92,246,0.5)] transition-transform hover:scale-105"
                  aria-label="Bookmark this page"
                >
                  <BookmarkIcon />
                </button>
                <button
                  onClick={handleShare}
                  className="flex h-14 w-14 items-center justify-center rounded-[20px] bg-gradient-to-br from-blue-500 to-purple-600 text-white shadow-[0_10px_30px_rgba(59,130,246,0.5)] transition-transform hover:scale-105"
                  aria-label="Share this page"
                >
                  <ShareIcon />
                </button>
                <a
                  href={`tel:${contactInfo.phone.replace(/[^0-9]/g, "")}`}
                  className="flex h-14 w-14 items-center justify-center rounded-[20px] bg-gradient-to-br from-orange-500 to-pink-600 text-white shadow-[0_10px_30px_rgba(236,72,153,0.5)] transition-transform hover:scale-105"
                  aria-label="Call Maureen"
                >
                  <span className="text-xl">📞</span>
                </a>
              </div>
            </div>

            {/* Desktop Layout */}
            <div className="hidden items-center justify-between gap-4 md:flex">
              {/* Left - Logo */}
              <div className="flex items-center gap-2 rounded-2xl bg-white/10 px-4 py-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-black/70 text-base font-bold tracking-[0.2em] text-white shadow-[0_4px_12px_rgba(59,130,246,0.35)]">
                  MT
                </div>
                <span className="text-[11px] font-semibold uppercase tracking-[0.3em] text-white">
                  Tamillow
                </span>
              </div>

              {/* Center - Navigation Buttons */}
              <div className="flex items-center gap-2">
                {navLinks.map(({ label, target }) => {
                  const isActive = activeSection === target;
                  return (
                    <button
                      key={label}
                      onClick={() => scrollToSection(target)}
                      className={`rounded-2xl border-2 px-5 py-2.5 text-[10px] font-bold uppercase tracking-[0.2em] transition-all duration-200 ${
                        isActive
                          ? "border-white/80 bg-white/20 text-white shadow-[0_0_20px_rgba(255,255,255,0.3)]"
                          : "border-white/30 bg-white/5 text-white/80 hover:border-white/50 hover:bg-white/10"
                      }`}
                    >
                      {label}
                    </button>
                  );
                })}
              </div>

              {/* Right - Share & Phone Buttons */}
              <div className="flex items-center gap-2">
                <button
                  onClick={handleShare}
                  className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-400 to-pink-500 text-white shadow-[0_10px_30px_rgba(249,115,22,0.5)] transition-transform hover:scale-105"
                  aria-label="Share this page"
                >
                  <ShareIcon />
                </button>
                <a
                  href={`tel:${contactInfo.phone.replace(/[^0-9]/g, "")}`}
                  className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-500 to-pink-600 text-white shadow-[0_10px_30px_rgba(236,72,153,0.5)] transition-transform hover:scale-105"
                  aria-label="Call Maureen"
                >
                  <span className="text-xl">📞</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
