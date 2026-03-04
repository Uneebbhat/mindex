import { SignupForm } from "@/features/(auth)/signup/components/signup-form";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign Up - Start Building Smarter Knowledge | Mindex",
  description:
    "Create your free Mindex account and transform YouTube videos and PDFs into structured, searchable knowledge. Chat with AI, create timestamped notes, and connect insights instantly.",

  robots: {
    index: false,
    follow: false,
  },

  openGraph: {
    title: "Create Your Mindex Account",
    description:
      "Join Mindex and turn videos into connected, AI-powered knowledge.",
    // url: "https://mindex.app/signup", //TODO: Change it
    siteName: "Mindex",
    type: "website",
  },

  twitter: {
    card: "summary",
    title: "Sign Up for Mindex",
    description:
      "Start transforming videos and PDFs into structured knowledge today.",
  },
};

export default function SignupPage() {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center gap-6 bg-muted p-6 md:p-10">
      <div className="w-full max-w-sm">
        <SignupForm />
      </div>
    </div>
  );
}
