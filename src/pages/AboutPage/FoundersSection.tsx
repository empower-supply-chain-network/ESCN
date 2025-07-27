import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { motion } from 'framer-motion';
import { AppDispatch } from '@/store/store';
import { useTypedSelector } from '@/hooks/useTypedSelector';
import { fetchAllData } from '@/store/slices/dataSlice';
import { Founder } from '@/types';
import { Card } from '@/components/ui/Card';
import Loader from '@/components/shared/Loader';

// Component for the text content - This is correct.
const TextContent: React.FC<{ founder: Founder }> = ({ founder }) => (
  <div className="flex-1 p-6 md:p-8">
    <h3 className="text-2xl font-bold text-forest-green whitespace-nowrap">{founder.name}</h3>
    <h4 className="mb-4 font-semibold uppercase text-emerald-green">{founder.subtitle}</h4>
    <div className="space-y-4">
      {founder.story.map((paragraph, pIndex) => (
        <p
          key={pIndex}
          className="text-sm leading-relaxed text-text-secondary"
          dangerouslySetInnerHTML={{ __html: paragraph }}
        />
      ))}
    </div>
  </div>
);

// Component for the image content - UPDATED
const ImageContent: React.FC<{ founder: Founder }> = ({ founder }) => (
  <div className="p-6 md:p-8 flex items-start ml-auto flex-shrink-0">
    <div className="w-48 aspect-[3/4] rounded-lg overflow-hidden bg-gray-200 shadow-md">
      <img 
        src={founder.imageUrl} 
        alt={founder.name} 
        className="w-full h-full object-cover"
        // FIX: Added object-position to correctly frame the portrait.
        // This tells the browser to focus on the upper part of the image.
        style={{ objectPosition: 'center 30%' }}
      />
    </div>
  </div>
);


// The main card component - This is correct.
const FounderCard: React.FC<{ founder: Founder }> = ({ founder }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <Card className="overflow-hidden h-full">
        <div className="flex flex-col md:flex-row h-full items-start">
          <TextContent founder={founder} />
          <ImageContent founder={founder} />
        </div>
      </Card>
    </motion.div>
  );
};


// The main section component - This is correct.
const FoundersSection = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { founders, status, error } = useTypedSelector((state) => state.data);

  useEffect(() => {
    if (status !== 'succeeded') {
      dispatch(fetchAllData());
    }
  }, [status, dispatch]);

  if (status === 'loading') return <Loader />;
  if (status === 'failed') return <p>Error: {error}</p>;

  return (
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {founders && founders.map((founder) => (
          <FounderCard key={founder.id} founder={founder} />
        ))}
      </div>
    </div>
  );
};

export default FoundersSection;