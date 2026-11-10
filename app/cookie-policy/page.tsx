import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Cookie Policy | Kaidev',
  description:
    'Cookie Policy explaining how Kaidev uses cookies on our website.',
};

export default function CookiePolicy() {
  return (
    <div className="container mx-auto max-w-4xl px-4 pt-32 pb-16 sm:px-6 md:pt-40 md:pb-24 lg:px-8">
      <div className="max-w-[68ch]">
        <h1 className="font-heading text-[2rem] leading-[1.1] font-semibold tracking-tight text-balance text-ink sm:text-[2.5rem] lg:text-[3rem]">
          Cookie Policy
        </h1>

        <p className="mt-4 text-sm text-ink-muted">
          Last updated: May 13, 2025
        </p>

        <div className="mt-8 space-y-10 border-t border-line pt-10 text-base leading-relaxed text-ink-muted md:space-y-12 md:text-lg">
          <section>
            <h2 className="mb-4 font-heading text-2xl font-semibold text-balance text-ink">
              1. Introduction
            </h2>
            <p className="mb-4">
              This Cookie Policy explains how Kaidev (&quot;we,&quot;
              &quot;our,&quot; or &quot;us&quot;) uses cookies and similar
              technologies on our website at{' '}
              <a
                href="https://kaidev.io"
                className="text-tealDeep underline decoration-tealDeep/40 underline-offset-4 transition-colors hover:decoration-tealDeep focus-visible:ring-2 focus-visible:ring-focus focus-visible:ring-offset-2 focus-visible:ring-offset-canvas focus-visible:outline-hidden"
              >
                https://kaidev.io
              </a>{' '}
              (&quot;the Website&quot;). This policy provides you with
              information about how we use cookies, what types of cookies we
              use, and how you can control them.
            </p>
            <p className="mb-4">
              Please read this Cookie Policy carefully. By continuing to browse
              or use our Website, you agree to our use of cookies as described
              in this policy.
            </p>
          </section>

          <section>
            <h2 className="mb-4 font-heading text-2xl font-semibold text-balance text-ink">
              2. What Are Cookies?
            </h2>
            <p className="mb-4">
              Cookies are small text files that are placed on your device
              (computer, tablet, or mobile) when you visit a website. Cookies
              are widely used to make websites work more efficiently and provide
              information to the website owners.
            </p>
            <p className="mb-4">
              Cookies help website owners understand how visitors interact with
              their website, remember your preferences, and provide you with a
              more personalized experience. They can also help ensure that
              advertisements you see online are more relevant to you and your
              interests.
            </p>
          </section>

          <section>
            <h2 className="mb-4 font-heading text-2xl font-semibold text-balance text-ink">
              3. Types of Cookies We Use
            </h2>
            <p className="mb-4">
              We use no cookies. different types of cookies for various
              purposes. These include:
            </p>

            <h3 className="mt-6 mb-3 font-heading text-xl font-semibold text-ink">
              Essential Cookies
            </h3>
            <p className="mb-4">
              These cookies are necessary for the Website to function properly.
              They enable basic functions like page navigation and access to
              secure areas of the Website. The Website cannot function properly
              without these cookies, and they can only be disabled by changing
              your browser preferences.
            </p>
          </section>

          <section>
            <h2 className="mb-4 font-heading text-2xl font-semibold text-balance text-ink">
              4. Managing and Disabling Cookies
            </h2>
            <p className="mb-4">
              You can control and manage cookies in various ways. Most web
              browsers allow you to manage your cookie preferences. You can:
            </p>
            <ul className="mb-4 list-disc space-y-2 pl-6 marker:text-kaidevTeal">
              <li>Delete cookies from your device</li>
              <li>
                Block cookies by activating the setting on your browser that
                allows you to refuse all or some cookies
              </li>
              <li>Set your browser to notify you when you receive a cookie</li>
            </ul>

            <p className="mb-4">
              Please note that if you choose to block or delete cookies, you may
              not be able to access certain areas or features of our Website,
              and some services may not function properly.
            </p>

            <p className="mb-4">
              Here are links to instructions on how to manage cookies in common
              web browsers:
            </p>
            <ul className="mb-4 list-disc space-y-2 pl-6 marker:text-kaidevTeal">
              <li>
                <a
                  href="https://support.google.com/chrome/answer/95647"
                  className="text-tealDeep underline decoration-tealDeep/40 underline-offset-4 transition-colors hover:decoration-tealDeep focus-visible:ring-2 focus-visible:ring-focus focus-visible:ring-offset-2 focus-visible:ring-offset-canvas focus-visible:outline-hidden"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Google Chrome
                </a>
              </li>
              <li>
                <a
                  href="https://support.mozilla.org/en-US/kb/clear-cookies-and-site-data-firefox"
                  className="text-tealDeep underline decoration-tealDeep/40 underline-offset-4 transition-colors hover:decoration-tealDeep focus-visible:ring-2 focus-visible:ring-focus focus-visible:ring-offset-2 focus-visible:ring-offset-canvas focus-visible:outline-hidden"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Mozilla Firefox
                </a>
              </li>
              <li>
                <a
                  href="https://support.apple.com/guide/safari/manage-cookies-and-website-data-sfri11471/mac"
                  className="text-tealDeep underline decoration-tealDeep/40 underline-offset-4 transition-colors hover:decoration-tealDeep focus-visible:ring-2 focus-visible:ring-focus focus-visible:ring-offset-2 focus-visible:ring-offset-canvas focus-visible:outline-hidden"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Safari
                </a>
              </li>
              <li>
                <a
                  href="https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09"
                  className="text-tealDeep underline decoration-tealDeep/40 underline-offset-4 transition-colors hover:decoration-tealDeep focus-visible:ring-2 focus-visible:ring-focus focus-visible:ring-offset-2 focus-visible:ring-offset-canvas focus-visible:outline-hidden"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Microsoft Edge
                </a>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="mb-4 font-heading text-2xl font-semibold text-balance text-ink">
              5. Changes to This Cookie Policy
            </h2>
            <p className="mb-4">
              We may update our Cookie Policy from time to time. We will notify
              you of any changes by posting the new Cookie Policy on this page
              and updating the &quot;Last updated&quot; date at the top of this
              policy.
            </p>
            <p className="mb-4">
              We encourage you to review this Cookie Policy periodically to stay
              informed about how we use cookies and similar technologies.
            </p>
          </section>

          <section>
            <h2 className="mb-4 font-heading text-2xl font-semibold text-balance text-ink">
              6. Contact Us
            </h2>
            <p className="mb-4">
              If you have any questions about our Cookie Policy, please contact
              us at:
            </p>
            <address className="mb-6 not-italic">
              <p>Kaidev</p>
              <p>Email: info@kaidev.io</p>
            </address>
          </section>
        </div>
      </div>
    </div>
  );
}
