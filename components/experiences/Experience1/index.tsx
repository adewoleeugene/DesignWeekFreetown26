"use client";

import { useCountdown } from "@/hooks/useCountdown";
import { useWaitlistForm } from "@/hooks/useWaitlistForm";

export default function Experience1() {
  const t = useCountdown();
  const { form, status, errorMsg, handleSubmit, updateField } = useWaitlistForm();

  return (
    <section className="min-h-screen w-full flex flex-col">
      <div className="w-full max-w-[1440px] mx-auto flex flex-col flex-1 relative">
      {/* Top bar */}
      <nav className="flex justify-between items-center px-6 sm:px-10 md:px-12 lg:px-16 py-6 animate-[fadeIn_0.6s_ease-out_both]">
        <span className="text-xs font-bold tracking-[0.2em] uppercase text-black/60">
          DWF&apos;26
        </span>
        <a href="https://www.instagram.com/designweekfreetown?igsh=MTNwaTl1dm1pdHU4bw%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer" className="text-black/40 hover:text-accent transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
            <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
          </svg>
        </a>
      </nav>

      {/* Main content area */}
      <div className="flex-1 min-h-[280px] relative px-6 sm:px-10 md:px-12 lg:px-16">
        {/* Title — absolutely positioned */}
        <div className="absolute top-[clamp(0.5rem,8%,4rem)] left-6 sm:left-10 md:left-12 lg:left-16 animate-[slideUp_0.7s_ease-out_0.1s_both]">
          <h1 className="leading-[0.88]">
            <span className="block font-airnt uppercase text-[clamp(2.75rem,13vw,13rem)] tracking-tight">Design</span>
            <span className="relative flex items-start">
              <span className="hidden sm:block absolute left-0 top-0 bottom-[18%] w-[clamp(3rem,8vw,8rem)] bg-accent" />
              <span className="font-airnt uppercase text-[clamp(2.75rem,13vw,13rem)] tracking-tight sm:ml-[calc(clamp(3rem,8vw,8rem)+1.25rem)]">Week</span>
            </span>
            <span className="block font-airnt uppercase text-[clamp(1.75rem,7vw,6.5rem)] tracking-tight leading-[0.88]">Freetown</span>
            <span className="block font-script text-[clamp(1.5rem,4vw,3rem)] leading-[1.1] mt-2 text-black/50">Unboxing Freetown</span>
          </h1>
        </div>
      </div>

      {/* Bottom section — form + info */}
      <div className="px-6 sm:px-10 md:px-12 lg:px-16 py-6 md:py-8 flex flex-col md:flex-row md:justify-between md:items-end gap-6 md:gap-8 lg:gap-10 animate-[fadeIn_0.6s_ease-out_0.6s_both]">
        <div className="flex flex-col gap-1 text-sm text-black/30">
          <span className="tracking-wider uppercase font-bold text-black">May 06 — 09, 2026</span>
          <span className="tracking-wider uppercase tabular-nums font-bold text-black">
            {String(t.days).padStart(3, "0")}d : {String(t.hours).padStart(2, "0")}h : {String(t.minutes).padStart(2, "0")}m : {String(t.seconds).padStart(2, "0")}s
          </span>
          <span className="tracking-wider uppercase">Where Tech Meets Heritage</span>
        </div>

        <div className="w-full md:max-w-md">
          {status === "success" ? (
            <div className="bg-accent/5 border border-accent/20 px-6 py-5">
              <p className="text-sm font-semibold text-accent">
                You&apos;re on the list
              </p>
              <p className="text-xs text-black/50 mt-1">
                We&apos;ll be in touch with updates.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <p className="text-xs font-semibold tracking-[0.15em] uppercase text-black/40">
                Join the waitlist
              </p>
              <div>
                <label htmlFor="name" className="block text-xs text-black/40 uppercase tracking-wider mb-2">Full Name</label>
                <input
                  type="text"
                  id="name"
                  required
                  value={form.name}
                  onChange={(e) => updateField("name", e.target.value)}
                  placeholder="Your full name"
                  className="w-full border-b border-black/10 bg-transparent pb-3 text-sm text-black placeholder-black/25 focus:outline-none focus:border-accent transition-colors"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-xs text-black/40 uppercase tracking-wider mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  required
                  value={form.email}
                  onChange={(e) => updateField("email", e.target.value)}
                  placeholder="you@example.com"
                  className="w-full border-b border-black/10 bg-transparent pb-3 text-sm text-black placeholder-black/25 focus:outline-none focus:border-accent transition-colors"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-xs text-black/40 uppercase tracking-wider mb-2">Phone</label>
                <input
                  type="tel"
                  id="phone"
                  required
                  value={form.phone}
                  onChange={(e) => updateField("phone", e.target.value)}
                  placeholder="+232 XX XXX XXXX"
                  className="w-full border-b border-black/10 bg-transparent pb-3 text-sm text-black placeholder-black/25 focus:outline-none focus:border-accent transition-colors"
                />
              </div>
              {status === "error" && (
                <p className="text-red-500 text-xs">{errorMsg}</p>
              )}
              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full bg-accent text-white text-xs font-semibold uppercase tracking-[0.2em] py-3.5 hover:bg-accent-dim transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
              >
                {status === "loading" ? "Submitting..." : "Join Waitlist"}
              </button>
            </form>
          )}
        </div>
      </div>
      </div>
    </section>
  );
}
