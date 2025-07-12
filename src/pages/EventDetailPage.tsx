// In src/pages/EventDetailPage.tsx

import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '@/store/store';
import { useTypedSelector } from '@/hooks/useTypedSelector';
import { fetchAllData } from '@/store/slices/dataSlice';
import Loader from '@/components/shared/Loader';
import { ArrowLeft } from 'lucide-react';

const EventDetailPage: React.FC = () => {
  const { eventId } = useParams<{ eventId: string }>();
  const dispatch = useDispatch<AppDispatch>();
  const { pastEvents, status, error } = useTypedSelector((state) => state.data);

  useEffect(() => {
    if (status !== 'succeeded') {
      dispatch(fetchAllData());
    }
  }, [status, dispatch]);

  const event = pastEvents.find(e => e.id === eventId);

  if (status === 'loading') return <Loader />;
  if (status === 'failed') return <p className="text-center text-red-500 py-28">Error: {error}</p>;
  if (!event) return <p className="text-center py-28">Event not found.</p>;

  return (
    <div className="py-28 bg-white-linen">
      <div className="container max-w-4xl mx-auto px-4">
        <Link to="/events" className="inline-flex items-center gap-2 text-emerald-green hover:underline mb-8">
          <ArrowLeft size={18} />
          Back to All Events
        </Link>
        
        <div className="space-y-4">
            <p className="font-semibold text-emerald-green">🗓️ {event.date}</p>
            <h1 className="text-4xl font-bold text-forest-green">{event.title}</h1>
            {event.detailedDescription.map((paragraph, index) => (
                <p key={index} className="text-lg text-text-secondary leading-relaxed" dangerouslySetInnerHTML={{ __html: paragraph }} />
            ))}
        </div>

        <div className="mt-12">
            <h2 className="text-2xl font-bold text-forest-green mb-6">Event Gallery</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {event.imageUrls.map((url, index) => (
                    <img key={index} src={url} alt={`Event photo ${index + 1}`} className="w-full h-auto object-cover rounded-lg shadow-lg" />
                ))}
            </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetailPage;