"use client";

import { useCountdown } from "@/hooks/useCountdown";
import { useWaitlistForm } from "@/hooks/useWaitlistForm";
import styles from "./Experience5.module.css";

export default function Experience5() {
  const t = useCountdown();
  const { form, status, errorMsg, handleSubmit, updateField } = useWaitlistForm();

  return (
    <section className={`${styles.gradientBg} min-h-screen w-full flex flex-col relative overflow-hidden text-white`}>
      {/* Floating decorative shapes */}
      <div className={styles.floatCircle1} aria-hidden="true" />
      <div className={styles.floatCircle2} aria-hidden="true" />
      <div className={styles.floatArc1} aria-hidden="true" />

      <div className="w-full max-w-[1440px] mx-auto flex flex-col flex-1 relative z-10">
        {/* Top bar */}
        <nav className={`relative z-10 flex justify-between items-center px-6 sm:px-10 md:px-12 lg:px-16 py-6 ${styles.bounceIn}`}>
          <span className="text-xs font-bold tracking-[0.2em] uppercase text-white">
            DWF&apos;26
          </span>
          <a href="https://www.instagram.com/designweekfreetown?igsh=MTNwaTl1dm1pdHU4bw%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
            </svg>
          </a>
        </nav>

        {/* Main content area */}
        <div className="relative z-10 flex-1 min-h-[280px] relative px-6 sm:px-10 md:px-12 lg:px-16">
          {/* Title — absolutely positioned */}
          <div className={`absolute top-[clamp(0.5rem,8%,4rem)] left-6 sm:left-10 md:left-12 lg:left-16 ${styles.bounceInDelay1}`}>
            <h1 className="leading-[0.88]">
              <span className="block font-airnt font-bold uppercase text-[clamp(2.75rem,13vw,13rem)] tracking-tight">Design</span>
              <span className="relative flex items-start">
                <span className="hidden sm:block absolute left-0 top-0 bottom-[18%] w-[clamp(3rem,8vw,8rem)]" style={{ background: "#6366f1" }} />
                <span className="font-airnt font-bold uppercase text-[clamp(2.75rem,13vw,13rem)] tracking-tight sm:ml-[calc(clamp(3rem,8vw,8rem)+1.25rem)]">Week</span>
              </span>
              <span className="block font-airnt font-bold uppercase text-[clamp(1.75rem,7vw,6.5rem)] tracking-tight leading-[0.88]">Freetown</span>
              <span className="block font-script text-[clamp(1.5rem,4vw,3rem)] leading-[1.1] mt-2 text-white/80">Unboxing Freetown</span>
            </h1>
          </div>
        </div>

        {/* Bottom section — form + info */}
        <div className={`relative z-10 px-6 sm:px-10 md:px-12 lg:px-16 py-6 md:py-8 flex flex-col md:flex-row md:justify-between md:items-end gap-6 md:gap-8 lg:gap-10 ${styles.bounceInDelay2}`}>
          <div className="flex flex-col gap-1 text-sm text-white/40">
            <span className="tracking-wider uppercase font-extrabold text-white">May 06 — 09, 2026</span>
            <div className="flex gap-1.5 sm:gap-3 items-baseline">
              <span className={`${styles.countdownLight} font-airnt font-bold text-lg sm:text-2xl tabular-nums`}>{String(t.days).padStart(2, "0")}d</span>
              <span className="text-white/30 text-sm sm:text-base">:</span>
              <span className={`${styles.countdownBlue} font-airnt font-bold text-lg sm:text-2xl tabular-nums`}>{String(t.hours).padStart(2, "0")}h</span>
              <span className="text-white/30 text-sm sm:text-base">:</span>
              <span className={`${styles.countdownIndigo} font-airnt font-bold text-lg sm:text-2xl tabular-nums`}>{String(t.minutes).padStart(2, "0")}m</span>
              <span className="text-white/30 text-sm sm:text-base">:</span>
              <span className={`${styles.countdownSky} font-airnt font-bold text-lg sm:text-2xl tabular-nums`}>{String(t.seconds).padStart(2, "0")}s</span>
            </div>
            <span className="tracking-wider uppercase font-extrabold">Where Tech Meets Heritage</span>
          </div>

          <div className="w-full md:max-w-md">
            {status === "success" ? (
              <div className={styles.successCard}>
                <p className="text-sm font-bold font-airnt uppercase" style={{ background: "linear-gradient(90deg, #4338ca, #2563eb, #6366f1)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                  See you on the dance floor!
                </p>
                <p className="text-xs text-gray-500 mt-1 font-semibold">
                  You&apos;re on the list. We&apos;ll be in touch!
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <p className="text-xs font-black tracking-[0.15em] uppercase text-white/50">
                  Join the Waitlist
                </p>
                <div>
                  <label htmlFor="r-name" className="block text-xs uppercase tracking-wider mb-2 font-bold text-white/40">Full Name</label>
                  <input type="text" id="r-name" required value={form.name} onChange={(e) => updateField("name", e.target.value)} placeholder="Your full name" className={styles.input} />
                </div>
                <div>
                  <label htmlFor="r-email" className="block text-xs uppercase tracking-wider mb-2 font-bold text-white/40">Email</label>
                  <input type="email" id="r-email" required value={form.email} onChange={(e) => updateField("email", e.target.value)} placeholder="you@example.com" className={styles.input} />
                </div>
                <div>
                  <label htmlFor="r-phone" className="block text-xs uppercase tracking-wider mb-2 font-bold text-white/40">Phone</label>
                  <input type="tel" id="r-phone" required value={form.phone} onChange={(e) => updateField("phone", e.target.value)} placeholder="+232 XX XXX XXXX" className={styles.input} />
                </div>
                {status === "error" && (
                  <p className="text-red-400 text-xs font-semibold">{errorMsg}</p>
                )}
                <button type="submit" disabled={status === "loading"} className={`${styles.gradientBtn} w-full text-white font-black uppercase text-xs tracking-[0.2em] py-3.5 disabled:opacity-50 disabled:cursor-not-allowed`}>
                  {status === "loading" ? "Submitting..." : "Count Me In!"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
