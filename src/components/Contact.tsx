import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Clock } from 'lucide-react';

const Contact: React.FC = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: 'EMAIL',
      value: 'patrickallyn@hotmail.com',
      href: 'mailto:patrickallyn@hotmail.com'
    },
    {
      icon: MapPin,
      label: 'LOCATION',
      value: 'Available for Remote Work',
      href: null
    },
    {
      icon: Clock,
      label: 'AVAILABILITY',
      value: 'Open to New Projects',
      href: null
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gray-400">
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
            SECTION 04
          </motion.div>
          <motion.h2 
            className="text-2xl md:text-3xl font-bold tracking-wider"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            viewport={{ once: true }}
          >
            CONTACT INFORMATION
          </motion.h2>
          <motion.div 
            className="w-16 h-px bg-black mx-auto mt-6"
            initial={{ width: 0 }}
            whileInView={{ width: 64 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            viewport={{ once: true }}
          ></motion.div>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contactInfo.map((info, index) => (
              <motion.div 
                key={index}
                className="text-center border border-gray-200 p-8 hover:border-black hover:bg-gray-50 transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                viewport={{ once: true, margin: "-50px" }}
                whileHover={{ y: -5 }}
              >
                <info.icon size={24} className="mx-auto mb-4 text-gray-600" />
                <div className="text-xs tracking-widest text-gray-500 mb-2">
                  {info.label}
                </div>
                {info.href ? (
                  <a 
                    href={info.href}
                    className="text-sm tracking-wide font-medium hover:underline"
                  >
                    {info.value}
                  </a>
                ) : (
                  <div className="text-sm tracking-wide font-medium">
                    {info.value}
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;