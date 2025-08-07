// In src/pages/UpcomingEventDetailPage.tsx

import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '@/store/store';
import { useTypedSelector } from '@/hooks/useTypedSelector';
import { fetchAllData } from '@/store/slices/dataSlice';
import Loader from '@/components/shared/Loader';
import { ArrowLeft, BrainCircuit, Briefcase, Rocket, Trophy } from 'lucide-react';
import { Button } from '@/components/ui/Button';

const iconMap = [BrainCircuit, Briefcase, Rocket, Trophy];

const UpcomingEventDetailPage: React.FC = () => {
  const { eventId } = useParams<{ eventId: string }>();
  const dispatch = useDispatch<AppDispatch>();
  const { upcomingEvents, status, error } = useTypedSelector((state) => state.data);

  useEffect(() => {
    if (status !== 'succeeded') {
      dispatch(fetchAllData());
    }
  }, [status, dispatch]);

  const event = upcomingEvents.find(e => e.id === eventId);

  if (status === 'loading') return <div className="py-28"><Loader /></div>;
  if (status === 'failed') return <p className="text-center text-red-500 py-28">Error: {error}</p>;
  if (!event) return <p className="text-center py-28">Event not found.</p>;

  return (
    <div className="py-28 bg-white-linen">
      <div className="container max-w-6xl mx-auto px-4">
        <Link to="/events" className="inline-flex items-center gap-2 text-emerald-green hover:underline mb-8">
          <ArrowLeft size={18} />
          Back to All Events
        </Link>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Column: Poster */}
          <div>
            <img src={event.posterUrl} alt={`${event.title} Poster`} className="w-full h-auto rounded-lg shadow-2xl" />
          </div>

          {/* Right Column: Speaker Spotlight */}
          <div className="space-y-6">
            <div>
              <p className="font-semibold text-emerald-green">DATE & TIME</p>
              <h2 className="text-3xl font-bold text-forest-green">{event.date}</h2>
              <p className="text-lg text-text-secondary">{event.time}</p>
            </div>

            <div>
              <p className="font-semibold text-emerald-green">SPEAKER SPOTLIGHT</p>
              <h2 className="text-3xl font-bold text-forest-green">{event.speakerName}</h2>
              <p className="text-lg text-text-secondary whitespace-pre-line">{event.speakerTitle}</p>
            </div>

            <ul className="space-y-3">
              {event.speakerBio.map((bio, index) => {
                const Icon = iconMap[index % iconMap.length];
                return (
                  <li key={index} className="flex items-center gap-3 text-lg text-text-secondary">
                    <Icon className="w-6 h-6 text-emerald-green flex-shrink-0" />
                    <span>{bio}</span>
                  </li>
                );
              })}
            </ul>

            <div className="pt-4">
                <p className="text-lg text-forest-green font-semibold">Don't miss his bold take on the future of AI. Real insight. No fluff. Made for forward-thinkers.</p>
                <a href={event.registrationLink} target="_blank" rel="noopener noreferrer">
                    <Button size="lg" className="w-full mt-4">Join now for Free! (Register Here)</Button>
                </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpcomingEventDetailPage;