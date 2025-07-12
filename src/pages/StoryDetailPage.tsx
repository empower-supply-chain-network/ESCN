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
        
        <div className="text-center mb-10">
            <div className="mx-auto flex items-center justify-center w-20 h-20 mb-4 text-3xl font-bold text-white rounded-full bg-emerald-green">
                {story.initials}
            </div>
            <h1 className="text-4xl font-bold text-forest-green">{story.title}</h1>
            <p className="text-xl font-semibold text-text-primary mt-2">{story.name}</p>
        </div>

        {/* This section now correctly renders HTML content */}
        <div className="prose lg:prose-lg max-w-none mx-auto text-text-secondary">
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