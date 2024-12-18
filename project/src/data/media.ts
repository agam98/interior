export interface MediaItem {
  id: string;
  type: 'image' | 'video';
  url: string;
  thumbnail?: string;
  title: string;
  description?: string;
  category: string;
}

export const portfolioMedia: MediaItem[] = [
  {
    id: 'living-room-1',
    type: 'image',
    url: '/images/portfolio/living-room-modern.jpg',
    title: 'Modern Living Room',
    description: 'Contemporary design with clean lines and natural light',
    category: 'Living Room'
  },
  {
    id: 'kitchen-1',
    type: 'image',
    url: '/images/portfolio/kitchen-minimalist.jpg',
    title: 'Minimalist Kitchen',
    description: 'Sleek and functional kitchen design',
    category: 'Kitchen'
  },
  {
    id: 'bedroom-1',
    type: 'image',
    url: '/images/portfolio/bedroom-luxury.jpg',
    title: 'Luxury Bedroom',
    description: 'Elegant master bedroom with premium finishes',
    category: 'Bedroom'
  },
  {
    id: 'office-video-1',
    type: 'video',
    url: '/videos/office-tour.mp4',
    thumbnail: '/images/portfolio/office-thumbnail.jpg',
    title: 'Contemporary Office Tour',
    description: 'Virtual tour of our modern office design',
    category: 'Office'
  }
];