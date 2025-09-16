import React, { useState } from 'react';
import { Menu, X, User, LogIn } from 'lucide-react';

interface HeaderProps {
  currentPage: string;
  onPageChange: (page: string) => void;
}

const Header: React.FC<HeaderProps> = ({ currentPage, onPageChange }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: 'Home', page: 'home' },
    { label: 'Mentorship', page: 'mentorship' },
    { label: 'Jobs', page: 'jobs' },
    { label: 'Events', page: 'events' },
    { label: 'Alumni', page: 'alumni' },
    { label: 'Donate', page: 'donate' },
  ];

  return (
    <header className="bg-white/95 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div 
            className="flex items-center cursor-pointer"
            onClick={() => onPageChange('home')}
          >
            <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-cyan-400 rounded-lg flex items-center justify-center mr-3">
              <div className="w-4 h-4 bg-white rounded-sm"></div>
            </div>
            <span className="text-2xl font-bold text-gray-900">GradNexus</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item.page}
                onClick={() => onPageChange(item.page)}
                className={`px-3 py-2 text-sm font-medium rounded-md transition-colors duration-200 ${
                  currentPage === item.page
                    ? 'text-blue-600 bg-blue-50'
                    : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Auth Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <button
              onClick={() => onPageChange('profile')}
              className="flex items-center space-x-2 px-4 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md transition-colors duration-200"
            >
              <User size={16} />
              <span>Profile</span>
            </button>
            <button className="flex items-center space-x-2 px-6 py-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white text-sm font-medium rounded-md hover:from-blue-700 hover:to-blue-800 transition-all duration-200 shadow-md hover:shadow-lg">
              <LogIn size={16} />
              <span>Login / Sign Up</span>
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-50"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-gray-200 pt-4 pb-3">
            <div className="space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.page}
                  onClick={() => {
                    onPageChange(item.page);
                    setIsMenuOpen(false);
                  }}
                  className={`block w-full text-left px-3 py-2 text-base font-medium rounded-md transition-colors duration-200 ${
                    currentPage === item.page
                      ? 'text-blue-600 bg-blue-50'
                      : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <button
                onClick={() => {
                  onPageChange('profile');
                  setIsMenuOpen(false);
                }}
                className="block w-full text-left px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md"
              >
                Profile
              </button>
              <button className="w-full mt-3 px-3 py-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white text-base font-medium rounded-md hover:from-blue-700 hover:to-blue-800 transition-all duration-200">
                Login / Sign Up
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;