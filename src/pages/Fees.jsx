export default function Fees() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Fee Structure</h1>
      <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
        <p className="text-gray-600 mb-4">Detailed fee structure breakdown for the upcoming academic year.</p>
        {/* Placeholder table for fees */}
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="pb-3 font-semibold text-gray-700">Course</th>
              <th className="pb-3 font-semibold text-gray-700 text-right">Tuition Fee (Per Annum)</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-100">
              <td className="py-3 text-gray-800">MBBS (General Category)</td>
              <td className="py-3 text-gray-800 text-right">₹ XX,XX,XXX</td>
            </tr>
            <tr>
              <td className="py-3 text-gray-800">MBBS (NRI Category)</td>
              <td className="py-3 text-gray-800 text-right">$ XX,XXX</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}