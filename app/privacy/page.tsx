import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | PNG Converter',
  description: 'Our privacy policy explains how we handle your data. All conversions are 100% client-side - your files never leave your device.',
};

export default function PrivacyPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto prose prose-lg">
        <h1>Privacy Policy</h1>
        <p className="text-gray-600">Last updated: May 08, 2026</p>

        <h2>Our Commitment to Privacy</h2>
        <p>
          At PNG Converter, we take your privacy seriously. This Privacy Policy explains how we collect, 
          use, and protect your information when you use our image conversion service.
        </p>

        <div className="bg-green-50 border-l-4 border-green-500 p-6 my-6 not-prose">
          <p className="font-bold text-green-900 text-lg mb-2">🔒 Your Files Are Safe</p>
          <p className="text-green-800">
            All image conversions happen 100% in your browser. Your files never leave your device and 
            are never uploaded to our servers. This ensures complete privacy and security.
          </p>
        </div>

        <h2>Information We Collect</h2>
        
        <h3>Information You Provide</h3>
        <p>
          We do not require you to create an account or provide personal information to use our service. 
          You can convert images completely anonymously.
        </p>

        <h3>Automatically Collected Information</h3>
        <p>When you visit our website, we may collect:</p>
        <ul>
          <li><strong>Usage Data:</strong> Pages visited, time spent, conversion counts (anonymized)</li>
          <li><strong>Device Information:</strong> Browser type, operating system, screen resolution</li>
          <li><strong>Log Data:</strong> IP address, access times, referring URLs</li>
          <li><strong>Cookies:</strong> Small text files for analytics and advertising (see Cookie Policy below)</li>
        </ul>

        <h2>How We Use Your Information</h2>
        <p>We use the collected information to:</p>
        <ul>
          <li>Provide and maintain our service</li>
          <li>Improve user experience and website functionality</li>
          <li>Analyze usage patterns and trends</li>
          <li>Display relevant advertisements</li>
          <li>Detect and prevent fraud or abuse</li>
          <li>Comply with legal obligations</li>
        </ul>

        <h2>Your Images and Files</h2>
        <p><strong>Important:</strong> We want to be crystal clear about this:</p>
        <ul>
          <li>✅ Your images are processed entirely in your browser</li>
          <li>✅ No images are uploaded to our servers</li>
          <li>✅ No images are stored, viewed, or accessed by us</li>
          <li>✅ No images are shared with third parties</li>
          <li>✅ When you close your browser, all data is gone</li>
        </ul>

        <h2>Third-Party Services</h2>
        
        <h3>Google Analytics</h3>
        <p>
          We use Google Analytics to analyze website traffic and usage. Google Analytics uses cookies 
          to collect anonymous information about how visitors use our site. This data is aggregated and 
          anonymized. You can opt-out by installing the Google Analytics Opt-out Browser Add-on.
        </p>

        <h3>Google AdSense</h3>
        <p>
          We use Google AdSense to display advertisements. Google may use cookies to serve ads based on 
          your prior visits to our website or other websites. You can opt-out of personalized advertising 
          by visiting Google's Ads Settings.
        </p>

        <h2>Cookies</h2>
        <p>We use cookies and similar technologies for:</p>
        <ul>
          <li><strong>Essential Cookies:</strong> Required for the website to function properly</li>
          <li><strong>Analytics Cookies:</strong> Help us understand how visitors use our site</li>
          <li><strong>Advertising Cookies:</strong> Used to display relevant ads</li>
        </ul>
        <p>
          You can control cookies through your browser settings. Note that disabling cookies may affect 
          website functionality.
        </p>

        <h2>Data Security</h2>
        <p>
          Since all image processing happens in your browser, there's no data transmission to our servers. 
          This provides the highest level of security for your files. For the limited data we do collect 
          (analytics, logs), we implement industry-standard security measures to protect it.
        </p>

        <h2>Children's Privacy</h2>
        <p>
          Our service is not directed to children under 13. We do not knowingly collect personal 
          information from children. If you're a parent and believe your child has provided us with 
          information, please contact us.
        </p>

        <h2>International Users</h2>
        <p>
          Our website is hosted in the United States. If you access our service from outside the US, 
          your information may be transferred to, stored, and processed in the US. By using our service, 
          you consent to this transfer.
        </p>

        <h2>Your Rights</h2>
        <p>Depending on your location, you may have the right to:</p>
        <ul>
          <li>Access your personal data</li>
          <li>Correct inaccurate data</li>
          <li>Request deletion of your data</li>
          <li>Object to data processing</li>
          <li>Request data portability</li>
          <li>Withdraw consent</li>
        </ul>

        <h2>GDPR Compliance</h2>
        <p>
          For users in the European Union, we comply with the General Data Protection Regulation (GDPR). 
          Since our service processes images client-side, we process minimal personal data. You have all 
          the rights outlined above under GDPR.
        </p>

        <h2>CCPA Compliance</h2>
        <p>
          For California residents, we comply with the California Consumer Privacy Act (CCPA). We do not 
          sell your personal information. You have the right to know what information we collect and 
          request its deletion.
        </p>

        <h2>Changes to This Privacy Policy</h2>
        <p>
          We may update this Privacy Policy from time to time. We will notify you of any changes by 
          posting the new Privacy Policy on this page and updating the "Last updated" date.
        </p>

        <h2>Contact Us</h2>
        <p>
          If you have any questions about this Privacy Policy, please contact us at:
        </p>
        <p>
          Email: privacy@jpeg-to-png-converter.com<br />
          Website: https://jpeg-to-png-converter.com/contact
        </p>

        <div className="bg-blue-50 border-l-4 border-blue-500 p-6 my-8 not-prose">
          <p className="font-bold text-blue-900 text-lg mb-2">Questions About Privacy?</p>
          <p className="text-blue-800 mb-4">
            Remember: Your images are never uploaded to any server. All processing happens in your browser, 
            ensuring complete privacy and security.
          </p>
          <a href="/" className="inline-block bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-dark transition">
            Start Converting Securely
          </a>
        </div>
      </div>
    </div>
  );
}
