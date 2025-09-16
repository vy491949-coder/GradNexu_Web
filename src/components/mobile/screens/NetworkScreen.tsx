import React, { useState } from 'react';
import { Search, Filter, Star, MapPin, MessageSquare, ChevronRight } from 'lucide-react';

const NetworkScreen: React.FC = () => {
  const [activeTab, setActiveTab] = useState('mentors');
  const [searchTerm, setSearchTerm] = useState('');

  const mentors = [
    {
      id: 1,
      name: "Priya Nair",
      title: "Senior Software Engineer",
      company: "Google",
      image: "https://images.pexels.com/photos/3756681/pexels-photo-3756681.jpeg?auto=compress&cs=tinysrgb&w=200",
      expertise: ["Machine Learning", "Python"],
      rating: 4.9,
      sessions: 156,
      available: true
    },
    {
      id: 2,
      name: "Rahul Gupta",
      title: "Product Manager",
      company: "Microsoft",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=200",
      expertise: ["Product Strategy", "Leadership"],
      rating: 4.8,
      sessions: 203,
      available: true
    },
    {
      id: 3,
      name: "Ananya Sharma",
      title: "UX Design Director",
      company: "Adobe",
      image: "https://images.pexels.com/photos/3867273/pexels-photo-3867273.jpeg?auto=compress&cs=tinysrgb&w=200",
      expertise: ["UI/UX Design", "Design Thinking"],
      rating: 4.9,
      sessions: 89,
      available: false
    }
  ];

  const alumni = [
    {
      id: 1,
      name: "Rajesh Kumar",
      graduationYear: "2018",
      course: "B.Tech Computer Science",
      currentPosition: "Senior Software Engineer",
      company: "Google India",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=200",
      location: "Bangalore"
    },
    {
      id: 2,
      name: "Sneha Reddy",
      graduationYear: "2020",
      course: "B.Des UI/UX",
      currentPosition: "Senior UX Designer",
      company: "Adobe Systems",
      image: "https://images.pexels.com/photos/3867273/pexels-photo-3867273.jpeg?auto=compress&cs=tinysrgb&w=200",
      location: "Noida"
    },
    {
      id: 3,
      name: "Vikram Singh",
      graduationYear: "2016",
      course: "B.Tech Mechanical",
      currentPosition: "Startup Founder & CEO",
      company: "GreenTech Solutions",
      image: "https://images.pexels.com/photos/2698681/pexels-photo-2698681.jpeg?auto=compress&cs=tinysrgb&w=200",
      location: "Pune"
    }
  ];

  return (
    <div className="flex-1 bg-gray-50 pb-20">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-6 pt-12 pb-4">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">Network</h1>
        
        {/* Search Bar */}
        <div className="relative mb-4">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          <input
            type="text"
            placeholder="Search mentors or alumni..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-12 py-3 bg-gray-50 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
          <button className="absolute right-3 top-1/2 transform -translate-y-1/2 p-1">
            <Filter className="w-5 h-5 text-gray-400" />
          </button>
        </div>

        {/* Tabs */}
        <div className="flex bg-gray-100 rounded-2xl p-1">
          <button
            onClick={() => setActiveTab('mentors')}
            className={`flex-1 py-2 px-4 rounded-xl font-medium transition-all duration-200 ${
              activeTab === 'mentors'
                ? 'bg-white text-blue-600 shadow-sm'
                : 'text-gray-600'
            }`}
          >
            Mentors
          </button>
          <button
            onClick={() => setActiveTab('directory')}
            className={`flex-1 py-2 px-4 rounded-xl font-medium transition-all duration-200 ${
              activeTab === 'directory'
                ? 'bg-white text-blue-600 shadow-sm'
                : 'text-gray-600'
            }`}
          >
            Directory
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="px-6 py-4">
        {activeTab === 'mentors' ? (
          <div className="space-y-4">
            {mentors.map((mentor) => (
              <div key={mentor.id} className="bg-white rounded-2xl shadow-sm border border-gray-100 p-4">
                <div className="flex items-start space-x-4">
                  <div className="relative">
                    <img
                      src={mentor.image}
                      alt={mentor.name}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    <div className={`absolute -bottom-1 -right-1 w-5 h-5 rounded-full border-2 border-white ${
                      mentor.available ? 'bg-green-400' : 'bg-yellow-400'
                    }`}></div>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-900">{mentor.name}</h3>
                    <p className="text-blue-600 font-medium text-sm">{mentor.title}</p>
                    <p className="text-gray-500 text-sm">{mentor.company}</p>
                    
                    <div className="flex flex-wrap gap-2 mt-2">
                      {mentor.expertise.slice(0, 2).map((skill, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 bg-blue-50 text-blue-700 text-xs font-medium rounded-lg"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex items-center justify-between mt-3">
                      <div className="flex items-center space-x-4 text-sm text-gray-600">
                        <div className="flex items-center">
                          <Star className="w-4 h-4 text-yellow-400 fill-current mr-1" />
                          <span>{mentor.rating}</span>
                        </div>
                        <span>{mentor.sessions} sessions</span>
                      </div>
                      <div className="flex space-x-2">
                        <button className="p-2 bg-gray-50 rounded-xl">
                          <MessageSquare className="w-4 h-4 text-gray-600" />
                        </button>
                        <button 
                          className={`px-4 py-2 rounded-xl font-medium text-sm ${
                            mentor.available
                              ? 'bg-blue-600 text-white'
                              : 'bg-gray-100 text-gray-500'
                          }`}
                          disabled={!mentor.available}
                        >
                          {mentor.available ? 'Connect' : 'Busy'}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="space-y-4">
            {alumni.map((alum) => (
              <div key={alum.id} className="bg-white rounded-2xl shadow-sm border border-gray-100 p-4">
                <div className="flex items-center space-x-4">
                  <img
                    src={alum.image}
                    alt={alum.name}
                    className="w-14 h-14 rounded-full object-cover"
                  />
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-900">{alum.name}</h3>
                    <p className="text-blue-600 font-medium text-sm">{alum.currentPosition}</p>
                    <p className="text-gray-500 text-sm">{alum.company}</p>
                    <div className="flex items-center justify-between mt-2">
                      <div className="flex items-center text-xs text-gray-600">
                        <span>Class of {alum.graduationYear}</span>
                        <span className="mx-2">•</span>
                        <MapPin className="w-3 h-3 mr-1" />
                        <span>{alum.location}</span>
                      </div>
                    </div>
                  </div>
                  <ChevronRight className="w-5 h-5 text-gray-400" />
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default NetworkScreen;