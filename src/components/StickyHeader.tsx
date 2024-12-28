import React from 'react';
import { ArrowLeft, Gift, UserRound, ShieldQuestion } from 'lucide-react';

interface StickyHeaderProps {
  bmoLogo: string;
}

const StickyHeader: React.FC<StickyHeaderProps> = ({ bmoLogo }) => {
  return (
    <header 
      className="fixed top-0 left-0 right-0 z-50 bg-[#0079C2]"
      style={{
        // Safe area padding for iOS status bar
        paddingTop: 'env(safe-area-inset-top, 16px)'
      }}
    >
      <div className="flex justify-between items-center px-4 py-3">
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
    </header>
  );
};

export default StickyHeader;