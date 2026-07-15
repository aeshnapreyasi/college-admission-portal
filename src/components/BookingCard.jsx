export default function BookingCard() {
  return (
    <div className="w-full bg-blue-400 rounded-2xl shadow-lg p-8 md:p-12 text-center text-white mt-16 mb-8 relative overflow-hidden">
      {/* Decorative background element for a modern look */}
      <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-white opacity-10 rounded-full blur-2xl"></div>
      <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-40 h-40 bg-white opacity-10 rounded-full blur-2xl"></div>

      <div className="relative z-10">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-4 tracking-tight">
          ONLINE SEAT BOOKING
        </h2>
        <p className="text-lg md:text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
          For further details, counselling, and seat booking assistance, please contact our admission office directly.
        </p>
        
        <div className="flex flex-col items-center justify-center space-y-4">
          <p className="text-2xl font-bold bg-white/20 px-6 py-3 rounded-lg backdrop-blur-sm">
            +91 XXXXXXXXXX
          </p>
          
          {/* Action Button that actually dials the number on mobile! */}
          <a 
            href="tel:+91XXXXXXXXXX" 
            className="inline-flex items-center justify-center bg-white text-blue-600 font-bold text-lg px-8 py-3 rounded-full shadow-md hover:bg-gray-100 hover:scale-105 transition-transform duration-300"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            Call Now
          </a>
        </div>
      </div>
    </div>
  );
}