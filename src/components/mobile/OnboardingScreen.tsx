import React, { useState } from 'react';
import { ChevronRight, Search, Users, TrendingUp } from 'lucide-react';

interface OnboardingScreenProps {
  onComplete: () => void;
}

const OnboardingScreen: React.FC<OnboardingScreenProps> = ({ onComplete }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      icon: <Search className="w-16 h-16 text-cyan-400" />,
      title: "Explore Opportunities",
      description: "Discover exciting job opportunities, internships, and career paths tailored to your skills and interests.",
      illustration: "🎯"
    },
    {
      icon: <Users className="w-16 h-16 text-cyan-400" />,
      title: "Connect with Mentors",
      description: "Get personalized guidance from industry experts and successful alumni to accelerate your career growth.",
      illustration: "🤝"
    },
    {
      icon: <TrendingUp className="w-16 h-16 text-cyan-400" />,
      title: "Grow Your Network",
      description: "Build meaningful connections with peers, faculty, and professionals in your field of interest.",
      illustration: "🌐"
    }
  ];

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    } else {
      onComplete();
    }
  };

  const skipOnboarding = () => {
    onComplete();
  };

  return (
    <div className="fixed inset-0 bg-white flex flex-col">
      {/* Skip Button */}
      <div className="flex justify-end p-6">
        <button
          onClick={skipOnboarding}
          className="text-gray-500 font-medium px-4 py-2 rounded-full hover:bg-gray-100 transition-colors duration-200"
        >
          Skip
        </button>
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col items-center justify-center px-8 pb-20">
        {/* Illustration */}
        <div className="w-32 h-32 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-full flex items-center justify-center mb-8 shadow-lg">
          <span className="text-6xl">{slides[currentSlide].illustration}</span>
        </div>

        {/* Icon */}
        <div className="mb-6">
          {slides[currentSlide].icon}
        </div>

        {/* Title */}
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-4">
          {slides[currentSlide].title}
        </h2>

        {/* Description */}
        <p className="text-lg text-gray-600 text-center leading-relaxed max-w-sm">
          {slides[currentSlide].description}
        </p>
      </div>

      {/* Bottom Section */}
      <div className="px-8 pb-8">
        {/* Dots Indicator */}
        <div className="flex justify-center space-x-2 mb-8">
          {slides.map((_, index) => (
            <div
              key={index}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentSlide ? 'bg-blue-600 w-6' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>

        {/* Action Button */}
        <button
          onClick={nextSlide}
          className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold py-4 rounded-2xl hover:from-blue-700 hover:to-blue-800 transition-all duration-200 shadow-lg flex items-center justify-center space-x-2"
        >
          <span>{currentSlide === slides.length - 1 ? 'Get Started' : 'Next'}</span>
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default OnboardingScreen;