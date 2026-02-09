import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy Policy for HakobyAI — AI-powered phone agent for HVAC companies.",
};

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-background">
      <div className="max-w-3xl mx-auto px-6 py-24">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-text-muted hover:text-text-primary transition-colors duration-200 mb-12"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>

        <h1 className="text-3xl sm:text-4xl font-bold text-text-primary mb-2">
          Privacy Policy
        </h1>
        <p className="text-sm text-text-muted mb-12">
          Effective January 1, 2025
        </p>

        <div className="space-y-10 text-text-secondary text-sm leading-relaxed">
          <section>
            <h2 className="text-lg font-semibold text-text-primary mb-3">
              Information We Collect
            </h2>
            <p>
              When you visit hakobyai.com, submit a contact or demo form, or
              interact with our voice agents, we may collect your name, email
              address, phone number, company name, and details about your
              inquiry. Voice interactions during demos may be recorded for
              quality assurance and product improvement.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-text-primary mb-3">
              How We Use Your Information
            </h2>
            <p>
              We use collected information to respond to inquiries, provide
              demos, deliver and improve our services, and communicate relevant
              updates. We do not sell your personal information to third parties.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-text-primary mb-3">
              Third-Party Services
            </h2>
            <p>
              Our service relies on third-party infrastructure for voice
              processing, hosting, and analytics. These providers have their own
              privacy policies and may process data on our behalf under
              contractual obligations to protect your information.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-text-primary mb-3">
              Data Retention
            </h2>
            <p>
              We retain personal information only as long as necessary to fulfill
              the purposes described in this policy or as required by law. Demo
              recordings are retained for a limited period for quality review and
              then deleted.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-text-primary mb-3">
              Your Rights
            </h2>
            <p>
              You may request access to, correction of, or deletion of your
              personal information at any time by contacting us. We will respond
              to verified requests within a reasonable timeframe.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-text-primary mb-3">
              Changes to This Policy
            </h2>
            <p>
              We may update this Privacy Policy periodically. Changes will be
              reflected by updating the effective date at the top of this page.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-text-primary mb-3">
              Contact
            </h2>
            <p>
              Questions about this policy? Reach us at{" "}
              <a
                href="mailto:Hakobyaiautomation@gmail.com"
                className="text-accent hover:text-accent-dim transition-colors duration-200 underline underline-offset-2"
              >
                Hakobyaiautomation@gmail.com
              </a>
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
