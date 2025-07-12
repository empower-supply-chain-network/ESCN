// In src/pages/EventsPage.tsx

import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { AppDispatch } from '@/store/store';
import { useTypedSelector } from '@/hooks/useTypedSelector';
import { fetchAllData } from '@/store/slices/dataSlice';
import { PastEvent } from '@/types';
import SectionTitle from '@/components/shared/SectionTitle';
import Loader from '@/components/shared/Loader';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';

// A new component for the grid view
const PastEventGridCard: React.FC<{ event: PastEvent }> = ({ event }) => (
  <Link to={`/events/${event.id}`}>
    <Card className="group overflow-hidden h-full flex flex-col cursor-pointer hover:shadow-xl transition-shadow duration-300">
      <div className="overflow-hidden">
        <img 
          src={event.coverImageUrl} 
          alt={event.title}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <CardHeader>
        <p className="text-sm font-semibold text-emerald-green">{event.date}</p>
        <CardTitle className="text-xl">{event.title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-text-secondary">{event.description}</p>
      </CardContent>
    </Card>
  </Link>
);

const EventsPage: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { pastEvents, status, error }_id = useTypedSelector((state) => state.data);

  useEffect(() => {
    if (status !== 'succeeded') {
      dispatch(fetchAllData());
    }
  }, [status, dispatch]);

  return (
    <div className="py-28 bg-white-linen">
      <div className="container max-w-6xl mx-auto px-4 space-y-20">
        
        {/* Upcoming Events Section */}
        <div>
          <SectionTitle>Upcoming Events</SectionTitle>
          <Card className="max-w-2xl p-8 mx-auto mt-8 text-center">
            <CardTitle>Stay Tuned!</CardTitle>
            <CardContent className="pt-4">
              <p className="text-lg text-text-secondary">Our calendar of upcoming workshops, networking mixers, and webinars is being prepared.</p>
              <p className="mt-2 text-text-secondary">Check back soon for exciting new opportunities!</p>
            </CardContent>
          </Card>
        </div>

        {/* Past Events Section */}
        <div>
          <SectionTitle>Past Events Showcase</SectionTitle>
          <div className="mt-8">
            {status === 'loading' && <Loader />}
            {status === 'failed' && <p className="text-center text-red-500">Error: {error}</p>}
            {status === 'succeeded' && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {pastEvents.map(event => <PastEventGridCard key={event.id} event={event} />)}
              </div>
            )}
          </div>
        </div>

      </div>
    </div>
  );
};

export default EventsPage;