export default function Campus() {
  const locations = [
    "Academic Block", "Library", "Garden", "Canteen", 
    "Temple", "Bus Area", "Shops", "Sports Facilities"
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Campus Tour</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {locations.map((loc, idx) => (
          <div key={idx} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <h3 className="text-lg font-bold text-gray-800 mb-2">{loc}</h3>
            <div className="bg-gray-100 h-32 rounded-lg flex items-center justify-center text-gray-400">[Image]</div>
          </div>
        ))}
      </div>
    </div>
  );
}