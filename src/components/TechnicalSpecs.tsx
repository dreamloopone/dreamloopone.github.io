import React from 'react';
import { motion } from 'framer-motion';

const TechnicalSpecs: React.FC = () => {
  const specifications = [
    {
      category: 'SOFTWARE PROFICIENCY',
      items: [
        'After Effects CC (Advanced)',
        'Premiere Pro CC (Advanced)',
        'Blender (Advanced)',
        'Cinema 4D (Intermediate)',
        'Photoshop CC (Advanced)',
        'Illustrator CC (Advanced)',
        'Reaper (Advanced)',
        'Audition CC (Intermediate)',
        'Adobe CC (Advanced)',
        'Cubase (Intermediate)',
        'Reason (Intermediate)',
        'OBS (Advanced)',
        'Runwayml (Video AI Gen)',
        'Envato (Traditional Assets + Video Gen AI)',
        'Claude.ai (Motion Gfx Custom App Design AI)',
        'Bolt.new (Used to design this site)',
        'OpusClips (Youtube Short AI Creation)',
        'ElevenLabs (Audio Gen AI)'
      ]
    },
    {
      category: 'TECHNICAL CAPABILITIES',
      items: [
        '2D/3D Motion Graphics',
        'Character Animation',
        'Visual Effects Compositing',
        'Color Correction & Grading',
        'Audio Synchronization',
        'Multi-camera Editing',
        'Website Design',
        'Professional Voiceovers',
        'Dolly and Gimbal Camera Rig',
        'Panasonic GH Series DSLR',
        'Teleprompter',
        'Live Streaming',
        'Technical Live Direction',
        'On-Air Spokesperson and Talent',
        'Voiceover Artist',
        'Storyboarding'
      ]
    },
    {
      category: 'OUTPUT SPECIFICATIONS',
      items: [
        'Broadcast Standards (NTSC/PAL)',
        'Digital Cinema (DCP)',
        'Web Optimization (H.264/H.265)',
        'Military Standards (MIL-STD)',
        'HDR/SDR Workflows',
        'Multiple Format Delivery',
        '24-bit, 96khz (WAV)',
        'CBR 320kbps (MP3)'
      ]
    }
  ];

  return (
    <section id="technical" className="py-20 bg-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div 
            className="text-xs tracking-widest text-gray-500 mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            SECTION 03
          </motion.div>
          <motion.h2 
            className="text-2xl md:text-3xl font-bold tracking-wider"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            viewport={{ once: true }}
          >
            TECHNICAL SPECIFICATIONS
          </motion.h2>
          <motion.div 
            className="w-16 h-px bg-black mx-auto mt-6"
            initial={{ width: 0 }}
            whileInView={{ width: 64 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            viewport={{ once: true }}
          ></motion.div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {specifications.map((spec, index) => (
            <motion.div 
              key={index}
              className="bg-white border border-gray-200 hover:border-black transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ y: -5 }}
            >
              <div className="border-b border-gray-200 px-6 py-4">
                <h3 className="text-sm font-bold tracking-wider">
                  {spec.category}
                </h3>
              </div>
              
              <div className="p-6">
                <ul className="space-y-3">
                  {spec.items.map((item, itemIndex) => (
                    <motion.li 
                      key={itemIndex}
                      className="text-xs tracking-wide text-gray-700 flex items-center"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: (index * 0.2) + (itemIndex * 0.1), duration: 0.4 }}
                      viewport={{ once: true }}
                    >
                      <div className="w-2 h-px bg-black mr-3"></div>
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnicalSpecs;