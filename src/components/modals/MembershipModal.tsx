import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';

const benefits = [
  'Networking events',
  'Webinars & workshops',
  'Member resources',
];

export const MembershipModal: React.FC = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold text-center text-forest-green mb-6">Become a Member</h2>
      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="text-center">Monthly</CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <p className="text-4xl font-bold text-forest-green">$5.99<span className="text-base font-normal">/mo</span></p>
            <ul className="mt-4 text-left list-disc list-inside text-text-secondary">
              {benefits.map(b => <li key={b}>{b}</li>)}
              <li>Cancel anytime</li>
            </ul>
            <Button className="w-full mt-6">Choose Monthly</Button>
          </CardContent>
        </Card>
        <Card className="border-2 border-emerald-green">
          <CardHeader>
            <CardTitle className="text-center">Annual</CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <p className="text-4xl font-bold text-forest-green">$59.99<span className="text-base font-normal">/yr</span></p>
            <ul className="mt-4 text-left list-disc list-inside text-text-secondary">
              {benefits.map(b => <li key={b}>{b}</li>)}
              <li className="font-semibold text-emerald-green">Mentorship priority</li>
              <li className="font-semibold text-emerald-green">Certification discounts</li>
              <li className="font-semibold text-emerald-green">2 months free!</li>
            </ul>
            <Button className="w-full mt-6">Choose Annual</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};