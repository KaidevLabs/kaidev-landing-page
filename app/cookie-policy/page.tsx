import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Cookie Policy | Kaidev",
  description: "Cookie Policy explaining how Kaidev uses cookies on our website."
}

export default function CookiePolicy() {
  return (
    <div className="container mx-auto px-4 pb-12 pt-24 max-w-4xl">
      <h1 className="text-4xl font-bold mb-8 font-heading">Cookie Policy</h1>

      <p className="text-lg mb-6">
        Last updated: May 13, 2025
      </p>

      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-semibold mb-4 font-heading">1. Introduction</h2>
          <p className="mb-4">
            This Cookie Policy explains how Kaidev ("we," "our," or "us") uses cookies and similar technologies on our website at <a href="https://kaidev.com" className="text-blue-600 hover:underline">https://kaidev.com</a> ("the Website"). This policy provides you with information about how we use cookies, what types of cookies we use, and how you can control them.
          </p>
          <p className="mb-4">
            Please read this Cookie Policy carefully. By continuing to browse or use our Website, you agree to our use of cookies as described in this policy.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 font-heading">2. What Are Cookies?</h2>
          <p className="mb-4">
            Cookies are small text files that are placed on your device (computer, tablet, or mobile) when you visit a website. Cookies are widely used to make websites work more efficiently and provide information to the website owners.
          </p>
          <p className="mb-4">
            Cookies help website owners understand how visitors interact with their website, remember your preferences, and provide you with a more personalized experience. They can also help ensure that advertisements you see online are more relevant to you and your interests.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 font-heading">3. Types of Cookies We Use</h2>
          <p className="mb-4">
            We use no cookies. different types of cookies for various purposes. These include:
          </p>

          <h3 className="text-xl font-semibold mb-3 font-heading">Essential Cookies</h3>
          <p className="mb-4">
            These cookies are necessary for the Website to function properly. They enable basic functions like page navigation and access to secure areas of the Website. The Website cannot function properly without these cookies, and they can only be disabled by changing your browser preferences.
          </p>

        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 font-heading">4. Managing and Disabling Cookies</h2>
          <p className="mb-4">
            You can control and manage cookies in various ways. Most web browsers allow you to manage your cookie preferences. You can:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Delete cookies from your device</li>
            <li>Block cookies by activating the setting on your browser that allows you to refuse all or some cookies</li>
            <li>Set your browser to notify you when you receive a cookie</li>
          </ul>

          <p className="mb-4">
            Please note that if you choose to block or delete cookies, you may not be able to access certain areas or features of our Website, and some services may not function properly.
          </p>

          <p className="mb-4">
            Here are links to instructions on how to manage cookies in common web browsers:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><a href="https://support.google.com/chrome/answer/95647" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Google Chrome</a></li>
            <li><a href="https://support.mozilla.org/en-US/kb/clear-cookies-and-site-data-firefox" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Mozilla Firefox</a></li>
            <li><a href="https://support.apple.com/guide/safari/manage-cookies-and-website-data-sfri11471/mac" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Safari</a></li>
            <li><a href="https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Microsoft Edge</a></li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 font-heading">5. Changes to This Cookie Policy</h2>
          <p className="mb-4">
            We may update our Cookie Policy from time to time. We will notify you of any changes by posting the new Cookie Policy on this page and updating the "Last updated" date at the top of this policy.
          </p>
          <p className="mb-4">
            We encourage you to review this Cookie Policy periodically to stay informed about how we use cookies and similar technologies.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 font-heading">6. Contact Us</h2>
          <p className="mb-4">
            If you have any questions about our Cookie Policy, please contact us at:
          </p>
          <address className="not-italic mb-6">
            <p>Kaidev</p>
            <p>Email: info@kaidev.com</p>
          </address>
        </section>
      </div>
    </div>
  )
}

