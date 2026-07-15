export default function Highlights() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">College Highlights</h1>
      <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 space-y-4">
        <div><strong>Establishment Year:</strong> 1996 (Example)</div>
        <div><strong>Total Seats:</strong> 250 Seats</div>
        <div><strong>NMC Recognition:</strong> Fully Approved by National Medical Commission</div>
        <div><strong>MBBS Duration:</strong> 4.5 Years + 1 Year Compulsory Internship</div>
        <div>
          <strong>Key Features:</strong>
          <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-600">
            <li>State-of-the-art multi-specialty teaching hospital.</li>
            <li>Advanced research labs and digital libraries.</li>
            <li>Highly experienced clinical faculty members.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}