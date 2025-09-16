import React, { useEffect, useState } from 'react';
import { Smartphone, Wifi } from 'lucide-react';

interface SplashScreenProps {
  onComplete: () => void;
}

const SplashScreen: React.FC<SplashScreenProps> = ({ onComplete }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      setTimeout(onComplete, 500);
    }, 2000);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 flex items-center justify-center">
      {/* Background Animation */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full opacity-60 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      <div className="text-center z-10">
        {/* Logo */}
        <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-cyan-400 rounded-3xl flex items-center justify-center mb-8 mx-auto shadow-2xl">
          <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center">
            <div className="w-6 h-6 bg-gradient-to-br from-blue-600 to-cyan-400 rounded-lg"></div>
          </div>
        </div>

        {/* App Name */}
        <h1 className="text-4xl font-bold text-white mb-2">GradNexus</h1>
        <p className="text-cyan-400 text-lg font-medium mb-12">Explore • Connect • Grow</p>

        {/* Loading Animation */}
        <div className="flex justify-center">
          <div className="w-8 h-8 border-4 border-cyan-400 border-t-transparent rounded-full animate-spin"></div>
        </div>
      </div>
    </div>
  );
};

export default SplashScreen;