const galleryItems = [
  { type: 'image', src: '/gallery/gallery 1.jpg' },
  { type: 'video', src: "/gallery/gallery vid 1'.mp4" },
  { type: 'video', src: '/gallery/gallery vid 2.mp4' },
  { type: 'video', src: '/gallery/gallery vid 3.mp4' },
  { type: 'video', src: '/gallery/gallery vid 4.mp4' },
];

const Gallery = () => {
  return (
    <section className="py-12 md:py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">Gallery</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {galleryItems.map((item, index) => (
            <div key={index} className="overflow-hidden rounded-lg shadow-lg">
              {item.type === 'image' ? (
                <img src={item.src} alt={`Gallery item ${index + 1}`} className="w-full h-full object-cover" />
              ) : (
                <video src={item.src} controls className="w-full h-full object-cover" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;