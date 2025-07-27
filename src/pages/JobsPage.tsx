import React from 'react';
import SectionTitle from '@/components/shared/SectionTitle';
import { Card, CardContent, CardTitle } from '@/components/ui/Card';

// --- 1. IMPORT THE NEW BANNER IMAGE ---
import jobBannerImage from '@/assets/images/Job-banner.png';

const JobsPage: React.FC = () => {
  return (
    <>
        {/* --- 2. NEW BANNER SECTION --- */}
        <section 
            className="relative flex items-center justify-center w-full h-[50vh] text-center bg-cover" // bg-center is now controlled by style
            style={{ 
                backgroundImage: `url(${jobBannerImage})`,
                backgroundPosition: 'center 30%' // This shifts the image down
            }}
        >
            <div className="absolute inset-0 bg-black/50" /> {/* Dark overlay for readability */}
            <div className="relative z-10 p-4 text-white">
                <h1 className="text-5xl font-bold md:text-6xl" style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.5)' }}>
                    Connecting Talent with Opportunity
                </h1>
                <p className="mt-4 text-xl md:text-2xl max-w-3xl mx-auto" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.5)' }}>
                    Explore exclusive job openings from our trusted network of partners in the Canadian supply chain.
                </p>
            </div>
        </section>

        {/* --- 3. EXISTING CONTENT SECTION (with adjusted padding) --- */}
        <div className="py-20 bg-white-linen">
          <div className="container max-w-6xl mx-auto px-4">
            <SectionTitle>Career Opportunities</SectionTitle>
            <p className="text-center max-w-3xl mx-auto mt-4 text-lg text-text-secondary">
              Explore current job openings in the supply chain industry shared by our network and partners.
            </p>
            <div className="mt-12 text-center">
              <Card className="max-w-2xl mx-auto p-8">
                  <CardTitle>Coming Soon!</CardTitle>
                  <CardContent className="pt-4">
                    <p className="text-text-secondary">We are actively working with our partners to bring you new opportunities. Please check back soon!</p>
                  </CardContent>
              </Card>
            </div>
          </div>
        </div>
    </>
  );
};

export default JobsPage;