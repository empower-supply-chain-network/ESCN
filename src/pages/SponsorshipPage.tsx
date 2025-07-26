import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '@/store/store';
import { useTypedSelector } from '@/hooks/useTypedSelector';
import { fetchAllData } from '@/store/slices/dataSlice';
import { sponsorshipHeroImage } from '@/data/mockData';
import SectionTitle from '@/components/shared/SectionTitle';
import { Card, CardContent, CardTitle } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { CheckCircle, HandCoins } from 'lucide-react';

const SponsorshipPage: React.FC = () => {
    const dispatch = useDispatch<AppDispatch>();
    const { 
        whySponsorBenefits, 
        sponsorshipBenefits, 
        partners, 
        status 
    } = useTypedSelector((state) => state.data);

    useEffect(() => {
        if (status !== 'succeeded') {
            dispatch(fetchAllData());
        }
    }, [status, dispatch]);

    if (status !== 'succeeded') {
        return (
            <div className="py-28 bg-white-linen text-center">
                <SectionTitle>Loading Sponsorship Information...</SectionTitle>
            </div>
        );
    }

    return (
        <>
            {/* 1. Hero Section */}
            <section 
                className="relative flex items-center justify-center w-full h-[70vh] text-center bg-cover bg-center" 
                style={{ backgroundImage: `url(${sponsorshipHeroImage})` }}
            >
                {/* Added a semi-transparent overlay to help text stand out */}
                <div className="absolute inset-0 bg-black/30"></div>
                <div className="relative z-10 p-4">
                    {/* --- FIX #1: Changed text color to white --- */}
                    <h1 className="text-5xl font-bold md:text-6xl text-white" style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.5)' }}>
                        Shape the Future of Canada's Supply Chain.
                    </h1>
                    <p className="mt-4 text-xl md:text-2xl max-w-3xl mx-auto text-white" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.5)' }}>
                        Partner with us to empower the next generation of industry leaders.
                    </p>
                </div>
            </section>

            <div className="py-20 bg-white-linen">
                <div className="container max-w-6xl mx-auto px-4 space-y-20">
                    
                    {/* 2. "Why Sponsor" Section */}
                    <section>
                        <SectionTitle>Why Sponsor ChainSpark?</SectionTitle>
                        <div className="grid grid-cols-1 gap-8 mt-12 md:grid-cols-2 lg:grid-cols-4">
                            {whySponsorBenefits.map(benefit => (
                                <Card key={benefit.id} className="text-center p-6">
                                    <benefit.icon className="w-12 h-12 mx-auto mb-4 text-emerald-green" />
                                    <CardTitle className="text-xl">{benefit.title}</CardTitle>
                                    <CardContent className="pt-4 text-text-secondary">{benefit.description}</CardContent>
                                </Card>
                            ))}
                        </div>
                    </section>

                    {/* 3. Benefits Section */}
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
                            {/* --- FIX #2: Changed text color to white --- */}
                            <Card className="p-8 bg-in-kind-card-bg text-white">
                                <CardTitle className="text-2xl mb-4">In-Kind Sponsorship</CardTitle>
                                <p className="mb-6 opacity-90">Play a vital role in our events by providing food, drinks, or venue space. It's a fantastic way for restaurants, cafes, and beverage brands to gain direct exposure.</p>
                                <div className="space-y-3">
                                    {/* Icons should pop, so let's make them white too */}
                                    <div className="flex items-center gap-3"><HandCoins className="w-5 h-5 text-white" />Gain on-site exposure to 500+ attendees.</div>
                                    <div className="flex items-center gap-3"><HandCoins className="w-5 h-5 text-white" />Receive prominent logo display and verbal recognition.</div>
                                </div>
                            </Card>
                        </div>
                    </section>

                    {/* 4. Call to Action Section */}
                    {/* --- FIX #3: Removed background color and padding --- */}
                    <section className="text-center py-12">
                        <h2 className="text-3xl font-bold text-forest-green">Ready to Make an Impact?</h2>
                        <p className="max-w-3xl mx-auto mt-4 text-lg text-text-secondary">Let's build a stronger, more inclusive supply chain community together. Download our full sponsorship package to see detailed tiers or contact us to create a custom partnership.</p>
                        <div className="flex flex-col items-center justify-center gap-4 mt-8 sm:flex-row">
                            <Button size="lg">DOWNLOAD SPONSORSHIP PKG</Button>
                            <a href="mailto:info@empowersupplychainnetwork.org">
                                <Button size="lg" variant="secondary">CONTACT US</Button>
                            </a>
                        </div>
                    </section>

                    {/* 5. Partners Section */}
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