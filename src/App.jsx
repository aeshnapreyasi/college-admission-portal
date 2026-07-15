import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar'; // 1. Added Import
import Hero from './components/Hero';
import InfoCard from './components/InfoCard';
import BookingCard from './components/BookingCard';

// Page Imports
import Fees from './pages/Fees';
import Hostel from './pages/Hostel';
import Campus from './pages/Campus';
import Highlights from './pages/Highlights';
import Documents from './pages/Documents';

function Home() {
  const cards = [
    { title: "Fee Structure", path: "/fees" },
    { title: "Hostel Photos", path: "/hostel" },
    { title: "Campus Tour", path: "/campus" },
    { title: "College Highlights", path: "/highlights" },
    { title: "Documents Required", path: "/documents" }
  ];

  return (
    <>
      <Hero />
      <div className="max-w-6xl mx-auto px-4 mt-12">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Important Information
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card, index) => (
            <InfoCard key={index} title={card.title} path={card.path} />
          ))}
        </div>
        <BookingCard />
      </div>
    </>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50 pb-12">
      {/* 2. Added Navbar here so it shows on every page */}
      <Navbar /> 
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/fees" element={<Fees />} />
        <Route path="/hostel" element={<Hostel />} />
        <Route path="/campus" element={<Campus />} />
        <Route path="/highlights" element={<Highlights />} />
        <Route path="/documents" element={<Documents />} />
      </Routes>
    </div>
  );
}