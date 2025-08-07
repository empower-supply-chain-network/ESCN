import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { AppDispatch } from '@/store/store';
import { useTypedSelector } from '@/hooks/useTypedSelector';
import { fetchAllData } from '@/store/slices/dataSlice';
import { PastEvent, UpcomingEvent } from '@/types';
import SectionTitle from '@/components/shared/SectionTitle';
import Loader from '@/components/shared/Loader';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';

// Component for a single upcoming event card
const UpcomingEventCard: React.FC<{ event: UpcomingEvent }> = ({ event }) => (
  <Card className="overflow-hidden shadow-lg">
      <img src={event.posterUrl} alt={event.title} className="w-full h-auto" />
      <CardHeader>
          <CardTitle>{event.title}</CardTitle>
      </CardHeader>
      <CardContent>
          <p className="text-text-secondary mb-4">{event.tagline}</p>
          <Link to={`/events/upcoming/${event.id}`}>
              <Button className="w-full">View Details & Register</Button>
          </Link>
      </CardContent>
  </Card>
);

// Component for a single past event card in the grid
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
  // Fetch ALL event data from the Redux store
  const { pastEvents, upcomingEvents, status } = useTypedSelector((state) => state.data);

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
          <div className="mt-8">
            {status !== 'succeeded' ? <Loader /> : (
                // LOGIC: If there are upcoming events, show them. Otherwise, show "Stay Tuned!".
                upcomingEvents.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
                        {upcomingEvents.map(event => <UpcomingEventCard key={event.id} event={event} />)}
                    </div>
                ) : (
                    <Card className="max-w-2xl p-8 mx-auto text-center">
                        <CardTitle>Stay Tuned!</CardTitle>
                        <CardContent className="pt-4">
                            <p className="text-lg text-text-secondary">Our calendar of upcoming events is being prepared. Check back soon!</p>
                        </CardContent>
                    </Card>
                )
            )}
          </div>
        </div>

        {/* Past Events Section */}
        <div>
          <SectionTitle>Past Events Showcase</SectionTitle>
          <div className="mt-8">
            {status !== 'succeeded' ? <Loader /> : (
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