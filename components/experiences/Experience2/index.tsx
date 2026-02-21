"use client";

import { useCountdown } from "@/hooks/useCountdown";
import { useWaitlistForm } from "@/hooks/useWaitlistForm";
import styles from "./Experience2.module.css";

export default function Experience2() {
  const t = useCountdown();
  const { form, status, errorMsg, handleSubmit, updateField } = useWaitlistForm();

  return (
    <section
      className="min-h-screen w-full flex flex-col relative"
      style={{ background: "#1A1410", color: "#F5F0E8" }}
    >
      {/* Kente woven pattern overlay */}
      <div className={`${styles.kenteOverlay} ${styles.kentePulse}`} />

      <div className="w-full max-w-[1440px] mx-auto flex flex-col flex-1 relative z-10">
        {/* Top bar */}
        <nav className={`relative z-10 flex justify-between items-center px-6 sm:px-10 md:px-12 lg:px-16 py-6 ${styles.fadeIn} ${styles.stagger1}`}>
          <span className="text-xs font-bold tracking-[0.2em] uppercase" style={{ color: "#D4A853" }}>
            DWF&apos;26
          </span>
          <a href="https://www.instagram.com/designweekfreetown?igsh=MTNwaTl1dm1pdHU4bw%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer" className="transition-opacity hover:opacity-70" style={{ color: "#F5F0E8" }}>
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
          <div className={`absolute top-[clamp(0.5rem,8%,4rem)] left-6 sm:left-10 md:left-12 lg:left-16 ${styles.riseIn} ${styles.stagger2}`}>
            <h1 className="leading-[0.88]">
              <span className="block font-airnt uppercase text-[clamp(2.75rem,13vw,13rem)] tracking-tight">Design</span>
              <span className="relative flex items-start">
                <span className="hidden sm:block absolute left-0 top-0 bottom-[18%] w-[clamp(3rem,8vw,8rem)]" style={{ background: "#D4A853" }} />
                <span className="font-airnt uppercase text-[clamp(2.75rem,13vw,13rem)] tracking-tight sm:ml-[calc(clamp(3rem,8vw,8rem)+1.25rem)]">
                  Week
                </span>
              </span>
              <span className="block font-airnt uppercase text-[clamp(1.75rem,7vw,6.5rem)] tracking-tight leading-[0.88]">Freetown</span>
              <span className="block font-script text-[clamp(1.5rem,4vw,3rem)] leading-[1.1] mt-2" style={{ color: "rgba(245,240,232,0.5)" }}>Unboxing Freetown</span>
            </h1>
          </div>
        </div>

        {/* Bottom section — form + info */}
        <div className={`relative z-10 px-6 sm:px-10 md:px-12 lg:px-16 py-6 md:py-8 flex flex-col md:flex-row md:justify-between md:items-end gap-6 md:gap-8 lg:gap-10 ${styles.fadeIn} ${styles.stagger3}`}>
          <div className="flex flex-col gap-1 text-sm" style={{ color: "rgba(245,240,232,0.35)" }}>
            <span className="tracking-wider uppercase font-bold" style={{ color: "#D4A853" }}>May 06 — 09, 2026</span>
            <span className="tracking-wider font-script text-base tabular-nums" style={{ color: "#F5F0E8" }}>
              {t.days} days &middot; {t.hours} hours &middot; {t.minutes} minutes &middot; {t.seconds}s
            </span>
            <span className="tracking-wider uppercase">Where Tech Meets Heritage</span>
          </div>

          <div className="w-full md:max-w-md">
            {status === "success" ? (
              <div className={styles.successCard}>
                <p className="font-script text-lg" style={{ color: "#D4A853" }}>
                  Your story has been heard
                </p>
                <p className="text-xs mt-1" style={{ color: "rgba(245,240,232,0.5)" }}>
                  We&apos;ll send you the next chapter soon.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <p className="font-script text-base" style={{ color: "#D4A853" }}>
                  Join the story
                </p>
                <div>
                  <label htmlFor="griot-name" className="block text-xs uppercase tracking-wider mb-2 font-sans font-light" style={{ color: "rgba(245,240,232,0.45)" }}>Full Name</label>
                  <input type="text" id="griot-name" required value={form.name} onChange={(e) => updateField("name", e.target.value)} placeholder="Your full name" className={styles.formInput} />
                </div>
                <div>
                  <label htmlFor="griot-email" className="block text-xs uppercase tracking-wider mb-2 font-sans font-light" style={{ color: "rgba(245,240,232,0.45)" }}>Email</label>
                  <input type="email" id="griot-email" required value={form.email} onChange={(e) => updateField("email", e.target.value)} placeholder="you@example.com" className={styles.formInput} />
                </div>
                <div>
                  <label htmlFor="griot-phone" className="block text-xs uppercase tracking-wider mb-2 font-sans font-light" style={{ color: "rgba(245,240,232,0.45)" }}>Phone</label>
                  <input type="tel" id="griot-phone" required value={form.phone} onChange={(e) => updateField("phone", e.target.value)} placeholder="+232 XX XXX XXXX" className={styles.formInput} />
                </div>
                {status === "error" && (
                  <p className="text-sm" style={{ color: "#e57373" }}>{errorMsg}</p>
                )}
                <button type="submit" disabled={status === "loading"} className={`${styles.submitBtn} font-sans`}>
                  {status === "loading" ? "Submitting..." : "Reserve Your Seat"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
