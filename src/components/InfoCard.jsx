import { Link } from 'react-router-dom';

export default function InfoCard({ title, path }) {
  return (
    <Link 
      to={path} 
      className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer border border-gray-100 flex items-center justify-center min-h-[120px] text-center"
    >
      <h3 className="text-xl font-bold text-gray-800">{title}</h3>
    </Link>
  );
}