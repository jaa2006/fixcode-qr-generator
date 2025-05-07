import React from 'react';
import { Clock, Palette, FileType } from 'lucide-react';
import { motion } from 'framer-motion';

interface FeatureCardsProps {
  history: string[];
}

const FeatureCards: React.FC<FeatureCardsProps> = ({ history }) => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <motion.div 
      variants={container}
      initial="hidden"
      animate="show"
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
    >
      <motion.div 
        variants={item}
        className="feature-card text-white"
      >
        <div className="feature-icon">
          <Clock className="w-6 h-6" />
        </div>
        <h3 className="text-lg font-semibold mb-2">Scan History</h3>
        
        <div className="mt-2 space-y-2">
          {history.length > 0 ? (
            history.slice(0, 3).map((item, index) => (
              <div key={index} className="text-xs bg-[#2d2d2d] p-2 rounded truncate">
                {item}
              </div>
            ))
          ) : (
            <p className="text-sm text-gray-400">No history yet</p>
          )}
        </div>
      </motion.div>
      
      <motion.div 
        variants={item}
        className="feature-card text-white"
      >
        <div className="feature-icon">
          <Palette className="w-6 h-6" />
        </div>
        <h3 className="text-lg font-semibold mb-2">Customize Color</h3>
        <p className="text-sm text-gray-400">Change QR code colors to match your brand identity.</p>
        
        <div className="mt-3 flex space-x-2">
          <span className="w-6 h-6 rounded-full bg-blue-500"></span>
          <span className="w-6 h-6 rounded-full bg-purple-500"></span>
          <span className="w-6 h-6 rounded-full bg-pink-500"></span>
          <span className="w-6 h-6 rounded-full bg-green-500"></span>
        </div>
      </motion.div>
      
      <motion.div 
        variants={item}
        className="feature-card text-white md:col-span-2 lg:col-span-1"
      >
        <div className="feature-icon">
          <FileType className="w-6 h-6" />
        </div>
        <h3 className="text-lg font-semibold mb-2">Export Format</h3>
        <p className="text-sm text-gray-400">Save your QR code in multiple formats.</p>
        
        <div className="mt-3 flex flex-wrap gap-2">
          <span className="text-xs bg-[#2d2d2d] px-2 py-1 rounded">PNG</span>
          <span className="text-xs bg-[#2d2d2d] px-2 py-1 rounded">SVG</span>
          <span className="text-xs bg-[#2d2d2d] px-2 py-1 rounded">JPG</span>
          <span className="text-xs bg-[#2d2d2d] px-2 py-1 rounded">PDF</span>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default FeatureCards;