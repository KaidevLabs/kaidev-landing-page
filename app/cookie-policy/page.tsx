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
            We use different types of cookies for various purposes. These include:
          </p>
          
          <h3 className="text-xl font-semibold mb-3 font-heading">Essential Cookies</h3>
          <p className="mb-4">
            These cookies are necessary for the Website to function properly. They enable basic functions like page navigation and access to secure areas of the Website. The Website cannot function properly without these cookies, and they can only be disabled by changing your browser preferences.
          </p>
          
          <h3 className="text-xl font-semibold mb-3 font-heading">Analytical/Performance Cookies</h3>
          <p className="mb-4">
            These cookies allow us to recognize and count the number of visitors and see how visitors navigate around our Website. This helps us improve the way our Website works, for example, by ensuring that users can easily find what they are looking for.
          </p>
          
          <h3 className="text-xl font-semibold mb-3 font-heading">Functionality Cookies</h3>
          <p className="mb-4">
            These cookies enable the Website to provide enhanced functionality and personalization. They may be set by us or by third-party providers whose services we have added to our pages. If you do not allow these cookies, some or all of these functionalities may not work properly.
          </p>
          
          <h3 className="text-xl font-semibold mb-3 font-heading">Targeting/Advertising Cookies</h3>
          <p className="mb-4">
            These cookies are used to make advertising messages more relevant to you and your interests. They also perform functions like preventing the same advertisement from continuously reappearing, ensuring that advertisements are properly displayed, and in some cases, selecting advertisements based on your interests.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 font-heading">4. Specific Cookies We Use</h2>
          <p className="mb-4">
            Below is a detailed list of the cookies we use on our Website:
          </p>
          
          <div className="overflow-x-auto mb-6">
            <table className="min-w-full bg-white border border-gray-200">
              <thead>
                <tr>
                  <th className="px-4 py-2 border-b border-gray-200 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Cookie Name</th>
                  <th className="px-4 py-2 border-b border-gray-200 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                  <th className="px-4 py-2 border-b border-gray-200 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Purpose</th>
                  <th className="px-4 py-2 border-b border-gray-200 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Duration</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="px-4 py-2">session_id</td>
                  <td className="px-4 py-2">Essential</td>
                  <td className="px-4 py-2">Maintains user session state across page requests</td>
                  <td className="px-4 py-2">Session</td>
                </tr>
                <tr>
                  <td className="px-4 py-2">_ga</td>
                  <td className="px-4 py-2">Analytical</td>
                  <td className="px-4 py-2">Used by Google Analytics to distinguish users</td>
                  <td className="px-4 py-2">2 years</td>
                </tr>
                <tr>
                  <td className="px-4 py-2">_gid</td>
                  <td className="px-4 py-2">Analytical</td>
                  <td className="px-4 py-2">Used by Google Analytics to distinguish users</td>
                  <td className="px-4 py-2">24 hours</td>
                </tr>
                <tr>
                  <td className="px-4 py-2">_gat</td>
                  <td className="px-4 py-2">Analytical</td>
                  <td className="px-4 py-2">Used by Google Analytics to throttle request rate</td>
                  <td className="px-4 py-2">1 minute</td>
                </tr>
                <tr>
                  <td className="px-4 py-2">user_preferences</td>
                  <td className="px-4 py-2">Functionality</td>
                  <td className="px-4 py-2">Remembers user preferences such as language or theme settings</td>
                  <td className="px-4 py-2">1 year</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 font-heading">5. Third-Party Cookies</h2>
          <p className="mb-4">
            In addition to our own cookies, we may also use various third-party cookies to report usage statistics, deliver advertisements, and so on. These cookies may include:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Google Analytics cookies to help us analyze how our Website is used</li>
            <li>Social media cookies that allow you to share content from our Website on platforms like Facebook, Twitter, and LinkedIn</li>
            <li>Marketing cookies that help us deliver targeted advertising based on your browsing habits</li>
          </ul>
          <p className="mb-4">
            Please note that these third parties may have their own privacy policies and terms of service. We encourage you to review their policies when visiting their websites.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 font-heading">6. Managing and Disabling Cookies</h2>
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
          <h2 className="text-2xl font-semibold mb-4 font-heading">7. Cookie Consent</h2>
          <p className="mb-4">
            When you first visit our Website, we may ask for your consent to use cookies through a cookie banner. By clicking "Accept All," you consent to our use of all cookies as described in this policy. You can also choose to manage your preferences and accept only certain types of cookies.
          </p>
          <p className="mb-4">
            You can change your cookie preferences at any time by clicking on the "Cookie Settings" link in the footer of our Website.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 font-heading">8. Changes to This Cookie Policy</h2>
          <p className="mb-4">
            We may update our Cookie Policy from time to time. We will notify you of any changes by posting the new Cookie Policy on this page and updating the "Last updated" date at the top of this policy.
          </p>
          <p className="mb-4">
            We encourage you to review this Cookie Policy periodically to stay informed about how we use cookies and similar technologies.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 font-heading">9. Contact Us</h2>
          <p className="mb-4">
            If you have any questions about our Cookie Policy, please contact us at:
          </p>
          <address className="not-italic mb-6">
            <p>Kaidev</p>
            <p>Email: privacy@kaidev.com</p>
            <p>Phone: +1 (123) 456-7890</p>
          </address>
        </section>
      </div>
    </div>
  )
}

