export interface CountdownTime {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export interface WaitlistFormState {
  name: string;
  email: string;
  phone: string;
}

export type SubmissionStatus = "idle" | "loading" | "success" | "error";

export interface ExperienceConfig {
  id: number;
  slug: string;
  name: string;
}
