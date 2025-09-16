import React from 'react';
import { ArrowRight, Users, Briefcase, Calendar, Award, Heart, TrendingUp } from 'lucide-react';

interface HomePageProps {
  onPageChange: (page: string) => void;
}

const HomePage: React.FC<HomePageProps> = ({ onPageChange }) => {
  const features = [
    {
      icon: <Users className="w-8 h-8 text-cyan-400" />,
      title: "Expert Mentorship",
      description: "Connect with industry professionals and get personalized guidance for your career growth."
    },
    {
      icon: <Briefcase className="w-8 h-8 text-cyan-400" />,
      title: "Job Opportunities",
      description: "Discover exciting career opportunities and internships tailored to your skills and interests."
    },
    {
      icon: <Calendar className="w-8 h-8 text-cyan-400" />,
      title: "Networking Events",
      description: "Join exclusive events, workshops, and meetups to expand your professional network."
    },
    {
      icon: <Award className="w-8 h-8 text-cyan-400" />,
      title: "Success Stories",
      description: "Get inspired by alumni achievements and learn from their journey to success."
    }
  ];

  const stats = [
    { number: "10K+", label: "Active Students" },
    { number: "5K+", label: "Alumni Network" },
    { number: "500+", label: "Industry Mentors" },
    { number: "1K+", label: "Job Placements" }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 min-h-screen flex items-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-cyan-400/20"></div>
          {/* Network Animation */}
          <div className="absolute inset-0">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className={`absolute w-2 h-2 bg-cyan-400 rounded-full opacity-60 animate-pulse`}
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 2}s`,
                  animationDuration: `${2 + Math.random() * 2}s`
                }}
              ></div>
            ))}
          </div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fadeInUp">
              <span className="bg-gradient-to-r from-white to-cyan-400 bg-clip-text text-transparent">
                GradNexus
              </span>
            </h1>
            <p className="text-2xl md:text-3xl text-gray-300 font-medium max-w-3xl mx-auto animate-fadeInUp animation-delay-300">
              Explore, Connect, & Grow
            </p>
            <p className="text-lg md:text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed animate-fadeInUp animation-delay-600">
              Your centralized hub for academic excellence, professional growth, and meaningful connections. 
              Join thousands of students, faculty, and alumni building the future together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8 animate-fadeInUp animation-delay-900">
              <button 
                onClick={() => onPageChange('profile')}
                className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-2xl hover:shadow-blue-500/25 hover:-translate-y-1 flex items-center space-x-2"
              >
                <span>Join the Network</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
              <button 
                onClick={() => onPageChange('alumni')}
                className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-xl hover:bg-white/20 transition-all duration-300 border border-white/20 hover:border-white/30"
              >
                Explore Alumni
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Everything You Need to Succeed
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From mentorship to job opportunities, we provide comprehensive support for your academic and professional journey.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
                <div className="mb-6 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Join a Thriving Community
            </h2>
            <p className="text-xl text-gray-300">
              Be part of India's fastest-growing educational network
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-cyan-400 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-300 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Ready to Transform Your Future?
            </h2>
            <p className="text-xl text-gray-600 mb-10">
              Join GradNexus today and unlock unlimited opportunities for growth, learning, and success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => onPageChange('profile')}
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
              >
                Get Started Now
              </button>
              <button 
                onClick={() => onPageChange('donate')}
                className="px-8 py-4 bg-gray-100 text-gray-900 font-semibold rounded-xl hover:bg-gray-200 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <Heart className="w-5 h-5 text-red-500" />
                <span>Support the Community</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;