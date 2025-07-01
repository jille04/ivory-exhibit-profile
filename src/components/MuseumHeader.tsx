
const MuseumHeader = () => {
  return (
    <div className="relative mb-16">
      {/* Decorative columns */}
      <div className="absolute left-8 top-0 w-3 h-32 column-accent"></div>
      <div className="absolute right-8 top-0 w-3 h-32 column-accent"></div>
      
      <div className="text-center py-12">
        <div className="stone-plaque mx-auto max-w-2xl p-8 rounded-lg">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 serif-elegant text-amber-900">
            Alexandra Thornfield
          </h1>
          <div className="w-32 h-1 bg-gradient-to-r from-transparent via-amber-600 to-transparent mx-auto mb-4"></div>
          <p className="text-xl text-amber-800 serif-elegant italic">
            Digital Artisan & Creative Curator
          </p>
          <p className="text-sm text-amber-700 mt-2 serif-elegant">
            Est. 1992 • Collection Since 2010
          </p>
        </div>
      </div>
    </div>
  );
};

export default MuseumHeader;
