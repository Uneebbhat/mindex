import { LoginForm } from "@/features/(auth)/login/components/login-form";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login - Access Your AI Knowledge Workspace | Mindex",
  description:
    "Log in to Mindex to access your AI-powered knowledge workspace. Continue learning with transcript chat, timestamped notes, and connected insights from videos and PDFs.",

  robots: {
    index: false,
    follow: false,
  },

  openGraph: {
    title: "Login to Mindex",
    description:
      "Access your AI-powered learning workspace and continue building connected knowledge.",
    url: "https://mindex.app/login",
    siteName: "Mindex",
    type: "website",
  },

  twitter: {
    card: "summary",
    title: "Login to Mindex",
    description: "Sign in to access your AI knowledge system.",
  },
};

export default function SignupPage() {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center gap-6 bg-muted p-6 md:p-10">
      <div className="w-full max-w-sm">
        <LoginForm />
      </div>
    </div>
  );
}
