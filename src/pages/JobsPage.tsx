// In src/pages/JobsPage.tsx

import React from 'react';
import SectionTitle from '@/components/shared/SectionTitle';
import { Card, CardContent, CardTitle } from '@/components/ui/Card';

const JobsPage: React.FC = () => {
  return (
    <div className="py-28 bg-white-linen">
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
  );
};

export default JobsPage;