import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | Mindex",
  description:
    "Read the Terms of Service for Mindex, outlining user responsibilities, acceptable use, AI-generated content policies, and platform usage conditions.",
  robots: {
    index: true,
    follow: true,
  },
};

export default function TermsPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
      <p className="mb-6">Last Updated: March 2026</p>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">1. Acceptance of Terms</h2>
        <p>
          By accessing or using Mindex (&quot;the Service&quot;), you agree to
          be bound by these Terms of Service. If you do not agree, you may not
          access or use the platform.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">
          2. Description of Service
        </h2>
        <p>
          Mindex provides an AI-powered knowledge platform that allows users to
          extract transcripts from publicly available YouTube videos, upload
          PDFs, generate AI-assisted summaries, create timestamped notes, and
          build structured knowledge graphs.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">3. User Accounts</h2>
        <p>
          You are responsible for maintaining the confidentiality of your
          account credentials and for all activities under your account. You
          agree to provide accurate and complete information.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">4. Acceptable Use</h2>
        <p>You agree not to use the Service to:</p>
        <ul className="list-disc ml-6 mt-3 space-y-2">
          <li>Violate any applicable laws or regulations.</li>
          <li>Upload unlawful, harmful, or infringing content.</li>
          <li>Attempt to reverse engineer or disrupt the platform.</li>
          <li>Abuse AI functionality through automated scraping or misuse.</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">5. AI-Generated Content</h2>
        <p>
          Mindex uses artificial intelligence to generate summaries, responses,
          and insights. AI outputs may contain inaccuracies. Users are
          responsible for verifying information before relying on it.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">
          6. Intellectual Property
        </h2>
        <p>
          The platform design, branding, and software are owned by Mindex. Users
          retain ownership of their uploaded content and notes.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">7. Third-Party Content</h2>
        <p>
          Mindex processes publicly available YouTube content and user-uploaded
          PDFs. We do not claim ownership of third-party materials.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">8. Termination</h2>
        <p>
          We reserve the right to suspend or terminate accounts that violate
          these Terms.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">
          9. Limitation of Liability
        </h2>
        <p>
          Mindex is provided &quot;as is&quot; without warranties of any kind.
          We are not liable for indirect, incidental, or consequential damages.
        </p>
      </section>
    </main>
  );
}
