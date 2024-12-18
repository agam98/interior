import { IconType } from 'react-icons';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { contactInfo } from '../../data/contact';

interface ContactItemProps {
  Icon: IconType;
  title: string;
  children: React.ReactNode;
}

function ContactItem({ Icon, title, children }: ContactItemProps) {
  return (
    <div className="flex items-center space-x-4">
      <Icon size={24} className="text-accent" />
      <div>
        <h3 className="text-xl font-semibold mb-1">{title}</h3>
        {children}
      </div>
    </div>
  );
}

export function ContactInfo() {
  return (
    <div className="space-y-8">
      <ContactItem Icon={FaPhone} title="Phone">
        <p className="text-gray-600">{contactInfo.phone}</p>
      </ContactItem>
      
      <ContactItem Icon={FaEnvelope} title="Email">
        <p className="text-gray-600">{contactInfo.email}</p>
      </ContactItem>
      
      <ContactItem Icon={FaMapMarkerAlt} title="Address">
        <p className="text-gray-600">
          {contactInfo.address.street}<br />
          {contactInfo.address.city}, {contactInfo.address.postalCode}<br />
          {contactInfo.address.country}
        </p>
      </ContactItem>
    </div>
  );
}