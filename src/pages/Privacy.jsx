import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="privacy-policy container mx-auto px-6 py-10">
      <h1 className="text-3xl font-bold mb-6">Ilefund Privacy Policy</h1>

      <p><strong>Document amended:</strong> December 22, 2025</p>

      <section className="mt-8">
        <h2 className="text-2xl font-semibold mt-4">1. Introduction</h2>
        <p>
          Welcome to <strong>Ilefund</strong>. This Privacy Policy explains how we
          collect, use, disclose, process, store, and protect your personal
          information when you use our website, mobile apps, and digital services.
          By using our Services, you agree to the terms of this Policy.
        </p>
      </section>

      <section className="mt-8">
        <h2 className="text-2xl font-semibold">2. Consent</h2>
        <p>
          By using our Services or providing your information to Ilefund, you consent
          to the processing of your personal data as described in this Policy.
        </p>
      </section>

      <section className="mt-8">
        <h2 className="text-2xl font-semibold">3. Information We Collect</h2>
        
        <h3 className="text-xl font-semibold mt-4">3.1 Personal Data You Provide</h3>
        <p>We collect personal information such as:</p>
        <ul className="list-disc ml-6">
          <li>Full name</li>
          <li>Email address</li>
          <li>Phone number</li>
          <li>Date of birth</li>
          <li>Residential address</li>
          <li>Bank and identity details</li>
        </ul>

        <h3 className="text-xl font-semibold mt-4">3.2 Account & Transaction Data</h3>
        <p>
          We collect details about your financial transactions, savings goals, and
          investment activities.
        </p>

        <h3 className="text-xl font-semibold mt-4">3.3 Automatically Collected Data</h3>
        <p>
          We automatically collect data such as device details, usage logs, IP address,
          cookies, and location data (with consent).
        </p>
      </section>

      <section className="mt-8">
        <h2 className="text-2xl font-semibold">4. How We Use Your Information</h2>
        <p>We use your data to:</p>
        <ul className="list-disc ml-6">
          <li>Operate and improve our Services</li>
          <li>Complete transactions</li>
          <li>Verify identity and prevent fraud</li>
          <li>Send notifications and updates</li>
          <li>Provide personalized content</li>
        </ul>
      </section>

      {/* Continue with other sections similarly */}

      <section className="mt-8">
        <h2 className="text-2xl font-semibold">Contact Us</h2>
        <p>
          If you have questions about this Policy, contact us at:
          <br />
          <strong>Email:</strong> privacy@ilefund.com
          <br />
          <strong>Address:</strong> Data Protection Officer, Ilefund, Abuja, Nigeria
        </p>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
