export default function Documents() {
  const docs = [
    "NEET UG Admit Card & Score Card",
    "10th Standard Marks Card & Passing Certificate",
    "12th Standard Marks Card & Passing Certificate",
    "Nationality Certificate / Valid Passport",
    "Domicile Certificate (If Applicable)",
    "Transfer Certificate / Leaving Certificate",
    "Migration Certificate",
    "Recent Passport Size Photographs"
  ];

  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Documents Required for Admission</h1>
      <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
        <ul className="divide-y divide-gray-100">
          {docs.map((doc, idx) => (
            <li key={idx} className="py-3 flex items-start text-gray-700">
              <span className="text-blue-600 mr-3 font-bold">✓</span>
              {doc}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}