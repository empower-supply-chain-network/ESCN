import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '@/store/store';
import { useTypedSelector } from '@/hooks/useTypedSelector';
import { fetchAllData } from '@/store/slices/dataSlice';
// 1. Import the new hero image
import sponsorshipHeroImageLight from '@/assets/images/sponsorship-hero-light.jpg';
import SectionTitle from '@/components/shared/SectionTitle';
import Loader from '@/components/shared/Loader';
import { Card, CardContent, CardTitle } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { CheckCircle, HandCoins } from 'lucide-react';

const SponsorshipPage: React.FC = () => {
    const dispatch = useDispatch<AppDispatch>();
    const { whySponsorBenefits, sponsorshipBenefits, partners, status } = useTypedSelector((state) => state.data);

    useEffect(() => {
        if (status !== 'succeeded') {
            dispatch(fetchAllData());
        }
    }, [status, dispatch]);

    return (
        <>
            {/* 1. Hero Section - UPDATED */}
            <section 
                className="relative flex items-center justify-center w-full h-[70vh] text-center bg-cover bg-center" 
                // Use the new light hero image
                style={{ backgroundImage: `url(${sponsorshipHeroImageLight})` }}
            >
                {/* We no longer need the dark overlay, so it's removed. */}
                <div className="relative z-10 p-4">
                    {/* Use the new custom text color */}
                    <h1 className="text-5xl font-bold md:text-6xl text-hero-text-green" style={{ textShadow: '1px 1px 3px rgba(255,255,255,0.5)' }}>
                        Shape the Future of Canada's Supply Chain.
                    </h1>
                    <p className="mt-4 text-xl md:text-2xl max-w-3xl mx-auto text-hero-text-green" style={{ textShadow: '1px 1px 2px rgba(255,255,255,0.5)' }}>
                        Partner with us to empower the next generation of industry leaders.
                    </p>
                    {/* The "BECOME A SPONSOR" button has been removed. */}
                </div>
            </section>

            <div className="py-20 bg-white-linen">
                <div className="container max-w-6xl mx-auto px-4 space-y-20">
                    
                    {/* 2. "Why Sponsor" Section - no changes needed */}
                    <section>
                        {/* ... */}
                    </section>

                    {/* 3. Benefits Section - UPDATED */}
                    <section>
                        <SectionTitle>A Partnership of Mutual Benefit</SectionTitle>
                        <div className="grid grid-cols-1 gap-8 mt-12 lg:grid-cols-2">
                            <Card className="p-8">
                                <CardTitle className="text-2xl mb-4">Sponsorship Packages</CardTitle>
                                <div className="space-y-4">
                                    {sponsorshipBenefits.map(benefit => (
                                        <div key={benefit.id} className="flex items-start gap-3">
                                            <CheckCircle className="w-5 h-5 mt-1 text-emerald-green flex-shrink-0" />
                                            <div>
                                                <h4 className="font-semibold text-text-primary">{benefit.title}</h4>
                                                <p className="text-text-secondary">{benefit.description}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </Card>
                            {/* Use the new custom background color and ensure text is dark for readability */}
                            <Card className="p-8 bg-in-kind-card-bg text-forest-green">
                                <CardTitle className="text-2xl mb-4">In-Kind Sponsorship</CardTitle>
                                <p className="mb-6">Play a vital role in our events by providing food, drinks, or venue space. It's a fantastic way for restaurants, cafes, and beverage brands to gain direct exposure.</p>
                                <div className="space-y-3">
                                    <div className="flex items-center gap-3"><HandCoins className="w-5 h-5 text-emerald-green" />Gain on-site exposure to 500+ attendees.</div>
                                    <div className="flex items-center gap-3"><HandCoins className="w-5 h-5 text-emerald-green" />Receive prominent logo display and verbal recognition.</div>
                                </div>
                            </Card>
                        </div>
                    </section>

                    {/* 4. Call to Action Section - no changes needed */}
                    <section className="text-center bg-gray-100 p-12 rounded-lg">
                        {/* ... */}
                    </section>

                    {/* 5. Partners Section - will be empty if mockPartners is empty */}
                    {partners.length > 0 && (
                        <section>
                            <h3 className="text-2xl font-bold text-center text-forest-green">Our Valued Partners</h3>
                            <div className="flex flex-wrap items-center justify-center gap-8 mt-8 opacity-60">
                                {partners.map(partner => (
                                    <img key={partner.id} src={partner.logoUrl} alt={partner.name} className="h-12" />
                                ))}
                            </div>
                        </section>
                    )}

                </div>
            </div>
        </>
    );
};

export default SponsorshipPage;