import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Privacy Policy | Kaidev",
  description: "Privacy Policy for Kaidev website and services."
}

export default function PrivacyPolicy() {
  return (
    <div className="container mx-auto px-4 pb-12 pt-24 max-w-4xl">
      <h1 className="text-4xl font-bold mb-8 font-heading">Privacy Policy</h1>

      <p className="text-lg mb-6">
        Last updated: May 13, 2025
      </p>

      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-semibold mb-4 font-heading">1. Introduction</h2>
          <p className="mb-4">
            Welcome to Kaidev ("we," "our," or "us"). We are committed to protecting your privacy and personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
          </p>
          <p className="mb-4">
            Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 font-heading">2. Information We Collect</h2>

          <h3 className="text-xl font-semibold mb-3 font-heading">Personal Information</h3>
          <p className="mb-4">
            We may collect personal information that you voluntarily provide to us when you express an interest in obtaining information about us or our products and services, when you participate in activities on the website, or otherwise when you contact us. The personal information we collect may include:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Name and contact information (email address, phone number)</li>
            <li>Business information (company name, job title)</li>
            <li>Content of messages you send to us</li>
            <li>Any other information you choose to provide</li>
          </ul>

          <h3 className="text-xl font-semibold mb-3 font-heading">Automatically Collected Information</h3>
          <p className="mb-4">
            When you visit our website, we may automatically collect certain information about your device and usage patterns. This information may include:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>IP address and browser type</li>
            <li>Device type and operating system</li>
            <li>Pages visited and time spent on those pages</li>
            <li>Referring website or source through which you accessed our site</li>
            <li>Other diagnostic data</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 font-heading">3. How We Use Your Information</h2>
          <p className="mb-4">
            We use the information we collect in various ways, including to:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Provide, operate, and maintain our website and services</li>
            <li>Improve, personalize, and expand our website and services</li>
            <li>Understand and analyze how you use our website</li>
            <li>Develop new products, services, features, and functionality</li>
            <li>Communicate with you, including for customer service, updates, and marketing purposes</li>
            <li>Process transactions and send related information</li>
            <li>Protect against fraud and unauthorized access</li>
            <li>Comply with legal obligations</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 font-heading">4. Cookies and Other Tracking Technologies</h2>
          <p className="mb-4">
            We may use cookies and similar tracking technologies to collect information about your activities on our website. Cookies are small data files that are placed on your device when you visit a website. They help us improve our website and your experience, analyze website usage, and customize content.
          </p>
          <p className="mb-4">
            You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our website. For more information about cookies, please see our Cookie Policy.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 font-heading">5. Third-Party Disclosure</h2>
          <p className="mb-4">
            We may share your information with third parties in the following situations:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>With service providers who assist us in operating our website and conducting our business</li>
            <li>With business partners with whom we jointly offer products or services</li>
            <li>In connection with a merger, sale, or acquisition of all or a portion of our company</li>
            <li>When we believe disclosure is necessary to protect our rights, protect your safety or the safety of others, investigate fraud, or respond to a government request</li>
            <li>If required to do so by law or in response to valid legal processes</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 font-heading">6. Data Security</h2>
          <p className="mb-4">
            We implement reasonable precautions and follow industry best practices to protect your personal information from unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 font-heading">7. Your Rights</h2>
          <p className="mb-4">
            Depending on your location, you may have certain rights regarding your personal information, including:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>The right to access and receive a copy of your personal information</li>
            <li>The right to rectify or update your personal information</li>
            <li>The right to erase your personal information</li>
            <li>The right to restrict processing of your personal information</li>
            <li>The right to object to processing of your personal information</li>
            <li>The right to data portability</li>
            <li>The right to withdraw consent</li>
          </ul>
          <p className="mb-4">
            To exercise these rights, please contact us using the information provided in the "Contact Us" section below.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 font-heading">8. Children's Privacy</h2>
          <p className="mb-4">
            Our website is not intended for children under the age of 16. We do not knowingly collect personal information from children under 16. If you are a parent or guardian and believe that your child has provided us with personal information, please contact us so that we can take necessary actions.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 font-heading">9. Changes to This Privacy Policy</h2>
          <p className="mb-4">
            We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date. You are advised to review this Privacy Policy periodically for any changes.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 font-heading">10. Contact Us</h2>
          <p className="mb-4">
            If you have any questions about this Privacy Policy, please contact us at:
          </p>
          <address className="not-italic mb-6">
            <p>Kaidev</p>
            <p>Email: info@kaidev.io</p>
          </address>
        </section>
      </div>
    </div>
  )
}

