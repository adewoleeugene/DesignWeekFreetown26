"use client";

import { useCountdown } from "@/hooks/useCountdown";
import { useWaitlistForm } from "@/hooks/useWaitlistForm";
import styles from "./Experience3.module.css";

export default function Experience3() {
  const t = useCountdown();
  const { form, status, errorMsg, handleSubmit, updateField } = useWaitlistForm();

  return (
    <section
      className={`${styles.paperTexture} min-h-screen w-full flex flex-col relative`}
      style={{ color: "#2C1A0E" }}
    >
      {/* Top bar */}
      <nav className={`flex justify-between items-center px-6 sm:px-10 md:px-12 lg:px-16 py-6 ${styles.buildLeft} ${styles.delay1}`}>
        <span className="text-xs font-bold tracking-[0.2em] uppercase" style={{ color: "#2C1A0E" }}>
          DWF&apos;26
        </span>
        <a href="https://www.instagram.com/designweekfreetown?igsh=MTNwaTl1dm1pdHU4bw%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer" className="transition-colors" style={{ color: "#2C1A0E" }}>
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
        <div className={`absolute top-[clamp(0.5rem,8%,4rem)] left-6 sm:left-10 md:left-12 lg:left-16 ${styles.buildLeft} ${styles.delay2}`}>
          <h1 className="leading-[0.88]">
            <span className="block font-airnt font-bold uppercase text-[clamp(2.75rem,13vw,13rem)] tracking-tight" style={{ color: "#2C1A0E" }}>Design</span>
            <span className="relative flex items-start">
              <span className="hidden sm:block absolute left-0 top-0 bottom-[18%] w-[clamp(3rem,8vw,8rem)]" style={{ background: "#C75B3A" }} />
              <span className="font-airnt font-bold uppercase text-[clamp(2.75rem,13vw,13rem)] tracking-tight sm:ml-[calc(clamp(3rem,8vw,8rem)+1.25rem)]" style={{ color: "#2C1A0E" }}>Week</span>
            </span>
            <span className="block font-airnt font-bold uppercase text-[clamp(1.75rem,7vw,6.5rem)] tracking-tight leading-[0.88]" style={{ color: "#2C1A0E" }}>Freetown</span>
            <span className="block font-script text-[clamp(1.5rem,4vw,3rem)] leading-[1.1] mt-2" style={{ color: "#C75B3A" }}>Unboxing Freetown</span>
          </h1>
        </div>
      </div>

      {/* Bottom section — form + info */}
      <div className={`px-6 sm:px-10 md:px-12 lg:px-16 py-6 md:py-8 flex flex-col md:flex-row md:justify-between md:items-end gap-6 md:gap-8 lg:gap-10 ${styles.buildBottom} ${styles.delay3}`}>
        <div className="flex flex-col gap-1 text-sm" style={{ color: "rgba(44,26,14,0.4)" }}>
          <span className="tracking-wider uppercase font-bold" style={{ color: "#2C1A0E" }}>May 06 — 09, 2026</span>
          <div className="flex gap-2 sm:gap-3">
            {[
              { value: t.days, label: "d" },
              { value: t.hours, label: "h" },
              { value: t.minutes, label: "m" },
              { value: t.seconds, label: "s" },
            ].map((item) => (
              <span key={item.label} className={`${styles.countdownTile} font-airnt font-bold tabular-nums`}>
                {String(item.value).padStart(2, "0")}{item.label}
              </span>
            ))}
          </div>
          <span className="tracking-wider uppercase" style={{ color: "#2D4A3E" }}>Where Tech Meets Heritage</span>
        </div>

        <div className="w-full md:max-w-md">
          {status === "success" ? (
            <div className={styles.successCard}>
              <p className="text-sm font-semibold font-airnt uppercase tracking-wide" style={{ color: "#2C1A0E" }}>
                Welcome to the workshop
              </p>
              <p className="text-xs mt-1" style={{ color: "rgba(44,26,14,0.5)" }}>
                We&apos;ll be in touch with updates.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <p className="text-xs font-semibold tracking-[0.15em] uppercase" style={{ color: "rgba(44,26,14,0.45)" }}>
                Reserve your spot
              </p>
              <div>
                <label htmlFor="maker-name" className="block text-xs uppercase tracking-wider mb-2" style={{ color: "rgba(44,26,14,0.4)" }}>Full Name</label>
                <input type="text" id="maker-name" required value={form.name} onChange={(e) => updateField("name", e.target.value)} placeholder="Your full name" className={styles.inputField} />
              </div>
              <div>
                <label htmlFor="maker-email" className="block text-xs uppercase tracking-wider mb-2" style={{ color: "rgba(44,26,14,0.4)" }}>Email</label>
                <input type="email" id="maker-email" required value={form.email} onChange={(e) => updateField("email", e.target.value)} placeholder="you@example.com" className={styles.inputField} />
              </div>
              <div>
                <label htmlFor="maker-phone" className="block text-xs uppercase tracking-wider mb-2" style={{ color: "rgba(44,26,14,0.4)" }}>Phone</label>
                <input type="tel" id="maker-phone" required value={form.phone} onChange={(e) => updateField("phone", e.target.value)} placeholder="+232 XX XXX XXXX" className={styles.inputField} />
              </div>
              {status === "error" && (
                <p className="text-xs" style={{ color: "#B83A2A" }}>{errorMsg}</p>
              )}
              <button type="submit" disabled={status === "loading"} className={`${styles.submitBtn} w-full`}>
                {status === "loading" ? "Submitting..." : "Join the Makers"}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
