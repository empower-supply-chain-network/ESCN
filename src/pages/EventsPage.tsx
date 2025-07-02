import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '@/store/store';
import { useTypedSelector } from '@/hooks/useTypedSelector';
import { fetchAllData } from '@/store/slices/dataSlice';
import { PastEvent } from '@/types';
import SectionTitle from '@/components/shared/SectionTitle';
import Loader from '@/components/shared/Loader';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';

// A new component to display a single past event
const PastEventCard: React.FC<{ event: PastEvent }> = ({ event }) => (
  <Card className="overflow-hidden">
    <CardHeader>
      <p className="text-sm font-semibold text-emerald-green">{event.date}</p>
      <CardTitle className="text-2xl">{event.title}</CardTitle>
    </CardHeader>
    <CardContent>
      <p className="mb-6 text-text-secondary">{event.description}</p>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
        {event.imageUrls.map((url, index) => (
          <img
            key={index}
            src={url}
            alt={`${event.title} photo ${index + 1}`}
            className="object-cover w-full h-40 rounded-lg shadow-md"
          />
        ))}
      </div>
    </CardContent>
  </Card>
);

const EventsPage: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { pastEvents, status, error } = useTypedSelector((state) => state.data);

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
          <div className="mt-8 space-y-12">
            {status === 'loading' && <Loader />}
            {status === 'failed' && <p className="text-center text-red-500">Error: {error}</p>}
            {status === 'succeeded' && (
              pastEvents.map(event => <PastEventCard key={event.id} event={event} />)
            )}
          </div>
        </div>

      </div>
    </div>
  );
};

export default EventsPage;