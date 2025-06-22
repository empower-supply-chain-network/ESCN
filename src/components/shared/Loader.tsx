import React from 'react';
import { Loader2 } from 'lucide-react';

const Loader: React.FC = () => {
  return (
    <div className="flex items-center justify-center w-full py-12">
      <Loader2 className="w-8 h-8 animate-spin text-emerald-green" />
    </div>
  );
};

export default Loader;