import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Mindex",
  description:
    "Learn how Mindex collects, uses, and protects your personal data, uploaded content, and AI interaction information.",
  robots: {
    index: true,
    follow: true,
  },
};

export default function PrivacyPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
      <p className="mb-6">Last Updated: March 2026</p>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">
          1. Information We Collect
        </h2>
        <ul className="list-disc ml-6 space-y-2">
          <li>Account information (name, email address)</li>
          <li>YouTube links and transcript data</li>
          <li>Uploaded PDFs</li>
          <li>User-created notes and knowledge graphs</li>
          <li>AI chat interactions</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">
          2. How We Use Information
        </h2>
        <p>We use collected data to:</p>
        <ul className="list-disc ml-6 mt-3 space-y-2">
          <li>Provide AI-powered transcript chat and summaries</li>
          <li>Improve system performance</li>
          <li>Enhance user experience</li>
          <li>Ensure platform security</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">3. AI Processing</h2>
        <p>
          Uploaded content and user prompts may be processed by third-party AI
          providers to generate responses. We do not sell your data.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">4. Data Storage</h2>
        <p>
          Your data is stored securely using industry-standard encryption and
          access controls. We implement technical safeguards to protect user
          information.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">5. Cookies</h2>
        <p>
          We may use cookies or similar technologies to enhance user experience
          and analyze traffic.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">6. User Rights</h2>
        <p>
          Users may request access, modification, or deletion of their personal
          data by contacting us.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">7. Changes to Policy</h2>
        <p>
          We may update this Privacy Policy periodically. Continued use of the
          Service constitutes acceptance of updated terms.
        </p>
      </section>
    </main>
  );
}
