import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { motion } from 'framer-motion';
import { AppDispatch } from '@/store/store';
import { useTypedSelector } from '@/hooks/useTypedSelector';
import { fetchAllData } from '@/store/slices/dataSlice';
import { Founder } from '@/types';
import { Card } from '@/components/ui/Card';
import Loader from '@/components/shared/Loader';

// Component for the text content
const TextContent: React.FC<{ founder: Founder }> = ({ founder }) => (
  // The text is now centered
  <div className="text-center">
    {/* The whitespace-nowrap is no longer needed and has been removed */}
    <h3 className="text-2xl font-bold text-forest-green">{founder.name}</h3>
    <h4 className="mb-6 font-semibold uppercase text-emerald-green">{founder.subtitle}</h4>
    {/* The paragraphs themselves remain left-aligned for readability */}
    <div className="space-y-4 text-left">
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

// Component for the image content
const ImageContent: React.FC<{ founder: Founder }> = ({ founder }) => {
  const getBackgroundPosition = () => {
    if (founder.name.includes('Shuya')) return 'center 35%';
    if (founder.name.includes('Michelle')) return 'center 30%';
    return 'center center';
  };

  return (
    // Added margin-bottom to create space between the photo and text
    <div className="mb-6 flex-shrink-0">
      <div
        className="w-[120px] h-[120px] rounded-full bg-gray-200 bg-cover"
        style={{
          backgroundImage: `url(${founder.imageUrl})`,
          backgroundPosition: getBackgroundPosition(),
        }}
        role="img"
        aria-label={`Photo of ${founder.name}`}
      />
    </div>
  );
};


// The main card component, now with the new vertical layout
const FounderCard: React.FC<{ founder: Founder }> = ({ founder }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <Card className="overflow-hidden h-full">
        {/*
          THE LAYOUT FIX:
          - Changed to `flex-col` to stack items vertically.
          - Added `items-center` to center them horizontally.
          - Added padding directly to this container.
        */}
        <div className="flex flex-col items-center h-full p-6 md:p-8">
          <ImageContent founder={founder} />
          <TextContent founder={founder} />
        </div>
      </Card>
    </motion.div>
  );
};


// The main section component - no changes needed here.
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