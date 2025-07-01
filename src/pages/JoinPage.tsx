import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '@/store/store';
import { useTypedSelector } from '@/hooks/useTypedSelector';
import { fetchAllData } from '@/store/slices/dataSlice';
import { MemberBenefit } from '@/types';
import SectionTitle from '@/components/shared/SectionTitle';
import Loader from '@/components/shared/Loader';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';

// The component for the alternating benefit layout
const BenefitSection: React.FC<{ benefit: MemberBenefit; index: number }> = ({ benefit, index }) => {
  // Determine if the image should be on the right or left
  const isImageRight = index % 2 === 0;

  return (
    <div className={`flex flex-col md:flex-row items-center gap-8 md:gap-12 ${!isImageRight ? 'md:flex-row-reverse' : ''}`}>
      {/* Text Content */}
      <div className="md:w-1/2 text-center md:text-left">
        <h3 className="text-3xl font-bold text-forest-green mb-4">{benefit.title}</h3>
        <p className="text-lg text-text-secondary leading-relaxed">{benefit.description}</p>
      </div>
      {/* Image Content */}
      <div className="md:w-1/2">
        <img src={benefit.imageUrl} alt={benefit.title} className="rounded-lg shadow-lg w-full h-auto object-cover aspect-video" />
      </div>
    </div>
  );
};

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

        {/* The main benefits layout section */}
        <div className="mt-20 space-y-20">
          {status === 'loading' && <Loader />}
          {status === 'failed' && <p className="text-center text-red-500">Error: {error}</p>}
          {status === 'succeeded' && (
            memberBenefits.map((benefit, index) => (
              <BenefitSection key={benefit.id} benefit={benefit} index={index} />
            ))
          )}
        </div>

        {/* The pricing section remains unchanged */}
        <div className="mt-28">
            <SectionTitle>Choose Your Plan</SectionTitle>
            <div className="grid gap-8 max-w-4xl mx-auto mt-12 md:grid-cols-2">
                <Card className="p-6">
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
                <Card className="p-6 border-2 border-emerald-green">
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