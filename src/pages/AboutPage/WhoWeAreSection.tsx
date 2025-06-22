import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';

const WhoWeAreSection: React.FC = () => {
  return (
    <Card className="max-w-3xl mx-auto">
      <CardHeader>
        <CardTitle className="text-center text-3xl">Who We Are</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4 text-lg text-text-secondary leading-relaxed">
        <p><strong>Welcome to ChainSpark – the Empower Supply Chain Network!</strong></p>
        <p>Our organization traces its roots to an informal network founded in 2022 by three girls passionate about supply chain management and eager to support new immigrants in the industry. Over time, it evolved into the structured, inclusive nonprofit we are today.</p>
        <p>At ChainSpark, we are a passionate community committed to illuminating the path for professionals navigating the dynamic world of supply chain. Born from shared experiences of career transition — especially for newcomers to Canada or those pivoting within the field — our mission is to empower and uplift.</p>
        <p>We believe in the power of connection, shared knowledge, and mutual support. Whether you're an experienced professional, a recent graduate, or someone exploring opportunities in the supply chain sector, we offer a platform for growth, learning, and meaningful networking.</p>
        <p><strong>Join us as we build a vibrant ecosystem where every member can thrive and help shape the future of supply chain.</strong></p>
      </CardContent>
    </Card>
  );
};

export default WhoWeAreSection;