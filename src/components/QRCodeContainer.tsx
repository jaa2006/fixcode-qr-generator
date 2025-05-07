import React, { useState } from 'react';
import { motion } from 'framer-motion';
import QRCodeGenerator from './QRCodeGenerator';
import FeatureCards from './FeatureCards';

const QRCodeContainer: React.FC = () => {
  const [qrValue, setQrValue] = useState('');
  const [qrColor, setQrColor] = useState('#000000');
  const [bgColor, setBgColor] = useState('#ffffff');
  const [history, setHistory] = useState<string[]>([]);

  const handleGenerate = (value: string) => {
    setQrValue(value);
    if (value && !history.includes(value)) {
      setHistory(prev => [value, ...prev].slice(0, 5));
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="relative w-full max-w-3xl px-4 sm:px-0"
    >
      <div className="card">
        <QRCodeGenerator 
          onGenerate={handleGenerate} 
          qrValue={qrValue} 
          qrColor={qrColor} 
          bgColor={bgColor}
          setQrColor={setQrColor}
          setBgColor={setBgColor}
        />
      </div>

      <div className="mt-8">
        <FeatureCards history={history} />
      </div>
    </motion.div>
  );
}

export default QRCodeContainer;