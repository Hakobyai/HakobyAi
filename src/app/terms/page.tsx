import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Terms of Service for HakobyAI — AI-powered phone agent for HVAC companies.",
};

export default function TermsOfService() {
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
          Terms of Service
        </h1>
        <p className="text-sm text-text-muted mb-12">
          Effective January 1, 2025
        </p>

        <div className="space-y-10 text-text-secondary text-sm leading-relaxed">
          <section>
            <h2 className="text-lg font-semibold text-text-primary mb-3">
              Acceptance of Terms
            </h2>
            <p>
              By accessing hakobyai.com, submitting a demo request, or
              interacting with any HakobyAI voice agent, you agree to these
              Terms of Service. If you do not agree, please do not use our
              website or services.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-text-primary mb-3">
              Demos &amp; Evaluation Use
            </h2>
            <p>
              Demo interactions, including browser-based voice calls and sample
              recordings, are provided for evaluation purposes only. Demo
              sessions may be monitored or recorded for quality assurance and
              product improvement. Demos are provided &ldquo;as is&rdquo;
              without guarantees of availability, accuracy, or uninterrupted
              operation. Demo functionality may not reflect the full scope of a
              production deployment.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-text-primary mb-3">
              Intellectual Property
            </h2>
            <p>
              All software, AI models, voice configurations, prompts, workflows,
              documentation, and website content are the intellectual property of
              HakobyAI unless otherwise agreed in a signed written agreement. You
              may not copy, reproduce, redistribute, resell, reverse-engineer, or
              create derivative works from any part of the service or its
              underlying technology.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-text-primary mb-3">
              Fees &amp; Service Scope
            </h2>
            <p>
              Pricing, service scope, and performance expectations are defined in
              individual proposals or order forms agreed upon between HakobyAI
              and the customer. Certain functionality &mdash; including call
              handling, calendar integrations, and CRM syncing &mdash; depends on
              third-party systems managed by the customer. HakobyAI is not
              responsible for disruptions caused by customer-controlled systems
              or third-party providers.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-text-primary mb-3">
              Limitation of Liability
            </h2>
            <p>
              To the maximum extent permitted by applicable law, HakobyAI&apos;s
              total liability for any claims arising from or related to these
              Terms or the use of our services shall not exceed the amounts paid
              by you to HakobyAI in the twelve (12) months preceding the claim.
              In no event shall HakobyAI be liable for any indirect, incidental,
              special, consequential, or punitive damages, including but not
              limited to loss of revenue, lost profits, or loss of data.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-text-primary mb-3">
              Changes to These Terms
            </h2>
            <p>
              We may update these Terms from time to time. Material changes will
              be reflected by updating the effective date at the top of this
              page. Continued use of the service after changes constitutes
              acceptance of the revised Terms.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-text-primary mb-3">
              Contact
            </h2>
            <p>
              Questions about these Terms? Reach us at{" "}
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
