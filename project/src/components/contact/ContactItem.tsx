import type { IconType } from 'react-icons';
import { motion } from 'framer-motion';

interface ContactItemProps {
  Icon: IconType;
  title: string;
  content: string | JSX.Element;
  delay: number;
}

export function ContactItem({ Icon, title, content, delay }: ContactItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ scale: 1.05 }}
      className="flex items-center space-x-4 p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
    >
      <div className="p-3 bg-accent bg-opacity-10 rounded-full">
        <Icon size={24} color="#E67E22" />
      </div>
      <div>
        <h3 className="text-xl font-semibold mb-1 text-primary">{title}</h3>
        <div className="text-gray-600">{content}</div>
      </div>
    </motion.div>
  );
}