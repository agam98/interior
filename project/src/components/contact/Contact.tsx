import { ContactItem } from './ContactItem';
import { ContactForm } from './ContactForm';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';

export function Contact() {
  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-primary mb-4">Contact Us</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Get in touch with us to transform your space into something extraordinary
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <ContactItem 
              Icon={FaPhone}
              title="Phone"
              content="+62 123 4567 890"
              delay={0.2}
            />
            
            <ContactItem 
              Icon={FaEnvelope}
              title="Email"
              content="info@grahainterior.com"
              delay={0.4}
            />
            
            <ContactItem 
              Icon={FaMapMarkerAlt}
              title="Address"
              content={
                <>
                  Jl. Interior Design No. 123<br />
                  Jakarta Selatan, 12345<br />
                  Indonesia
                </>
              }
              delay={0.6}
            />
          </div>

          <ContactForm />
        </div>
      </div>
    </section>
  );
}