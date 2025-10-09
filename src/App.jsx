import React, { useState } from "react";

const navButton =
  "px-4 py-2 text-xs font-medium uppercase tracking-[0.25em] text-blue-300 transition hover:text-orange-400";

const iconButton =
  "flex h-9 w-9 items-center justify-center text-blue-300 transition hover:text-orange-400";

const videoContent = [
  {
    title: "Anxiety Override Protocol",
    duration: "6:12",
    category: "Stress Management",
  },
  {
    title: "Burnout To Breakthrough",
    duration: "8:40",
    category: "Leadership",
  },
  { title: "Teen Reset Rituals", duration: "5:03", category: "Youth" },
  {
    title: "Boardroom Breathing Stack",
    duration: "4:48",
    category: "Leadership",
  },
  {
    title: "Somatic Confidence Drill",
    duration: "7:32",
    category: "Personal Growth",
  },
  {
    title: "Creative Recovery Sprints",
    duration: "9:21",
    category: "Creativity",
  },
  { title: "Micro-Rituals For Parents", duration: "6:55", category: "Family" },
  {
    title: "Momentum Morning Flow",
    duration: "5:44",
    category: "Daily Practices",
  },
  {
    title: "Nervous System Reset",
    duration: "8:15",
    category: "Stress Management",
  },
  { title: "Power Pause Technique", duration: "4:22", category: "Quick Tools" },
];

const podcastEpisodes = [
  {
    title: "Episode 42 - Reimagining Self-Care As Self-Celebration",
    guest: "Featured",
    duration: "45:12",
  },
  {
    title: "Episode 41 - Dr. Lena Carr on Somatic Strategies",
    guest: "Interview",
    duration: "52:30",
  },
  {
    title: "Episode 40 - Priya Patel on Teen Leadership",
    guest: "Interview",
    duration: "48:15",
  },
  {
    title: "Episode 39 - Creative Wellness Architecture",
    guest: "Interview",
    duration: "51:45",
  },
  {
    title: "Episode 38 - Breaking the Burnout Cycle",
    guest: "Solo",
    duration: "38:20",
  },
  {
    title: "Episode 37 - Family Communication Protocols",
    guest: "Interview",
    duration: "49:10",
  },
  {
    title: "Episode 36 - The Science of Calm",
    guest: "Solo",
    duration: "42:30",
  },
  {
    title: "Episode 35 - Cultural Transformation in Teams",
    guest: "Interview",
    duration: "55:18",
  },
];

