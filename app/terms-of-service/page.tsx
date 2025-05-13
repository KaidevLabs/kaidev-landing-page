import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Terms of Service | Kaidev",
  description: "Terms of Service for Kaidev website and services."
}

export default function TermsOfService() {
  return (
    <div className="container mx-auto px-4 pb-12 pt-24 max-w-4xl">
      <h1 className="text-4xl font-bold mb-8 font-heading">Terms of Service</h1>
      
      <p className="text-lg mb-6">
        Last updated: May 13, 2025
      </p>

      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-semibold mb-4 font-heading">1. Acceptance of Terms</h2>
          <p className="mb-4">
            By accessing or using the website at <a href="https://kaidev.com" className="text-blue-600 hover:underline">https://kaidev.com</a> ("the Service"), you agree to be bound by these Terms of Service ("Terms"). If you disagree with any part of the terms, you may not access the Service.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 font-heading">2. Description of Service</h2>
          <p className="mb-4">
            Kaidev provides software development and code refactoring services. We help businesses improve their existing software, develop new applications, and implement best practices in their development workflows.
          </p>
          <p className="mb-4">
            Our website provides information about our services, allows clients to contact us for inquiries, and showcases our previous work and expertise.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 font-heading">3. Intellectual Property</h2>
          <p className="mb-4">
            The Service and its original content, features, and functionality are and will remain the exclusive property of Kaidev and its licensors. The Service is protected by copyright, trademark, and other laws of both the United States and foreign countries.
          </p>
          <p className="mb-4">
            Our trademarks and trade dress may not be used in connection with any product or service without the prior written consent of Kaidev.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 font-heading">4. User Content</h2>
          <p className="mb-4">
            Our Service may allow you to post, link, store, share and otherwise make available certain information, text, graphics, videos, or other material ("User Content"). You are responsible for the User Content that you post on or through the Service, including its legality, reliability, and appropriateness.
          </p>
          <p className="mb-4">
            By posting User Content on or through the Service, you represent and warrant that:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>The User Content is yours (you own it) or you have the right to use it and grant us the rights and license as provided in these Terms.</li>
            <li>The posting of your User Content on or through the Service does not violate the privacy rights, publicity rights, copyrights, contract rights or any other rights of any person.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 font-heading">5. Links to Other Websites</h2>
          <p className="mb-4">
            Our Service may contain links to third-party websites or services that are not owned or controlled by Kaidev.
          </p>
          <p className="mb-4">
            Kaidev has no control over, and assumes no responsibility for, the content, privacy policies, or practices of any third-party websites or services. You further acknowledge and agree that Kaidev shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with the use of or reliance on any such content, goods, or services available on or through any such websites or services.
          </p>
          <p className="mb-4">
            We strongly advise you to read the terms and conditions and privacy policies of any third-party websites or services that you visit.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 font-heading">6. Termination</h2>
          <p className="mb-4">
            We may terminate or suspend your access to the Service immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.
          </p>
          <p className="mb-4">
            All provisions of the Terms which by their nature should survive termination shall survive termination, including, without limitation, ownership provisions, warranty disclaimers, indemnity, and limitations of liability.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 font-heading">7. Limitation of Liability</h2>
          <p className="mb-4">
            In no event shall Kaidev, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Your access to or use of or inability to access or use the Service;</li>
            <li>Any conduct or content of any third party on the Service;</li>
            <li>Any content obtained from the Service; and</li>
            <li>Unauthorized access, use, or alteration of your transmissions or content, whether based on warranty, contract, tort (including negligence), or any other legal theory, whether or not we have been informed of the possibility of such damage.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 font-heading">8. Disclaimer</h2>
          <p className="mb-4">
            Your use of the Service is at your sole risk. The Service is provided on an "AS IS" and "AS AVAILABLE" basis. The Service is provided without warranties of any kind, whether express or implied, including, but not limited to, implied warranties of merchantability, fitness for a particular purpose, non-infringement, or course of performance.
          </p>
          <p className="mb-4">
            Kaidev does not warrant that: (a) the Service will function uninterrupted, secure, or available at any particular time or location; (b) any errors or defects will be corrected; (c) the Service is free of viruses or other harmful components; or (d) the results of using the Service will meet your requirements.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 font-heading">9. Governing Law</h2>
          <p className="mb-4">
            These Terms shall be governed and construed in accordance with the laws of the United States, without regard to its conflict of law provisions.
          </p>
          <p className="mb-4">
            Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights. If any provision of these Terms is held to be invalid or unenforceable by a court, the remaining provisions of these Terms will remain in effect.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 font-heading">10. Changes to Terms</h2>
          <p className="mb-4">
            We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will try to provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.
          </p>
          <p className="mb-4">
            By continuing to access or use our Service after those revisions become effective, you agree to be bound by the revised terms. If you do not agree to the new terms, please stop using the Service.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 font-heading">11. Contact Us</h2>
          <p className="mb-4">
            If you have any questions about these Terms, please contact us at:
          </p>
          <address className="not-italic mb-6">
            <p>Kaidev</p>
            <p>Email: legal@kaidev.com</p>
            <p>Phone: +1 (123) 456-7890</p>
          </address>
        </section>
      </div>
    </div>
  )
}

