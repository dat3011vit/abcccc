import React from 'react';
import { ArrowLeft , Gift, Mail } from 'lucide-react';

interface StickyHeaderProps {
  bmoLogo: string; 
}

const StickyHeader: React.FC<StickyHeaderProps> = ({ bmoLogo }) => {
  return (
    <div className="sticky top-0 z-50">
      <div
        className="p-4 pt-16 flex justify-between items-center"
        style={{ backgroundColor: '#0079C2' }}
      >
        <div className="flex items-center gap-4">
          <ArrowLeft  size={24} className="text-white" />
          <img src={bmoLogo} alt="BMO Logo" className="h-8 w-auto" />
        </div>
        <div className="flex items-center gap-4">
          <Gift size={24} className="text-white" />
          <Mail size={24} className="text-white" />
        </div>
      </div>
    </div>
  );
};

export default StickyHeader;