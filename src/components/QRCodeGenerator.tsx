import React, { useState, useRef } from 'react';
import { QRCodeSVG } from 'qrcode.react';
import { Download, RefreshCw, Wand2 } from 'lucide-react';
import { motion } from 'framer-motion';

interface QRCodeGeneratorProps {
  onGenerate: (value: string) => void;
  qrValue: string;
  qrColor: string;
  bgColor: string;
  setQrColor: (color: string) => void;
  setBgColor: (color: string) => void;
}

const QRCodeGenerator: React.FC<QRCodeGeneratorProps> = ({
  onGenerate,
  qrValue,
  qrColor,
  bgColor,
  setQrColor,
  setBgColor
}) => {
  const [inputValue, setInputValue] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const qrRef = useRef<HTMLDivElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    setIsGenerating(true);
    setTimeout(() => {
      onGenerate(inputValue);
      setIsGenerating(false);
    }, 600);
  };

  const downloadQRCode = () => {
    if (!qrValue || !qrRef.current) return;

    const svg = qrRef.current.querySelector('svg');
    if (!svg) return;

    const svgData = new XMLSerializer().serializeToString(svg);
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    const img = new Image();
    
    img.onload = () => {
      canvas.width = img.width;
      canvas.height = img.height;
      ctx?.drawImage(img, 0, 0);
      const pngFile = canvas.toDataURL('image/png');
      
      const downloadLink = document.createElement('a');
      downloadLink.download = 'qrcode.png';
      downloadLink.href = pngFile;
      downloadLink.click();
    };
    
    img.src = 'data:image/svg+xml;base64,' + btoa(svgData);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="space-y-6">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="qr-input" className="block text-sm font-medium text-white mb-1">
              Text or URL
            </label>
            <input
              id="qr-input"
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Enter text or URL..."
              className="w-full px-4 py-3 bg-[#212121] text-white border-none rounded-lg focus:ring-2 focus:ring-primary-500 outline-none transition"
            />
          </div>
          
          <div className="flex space-x-4">
            <div className="flex-1">
              <label htmlFor="qr-color" className="block text-sm font-medium text-white mb-1">
                QR Color
              </label>
              <input
                id="qr-color"
                type="color"
                value={qrColor}
                onChange={(e) => setQrColor(e.target.value)}
                className="h-10 w-full rounded cursor-pointer bg-[#212121]"
              />
            </div>
            <div className="flex-1">
              <label htmlFor="bg-color" className="block text-sm font-medium text-white mb-1">
                Background
              </label>
              <input
                id="bg-color"
                type="color"
                value={bgColor}
                onChange={(e) => setBgColor(e.target.value)}
                className="h-10 w-full rounded cursor-pointer bg-[#212121]"
              />
            </div>
          </div>
          
          <motion.button
            type="submit"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full py-3 px-4 flex items-center justify-center gap-2 bg-gradient-to-r from-primary-600 to-secondary-600 text-white rounded-lg shadow-md hover:shadow-lg transition-all font-medium disabled:opacity-50"
            disabled={isGenerating || !inputValue.trim()}
          >
            {isGenerating ? (
              <>
                <RefreshCw className="w-5 h-5 animate-spin" />
                Generating...
              </>
            ) : (
              <>
                <Wand2 className="w-5 h-5" />
                Generate QR Code
              </>
            )}
          </motion.button>
        </form>
      </div>
      
      <div className="card">
        <div ref={qrRef} className="w-full h-full flex items-center justify-center">
          {qrValue ? (
            <QRCodeSVG
              value={qrValue}
              size={180}
              bgColor={bgColor}
              fgColor={qrColor}
              level="H"
              includeMargin={true}
            />
          ) : (
            <p className="text-gray-400 text-center text-sm px-4">
              Generated QR code will appear here
            </p>
          )}
        </div>
        
        {qrValue && (
          <motion.button
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={downloadQRCode}
            className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 bg-[#2d2d2d] text-white px-4 py-2 rounded-lg hover:bg-[#3d3d3d] transition-all"
          >
            <Download className="w-4 h-4" />
            Download
          </motion.button>
        )}
      </div>
    </div>
  );
};

export default QRCodeGenerator;