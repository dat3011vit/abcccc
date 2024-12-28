import React from 'react';
import { ArrowLeft, Gift, UserRound, ShieldQuestion } from 'lucide-react';

interface StickyHeaderProps {
  bmoLogo: string; 
}

const StickyHeader: React.FC<StickyHeaderProps> = ({ bmoLogo }) => {
  return (
    <div 
      className="fixed top-0 z-50 w-full" 
      style={{ backgroundColor: '#0079C2', paddingTop: 'env(safe-area-inset-top)' }} // Xử lý vùng an toàn
    >
      <div className="p-4 flex justify-between items-center">
        <div className="flex items-center gap-4">
          <ArrowLeft size={24} className="text-white" />
          <img src={bmoLogo} alt="BMO Logo" className="h-8 w-auto" />
        </div>
        <div className="flex items-center gap-6">
          <Gift size={24} className="text-white" />
          <ShieldQuestion size={24} className="text-white" />
          <UserRound size={24} className="text-white" />
        </div>
      </div>
    </div>
  );
};

export default StickyHeader;