const sections = [
  {
    id: "meet-maureen",
    eyebrow: "01",
    title: "Meet Maureen",
    description:
      "Maureen Tamillow, LCSW, coaches high-achieving women and teens who are done with burnout masquerading as success. She blends razor-sharp clinical chops with the fearless energy of a creative director.",
    featured: (
      <div className="grid gap-4 text-sm sm:grid-cols-3">
        {[
          "15+ years translating neuroscience into daily rituals",
          "Certified in EMDR, CBT, and experiential family systems",
          "Sessions fueled by humor, movement, and mission resets",
        ].map((item) => (
          <div
            key={item}
            className="rounded-lg border-l-4 border-orange-500 bg-gradient-to-br from-orange-500/10 to-blue-500/10 px-5 py-5 backdrop-blur-sm"
          >
            <p className="text-slate-300">{item}</p>
          </div>
        ))}
      </div>
    ),
  },
  {
    id: "approach",
    eyebrow: "02",
    title: "Methodology",
    description:
      "Care plans fuse biometric awareness, nervous system recalibration, and creative experimentation. Every move is intentional, trackable, and tailored to your ambition.",
    featured: (
      <ul className="space-y-4 text-sm">
        {[
          {
            label: "Control Room Mapping",
            detail:
              "Audits the thoughts, triggers, and rituals driving your current operating system.",
          },
          {
            label: "Somatic Sprints",
            detail:
              "Micro-practices that discharge stress and rebuild baseline calm in minutes.",
          },
          {
            label: "Impact Loops",
            detail:
              "Weekly experiments that compound wins without draining your energy reserves.",
          },
        ].map(({ label, detail }) => (
          <li
            key={label}
            className="flex items-start gap-4 rounded-lg border-l-4 border-blue-500 bg-gradient-to-br from-blue-500/10 to-orange-500/10 px-6 py-5 backdrop-blur-sm"
          >
            <span className="mt-0.5 text-2xl font-bold text-orange-500">+</span>
            <div>
              <p className="font-semibold text-blue-400">{label}</p>
              <p className="mt-1 text-slate-300">{detail}</p>
            </div>
          </li>
        ))}
      </ul>
    ),
  },
  {
    id: "services",
    eyebrow: "03",
    title: "Services",
    description:
      "Whether you thrive solo, with your crew, or in the boardroom, Maureen engineers immersive containers that deliver clarity fast.",
    featured: (
      <div className="grid gap-4 sm:grid-cols-2">
        {[
          {
            label: "Vanguard 1:1",
            detail:
              "High-voltage virtual intensives pairing live therapy with tactical playbooks.",
            color: "from-blue-500/20 to-orange-500/20 border-blue-500",
          },
          {
            label: "Teen Riot Lab",
            detail:
              "Creative resilience coaching that swaps burnout for bravery.",
            color: "from-orange-500/20 to-blue-500/20 border-orange-500",
          },
          {
            label: "Family Reset Ops",
            detail:
              "Half-day immersion that rebuilds communication protocols and trust.",
            color: "from-blue-600/20 to-orange-600/20 border-blue-600",
          },
          {
            label: "Culture Recharge",
            detail:
              "Workplace labs to electrify team morale and mental fitness.",
            color: "from-orange-600/20 to-blue-600/20 border-orange-600",
          },
        ].map(({ label, detail, color }) => (
          <div
            key={label}
            className={`rounded-lg border-l-4 bg-gradient-to-br ${color} px-6 py-6 backdrop-blur-sm transition hover:scale-[1.02]`}
          >
            <p className="font-bold text-white">{label}</p>
            <p className="mt-2 text-sm text-slate-300">{detail}</p>
          </div>
        ))}
      </div>
    ),
  },
];

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
      d="M6.75 3.75h10.5a.75.75 0 0 1 .75.75v15l-6-3.75-6 3.75v-15a.75.75 0 0 1 .75-.75Z"
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

const HomeIcon = () => (
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
      d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
    />
  </svg>
);

