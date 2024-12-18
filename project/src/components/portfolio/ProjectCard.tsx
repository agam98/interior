import { motion } from 'framer-motion';
import { MediaPlayer } from './MediaPlayer';
import type { MediaItem } from '../../data/media';

interface ProjectCardProps {
  item: MediaItem;
  index: number;
}

export function ProjectCard({ item, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
    >
      <MediaPlayer item={item} />
      
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 text-primary">{item.title}</h3>
        {item.description && (
          <p className="text-gray-600 mb-3">{item.description}</p>
        )}
        <span className="inline-block bg-accent bg-opacity-10 text-accent px-3 py-1 rounded-full text-sm">
          {item.category}
        </span>
      </div>
    </motion.div>
  );
}