import React from 'react';
import { motion } from 'framer-motion';

const Experience: React.FC = () => {
  const experiences = [
    {
      period: '2022 - CURRENT',
      role: 'FREELANCE MOTION GRAPHICS EDITOR',
      organization: '',
      description: '',
      location: 'REMOTE'
    },
    {
      period: '2021 - CURRENT',
      role: 'MOTION GRAPHICS EDITOR',
      organization: 'THREAT TEC',
      description: 'Helped grow video department from one to three editors. Responsible for video and audio production of military education explainer videos.',
      location: 'REMOTE'
    },
    {
      period: '2022 - 2023',
      role: 'SALES EXECUTIVE',
      organization: 'RADIGAN MEDIA',
      description: 'Worked with local clients to advertise on radio and internet channels. Coordinated with clients to create live local events.',
      location: 'LOCAL'
    },
    {
      period: '2019 - 2021',
      role: 'COMMERCIAL PRODUCER',
      organization: 'WENY-36',
      description: 'Produced commercials for WENY and Lilly Broadcasting, CBS Puerto Rico affiliate. Rebuilt WENY news graphics package. Helped bring in large local hospital client.',
      location: 'ELMIRA, NY'
    },
    {
      period: '2013 - 2019',
      role: 'MOTION GRAPHICS EDITOR',
      organization: 'AARDVARK VIDEO WORKS',
      description: 'Created spots for clients in Philadelphia/Trenton/Delaware/NYC. Worked with car dealer companies to ensure co-op compliance requirements.',
      location: 'PHILADELPHIA'
    },
    {
      period: '2009 - 2013',
      role: 'NEWSCAST DIRECTOR/COMMERCIAL PRODUCER',
      organization: 'WETM-18',
      description: 'Directed local newscasts, helped to grow morning show audience. Produced commercials for local TV station WETM, Nexstar Communications.',
      location: 'ELMIRA, NY'
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-300">
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
            SECTION 01
          </motion.div>
          <motion.h2 
            className="text-2xl md:text-3xl font-bold tracking-wider"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            viewport={{ once: true }}
          >
            PROFESSIONAL EXPERIENCE
          </motion.h2>
          <motion.div 
            className="w-16 h-px bg-black mx-auto mt-6"
            initial={{ width: 0 }}
            whileInView={{ width: 64 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            viewport={{ once: true }}
          ></motion.div>
        </motion.div>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div 
              key={index}
              className="grid grid-cols-1 md:grid-cols-4 gap-6 border-b border-gray-200 pb-12 last:border-b-0 hover:bg-white hover:shadow-sm transition-all duration-300 p-6 -m-6"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true, margin: "-50px" }}
            >
              <div className="md:col-span-1">
                <div className="text-xs tracking-widest text-gray-500 mb-2">
                  {exp.period}
                </div>
                <div className="text-xs tracking-widest text-gray-400">
                  {exp.location}
                </div>
              </div>
              
              <div className="md:col-span-3">
                <h3 className="text-lg font-bold tracking-wide mb-2">
                  {exp.role}
                </h3>
                <div className="text-sm tracking-wide text-gray-600 mb-3">
                  {exp.organization}
                </div>
                <p className="text-sm leading-relaxed text-gray-700">
                  {exp.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;