export default function App() {
  const [showSocial, setShowSocial] = useState(false);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [currentPodcastIndex, setCurrentPodcastIndex] = useState(0);
  const [activeSection, setActiveSection] = useState("");

  // Track active section on scroll
  React.useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "meet-maureen",
        "approach",
        "services",
        "video",
        "podcast",
      ];
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check initial position
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const socialLinks = [
    { name: "Twitter", url: "#", icon: "𝕏" },
    { name: "LinkedIn", url: "#", icon: "in" },
    { name: "Instagram", url: "#", icon: "📷" },
    { name: "Facebook", url: "#", icon: "f" },
  ];

  const itemsPerPage = 3;

  const nextVideo = () => {
    setCurrentVideoIndex((prev) =>
      prev + itemsPerPage >= videoContent.length ? 0 : prev + itemsPerPage
    );
  };

  const prevVideo = () => {
    setCurrentVideoIndex((prev) =>
      prev - itemsPerPage < 0
        ? Math.floor((videoContent.length - 1) / itemsPerPage) * itemsPerPage
        : prev - itemsPerPage
    );
  };

  const nextPodcast = () => {
    setCurrentPodcastIndex((prev) =>
      prev + itemsPerPage >= podcastEpisodes.length ? 0 : prev + itemsPerPage
    );
  };

  const prevPodcast = () => {
    setCurrentPodcastIndex((prev) =>
      prev - itemsPerPage < 0
        ? Math.floor((podcastEpisodes.length - 1) / itemsPerPage) * itemsPerPage
        : prev - itemsPerPage
    );
  };

  const currentVideos = videoContent.slice(
    currentVideoIndex,
    currentVideoIndex + itemsPerPage
  );
  const currentPodcasts = podcastEpisodes.slice(
    currentPodcastIndex,
    currentPodcastIndex + itemsPerPage
  );
  return (
    <div className="min-h-screen bg-slate-800 text-white">
      <div className="mx-auto flex min-h-screen max-w-7xl flex-col gap-16 px-6 pb-20 pt-8 sm:px-8 lg:px-12">
        <main className="flex flex-col gap-20">
          {sections.map(({ id, eyebrow, title, description, featured }) => (
            <section
              key={id}
              id={id}
              className="rounded-lg border-2 border-gradient-to-r from-blue-500 via-orange-500 to-blue-500 border-opacity-50 bg-black/60 p-6 backdrop-blur shadow-[0_0_50px_rgba(249,115,22,0.15)]"
            >
              <div className="mb-4 flex items-baseline gap-4">
                <span className="text-xs font-bold text-orange-500">
                  {eyebrow}
                </span>
                <div className="h-px flex-1 bg-gradient-to-r from-blue-500 via-orange-500 to-blue-500 opacity-40"></div>
              </div>
              <div className="mb-4 max-w-3xl">
                <h2 className="mb-3 bg-gradient-to-r from-blue-400 via-orange-400 to-blue-400 bg-clip-text text-3xl font-bold tracking-tight text-transparent sm:text-4xl">
                  {title}
                </h2>
                <p className="text-base text-slate-300">{description}</p>
              </div>
              <div className="mt-6">{featured}</div>
            </section>
          ))}

          {/* Visual Separator */}
          <div className="flex items-center justify-center gap-4 py-8">
            <div className="h-px w-full max-w-xs bg-gradient-to-r from-transparent via-orange-500 to-transparent opacity-50"></div>
            <div className="flex gap-2">
              <div className="h-2 w-2 rounded-full bg-blue-500"></div>
              <div className="h-2 w-2 rounded-full bg-orange-500"></div>
              <div className="h-2 w-2 rounded-full bg-blue-500"></div>
            </div>
            <div className="h-px w-full max-w-xs bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-50"></div>
          </div>

          {/* Video Section with 3-Column Layout */}
          <section
            id="video"
            className="rounded-lg border-2 border-blue-500 bg-black/70 p-6 backdrop-blur shadow-[0_0_60px_rgba(59,130,246,0.3)]"
          >
            <div className="mb-4 flex items-baseline gap-4">
              <span className="text-xs font-bold text-blue-500">VIDEO</span>
              <div className="h-px flex-1 bg-gradient-to-r from-blue-500 to-transparent opacity-50"></div>
            </div>
            <div className="mb-6 flex items-end justify-between">
              <div>
                <h2 className="mb-2 bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-3xl font-bold tracking-tight text-transparent sm:text-4xl">
                  Video Library
                </h2>
                <p className="text-sm text-slate-400">
                  {videoContent.length} tactical videos • Stream on demand
                </p>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={prevVideo}
                  className="rounded bg-blue-500/20 px-3 py-1.5 text-xs font-bold text-blue-400 transition hover:bg-blue-500/30"
                >
                  ←
                </button>
                <span className="text-slate-500 text-xs">
                  {Math.floor(currentVideoIndex / itemsPerPage) + 1} /{" "}
                  {Math.ceil(videoContent.length / itemsPerPage)}
                </span>
                <button
                  onClick={nextVideo}
                  className="rounded bg-orange-500/20 px-3 py-1.5 text-xs font-bold text-orange-400 transition hover:bg-orange-500/30"
                >
                  →
                </button>
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              {currentVideos.map((video) => (
                <div
                  key={video.title}
                  className="group rounded-lg border border-blue-500/30 bg-gradient-to-br from-blue-500/5 to-transparent p-4 transition hover:border-blue-500/50 hover:from-blue-500/10"
                >
                  <div className="mb-3">
                    <div className="mb-2 inline-block rounded bg-blue-500/20 px-2 py-0.5 text-xs font-medium text-blue-400">
                      {video.category}
                    </div>
                    <h3 className="text-lg font-bold text-white group-hover:text-blue-300">
                      {video.title}
                    </h3>
                    <p className="mt-1 text-xs text-orange-400">
                      {video.duration}
                    </p>
                  </div>

                  <div className="aspect-video bg-gradient-to-br from-blue-900/30 to-orange-900/30 rounded border border-blue-500/20 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-3xl mb-1">▶</div>
                      <p className="text-slate-600 text-xs">Play</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Visual Separator */}
          <div className="flex items-center justify-center gap-4 py-8">
            <div className="h-px w-full max-w-xs bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-50"></div>
            <div className="flex gap-2">
              <div className="h-2 w-2 rounded-full bg-orange-500"></div>
              <div className="h-2 w-2 rounded-full bg-blue-500"></div>
              <div className="h-2 w-2 rounded-full bg-orange-500"></div>
            </div>
            <div className="h-px w-full max-w-xs bg-gradient-to-r from-transparent via-orange-500 to-transparent opacity-50"></div>
          </div>

          {/* Podcast Section with 3-Column Layout */}
          <section
            id="podcast"
            className="rounded-lg border-2 border-orange-500 bg-black/70 p-6 backdrop-blur shadow-[0_0_60px_rgba(249,115,22,0.3)]"
          >
            <div className="mb-4 flex items-baseline gap-4">
              <span className="text-xs font-bold text-orange-500">PODCAST</span>
              <div className="h-px flex-1 bg-gradient-to-r from-orange-500 to-transparent opacity-50"></div>
            </div>
            <div className="mb-6 flex items-end justify-between">
              <div>
                <h2 className="mb-2 bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-3xl font-bold tracking-tight text-transparent sm:text-4xl">
                  The Momentum Mic
                </h2>
                <p className="text-sm text-slate-400">
                  {podcastEpisodes.length} episodes • Weekly insights
                </p>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={prevPodcast}
                  className="rounded bg-blue-500/20 px-3 py-1.5 text-xs font-bold text-blue-400 transition hover:bg-blue-500/30"
                >
                  ←
                </button>
                <span className="text-slate-500 text-xs">
                  {Math.floor(currentPodcastIndex / itemsPerPage) + 1} /{" "}
                  {Math.ceil(podcastEpisodes.length / itemsPerPage)}
                </span>
                <button
                  onClick={nextPodcast}
                  className="rounded bg-orange-500/20 px-3 py-1.5 text-xs font-bold text-orange-400 transition hover:bg-orange-500/30"
                >
                  →
                </button>
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              {currentPodcasts.map((episode) => (
                <div
                  key={episode.title}
                  className="group rounded-lg border border-orange-500/30 bg-gradient-to-br from-orange-500/5 to-transparent p-4 transition hover:border-orange-500/50 hover:from-orange-500/10"
                >
                  <div className="mb-3">
                    <div className="mb-2 inline-block rounded bg-orange-500/20 px-2 py-0.5 text-xs font-medium text-orange-400">
                      {episode.guest}
                    </div>
                    <h3 className="text-lg font-bold text-white group-hover:text-orange-300">
                      {episode.title}
                    </h3>
                    <p className="mt-1 text-xs text-blue-400">
                      {episode.duration}
                    </p>
                  </div>

                  <div className="aspect-video bg-gradient-to-br from-orange-900/30 to-blue-900/30 rounded border border-orange-500/20 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-3xl mb-1">🎙️</div>
                      <p className="text-slate-600 text-xs">Listen</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </main>

        {/* Fixed Bottom Navigation */}
        <nav className="fixed bottom-[3px] left-1/2 -translate-x-1/2 z-50 w-[calc(100%-24px)] max-w-4xl">
          <div className="rounded-[18px] border-2 border-orange-500 bg-slate-700/40 backdrop-blur-xl shadow-lg">
            <div className="px-4 py-2">
              <div className="flex items-center justify-around gap-1">
                {activeSection !== "home" && (
                  <a
                    href="linktree.html"
                    className="group flex flex-col items-center gap-0.5 px-1.5 py-1.5 transition-all duration-300 hover:scale-110"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-orange-500 shadow-lg transition-transform group-hover:scale-105">
                      <HomeIcon />
                    </div>
                    <span className="text-[10px] font-medium uppercase tracking-wider text-blue-400 transition-colors group-hover:text-orange-400">
                      Home
                    </span>
                  </a>
                )}
                {activeSection !== "meet-maureen" &&
                  activeSection !== "approach" && (
                    <a
                      href="#meet-maureen"
                      className="group flex flex-col items-center gap-0.5 px-1.5 py-1.5 transition-all duration-300 hover:scale-110"
                    >
                      <span className="text-lg">👤</span>
                      <span className="text-[10px] font-medium uppercase tracking-wider text-blue-400 transition-colors group-hover:text-orange-400">
                        About
                      </span>
                    </a>
                  )}
                {activeSection !== "services" && (
                  <a
                    href="#services"
                    className="group flex flex-col items-center gap-0.5 px-1.5 py-1.5 transition-all duration-300 hover:scale-110"
                  >
                    <span className="text-lg">⚡</span>
                    <span className="text-[10px] font-medium uppercase tracking-wider text-blue-400 transition-colors group-hover:text-orange-400">
                      Services
                    </span>
                  </a>
                )}
                {activeSection !== "video" && (
                  <a
                    href="#video"
                    className="group flex flex-col items-center gap-0.5 px-1.5 py-1.5 transition-all duration-300 hover:scale-110"
                  >
                    <span className="text-lg">▶️</span>
                    <span className="text-[10px] font-medium uppercase tracking-wider text-blue-400 transition-colors group-hover:text-orange-400">
                      Videos
                    </span>
                  </a>
                )}
                {activeSection !== "podcast" && (
                  <a
                    href="#podcast"
                    className="group flex flex-col items-center gap-0.5 px-1.5 py-1.5 transition-all duration-300 hover:scale-110"
                  >
                    <span className="text-lg">🎙️</span>
                    <span className="text-[10px] font-medium uppercase tracking-wider text-blue-400 transition-colors group-hover:text-orange-400">
                      Podcast
                    </span>
                  </a>
                )}

                {/* Share Button with Popup */}
                {activeSection !== "share" && (
                  <div className="relative">
                    <button
                      onClick={() => setShowSocial(!showSocial)}
                      className="group flex flex-col items-center gap-0.5 px-1.5 py-1.5 transition-all duration-300 hover:scale-110"
                    >
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-orange-500 shadow-lg transition-transform group-hover:scale-105">
                        <ShareIcon />
                      </div>
                      <span className="text-[10px] font-medium uppercase tracking-wider text-blue-400 transition-colors group-hover:text-orange-400">
                        Share
                      </span>
                    </button>

                    {showSocial && (
                      <div className="absolute bottom-full mb-3 left-1/2 -translate-x-1/2 w-64">
                        <div className="rounded-lg border-2 border-orange-500/50 bg-black/95 backdrop-blur-xl p-4 shadow-[0_0_30px_rgba(249,115,22,0.4)]">
                          {/* Contact Icons - Stand Out */}
                          <div className="mb-4 pb-4 border-b border-orange-500/30">
                            <p className="text-xs uppercase tracking-wider text-orange-400 mb-3 font-bold">
                              Get In Touch
                            </p>
                            <div className="flex gap-2">
                              <a
                                href="tel:+1234567890"
                                className="flex-1 flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-blue-500 to-blue-600 px-4 py-3 text-sm font-bold text-white transition hover:scale-105 shadow-[0_0_15px_rgba(59,130,246,0.5)]"
                              >
                                <span className="text-lg">📞</span>
                                <span>Call</span>
                              </a>
                              <a
                                href="mailto:contact@example.com"
                                className="flex-1 flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-orange-500 to-orange-600 px-4 py-3 text-sm font-bold text-white transition hover:scale-105 shadow-[0_0_15px_rgba(249,115,22,0.5)]"
                              >
                                <span className="text-lg">✉️</span>
                                <span>Email</span>
                              </a>
                            </div>
                          </div>

                          {/* Social Media Icons */}
                          <div>
                            <p className="text-xs uppercase tracking-wider text-blue-400 mb-2 font-bold">
                              Follow Us
                            </p>
                            <div className="grid grid-cols-2 gap-2">
                              {socialLinks.map(({ name, icon }) => (
                                <a
                                  key={name}
                                  href="#"
                                  className="flex items-center gap-2 rounded-lg border border-blue-500/30 bg-gradient-to-br from-blue-500/10 to-transparent px-3 py-2 text-xs font-medium text-blue-300 transition hover:border-orange-500/50 hover:from-orange-500/10 hover:text-orange-400"
                                >
                                  <span className="text-base">{icon}</span>
                                  <span>{name}</span>
                                </a>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                )}

                {/* Bookmark Button */}
                {activeSection !== "save" && (
                  <button
                    onClick={() => {
                      // Add to bookmarks functionality
                      if (window.sidebar && window.sidebar.addPanel) {
                        window.sidebar.addPanel(
                          document.title,
                          window.location.href,
                          ""
                        );
                      } else if (
                        window.external &&
                        "AddFavorite" in window.external
                      ) {
                        window.external.AddFavorite(
                          window.location.href,
                          document.title
                        );
                      } else {
                        alert(
                          "Press " +
                            (navigator.userAgent.toLowerCase().indexOf("mac") !=
                            -1
                              ? "Cmd"
                              : "Ctrl") +
                            "+D to bookmark this page."
                        );
                      }
                    }}
                    className="group flex flex-col items-center gap-0.5 px-1.5 py-1.5 transition-all duration-300 hover:scale-110"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-orange-500 shadow-lg transition-transform group-hover:scale-105">
                      <BookmarkIcon />
                    </div>
                    <span className="text-[10px] font-medium uppercase tracking-wider text-blue-400 transition-colors group-hover:text-orange-400">
                      Save
                    </span>
                  </button>
                )}
              </div>
            </div>
          </div>
        </nav>

        <footer
          id="footer"
          className="rounded-lg border-2 border-transparent bg-gradient-to-r from-blue-500 via-orange-500 to-blue-500 p-[2px] animate-[gradient_3s_ease_infinite] bg-[length:200%_200%] mb-20"
        >
          <div className="rounded-lg bg-black/90 p-8 backdrop-blur">
            <div className="mb-6 text-center">
              <h3 className="mb-2 text-3xl font-bold bg-gradient-to-r from-blue-400 via-orange-400 to-blue-400 bg-clip-text text-transparent animate-[gradient_3s_ease_infinite] bg-[length:200%_200%]">
                Stay Connected
              </h3>
              <p className="text-sm text-slate-400">
                Get exclusive insights, new videos, and podcast episodes
                delivered to your inbox
              </p>
            </div>

            <form className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-center">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 max-w-md rounded-lg border border-blue-500/30 bg-black/50 px-4 py-3 text-white placeholder:text-slate-500 outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20"
              />
              <button
                type="submit"
                className="relative overflow-hidden rounded-lg bg-gradient-to-r from-blue-500 via-orange-500 to-blue-500 px-8 py-3 text-sm font-bold uppercase tracking-wider text-white transition hover:scale-105 animate-[gradient_3s_ease_infinite] bg-[length:200%_200%] shadow-[0_0_20px_rgba(249,115,22,0.5)]"
              >
                Subscribe Now
              </button>
            </form>

            <div className="flex flex-col items-center gap-4 border-t border-slate-800 pt-6 sm:flex-row sm:justify-between">
              <p className="text-xs text-slate-500">
                © {new Date().getFullYear()} Maureen Tamillow Therapy • All
                Rights Reserved
              </p>
              <div className="flex items-center gap-4">
                <a
                  href="#meet-maureen"
                  className="text-xs text-blue-400 transition hover:text-orange-400"
                >
                  About
                </a>
                <span className="text-slate-700">•</span>
                <a
                  href="#video"
                  className="text-xs text-blue-400 transition hover:text-orange-400"
                >
                  Videos
                </a>
                <span className="text-slate-700">•</span>
                <a
                  href="#podcast"
                  className="text-xs text-blue-400 transition hover:text-orange-400"
                >
                  Podcast
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
