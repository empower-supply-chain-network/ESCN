import React from 'react';
import SectionTitle from '@/components/shared/SectionTitle';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/Tabs";
// Importing the three child components that make up the page
import WhoWeAreSection from './WhoWeAreSection';
import FoundersSection from './FoundersSection';
import DnaSection from './DnaSection';

const AboutPage: React.FC = () => {
  return (
    <div className="py-28 bg-white-linen">
      <div className="container max-w-6xl mx-auto px-4">
        <SectionTitle>About ChainSpark</SectionTitle>
        
        <Tabs defaultValue="founders" className="w-full mt-12">
          <TabsList className="grid w-full max-w-2xl grid-cols-1 gap-2 mx-auto md:grid-cols-3">
            <TabsTrigger value="who-we-are">Who We Are</TabsTrigger>
            <TabsTrigger value="founders">Meet Our ChainSparkers</TabsTrigger>
            <TabsTrigger value="dna">Our DNA, Mission & Vision</TabsTrigger>
          </TabsList>
          
          {/* Each tab's content is one of the imported components */}
          <TabsContent value="who-we-are" className="mt-8">
            <WhoWeAreSection />
          </TabsContent>
          <TabsContent value="founders" className="mt-8">
            <FoundersSection />
          </TabsContent>
          <TabsContent value="dna" className="mt-8">
            <DnaSection />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default AboutPage;