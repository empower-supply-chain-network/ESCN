import React from 'react';
import { Card } from '@/components/ui/Card'; // Make sure Card is imported

const DnaSection: React.FC = () => {
  return (
    <div className="space-y-12">
      {/* --- START: PERFECT DNA SECTION (DO NOT TOUCH) --- */}
      <div className="text-center">
        <h3 className="text-3xl font-bold text-forest-green">Our DNA - LIVE</h3>
        <p className="max-w-3xl mx-auto mt-4 text-lg text-text-secondary">
          To embody LIVE as our DNA, we are dedicated to fostering a dynamic and inclusive
          community that empowers individuals to light up their futures, embrace inclusivity,
          cultivate vitality, and achieve success in the supply chain industry.
        </p>
      </div>
      
      <div className="grid max-w-4xl grid-cols-1 gap-8 mx-auto md:grid-cols-2 lg:grid-cols-4">
        <div className="text-center">
          <div className="mx-auto flex items-center justify-center w-20 h-20 mb-4 text-4xl border-2 rounded-full border-forest-green">💡</div>
          <h4 className="text-xl font-semibold text-forest-green">Light</h4>
          <p className="mt-2 text-text-secondary">Illuminate the path for immigrant professionals in the supply chain industry.</p>
        </div>
        <div className="text-center">
          <div className="mx-auto flex items-center justify-center w-20 h-20 mb-4 text-4xl border-2 rounded-full border-forest-green">🌐</div>
          <h4 className="text-xl font-semibold text-forest-green">Inclusivity</h4>
          <p className="mt-2 text-text-secondary">Foster a welcoming community where diversity is celebrated, and every voice is valued.</p>
        </div>
        <div className="text-center">
          <div className="mx-auto flex items-center justify-center w-20 h-20 mb-4 text-4xl border-2 rounded-full border-forest-green">🌿</div>
          <h4 className="text-xl font-semibold text-forest-green">Vitality</h4>
          <p className="mt-2 text-text-secondary">Encourage continuous growth and innovation, fueling dynamic progress.</p>
        </div>
        <div className="text-center">
          <div className="mx-auto flex items-center justify-center w-20 h-20 mb-4 text-4xl border-2 rounded-full border-forest-green">🔗</div>
          <h4 className="text-xl font-semibold text-forest-green">Empowerment</h4>
          <p className="mt-2 text-text-secondary">Equip individuals with the tools and confidence to achieve their full potential.</p>
        </div>
      </div>
      {/* --- END: PERFECT DNA SECTION --- */}


      {/* --- START: NEW MISSION SECTION --- */}
      <Card className="p-6 text-center md:p-10">
        <h3 className="text-3xl font-bold text-forest-green">Our Mission</h3>
        <p className="max-w-3xl mx-auto mt-4 text-lg leading-relaxed text-text-secondary">
          Empower supply chain professionals with ChainSpark, driving growth through dynamic networking, innovative knowledge sharing, and fostering a vibrant, inclusive, and diverse community.
        </p>
        <div className="grid grid-cols-1 gap-8 mt-10 text-left md:grid-cols-3">
          <div className="flex items-start gap-4">
            <span className="text-3xl text-emerald-green">🚀</span>
            <p className="text-text-secondary">
              Empower your career as a supply chain professional with ChainSpark through meaningful networking, innovative knowledge sharing, and collaborative efforts within a community dedicated to your success.
            </p>
          </div>
          <div className="flex items-start gap-4">
            <span className="text-3xl text-emerald-green">✨</span>
            <p className="text-text-secondary">
              Empower every member with ChainSpark by providing resources, support, and growth opportunities for professional development within our community.
            </p>
          </div>
          <div className="flex items-start gap-4">
            <span className="text-3xl text-emerald-green">👥</span>
            <p className="text-text-secondary">
              Empower members through ChainSpark to create a vibrant and inclusive environment that champions diversity and inclusion within the supply chain network.
            </p>
          </div>
        </div>
      </Card>
      {/* --- END: NEW MISSION SECTION --- */}


      {/* --- START: NEW VISION SECTION --- */}
      <Card className="p-6 text-center text-white bg-emerald-green md:p-10">
        <h3 className="text-3xl font-bold">Our Vision</h3>
        <p className="max-w-3xl mx-auto mt-4 text-lg leading-relaxed opacity-95">
          To be the premier destination and leading community for supply chain professionals, empowering their growth and development through ChainSpark to drive industry innovation and excellence, contribute to global sustainability goals, and shape a more resilient world through transformative change.
        </p>
        <div className="grid grid-cols-1 gap-8 mt-10 text-left md:grid-cols-3">
          <div className="flex items-start gap-4">
            <span className="text-4xl">🎯</span>
            <div>
              <h4 className="text-lg font-semibold">Premier Destination</h4>
              <p className="opacity-90">To be the premier destination for supply chain professionals, recognized for driving industry innovation, excellence, and positive impact.</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <span className="text-4xl">🌍</span>
            <div>
              <h4 className="text-lg font-semibold">Catalyst for Change</h4>
              <p className="opacity-90">We envision a future where our community serves as a catalyst for transformative change, shaping the future of supply chain management and advancing global sustainability goals.</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <span className="text-4xl">🤝</span>
            <div>
              <h4 className="text-lg font-semibold">Thriving Network</h4>
              <p className="opacity-90">Through our collective efforts, we aim to build a thriving network that empowers individuals and organizations to achieve their full potential and contribute to a more resilient and sustainable world.</p>
            </div>
          </div>
        </div>
      </Card>
      {/* --- END: NEW VISION SECTION --- */}

    </div>
  );
};

export default DnaSection;