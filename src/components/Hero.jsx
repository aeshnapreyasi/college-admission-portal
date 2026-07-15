import heroImage from '../assets/hero.png'; 
export default function Hero() {
  return (
    <div 
      className="relative w-full h-[60vh] flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      {/* Dark Overlay to make text readable */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Text Content */}
      <div className="relative z-10 text-center px-4">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 tracking-wide">
          D Y Patil Medical College, Pune
        </h1>
        <p className="text-lg md:text-xl text-gray-200 font-medium">
          Sant Tukaram Nagar, Pimpri, Pune, Maharashtra 411018
        </p>
      </div>
    </div>
  );
}