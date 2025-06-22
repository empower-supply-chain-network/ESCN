import React from 'react';
import { cn } from '@/utils/cn';

interface SectionTitleProps {
  children: React.ReactNode;
  className?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ children, className }) => {
  return (
    <div className={cn("text-center", className)}>
      <h2 className="text-4xl font-bold text-forest-green">
        {children}
      </h2>
      <div className="w-16 h-1 mx-auto mt-3 rounded-full bg-emerald-green" />
    </div>
  );
};

export default SectionTitle;