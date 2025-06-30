// In src/pages/SponsorshipPage.tsx

import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '@/store/store';
import { useTypedSelector } from '@/hooks/useTypedSelector';
import { fetchAllData } from '@/store/slices/dataSlice';
import { SponsorshipTier } from '@/types';
import SectionTitle from '@/components/shared/SectionTitle';
import Loader from '@/components/shared/Loader';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';

const SponsorshipCard: React.FC<{ tier: SponsorshipTier }> = ({ tier }) => (
    <Card className="flex flex-col h-full">
        <CardHeader>
            <CardTitle className="text-xl text-forest-green">{tier.title}</CardTitle>
            {tier.investment && <p className="font-semibold text-emerald-green pt-1">{tier.investment}</p>}
        </CardHeader>
        <CardContent className="flex-grow">
            <ul className="space-y-2 list-disc list-inside text-text-secondary">
                {tier.benefits.map((benefit, index) => <li key={index}>{benefit}</li>)}
            </ul>
        </CardContent>
    </Card>
);

const SponsorshipPage: React.FC = () => {
    const dispatch = useDispatch<AppDispatch>();
    const { sponsorshipTiers, status, error } = useTypedSelector((state) => state.data);

    useEffect(() => {
        if (status !== 'succeeded') {
            dispatch(fetchAllData());
        }
    }, [status, dispatch]);

    const educationalTiers = sponsorshipTiers.filter(t => t.category === 'Educational Institution');
    const internshipTiers = sponsorshipTiers.filter(t => t.category === 'Internship Partner');
    const certificationTiers = sponsorshipTiers.filter(t => t.category === 'Certification Sponsor');

    return (
        <div className="py-28 bg-white-linen">
            <div className="container max-w-6xl mx-auto px-4 space-y-16">
                <SectionTitle>Sponsorship Opportunities</SectionTitle>

                {status === 'loading' && <Loader />}
                {status === 'failed' && <p className="text-center text-red-500">Error: {error}</p>}
                
                {status === 'succeeded' && (
                    <>
                        <div>
                            <h3 className="text-3xl font-bold text-center text-forest-green mb-8">Educational Institution Partners</h3>
                            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                                {educationalTiers.map(tier => <SponsorshipCard key={tier.id} tier={tier} />)}
                            </div>
                        </div>

                        <div>
                            <h3 className="text-3xl font-bold text-center text-forest-green mb-8">Internship Partner</h3>
                            <div className="grid gap-8 md:grid-cols-1 max-w-2xl mx-auto">
                                {internshipTiers.map(tier => <SponsorshipCard key={tier.id} tier={tier} />)}
                            </div>
                        </div>

                        <div>
                            <h3 className="text-3xl font-bold text-center text-forest-green mb-8">Certification Sponsors</h3>
                            <div className="grid gap-8 md:grid-cols-2">
                                {certificationTiers.map(tier => <SponsorshipCard key={tier.id} tier={tier} />)}
                            </div>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default SponsorshipPage;