import React, { useState, useEffect } from 'react';
import SplashScreen from './SplashScreen';
import OnboardingScreen from './OnboardingScreen';
import BottomNavigation from './BottomNavigation';
import HomeScreen from './screens/HomeScreen';
import NetworkScreen from './screens/NetworkScreen';
import CareersScreen from './screens/CareersScreen';
import EventsScreen from './screens/EventsScreen';
import ProfileScreen from './screens/ProfileScreen';
import DonationScreen from './screens/DonationScreen';

const MobileApp: React.FC = () => {
  const [currentScreen, setCurrentScreen] = useState('splash');
  const [activeTab, setActiveTab] = useState('home');

  useEffect(() => {
    // Check if user has seen onboarding
    const hasSeenOnboarding = localStorage.getItem('hasSeenOnboarding');
    if (hasSeenOnboarding && currentScreen === 'splash') {
      setTimeout(() => setCurrentScreen('main'), 2000);
    }
  }, [currentScreen]);

  const handleSplashComplete = () => {
    const hasSeenOnboarding = localStorage.getItem('hasSeenOnboarding');
    if (hasSeenOnboarding) {
      setCurrentScreen('main');
    } else {
      setCurrentScreen('onboarding');
    }
  };

  const handleOnboardingComplete = () => {
    localStorage.setItem('hasSeenOnboarding', 'true');
    setCurrentScreen('main');
  };

  const handleTabChange = (tab: string) => {
    if (tab === 'donate') {
      setCurrentScreen('donation');
    } else {
      setActiveTab(tab);
      if (currentScreen !== 'main') {
        setCurrentScreen('main');
      }
    }
  };

  const handleBackToMain = () => {
    setCurrentScreen('main');
  };

  const renderScreen = () => {
    switch (currentScreen) {
      case 'splash':
        return <SplashScreen onComplete={handleSplashComplete} />;
      case 'onboarding':
        return <OnboardingScreen onComplete={handleOnboardingComplete} />;
      case 'donation':
        return <DonationScreen onBack={handleBackToMain} />;
      case 'main':
        return (
          <div className="flex flex-col h-screen bg-gray-50">
            <div className="flex-1 overflow-hidden">
              {activeTab === 'home' && <HomeScreen />}
              {activeTab === 'network' && <NetworkScreen />}
              {activeTab === 'careers' && <CareersScreen />}
              {activeTab === 'events' && <EventsScreen />}
              {activeTab === 'profile' && <ProfileScreen />}
            </div>
            <BottomNavigation activeTab={activeTab} onTabChange={handleTabChange} />
          </div>
        );
      default:
        return <SplashScreen onComplete={handleSplashComplete} />;
    }
  };

  return (
    <div className="w-full max-w-sm mx-auto bg-white shadow-2xl rounded-3xl overflow-hidden" style={{ height: '844px' }}>
      {renderScreen()}
    </div>
  );
};

export default MobileApp;