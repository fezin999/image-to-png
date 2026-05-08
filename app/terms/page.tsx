import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service | PNG Converter',
  description: 'Terms of Service for using our free online image converter. Learn about usage rights, limitations, and guidelines.',
};

export default function TermsPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto prose prose-lg">
        <h1>Terms of Service</h1>
        <p className="text-gray-600">Last updated: May 08, 2026</p>

        <h2>Agreement to Terms</h2>
        <p>
          By accessing and using PNG Converter ("Service", "we", "us", "our"), you agree to be bound 
          by these Terms of Service ("Terms"). If you disagree with any part of these terms, you may 
          not access the Service.
        </p>

        <h2>Description of Service</h2>
        <p>
          PNG Converter is a free online tool that allows users to convert images between various 
          formats (including PNG, JPEG, JPG, WEBP, GIF, BMP, TIFF, SVG, ICO, and HEIC) entirely 
          within their web browser using client-side processing.
        </p>

        <h2>Use License</h2>
        
        <h3>Grant of License</h3>
        <p>
          We grant you a limited, non-exclusive, non-transferable, revocable license to use our 
          Service for personal or commercial purposes, subject to these Terms.
        </p>

        <h3>Restrictions</h3>
        <p>You agree NOT to:</p>
        <ul>
          <li>Modify, copy, or create derivative works of our Service</li>
          <li>Reverse engineer, decompile, or disassemble the Service</li>
          <li>Remove any copyright or proprietary notices</li>
          <li>Use the Service for any illegal or unauthorized purpose</li>
          <li>Attempt to interfere with the Service's operation</li>
          <li>Use automated tools to access the Service (bots, scrapers, etc.)</li>
          <li>Frame or mirror any part of the Service without permission</li>
        </ul>

        <h2>User Content and Files</h2>
        
        <h3>Your Files</h3>
        <p>
          All image files you convert remain your property. Since conversion happens entirely in your 
          browser (client-side), your files are never uploaded to our servers, stored, or accessed by us.
        </p>

        <h3>Responsibility</h3>
        <p>You are solely responsible for:</p>
        <ul>
          <li>The content of images you convert</li>
          <li>Ensuring you have the rights to use the images</li>
          <li>Complying with applicable laws and third-party rights</li>
          <li>Any consequences of converting copyrighted or illegal content</li>
        </ul>

        <h3>Prohibited Content</h3>
        <p>You agree not to convert images that:</p>
        <ul>
          <li>Violate copyright, trademark, or other intellectual property rights</li>
          <li>Contain illegal, harmful, or offensive content</li>
          <li>Violate privacy or publicity rights</li>
          <li>Contain malware or malicious code</li>
        </ul>

        <h2>Service Availability</h2>
        <p>
          We strive to keep the Service available 24/7, but we do not guarantee uninterrupted access. 
          We may:
        </p>
        <ul>
          <li>Suspend or terminate the Service temporarily for maintenance</li>
          <li>Modify or discontinue features without notice</li>
          <li>Impose limits on certain features or restrict access</li>
        </ul>

        <h2>Disclaimer of Warranties</h2>
        <p>
          THE SERVICE IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, 
          EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO:
        </p>
        <ul>
          <li>Warranties of merchantability or fitness for a particular purpose</li>
          <li>Warranties that the Service will be error-free or uninterrupted</li>
          <li>Warranties regarding the accuracy or reliability of results</li>
          <li>Warranties that defects will be corrected</li>
        </ul>
        <p>
          You use the Service at your own risk. We do not warrant that the Service will meet your 
          requirements or that conversion results will be error-free.
        </p>

        <h2>Limitation of Liability</h2>
        <p>
          TO THE MAXIMUM EXTENT PERMITTED BY LAW, WE SHALL NOT BE LIABLE FOR ANY:
        </p>
        <ul>
          <li>Indirect, incidental, special, consequential, or punitive damages</li>
          <li>Loss of profits, data, use, or other intangible losses</li>
          <li>Damages resulting from unauthorized access to your files (since they never leave your device)</li>
          <li>Damages resulting from interruption or cessation of Service</li>
          <li>Damages caused by errors, mistakes, or inaccuracies in conversions</li>
        </ul>
        <p>
          Our total liability for any claim arising from use of the Service shall not exceed $100 USD.
        </p>

        <h2>Indemnification</h2>
        <p>
          You agree to indemnify and hold us harmless from any claims, damages, losses, liabilities, 
          and expenses (including legal fees) arising from:
        </p>
        <ul>
          <li>Your use of the Service</li>
          <li>Your violation of these Terms</li>
          <li>Your violation of any rights of third parties</li>
          <li>Content you convert using the Service</li>
        </ul>

        <h2>Third-Party Services</h2>
        <p>
          Our Service may contain links to third-party websites or services (including Google Analytics 
          and Google AdSense). We are not responsible for:
        </p>
        <ul>
          <li>Content, privacy policies, or practices of third-party services</li>
          <li>Any damages resulting from use of third-party services</li>
        </ul>
        <p>
          We recommend reviewing the terms and privacy policies of any third-party services you access.
        </p>

        <h2>Advertising</h2>
        <p>
          We display advertisements through Google AdSense and other advertising partners. These ads may:
        </p>
        <ul>
          <li>Use cookies to serve personalized ads</li>
          <li>Collect anonymous usage data</li>
          <li>Redirect to third-party websites</li>
        </ul>
        <p>
          We are not responsible for the content of advertisements or any damages resulting from 
          interactions with ads.
        </p>

        <h2>Intellectual Property</h2>
        <p>
          All content, features, and functionality of the Service (excluding user-generated content) 
          are owned by us and protected by copyright, trademark, and other intellectual property laws.
        </p>
        <p>
          Our trademarks and trade dress may not be used without our prior written permission.
        </p>

        <h2>Termination</h2>
        <p>
          We may terminate or suspend your access to the Service immediately, without prior notice, 
          for any reason, including:
        </p>
        <ul>
          <li>Violation of these Terms</li>
          <li>Fraudulent, abusive, or illegal activity</li>
          <li>At our sole discretion</li>
        </ul>
        <p>
          Upon termination, your right to use the Service will immediately cease.
        </p>

        <h2>Governing Law</h2>
        <p>
          These Terms shall be governed by and construed in accordance with the laws of the United States, 
          without regard to conflict of law provisions.
        </p>

        <h2>Dispute Resolution</h2>
        <p>
          Any dispute arising from these Terms or the Service shall be resolved through binding arbitration 
          in accordance with the American Arbitration Association's rules.
        </p>

        <h2>Changes to Terms</h2>
        <p>
          We reserve the right to modify these Terms at any time. We will notify users of material changes 
          by updating the "Last updated" date and posting the new Terms on this page.
        </p>
        <p>
          Your continued use of the Service after changes constitutes acceptance of the new Terms.
        </p>

        <h2>Severability</h2>
        <p>
          If any provision of these Terms is found to be unenforceable or invalid, that provision will be 
          limited or eliminated to the minimum extent necessary, and the remaining provisions will remain 
          in full force and effect.
        </p>

        <h2>Entire Agreement</h2>
        <p>
          These Terms, along with our Privacy Policy, constitute the entire agreement between you and us 
          regarding the Service and supersede all prior agreements.
        </p>

        <h2>Contact Us</h2>
        <p>
          If you have any questions about these Terms, please contact us at:
        </p>
        <p>
          Email: legal@jpeg-to-png-converter.com<br />
          Website: https://jpeg-to-png-converter.com/contact
        </p>

        <div className="bg-primary/10 rounded-xl p-6 my-8 not-prose">
          <p className="font-bold text-gray-900 text-lg mb-2">Ready to Convert Images?</p>
          <p className="text-gray-700 mb-4">
            By using our Service, you agree to these Terms. Start converting images for free with 
            complete privacy and security.
          </p>
          <a href="/" className="inline-block bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-dark transition">
            Start Converting Now
          </a>
        </div>
      </div>
    </div>
  );
}
