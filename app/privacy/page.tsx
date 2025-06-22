"use client";

export default function PrivacyPage() {
  const motion = require("framer-motion").motion;
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 40 }}
      transition={{ duration: 0.5 }}
      className="max-w-3xl mx-auto px-4 py-16 min-h-[60vh] flex flex-col gap-6"
    >
      <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
      <p className="text-lg">OpenLabs is committed to protecting your privacy. We do not collect personal information unless you voluntarily provide it. Any data collected is used solely for the purpose of improving our community and services.</p>
      <h2 className="text-2xl font-semibold mt-6">Information Collection</h2>
      <p className="ml-4">We may collect information you provide directly, such as when you join our community or participate in projects. We do not share your information with third parties except as required by law.</p>
      <h2 className="text-2xl font-semibold mt-6">Cookies</h2>
      <p className="ml-4">Our website may use cookies to enhance your experience. You can disable cookies in your browser settings.</p>
      <h2 className="text-2xl font-semibold mt-6">Contact</h2>
      <p className="ml-4">If you have any questions about our privacy policy, please contact us through the channels provided on our website.</p>
    </motion.section>
  );
} 