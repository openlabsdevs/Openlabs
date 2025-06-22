"use client";

export default function LearnMorePage() {
  const motion = require("framer-motion").motion;
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 40 }}
      transition={{ duration: 0.5 }}
      className="max-w-3xl mx-auto mt-12 px-4 py-16 min-h-[60vh] flex flex-col gap-6"
    >
      <h1 className="text-4xl font-bold mb-4">Learn More About OpenLabs</h1>
      <div className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold">What is OpenLabs?</h2>
        <p className="ml-4">OpenLabs is a forward-thinking, student-driven initiative committed to fostering a culture of open-source contribution and technical excellence. It serves as a collaborative ecosystem where aspiring developers, designers, and technologists converge to conceptualize, develop, and maintain impactful software projects. The club functions not merely as a learning hub, but as a launchpad for real-world innovation.</p>
        <h2 className="text-2xl font-semibold">Why Join OpenLabs?</h2>
        <p className="ml-4">Participation in OpenLabs offers a unique opportunity to engage in practical, high-impact work that transcends traditional academic boundaries. Members are immersed in a dynamic environment that emphasizes collaborative development, continuous learning, and the application of industry-relevant tools and methodologies. The community encourages the exploration of emerging technologies, peer-to-peer mentorship, and active contribution to scalable solutions that serve broader technical and societal needs.</p>
        <h2 className="text-2xl font-semibold">Our Mission</h2>
        <p className="ml-4">OpenLabs exists to empower the next generation of open-source contributors by cultivating a mindset of curiosity, responsibility, and excellence. We aim to bridge the gap between theoretical knowledge and applied skills by facilitating access to collaborative projects, community-driven learning pathways, and leadership opportunities in the realm of open development.</p>
        <h2 className="text-2xl font-semibold">What Distinguishes OpenLabs?</h2>
        <ul className="ml-8 list-disc">
          <li>Active engagement in end-to-end software development cycles on live repositories.</li>
          <li>A democratically structured, community-first approach to decision-making and innovation.</li>
          <li>An emphasis on experiential learning through real-time problem-solving and agile workflows.</li>
          <li>Recognition through publicly documented contributions and collaborative authorship in open platforms.</li>
        </ul>
      </div>
    </motion.section>
  );
} 