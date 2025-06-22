import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '@/store/store';
import { useTypedSelector } from '@/hooks/useTypedSelector';
import { fetchAllData } from '@/store/slices/dataSlice';
import { Program } from '@/types';
import SectionTitle from '@/components/shared/SectionTitle';
import Loader from '@/components/shared/Loader';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';

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
  // State to track which program detail to show
  const [selectedProgram, setSelectedProgram] = useState<string | null>(null);
  
  const dispatch = useDispatch<AppDispatch>();
  const { programs, status, error } = useTypedSelector((state) => state.data);

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
    <div className="py-28 bg-white-linen">
      <div className="container max-w-6xl mx-auto px-4">
        <SectionTitle>Programs & Initiatives</SectionTitle>
        <div className="mt-12">
          {status === 'loading' && <Loader />}
          {status === 'failed' && <p className="text-center text-red-500">Error: {error}</p>}
          {status === 'succeeded' && (
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {programs && programs.map((program) => (
                <ProgramCard 
                    key={program.id} 
                    program={program} 
                    onClick={() => setSelectedProgram(program.id)}
                />
              ))}
            </div>
          )}
          {/* Conditionally render the details component */}
          {selectedProgram && renderProgramDetails()}
        </div>
      </div>
    </div>
  );
};

export default ProgramsPage;