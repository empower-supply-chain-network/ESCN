import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '@/store/store';
import { useTypedSelector } from '@/hooks/useTypedSelector';
import { fetchAllData } from '@/store/slices/dataSlice';
import { Program } from '@/types';
import SectionTitle from '@/components/shared/SectionTitle';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';

// --- 1. IMPORT THE NEW BANNER IMAGE ---
import programsBannerImage from '@/assets/images/Programs-banner.jpeg';

// A small, self-contained component for displaying one program
const ProgramCard: React.FC<{ program: Program; onClick: () => void }> = ({ program, onClick }) => (
    <Card className="flex flex-col text-center cursor-pointer hover:shadow-lg transition-shadow" onClick={onClick}>
        <CardHeader>
            <CardTitle>{program.title}</CardTitle>
            <p className="text-text-secondary">{program.subtitle}</p>
        </CardHeader>
        <CardContent className="flex flex-col flex-grow">
            <p className="flex-grow text-text-secondary">{program.description}</p>
            <Button variant="secondary" className="w-full mt-4">Learn More</Button>
        </CardContent>
    </Card>
);

// Detail components for when a program is selected
const EducationDetails = () => (
    <Card className="p-6 mt-8 bg-gray-50">
        <h3 className="text-2xl font-bold text-forest-green mb-4">Continuous Education Partnerships</h3>
        <p>We partner with top universities to offer certificate programs and workshops on logistics, procurement, digital transformation, and more.</p>
    </Card>
);
const CertificationDetails = () => (
    <Card className="p-6 mt-8 bg-gray-50">
        <h3 className="text-2xl font-bold text-forest-green mb-4">Professional Certifications</h3>
        <p>Get ready for industry-recognized certifications like CPIM, CSCP, and CLTD with our targeted prep courses and study groups.</p>
    </Card>
);
const MentorshipDetails = () => (
    <Card className="p-6 mt-8 bg-gray-50">
        <h3 className="text-2xl font-bold text-forest-green mb-4">Mentorship Program</h3>
        <p>Our flagship program connects you one-on-one with experienced professionals in your desired field for career guidance, resume reviews, and interview prep.</p>
    </Card>
);


const ProgramsPage: React.FC = () => {
  const [selectedProgram, setSelectedProgram] = useState<string | null>(null);
  
  const dispatch = useDispatch<AppDispatch>();
  const { programs, status } = useTypedSelector((state) => state.data);

  useEffect(() => {
    if (status !== 'succeeded') {
      dispatch(fetchAllData());
    }
  }, [status, dispatch]);

  const renderProgramDetails = () => {
    switch(selectedProgram) {
        case 'continuous-education': return <EducationDetails />;
        case 'certifications': return <CertificationDetails />;
        case 'mentorship': return <MentorshipDetails />;
        default: return null;
    }
  }

  return (
    <>
        {/* --- 2. NEW BANNER SECTION --- */}
        <section 
            className="relative flex items-center justify-center w-full h-[40vh] text-center bg-cover bg-center"
            style={{ backgroundImage: `url(${programsBannerImage})` }}
        >
            <div className="absolute inset-0 bg-black/60" /> {/* Dark overlay for readability */}
            <div className="relative z-10 p-4 text-white">
                <h1 className="text-4xl md:text-5xl font-bold" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.7)' }}>
                    Your Pathway to Professional Growth
                </h1>
                <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto" style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.7)' }}>
                    From learning to leadership, we provide the tools for your success.
                </p>
            </div>
        </section>

        {/* --- 3. EXISTING CONTENT SECTION (with adjusted padding) --- */}
        <div className="py-20 bg-white-linen">
          <div className="container max-w-6xl mx-auto px-4">
            <SectionTitle>Programs & Initiatives</SectionTitle>
            <div className="mt-12">
              {status !== 'succeeded' ? (
                <p className="text-center">Loading programs...</p>
              ) : (
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                  {programs && programs.map((program) => (
                    <ProgramCard 
                        key={program.id} 
                        program={program} 
                        // Improved logic: clicking the same card again will hide the details
                        onClick={() => setSelectedProgram(program.id === selectedProgram ? null : program.id)}
                    />
                  ))}
                </div>
              )}
              {/* This part remains exactly the same */}
              {selectedProgram && renderProgramDetails()}
            </div>
          </div>
        </div>
    </>
  );
};

export default ProgramsPage;