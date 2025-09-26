import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const DemoReel: React.FC = () => {
  const categories = [
    {
      title: 'MILITARY TRAINING & OPERATIONS',
      videos: [
        { 
          title: 'NET D3A Targeting Methodology', 
          vimeoId: '1118960209?h=eae4243bb6',
          type: 'Military' 
        },
        { 
          title: 'NET 06 Targeting Categories', 
          vimeoId: '1118959884?h=74e56f6aa5',
          type: 'Military' 
        },
        { 
          title: 'JPMRC OPFOR Pre-Training', 
          vimeoId: '1116394081?h=ea378ab6f6',
          type: 'Military' 
        },
        { 
          title: 'OPFOR Urban Combat', 
          vimeoId: '1116394360?h=ed175f2ca7',
          type: 'Military' 
        },
        { 
          title: 'OPFOR Counter Reconnaissance', 
          vimeoId: '1116394504?h=e21ee1c803',
          type: 'Military' 
        },
        { 
          title: 'OPFOR Area Defense', 
          vimeoId: '1116394637?h=f9134cf027',
          type: 'Military' 
        },
        { 
          title: 'OPA Offensive Battlefield Framework', 
          vimeoId: '1116394167?h=7f48b635fb',
          type: 'Military' 
        },
        { 
          title: 'Threat Horizons - Wargaming the Future', 
          vimeoId: '1121987779?h=e6ab3a1ea6',
          type: 'Military' 
        },
        { 
          title: 'PLAA Urban Defense', 
          vimeoId: '1121986596?h=9bf6343377',
          type: 'Military' 
        }
      ]
    },
    {
      title: 'AUTOMOTIVE COMMERCIALS',
      videos: [
        { 
          title: 'Kia of Lansdale "Spring Savings Time"', 
          vimeoId: '1118957721?h=d7a65327d2',
          type: 'Commercial' 
        },
        { 
          title: 'Freehold Jeep "Men in Black"', 
          vimeoId: '1118956439?h=15d1b71939',
          type: 'Commercial' 
        },
        { 
          title: 'Brown Daub Kia "Beat the Rush"', 
          vimeoId: '1118955252?h=989de138a5',
          type: 'Commercial' 
        },
        { 
          title: 'Brown Daub CJDR HR "Bloomin Savings"', 
          vimeoId: '1118963167?h=8203b024ee',
          type: 'Commercial' 
        },
        { 
          title: 'Spirit CJDR "Celebration Event"', 
          vimeoId: '1118962928?h=db3868fc1b',
          type: 'Commercial' 
        },
        { 
          title: 'Chapman NE Ford SSSE', 
          vimeoId: '1121983575?h=4a606c5dfb',
          type: 'Commercial' 
        }
      ]
    },
    {
      title: 'COMMERCIAL & ADVERTISING',
      videos: [
        { 
          title: 'United Insurance Solutions "I\'d like to bundle that"', 
          vimeoId: '1118959128?h=6c3424f704',
          type: 'Commercial' 
        },
        { 
          title: 'Lou\'s Pawn Shop "New Pawn Boss"', 
          vimeoId: '1118958158?h=ac58049a80',
          type: 'Commercial' 
        },
        { 
          title: 'Hutchinson AC "Double Cash"', 
          vimeoId: '1118956981?h=0be48d16c9',
          type: 'Commercial' 
        },
        { 
          title: 'Flag Associates "Insurance Company"', 
          vimeoId: '1118956118?h=b344ff264b',
          type: 'Commercial' 
        },
        { 
          title: 'WENY News 30 Digital Promo', 
          vimeoId: '1121992591?h=cb10fa78e8',
          type: 'Commercial' 
        },
        { 
          title: 'His Tabernacle Welcome Home Sunday', 
          vimeoId: '1121992111?h=2622a3407a',
          type: 'Commercial' 
        },
        { 
          title: 'WENY Email Updates 30', 
          vimeoId: '1121992475?h=903fe2b4ab',
          type: 'Commercial' 
        },
        { 
          title: 'Finger Lakes Audiology Hunting', 
          vimeoId: '1121969794?h=af5f2d0e86',
          type: 'Commercial' 
        },
        { 
          title: 'Tokyo White Demo Commercial', 
          vimeoId: '1121992296?h=983b15df9e',
          type: 'Commercial' 
        }
      ]
    },
    {
      title: '3D TECHNICAL & EXPLAINER VIDEOS',
      videos: [
        { 
          title: 'ASGCO Grizzly Screw Splice', 
          vimeoId: '1118951080?h=805ca64dd1',
          type: 'Technical' 
        },
        { 
          title: 'ASGCO Razor Back Secondary Belt', 
          vimeoId: '1118951365?h=45ae3f89fc',
          type: 'Technical' 
        },
        { 
          title: 'ASGCO Tru-Trainer Flat Return Idler (Spanish)', 
          vimeoId: '1118951612?h=c2f295ec28',
          type: 'Technical' 
        },
        { 
          title: 'Dandy Mini Mart Rewards & Debit', 
          vimeoId: '1118952047?h=32cf40db64',
          type: 'Technical' 
        },
        { 
          title: 'UFP X-Pin Logo Animation', 
          vimeoId: '1121991933?h=5ae8421ce1',
          type: 'Technical' 
        },
        { 
          title: 'LILLY Broadcasting Logo Animation', 
          vimeoId: '1121993007?h=581971a9ff',
          type: 'Technical' 
        }
      ]
    }
  ];

  return (
    <section id="demo-reel" className="py-20 bg-gray-400">
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
            SECTION 02
          </motion.div>
          <motion.h2 
            className="text-2xl md:text-3xl font-bold tracking-wider"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            viewport={{ once: true }}
          >
            DEMO REEL
          </motion.h2>
          <motion.div 
            className="w-16 h-px bg-black mx-auto mt-6"
            initial={{ width: 0 }}
            whileInView={{ width: 64 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            viewport={{ once: true }}
          ></motion.div>
        </motion.div>

        <div className="space-y-16">
          {categories.map((category, categoryIndex) => (
            <motion.div 
              key={categoryIndex}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: categoryIndex * 0.1, duration: 0.6 }}
              viewport={{ once: true, margin: "-50px" }}
            >
              <motion.h3 
                className="text-lg font-bold tracking-wider mb-8 border-b border-gray-200 pb-3"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                viewport={{ once: true }}
              >
                {category.title}
              </motion.h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.videos.map((video, videoIndex) => (
                  <motion.div 
                    key={videoIndex}
                    className="group border border-gray-200 hover:border-black transition-all duration-300"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: videoIndex * 0.1, duration: 0.6 }}
                    viewport={{ once: true, margin: "-50px" }}
                    whileHover={{ y: -5 }}
                  >
                    <div className="aspect-video bg-gray-100 relative overflow-hidden">
                      <iframe
                        src={`https://player.vimeo.com/video/${video.vimeoId}&title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479`}
                        width="100%"
                        height="100%"
                        frameBorder="0"
                        allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
                        title={video.title}
                        className="absolute inset-0 w-full h-full"
                      />
                      <div className="absolute top-3 left-3 text-xs tracking-widest bg-white bg-opacity-90 px-2 py-1 z-10">
                        {video.type.toUpperCase()}
                      </div>
                    </div>
                    
                    <div className="p-4 bg-white group-hover:bg-gray-50 transition-all duration-300">
                      <h4 className="text-sm font-bold tracking-wide mb-2">
                        {video.title}
                      </h4>
                      <div className="flex items-center justify-between">
                        <a 
                          href={`https://vimeo.com/${video.vimeoId}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs tracking-widest text-gray-500 hover:text-black transition-colors duration-300 flex items-center"
                        >
                          VIEW ON VIMEO
                          <ExternalLink size={14} className="ml-2" />
                        </a>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DemoReel;