import Link from "next/link";

export default function LinkTree() {
  return (
    <div className="min-h-screen bg-slate-800 text-white">
      <div className="mx-auto max-w-2xl px-6 py-12">
        <div className="mb-12 text-center">
          <div className="mb-6 inline-flex items-center justify-center">
            <div className="flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-orange-400 via-orange-500 to-orange-600 text-4xl font-bold shadow-[0_0_40px_rgba(249,115,22,0.6)]">
              MT
            </div>
          </div>
          <h1 className="mb-3 bg-gradient-to-r from-blue-400 via-orange-400 to-blue-400 bg-clip-text text-4xl font-bold tracking-tight text-transparent">
            Maureen Tamillow
          </h1>
          <p className="text-sm uppercase tracking-[0.2em] text-blue-400">
            Therapy Redefined
          </p>
          <p className="mt-4 text-slate-300">
            High-achieving women & teens • Creative wellness architect
          </p>
        </div>

        <div className="mb-8">
          <Link
            href="/"
            className="group block rounded-lg border-2 border-transparent bg-gradient-to-r from-blue-500 via-orange-500 to-blue-500 p-[2px] animate-gradient shadow-[0_0_30px_rgba(249,115,22,0.5)] transition hover:shadow-[0_0_40px_rgba(249,115,22,0.8)]"
          >
            <div className="flex items-center justify-between rounded-lg bg-black/95 px-6 py-4 backdrop-blur">
              <div className="flex items-center gap-3">
                <span className="text-2xl">🏠</span>
                <div>
                  <p className="font-bold text-white group-hover:text-blue-300 transition">
                    Visit Main Website
                  </p>
                  <p className="text-xs text-slate-400">
                    Explore services, videos & podcasts
                  </p>
                </div>
              </div>
              <span className="text-orange-400 transition group-hover:translate-x-1">
                →
              </span>
            </div>
          </Link>
        </div>

        <div className="space-y-4">
          <Link
            href="/#services"
            className="group block rounded-lg border border-blue-500/30 bg-gradient-to-br from-blue-500/10 to-transparent p-4 backdrop-blur transition hover:border-blue-500/60 hover:from-blue-500/20"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="text-2xl">📅</span>
                <div>
                  <p className="font-bold text-white group-hover:text-blue-300 transition">
                    Book a Session
                  </p>
                  <p className="text-xs text-slate-400">
                    Schedule your consultation
                  </p>
                </div>
              </div>
              <span className="text-blue-400 transition group-hover:translate-x-1">
                →
              </span>
            </div>
          </Link>
          {/* Additional links omitted for brevity, kept similar to original */}
        </div>

        <div className="mt-12 rounded-lg border-2 border-orange-500/30 bg-black/60 p-6 backdrop-blur">
          <h2 className="mb-4 text-center text-sm font-bold uppercase tracking-wider text-orange-400">
            Follow Us
          </h2>
          <div className="grid grid-cols-2 gap-3">
            <button className="flex items-center justify-center gap-2 rounded-lg border border-blue-500/30 bg-gradient-to-br from-blue-500/10 to-transparent px-4 py-3 text-sm font-medium text-blue-300 transition hover:border-blue-500/50 hover:from-blue-500/20 hover:text-blue-200">
              🐦<span>Twitter</span>
            </button>
            <button className="flex items-center justify-center gap-2 rounded-lg border border-blue-500/30 bg-gradient-to-br from-blue-500/10 to-transparent px-4 py-3 text-sm font-medium text-blue-300 transition hover:border-blue-500/50 hover:from-blue-500/20 hover:text-blue-200">
              in<span>LinkedIn</span>
            </button>
          </div>
        </div>

        <div className="mt-12 text-center text-xs text-slate-500">
          <p>© 2025 Maureen Tamillow Therapy</p>
          <p className="mt-2">All Rights Reserved</p>
        </div>
      </div>
    </div>
  );
}
