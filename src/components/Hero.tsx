import React from 'react';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.div 
              className="text-xs tracking-widest text-gray-500 mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              MOTION GRAPHICS EDITOR
            </motion.div>
            <motion.h1 
              className="text-4xl md:text-6xl lg:text-7xl font-bold leading-none mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
            >
              PATRICK<br />
              ALLYN
            </motion.h1>
            <motion.div 
              className="w-16 h-px bg-black mb-8"
              initial={{ width: 0 }}
              animate={{ width: 64 }}
              transition={{ delay: 0.8, duration: 0.6, ease: "easeOut" }}
            ></motion.div>
            <motion.p 
              className="text-sm leading-relaxed text-gray-700 max-w-md"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0, duration: 0.6 }}
            >
              Specialized in motion graphics, visual storytelling, voiceover work, and technical animation. 
              Expert in precision editing across commercial, broadcast, and military applications.
            </motion.p>
          </motion.div>
          
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
          >
            <div className="aspect-video bg-gray-100 border border-black flex items-center justify-center group cursor-pointer hover:bg-gray-200 transition-all duration-300">
              <iframe
                src="https://player.vimeo.com/video/1116394747?h=43fcdd6e28&title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479"
                width="100%"
                height="100%"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
                title="PLAA Information Operations"
                className="absolute inset-0 w-full h-full"
              />
              <div className="absolute bottom-4 left-4 bg-black bg-opacity-75 text-white px-3 py-1">
                <div className="text-xs tracking-widest">
                  PLAA INFORMATION OPERATIONS
                </div>
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 text-xs tracking-widest text-gray-400">
              [PLACEHOLDER]
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;