// In src/pages/StoryDetailPage.tsx

import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '@/store/store';
import { useTypedSelector } from '@/hooks/useTypedSelector';
import { fetchAllData } from '@/store/slices/dataSlice';
import Loader from '@/components/shared/Loader';
import { ArrowLeft } from 'lucide-react';

const StoryDetailPage: React.FC = () => {
  const { storyId } = useParams<{ storyId: string }>();
  const dispatch = useDispatch<AppDispatch>();
  const { stories, status, error } = useTypedSelector((state) => state.data);

  useEffect(() => {
    if (status !== 'succeeded') {
      dispatch(fetchAllData());
    }
  }, [status, dispatch]);

  const story = stories.find(s => s.id === storyId);

  if (status === 'loading') return <Loader />;
  if (status === 'failed') return <p className="text-center text-red-500 py-28">Error: {error}</p>;
  if (!story) return <p className="text-center py-28">Success story not found.</p>;

  return (
    <div className="py-28 bg-white-linen">
      <div className="container max-w-4xl mx-auto px-4">
        <Link to="/success-stories" className="inline-flex items-center gap-2 text-emerald-green hover:underline mb-8">
          <ArrowLeft size={18} />
          Back to All Success Stories
        </Link>
        
        <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-forest-green">{story.title}</h1>
            <p className="text-xl font-semibold text-text-primary mt-2">By {story.name}</p>
        </div>

        {/*
          This is the updated section with custom styling for better readability.
          We are using a special <style> tag with JSX to apply these overrides.
        */}
        <div className="prose lg:prose-lg max-w-none mx-auto text-text-secondary">
          <style>
            {`
              .prose h2 {
                font-size: 1.5rem; /* Larger heading size */
                font-weight: 700; /* Bold heading */
                margin-top: 2.5rem; /* More space above headings */
                margin-bottom: 1.25rem; /* More space below headings */
              }
              .prose p {
                margin-bottom: 1.25rem; /* More space between paragraphs */
              }
              .prose blockquote {
                margin-top: 2rem;
                margin-bottom: 2rem;
              }
            `}
          </style>
          {story.detailedStory.map((paragraph, index) => (
              <div key={index} dangerouslySetInnerHTML={{ __html: paragraph }} />
          ))}
        </div>

        <div className="mt-12 text-center">
            <p className="font-semibold text-text-primary">Key Impact: <span className="font-normal text-text-secondary">{story.keyImpact.join(', ')}</span></p>
        </div>
      </div>
    </div>
  );
};

export default StoryDetailPage;