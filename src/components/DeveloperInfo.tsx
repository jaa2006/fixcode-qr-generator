import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Github } from 'lucide-react';

const DeveloperInfo: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className="card w-full max-w-4xl text-white flex flex-col md:flex-row gap-8 items-start"
    >
      <div className="md:w-1/4">
        <img 
          src="https://i.imghippo.com/files/xK1805JV.jpeg" 
          alt="Zulfikar Sandira" 
          className="w-full h-48 object-cover rounded-lg"
        />
        <div className="mt-4 space-y-2">
          <a 
            href="mailto:gamingdzul5@gmail.com"
            className="flex items-center gap-2 bg-[#2d2d2d] p-2 rounded hover:bg-[#3d3d3d] transition-colors w-full"
          >
            <Mail className="w-5 h-5" />
            <span className="text-sm">gamingdzul5@gmail.com</span>
          </a>
          <a 
            href="https://github.com/jaa2006"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-[#2d2d2d] p-2 rounded hover:bg-[#3d3d3d] transition-colors w-full"
          >
            <Github className="w-5 h-5" />
            <span className="text-sm">jaa2006</span>
          </a>
        </div>
      </div>

      <div className="md:w-3/4 space-y-6">
        <div>
          <h2 className="text-2xl font-bold mb-2">Zulfikar Sandira</h2>
          <p className="text-gray-400">🎓 SMK Al Amah Sindulang</p>
          <p className="text-sm text-gray-400">Teknik Komputer dan Jaringan</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-lg font-semibold mb-3">🛠 Skills</h3>
            <div className="space-y-2">
              <div className="bg-[#2d2d2d] p-2 rounded text-sm">UI/UX Design (Figma, TailwindCSS)</div>
              <div className="bg-[#2d2d2d] p-2 rounded text-sm">Frontend Development</div>
              <div className="bg-[#2d2d2d] p-2 rounded text-sm">Backend Development</div>
              <div className="bg-[#2d2d2d] p-2 rounded text-sm">Cybersecurity & Penetration Testing</div>
              <div className="bg-[#2d2d2d] p-2 rounded text-sm">Digital Forensics</div>
              <div className="bg-[#2d2d2d] p-2 rounded text-sm">API Integration & Automation</div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3">💼 Projects</h3>
            <ul className="list-disc list-inside space-y-1 text-gray-300 text-sm">
              <li>Appsenz V2 (Absensi GPS)</li>
              <li>IPTrek (IP Tracker Cyber App)</li>
              <li>Fixar AI Chatbot</li>
              <li>Swiger File Manager</li>
              <li>Virtual Pet Portfolio "FIXCODE"</li>
            </ul>

            <h3 className="text-lg font-semibold mb-3 mt-6">📜 Certifications</h3>
            <ul className="list-disc list-inside space-y-1 text-gray-300 text-sm">
              <li>Fortinet Cybersecurity Associate</li>
              <li>Fortinet Certified Cybersecurity Fundamental</li>
              <li>Simplilearn Kali Linux Basic</li>
              <li>Hacker X Ethical Hacking</li>
              <li>Alison Diploma in CISSP Cybersecurity</li>
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default DeveloperInfo;