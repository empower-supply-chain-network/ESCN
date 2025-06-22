import React from 'react';
import SectionTitle from '@/components/shared/SectionTitle';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';

const EventsPage: React.FC = () => {
  return (
    <div className="py-28 bg-white-linen">
      <div className="container max-w-6xl mx-auto px-4">
        <SectionTitle>Events</SectionTitle>
        <div className="mt-12 text-center">
          <Card className="max-w-2xl mx-auto">
            <CardHeader>
              <CardTitle>Upcoming Events</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg text-text-secondary">Our events calendar is coming soon!</p>
              <p className="mt-2 text-text-secondary">Check back for exciting workshops, networking mixers, and webinars.</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default EventsPage;