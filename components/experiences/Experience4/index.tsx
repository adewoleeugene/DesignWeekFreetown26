"use client";

import { useCountdown } from "@/hooks/useCountdown";
import { useWaitlistForm } from "@/hooks/useWaitlistForm";
import styles from "./Experience4.module.css";

export default function Experience4() {
  const t = useCountdown();
  const { form, status, errorMsg, handleSubmit, updateField } = useWaitlistForm();

  return (
    <section className="min-h-screen w-full flex flex-col relative" style={{ background: "#0A0A12", color: "#E0E8F0" }}>
      {/* Background layers */}
      <div className={styles.dotGrid} aria-hidden="true" />
      <div className={styles.scanLines} aria-hidden="true" />
      <div className={styles.radialGlow} aria-hidden="true" />

      <div className="w-full max-w-[1440px] mx-auto flex flex-col flex-1 relative z-10">
        {/* Top bar */}
        <nav className={`relative z-10 flex justify-between items-center px-6 sm:px-10 md:px-12 lg:px-16 py-6 ${styles.glitchText}`}>
          <span className="text-xs font-bold tracking-[0.2em] uppercase" style={{ color: "rgba(61,158,255,0.6)" }}>
            DWF&apos;26
          </span>
          <a href="https://www.instagram.com/designweekfreetown?igsh=MTNwaTl1dm1pdHU4bw%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer" className="transition-colors" style={{ color: "rgba(61,158,255,0.5)" }}>
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
          <div className={`absolute top-[clamp(0.5rem,8%,4rem)] left-6 sm:left-10 md:left-12 lg:left-16 ${styles.glitchTextDelay1}`}>
            <h1 className="leading-[0.88]">
              <span className="block font-airnt uppercase text-[clamp(2.75rem,13vw,13rem)] tracking-tight" style={{ color: "#E0E8F0", textShadow: "0 0 30px rgba(61,158,255,0.3)" }}>Design</span>
              <span className="relative flex items-start">
                <span className="hidden sm:block absolute left-0 top-0 bottom-[18%] w-[clamp(3rem,8vw,8rem)]" style={{ background: "#3D9EFF", boxShadow: "0 0 20px rgba(61,158,255,0.4)" }} />
                <span className="font-airnt uppercase text-[clamp(2.75rem,13vw,13rem)] tracking-tight sm:ml-[calc(clamp(3rem,8vw,8rem)+1.25rem)]" style={{ color: "#E0E8F0", textShadow: "0 0 30px rgba(61,158,255,0.3)" }}>Week</span>
              </span>
              <span className="block font-airnt uppercase text-[clamp(1.75rem,7vw,6.5rem)] tracking-tight leading-[0.88]" style={{ color: "#E0E8F0", textShadow: "0 0 30px rgba(61,158,255,0.3)" }}>Freetown</span>
              <span className="block font-sans font-light text-[clamp(1rem,2.5vw,1.8rem)] leading-[1.1] mt-2" style={{ color: "#00D4FF" }}>Unboxing Freetown</span>
            </h1>
          </div>
        </div>

        {/* Bottom section — form + info */}
        <div className={`relative z-10 px-6 sm:px-10 md:px-12 lg:px-16 py-6 md:py-8 flex flex-col md:flex-row md:justify-between md:items-end gap-6 md:gap-8 lg:gap-10 ${styles.glitchTextDelay2}`}>
          <div className="flex flex-col gap-1 text-sm" style={{ color: "rgba(224,232,240,0.3)" }}>
            <span className="tracking-wider uppercase font-bold" style={{ color: "#3D9EFF" }}>May 06 — 09, 2026</span>
            <span className="tracking-wider uppercase tabular-nums font-bold font-airnt" style={{ color: "#E0E8F0", textShadow: "0 0 12px rgba(61,158,255,0.5)" }}>
              {String(t.days).padStart(3, "0")}d : {String(t.hours).padStart(2, "0")}h : {String(t.minutes).padStart(2, "0")}m : {String(t.seconds).padStart(2, "0")}s
            </span>
            <span className="tracking-wider uppercase">Where Tech Meets Heritage</span>
          </div>

          <div className="w-full md:max-w-md">
            {status === "success" ? (
              <div className={styles.successBox}>
                <p className="text-sm font-semibold" style={{ color: "#3D9EFF", textShadow: "0 0 10px rgba(61,158,255,0.5)" }}>
                  Access Granted
                </p>
                <p className="text-xs mt-1" style={{ color: "rgba(224,232,240,0.5)" }}>
                  We&apos;ll transmit updates to your inbox.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <p className="text-xs font-semibold tracking-[0.15em] uppercase" style={{ color: "rgba(61,158,255,0.5)" }}>
                  Terminal Registration
                </p>
                <div>
                  <label htmlFor="v-name" className="block text-xs uppercase tracking-wider mb-2" style={{ color: "rgba(224,232,240,0.35)" }}>Full Name</label>
                  <input type="text" id="v-name" required value={form.name} onChange={(e) => updateField("name", e.target.value)} placeholder="enter_full_name" className={styles.inputField} />
                </div>
                <div>
                  <label htmlFor="v-email" className="block text-xs uppercase tracking-wider mb-2" style={{ color: "rgba(224,232,240,0.35)" }}>Email</label>
                  <input type="email" id="v-email" required value={form.email} onChange={(e) => updateField("email", e.target.value)} placeholder="you@domain.com" className={styles.inputField} />
                </div>
                <div>
                  <label htmlFor="v-phone" className="block text-xs uppercase tracking-wider mb-2" style={{ color: "rgba(224,232,240,0.35)" }}>Phone</label>
                  <input type="tel" id="v-phone" required value={form.phone} onChange={(e) => updateField("phone", e.target.value)} placeholder="+232_XX_XXX_XXXX" className={styles.inputField} />
                </div>
                {status === "error" && (
                  <p className="text-xs" style={{ color: "#ff6b6b" }}>{errorMsg}</p>
                )}
                <button type="submit" disabled={status === "loading"} className={styles.submitButton}>
                  {status === "loading" ? "Transmitting..." : "Register"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
