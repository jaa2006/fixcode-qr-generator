import React from 'react';
import { motion } from 'framer-motion';
import { HelpCircle, Lightbulb } from 'lucide-react';

const CharacterAssistant: React.FC = () => {
  return (
    <motion.div 
      className="character-3d hidden lg:block relative w-60"
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.5 }}
    >
      <div className="relative">
        {/* Character Image */}
        <img 
          src="https://images.pexels.com/photos/3153207/pexels-photo-3153207.jpeg?auto=compress&cs=tinysrgb&w=600" 
          alt="3D Character Assistant" 
          className="rounded-2xl shadow-lg"
        />
        
        {/* Speech Bubble */}
        <motion.div 
          className="absolute -left-36 top-10 bg-white p-4 rounded-xl shadow-md max-w-[200px] after:content-[''] after:absolute after:right-[-8px] after:top-5 after:border-l-8 after:border-l-white after:border-t-8 after:border-t-transparent after:border-b-8 after:border-b-transparent"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          <p className="text-sm text-gray-700">Need help generating your QR code? I'm here to assist you!</p>
        </motion.div>
        
        {/* Floating Bubbles */}
        <motion.div 
          className="absolute -right-4 -top-4 bg-primary-100 p-2 rounded-full shadow-sm"
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <HelpCircle className="w-5 h-5 text-primary-600" />
        </motion.div>
        
        <motion.div 
          className="absolute right-2 -bottom-2 bg-secondary-100 p-2 rounded-full shadow-sm"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut", delay: 0.5 }}
        >
          <Lightbulb className="w-5 h-5 text-secondary-600" />
        </motion.div>
      </div>
      
      {/* Tips Section */}
      <div className="mt-6 bg-white rounded-xl p-4 shadow-md">
        <h3 className="text-sm font-semibold text-gray-800 mb-2">Quick Tips</h3>
        <ul className="text-xs text-gray-600 space-y-2">
          <li className="flex items-start gap-2">
            <span className="text-primary-500 font-bold">•</span> 
            Use URLs for website links
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary-500 font-bold">•</span> 
            Add contact info for business cards
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary-500 font-bold">•</span> 
            Create Wi-Fi QR codes for easy connections
          </li>
        </ul>
      </div>
    </motion.div>
  );
};

export default CharacterAssistant;