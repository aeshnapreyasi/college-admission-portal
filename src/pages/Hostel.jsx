export default function Hostel() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Hostel Accommodations</h1>
      
      <div className="space-y-12">
        <section>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Girls Hostel</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <div className="bg-gray-200 h-48 rounded-xl flex items-center justify-center text-gray-500">[Photo Placeholder]</div>
            <div className="bg-gray-200 h-48 rounded-xl flex items-center justify-center text-gray-500">[Photo Placeholder]</div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Boys Hostel</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <div className="bg-gray-200 h-48 rounded-xl flex items-center justify-center text-gray-500">[Photo Placeholder]</div>
            <div className="bg-gray-200 h-48 rounded-xl flex items-center justify-center text-gray-500">[Photo Placeholder]</div>
          </div>
        </section>
      </div>
    </div>
  );
}