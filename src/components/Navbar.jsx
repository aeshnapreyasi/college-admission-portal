import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const location = useLocation();

  // We check if the user is on the home page
  const isHome = location.pathname === '/';

  return (
    <nav className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        
        {/* College Name Logo (Always redirects to home) */}
        <Link to="/" className="font-bold text-xl text-blue-600 truncate">
          Admission Portal
        </Link>
        
        {/* Back Button (Only shows if NOT on the home page) */}
        {!isHome && (
          <Link 
            to="/" 
            className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors flex items-center"
          >
            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Home
          </Link>
        )}
      </div>
    </nav>
  );
}