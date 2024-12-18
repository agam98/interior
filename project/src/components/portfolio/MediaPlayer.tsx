import { useState } from 'preact/hooks';
import { motion } from 'framer-motion';
import type { MediaItem } from '../../data/media';

interface MediaPlayerProps {
  item: MediaItem;
}

export function MediaPlayer({ item }: MediaPlayerProps) {
  const [isLoading, setIsLoading] = useState(true);

  if (item.type === 'video') {
    return (
      <div className="relative aspect-video rounded-lg overflow-hidden">
        <video
          className="w-full h-full object-cover"
          poster={item.thumbnail}
          controls
          onLoadedData={() => setIsLoading(false)}
        >
          <source src={item.url} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {isLoading && (
          <div className="absolute inset-0 bg-gray-100 animate-pulse flex items-center justify-center">
            <span className="text-gray-500">Loading...</span>
          </div>
        )}
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="relative aspect-video rounded-lg overflow-hidden"
    >
      <img
        src={item.url}
        alt={item.title}
        className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        onLoad={() => setIsLoading(false)}
      />
      {isLoading && (
        <div className="absolute inset-0 bg-gray-100 animate-pulse" />
      )}
    </motion.div>
  );
}