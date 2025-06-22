"use client";

export default function TermsPage() {
  const motion = require("framer-motion").motion;
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 40 }}
      transition={{ duration: 0.5 }}
      className="max-w-3xl mx-auto px-4 py-16 min-h-[60vh] flex flex-col gap-6"
    >
      <h1 className="text-4xl font-bold mb-4">Terms of Service</h1>
      <p className="text-lg">By participating in OpenLabs, you agree to abide by our community guidelines and contribute respectfully. All content and code shared within OpenLabs should adhere to open-source best practices and legal requirements.</p>
      <h2 className="text-2xl font-semibold mt-6">Community Conduct</h2>
      <p className="ml-4">We expect all members to treat each other with respect and professionalism. Harassment, discrimination, or abuse of any kind will not be tolerated.</p>
      <h2 className="text-2xl font-semibold mt-6">Intellectual Property</h2>
      <p className="ml-4">All contributions to OpenLabs projects are considered open-source and may be used, modified, or distributed under the relevant project license.</p>
      <h2 className="text-2xl font-semibold mt-6">Changes to Terms</h2>
      <p className="ml-4">We reserve the right to update these terms at any time. Continued participation in OpenLabs constitutes acceptance of any changes.</p>
    </motion.section>
  );
} 