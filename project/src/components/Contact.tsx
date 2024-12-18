import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import type { IconType } from 'react-icons';

interface ContactItemProps {
  Icon: IconType;
  title: string;
  content: string | JSX.Element;
}

function ContactItem({ Icon, title, content }: ContactItemProps) {
  return (
    <div className="flex items-center space-x-4">
      <Icon size={24} color="#E67E22" />
      <div>
        <h3 className="text-xl font-semibold mb-1">{title}</h3>
        <div className="text-gray-600">{content}</div>
      </div>
    </div>
  );
}

export function Contact() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container">
        <h2 className="section-title">Contact Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <ContactItem 
              Icon={FaPhone}
              title="Phone"
              content="+62 123 4567 890"
            />
            
            <ContactItem 
              Icon={FaEnvelope}
              title="Email"
              content="info@grahainterior.com"
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
            />
          </div>

          <form className="space-y-6">
            <div>
              <label className="block text-gray-700 mb-2">Name</label>
              <input 
                type="text" 
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-accent"
                placeholder="Your Name"
              />
            </div>
            
            <div>
              <label className="block text-gray-700 mb-2">Email</label>
              <input 
                type="email" 
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-accent"
                placeholder="Your Email"
              />
            </div>
            
            <div>
              <label className="block text-gray-700 mb-2">Message</label>
              <textarea 
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-accent h-32"
                placeholder="Your Message"
              ></textarea>
            </div>
            
            <button 
              type="submit" 
              className="bg-accent hover:bg-opacity-90 text-white px-6 py-3 rounded-lg font-semibold transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}