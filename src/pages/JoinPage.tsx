// In src/pages/JoinPage.tsx

import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '@/store/store';
import { useTypedSelector } from '@/hooks/useTypedSelector';
import { fetchAllData } from '@/store/slices/dataSlice';
import SectionTitle from '@/components/shared/SectionTitle';
import Loader from '@/components/shared/Loader';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';

const JoinPage: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { memberBenefits, status, error } = useTypedSelector((state) => state.data);

  useEffect(() => {
    if (status !== 'succeeded') {
      dispatch(fetchAllData());
    }
  }, [status, dispatch]);

  return (
    <div className="py-28 bg-white-linen">
      <div className="container max-w-6xl mx-auto px-4">
        <SectionTitle>Join Our Community</SectionTitle>
        <p className="text-center max-w-3xl mx-auto mt-4 text-lg text-text-secondary">
          Become a part of a vibrant network dedicated to advancing the supply chain industry through collaboration, innovation, and empowerment.
        </p>

        <div className="mt-12">
          <h3 className="text-3xl font-bold text-center text-forest-green mb-8">Membership Benefits</h3>
          {status === 'loading' && <Loader />}
          {status === 'failed' && <p className="text-center text-red-500">Error: {error}</p>}
          {status === 'succeeded' && (
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {memberBenefits.map((benefit) => (
                <Card key={benefit.id} className="text-center p-4">
                  <div className="text-5xl mb-4">{benefit.icon}</div>
                  <CardTitle className="text-xl">{benefit.title}</CardTitle>
                  <CardContent className="pt-4">
                    <p className="text-text-secondary">{benefit.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>

        <div className="mt-20">
            <h3 className="text-3xl font-bold text-center text-forest-green mb-8">Choose Your Plan</h3>
            <div className="grid gap-8 max-w-3xl mx-auto md:grid-cols-2">
                <Card className="p-4">
                    <CardHeader>
                        <CardTitle className="text-center text-2xl">Monthly</CardTitle>
                    </CardHeader>
                    <CardContent className="text-center">
                        <p className="text-5xl font-bold text-forest-green">$5.99<span className="text-base font-normal">/mo</span></p>
                        <ul className="mt-4 space-y-2 text-left list-disc list-inside text-text-secondary">
                            <li>Networking events</li>
                            <li>Webinars & workshops</li>
                            <li>Member resources</li>
                            <li>Cancel anytime</li>
                        </ul>
                        <Button className="w-full mt-6">Choose Monthly</Button>
                    </CardContent>
                </Card>
                <Card className="p-4 border-2 border-emerald-green">
                    <CardHeader>
                        <CardTitle className="text-center text-2xl">Annual</CardTitle>
                    </CardHeader>
                    <CardContent className="text-center">
                        <p className="text-5xl font-bold text-forest-green">$59.99<span className="text-base font-normal">/yr</span></p>
                        <ul className="mt-4 space-y-2 text-left list-disc list-inside text-text-secondary">
                            <li>All monthly benefits</li>
                            <li className="font-semibold text-emerald-green">Mentorship priority</li>
                            <li className="font-semibold text-emerald-green">Certification discounts</li>
                            <li className="font-semibold text-emerald-green">2 months free!</li>
                        </ul>
                        <Button className="w-full mt-6">Choose Annual</Button>
                    </CardContent>
                </Card>
            </div>
        </div>
      </div>
    </div>
  );
};

export default JoinPage;