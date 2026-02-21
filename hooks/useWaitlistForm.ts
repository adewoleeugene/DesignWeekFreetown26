"use client";

import { useState, type FormEvent } from "react";
import type { WaitlistFormState, SubmissionStatus } from "@/lib/types";

export function useWaitlistForm() {
  const [form, setForm] = useState<WaitlistFormState>({ name: "", email: "", phone: "" });
  const [status, setStatus] = useState<SubmissionStatus>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");
    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Something went wrong");
      }
      setStatus("success");
      setForm({ name: "", email: "", phone: "" });
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong");
    }
  }

  function updateField(field: keyof WaitlistFormState, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  return { form, status, errorMsg, handleSubmit, updateField };
}
