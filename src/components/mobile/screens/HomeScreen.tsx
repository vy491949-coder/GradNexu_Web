import React from 'react';
import { Plus, ChevronRight, MapPin, Calendar, Star, Briefcase } from 'lucide-react';

const HomeScreen: React.FC = () => {
  const upcomingEvents = [
    {
      id: 1,
      title: "Tech Career Summit",
      date: "Mar 15",
      image: "https://images.pexels.com/photos/2608517/pexels-photo-2608517.jpeg?auto=compress&cs=tinysrgb&w=300",
      attendees: 250
    },
    {
      id: 2,
      title: "Alumni Networking",
      date: "Mar 8",
      image: "https://images.pexels.com/photos/1181354/pexels-photo-1181354.jpeg?auto=compress&cs=tinysrgb&w=300",
      attendees: 80
    }
  ];

  const latestJobs = [
    {
      id: 1,
      title: "Senior Software Engineer",
      company: "TechCorp India",
      location: "Bangalore",
      salary: "₹15-25 LPA",
      logo: "https://images.pexels.com/photos/267507/pexels-photo-267507.jpeg?auto=compress&cs=tinysrgb&w=100"
    },
    {
      id: 2,
      title: "Product Manager",
      company: "InnovateX Solutions",
      location: "Mumbai",
      salary: "₹20-30 LPA",
      logo: "https://images.pexels.com/photos/416405/pexels-photo-416405.jpeg?auto=compress&cs=tinysrgb&w=100"
    }
  ];

  const featuredMentor = {
    name: "Priya Nair",
    title: "Senior Software Engineer at Google",
    image: "https://images.pexels.com/photos/3756681/pexels-photo-3756681.jpeg?auto=compress&cs=tinysrgb&w=200",
    rating: 4.9,
    sessions: 156
  };

  return (
    <div className="flex-1 bg-gray-50 pb-20">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 px-6 pt-12 pb-8">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-2xl font-bold text-white">Hi, Arjun! 👋</h1>
            <p className="text-blue-100">Ready to explore new opportunities?</p>
          </div>
          <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
            <div className="w-8 h-8 bg-white rounded-full"></div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="px-6 -mt-4">
        {/* Quick Stats */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mb-6">
          <div className="grid grid-cols-3 gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">12</div>
              <div className="text-sm text-gray-600">Applications</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600">3</div>
              <div className="text-sm text-gray-600">Interviews</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-600">8</div>
              <div className="text-sm text-gray-600">Connections</div>
            </div>
          </div>
        </div>

        {/* Upcoming Events */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-gray-900">Upcoming Events</h2>
            <button className="text-blue-600 font-medium">View All</button>
          </div>
          <div className="flex space-x-4 overflow-x-auto pb-2">
            {upcomingEvents.map((event) => (
              <div key={event.id} className="flex-shrink-0 w-64 bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                <img src={event.image} alt={event.title} className="w-full h-32 object-cover" />
                <div className="p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">{event.title}</h3>
                  <div className="flex items-center justify-between text-sm text-gray-600">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {event.date}
                    </div>
                    <div className="flex items-center">
                      <span>{event.attendees} attending</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Latest Jobs */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-gray-900">Latest Jobs</h2>
            <button className="text-blue-600 font-medium">View All</button>
          </div>
          <div className="space-y-3">
            {latestJobs.map((job) => (
              <div key={job.id} className="bg-white rounded-2xl shadow-sm border border-gray-100 p-4">
                <div className="flex items-start space-x-3">
                  <img src={job.logo} alt={job.company} className="w-12 h-12 rounded-lg object-cover" />
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900">{job.title}</h3>
                    <p className="text-blue-600 font-medium text-sm">{job.company}</p>
                    <div className="flex items-center justify-between mt-2">
                      <div className="flex items-center text-sm text-gray-600">
                        <MapPin className="w-4 h-4 mr-1" />
                        {job.location}
                      </div>
                      <span className="text-sm font-semibold text-green-600">{job.salary}</span>
                    </div>
                  </div>
                  <ChevronRight className="w-5 h-5 text-gray-400" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Featured Mentor */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-gray-900">Featured Mentor</h2>
            <button className="text-blue-600 font-medium">View All</button>
          </div>
          <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl p-6 border border-blue-100">
            <div className="flex items-center space-x-4">
              <img src={featuredMentor.image} alt={featuredMentor.name} className="w-16 h-16 rounded-full object-cover" />
              <div className="flex-1">
                <h3 className="font-bold text-gray-900">{featuredMentor.name}</h3>
                <p className="text-blue-600 font-medium text-sm">{featuredMentor.title}</p>
                <div className="flex items-center mt-2">
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <span className="text-sm font-medium text-gray-700 ml-1">{featuredMentor.rating}</span>
                  <span className="text-sm text-gray-500 ml-2">({featuredMentor.sessions} sessions)</span>
                </div>
              </div>
            </div>
            <button className="w-full mt-4 bg-blue-600 text-white font-semibold py-3 rounded-xl hover:bg-blue-700 transition-colors duration-200">
              Request Mentorship
            </button>
          </div>
        </div>

        {/* Recent Success Story */}
        <div className="mb-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Success Story</h2>
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            <img 
              src="https://images.pexels.com/photos/3756681/pexels-photo-3756681.jpeg?auto=compress&cs=tinysrgb&w=400" 
              alt="Success Story" 
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <h3 className="font-bold text-gray-900 mb-2">From Student to Startup Founder</h3>
              <p className="text-gray-600 text-sm mb-3">How I built a ₹50 crore fintech startup within 3 years of graduation...</p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">By Priya Sharma</span>
                <button className="text-blue-600 font-medium text-sm">Read More</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Action Button */}
      <button className="fixed bottom-24 right-6 w-14 h-14 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-full shadow-lg flex items-center justify-center hover:from-blue-700 hover:to-blue-800 transition-all duration-200">
        <Plus className="w-6 h-6" />
      </button>
    </div>
  );
};

export default HomeScreen;