import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-forest-green text-text-on-dark text-center py-10">
      <div className="container mx-auto">
        <p className="opacity-90">&copy; 2024 Empower Supply Chain Network - ChainSpark.</p>
        <p className="mb-2 opacity-90">Empowering supply chain professionals worldwide.</p>
        <p className="mt-4">
          Contact: <a href="mailto:info@chainspark.org" className="text-white opacity-90 hover:opacity-100 hover:underline">info@chainspark.org</a>
        </p>
      </div>
    </footer>
  );
};