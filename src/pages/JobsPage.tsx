import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '@/store/store';
import { useTypedSelector } from '@/hooks/useTypedSelector';
import { fetchAllData } from '@/store/slices/dataSlice';
import { Job } from '@/types';
import SectionTitle from '@/components/shared/SectionTitle';
import Loader from '@/components/shared/Loader';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';

const JobCard: React.FC<{ job: Job }> = ({ job }) => (
  <Card>
    <CardHeader>
      <CardTitle>{job.title}</CardTitle>
      <p className="font-semibold text-text-primary">{job.company}</p>
      <p className="text-sm text-text-secondary">{job.location}</p>
    </CardHeader>
    <CardContent>
      <p className="mb-4 text-text-secondary">{job.summary}</p>
      <div className="flex items-center justify-between text-sm text-text-secondary">
        <span>{job.type}</span>
        <span>Posted: {job.postedDate}</span>
      </div>
      <Button variant="secondary" className="w-full mt-4">Apply / Learn More</Button>
    </CardContent>
  </Card>
);

const JobsPage: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { jobs, status, error } = useTypedSelector((state) => state.data);

  useEffect(() => {
    if (status !== 'succeeded') {
      dispatch(fetchAllData());
    }
  }, [status, dispatch]);

  return (
    <div className="py-28 bg-white-linen">
      <div className="container max-w-6xl mx-auto px-4">
        <SectionTitle>Career Opportunities</SectionTitle>
        <p className="text-center max-w-3xl mx-auto mt-4 text-lg text-text-secondary">
          Explore current job openings in the supply chain industry shared by our network and partners.
        </p>
        <div className="mt-12">
          {status === 'loading' && <Loader />}
          {status === 'failed' && <p className="text-center text-red-500">Error: {error}</p>}
          {status === 'succeeded' && (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {jobs.map((job) => (
                <JobCard key={job.id} job={job} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default JobsPage;