import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { AppDispatch } from '@/store/store';
import { useTypedSelector } from '@/hooks/useTypedSelector';
import { fetchAllData } from '@/store/slices/dataSlice';
import { SuccessStory } from '@/types';
import SectionTitle from '@/components/shared/SectionTitle';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';

// --- 1. IMPORT THE NEW BANNER IMAGE ---
import successBannerImage from '@/assets/images/Success-banner.jpeg';

// A component for the grid view card - This component is unchanged.
const StoryGridCard: React.FC<{ story: SuccessStory }> = ({ story }) => (
    <Card className="flex flex-col text-center h-full group cursor-pointer hover:shadow-xl transition-shadow duration-300">
        <CardHeader>
            <div className="mx-auto flex items-center justify-center w-16 h-16 mb-4 text-2xl font-bold text-white rounded-full bg-emerald-green group-hover:bg-forest-green transition-colors">
                {story.initials}
            </div>
            <CardTitle>{story.name}</CardTitle>
            <p className="font-semibold text-emerald-green text-sm">{story.title}</p>
        </CardHeader>
        <CardContent className="flex-grow flex flex-col">
            <p className="text-text-secondary flex-grow italic">{story.story}</p>
            <Link to={`/success-stories/${story.id}`} className="mt-4">
                <Button variant="secondary">Read Full Story</Button>
            </Link>
        </CardContent>
    </Card>
);

const SuccessStoriesPage: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { stories, status } = useTypedSelector((state) => state.data);

  useEffect(() => {
    if (status !== 'succeeded') {
      dispatch(fetchAllData());
    }
  }, [status, dispatch]);

  return (
    <>
        {/* --- 2. NEW BANNER SECTION --- */}
        <section 
            className="relative flex items-center justify-center w-full h-[50vh] text-center bg-cover bg-center"
            style={{ backgroundImage: `url(${successBannerImage})` }}
        >
            <div className="absolute inset-0 bg-black/50" /> {/* Dark overlay for readability */}
            <div className="relative z-10 p-4 text-white">
                <h1 className="text-5xl font-bold md:text-6xl" style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.5)' }}>
                    Our Community, Your Success Story
                </h1>
                <p className="mt-4 text-xl md:text-2xl max-w-3xl mx-auto" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.5)' }}>
                    Discover the real-world impact of our community through the stories of our members.
                </p>
            </div>
        </section>

        {/* --- 3. EXISTING CONTENT SECTION (with adjusted padding) --- */}
        <div className="py-20 bg-white-linen">
          <div className="container max-w-6xl mx-auto px-4">
            <SectionTitle>Member Success Stories</SectionTitle>
            <p className="text-center max-w-3xl mx-auto mt-4 text-lg text-text-secondary">
              Hear from ChainSpark members who have leveraged our community, programs, and resources to achieve their career goals.
            </p>
            <div className="mt-12">
              {status !== 'succeeded' ? (
                <p className="text-center">Loading stories...</p>
              ) : (
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                  {stories.map((story) => (
                    <StoryGridCard key={story.id} story={story} />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
    </>
  );
};

export default SuccessStoriesPage;