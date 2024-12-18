export function Portfolio() {
  const projects = [
    {
      id: 1,
      title: "Modern Living Room",
      image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800",
      category: "Living Room"
    },
    {
      id: 2,
      title: "Minimalist Kitchen",
      image: "https://images.unsplash.com/photo-1556912167-f556f1f39fdf?w=800",
      category: "Kitchen"
    },
    {
      id: 3,
      title: "Luxury Bedroom",
      image: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=800",
      category: "Bedroom"
    },
    {
      id: 4,
      title: "Contemporary Office",
      video: "https://player.vimeo.com/video/428391409",
      category: "Office"
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-gray-50">
      <div className="container">
        <h2 className="section-title">Our Portfolio</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition duration-300">
              {project.image ? (
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-64 object-cover"
                />
              ) : (
                <iframe
                  src={project.video}
                  className="w-full h-64"
                  frameBorder="0"
                  allow="autoplay; fullscreen"
                  allowFullScreen
                ></iframe>
              )}
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600">{project.category}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}