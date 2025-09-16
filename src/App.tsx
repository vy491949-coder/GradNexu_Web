import React, { useState } from 'react';
import { Smartphone, Monitor } from 'lucide-react';
import Header from './components/Header';
import HomePage from './components/pages/HomePage';
import ProfilePage from './components/pages/ProfilePage';
import MentorshipPage from './components/pages/MentorshipPage';
import DonatePage from './components/pages/DonatePage';
import AlumniPage from './components/pages/AlumniPage';
import JobsPage from './components/pages/JobsPage';
import EventsPage from './components/pages/EventsPage';
import MobileApp from './components/mobile/MobileApp';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [viewMode, setViewMode] = useState<'desktop' | 'mobile'>('desktop');
  const [showMobilePreview, setShowMobilePreview] = useState(false);

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onPageChange={setCurrentPage} />;
      case 'profile':
        return <ProfilePage />;
      case 'mentorship':
        return <MentorshipPage />;
      case 'donate':
        return <DonatePage />;
      case 'alumni':
        return <AlumniPage />;
      case 'jobs':
        return <JobsPage />;
      case 'events':
        return <EventsPage />;
      default:
        return <HomePage onPageChange={setCurrentPage} />;
    }
  };

  // Mobile Preview Modal
  if (showMobilePreview) {
    return (
      <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-3xl p-6 max-w-md w-full">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900">Mobile App Preview</h2>
            <button
              onClick={() => setShowMobilePreview(false)}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-200"
            >
              <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          <div className="space-y-4">
            <button
              onClick={() => {
                setViewMode('mobile');
                setShowMobilePreview(false);
              }}
              className="w-full p-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-2xl hover:from-blue-700 hover:to-blue-800 transition-all duration-200 flex items-center space-x-3"
            >
              <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                <Smartphone className="w-5 h-5" />
              </div>
              <div className="text-left">
                <div className="font-semibold">Interactive Mobile App</div>
                <div className="text-blue-100 text-sm">Full native Android experience</div>
              </div>
            </button>
            
            <div className="text-center text-gray-600">
              <p className="text-sm mb-4">Experience the complete mobile app with:</p>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="bg-blue-50 p-2 rounded-lg">✨ Splash Screen</div>
                <div className="bg-blue-50 p-2 rounded-lg">📱 Onboarding</div>
                <div className="bg-blue-50 p-2 rounded-lg">🏠 Dashboard</div>
                <div className="bg-blue-50 p-2 rounded-lg">👥 Network</div>
                <div className="bg-blue-50 p-2 rounded-lg">💼 Careers</div>
                <div className="bg-blue-50 p-2 rounded-lg">📅 Events</div>
                <div className="bg-blue-50 p-2 rounded-lg">👤 Profile</div>
                <div className="bg-blue-50 p-2 rounded-lg">💝 Donations</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (viewMode === 'mobile') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 flex items-center justify-center p-4">
        <div className="w-full max-w-sm">
          <div className="flex justify-center mb-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-2 flex space-x-2">
              <button
                onClick={() => setViewMode('desktop')}
                className="flex items-center space-x-2 px-4 py-2 rounded-xl text-white/70 hover:text-white hover:bg-white/10 transition-all duration-200"
              >
                <Monitor size={18} />
                <span>Desktop</span>
              </button>
              <button
                onClick={() => setViewMode('mobile')}
                className="flex items-center space-x-2 px-4 py-2 bg-white/20 rounded-xl text-white font-medium"
              >
                <Smartphone size={18} />
                <span>Mobile</span>
              </button>
            </div>
          </div>
          <MobileApp />
        </div>
      </div>
    );
  }
  return (
    <div className="min-h-screen bg-gray-50">
      {/* View Mode Toggle */}
      <div className="fixed top-4 right-4 z-50">
        <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-2 flex flex-col space-y-2 shadow-lg border border-gray-200">
          <div className="flex space-x-2">
            <button
              onClick={() => setViewMode('desktop')}
              className="flex items-center space-x-2 px-3 py-2 bg-blue-600 rounded-xl text-white font-medium"
            >
              <Monitor size={16} />
              <span>Desktop</span>
            </button>
            <button
              onClick={() => setViewMode('mobile')}
              className="flex items-center space-x-2 px-3 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-xl transition-all duration-200"
            >
              <Smartphone size={16} />
              <span>Mobile</span>
            </button>
          </div>
          <button
            onClick={() => setShowMobilePreview(true)}
            className="w-full px-3 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-xl font-medium hover:from-cyan-600 hover:to-blue-600 transition-all duration-200 text-sm"
          >
            📱 Preview Mobile App
          </button>
        </div>
      </div>
      
      <Header currentPage={currentPage} onPageChange={setCurrentPage} />
      <main>
        {renderPage()}
      </main>
    </div>
  );
}

export default App;