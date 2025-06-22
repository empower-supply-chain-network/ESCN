import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '@/store/store';
import { useTypedSelector } from '@/hooks/useTypedSelector';
import { fetchAllData } from '@/store/slices/dataSlice';
import { SuccessStory } from '@/types';
import SectionTitle from '@/components/shared/SectionTitle';
import Loader from '@/components/shared/Loader';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';

const StoryCard: React.FC<{ story: SuccessStory }> = ({ story }) => (
  <Card className="text-center">
    <CardHeader>
      <div className="mx-auto flex items-center justify-center w-16 h-16 mb-4 text-2xl font-bold text-white rounded-full bg-emerald-green">
        {story.initials}
      </div>
      <CardTitle>{story.name}</CardTitle>
      <p className="font-semibold text-emerald-green">{story.title}</p>
    </CardHeader>
    <CardContent>
      <p className="mb-4 text-text-secondary">"{story.story}"</p>
      <p className="font-semibold text-text-primary">Key Impact: <span className="font-normal text-text-secondary">{story.keyImpact.join(', ')}</span></p>
    </CardContent>
  </Card>
);

const SuccessStoriesPage: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { stories, status, error } = useTypedSelector((state) => state.data);

  useEffect(() => {
    if (status !== 'succeeded') {
      dispatch(fetchAllData());
    }
  }, [status, dispatch]);

  return (
    <div className="py-28 bg-white-linen">
      <div className="container max-w-6xl mx-auto px-4">
        <SectionTitle>Member Success Stories</SectionTitle>
        <p className="text-center max-w-3xl mx-auto mt-4 text-lg text-text-secondary">
          Hear from ChainSpark members who have leveraged our community, programs, and resources to achieve their career goals.
        </p>
        <div className="mt-12">
          {status === 'loading' && <Loader />}
          {status === 'failed' && <p className="text-center text-red-500">Error: {error}</p>}
          {status === 'succeeded' && (
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {stories.map((story) => (
                <StoryCard key={story.id} story={story} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SuccessStoriesPage;