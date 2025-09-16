import React, { useState } from 'react';
import { Search, Filter, MapPin, DollarSign, Clock, Bookmark, ChevronRight } from 'lucide-react';

const CareersScreen: React.FC = () => {
  const [activeTab, setActiveTab] = useState('jobs');
  const [searchTerm, setSearchTerm] = useState('');

  const jobs = [
    {
      id: 1,
      title: "Senior Software Engineer",
      company: "TechCorp India",
      logo: "https://images.pexels.com/photos/267507/pexels-photo-267507.jpeg?auto=compress&cs=tinysrgb&w=100",
      location: "Bangalore, Karnataka",
      type: "Full-time",
      experience: "3-5 years",
      salary: "₹15-25 LPA",
      postedDate: "2 days ago",
      saved: false
    },
    {
      id: 2,
      title: "Product Manager",
      company: "InnovateX Solutions",
      logo: "https://images.pexels.com/photos/416405/pexels-photo-416405.jpeg?auto=compress&cs=tinysrgb&w=100",
      location: "Mumbai, Maharashtra",
      type: "Full-time",
      experience: "2-4 years",
      salary: "₹20-30 LPA",
      postedDate: "1 week ago",
      saved: true
    },
    {
      id: 3,
      title: "Data Scientist",
      company: "DataVision Analytics",
      logo: "https://images.pexels.com/photos/669610/pexels-photo-669610.jpeg?auto=compress&cs=tinysrgb&w=100",
      location: "Hyderabad, Telangana",
      type: "Full-time",
      experience: "2-4 years",
      salary: "₹12-20 LPA",
      postedDate: "3 days ago",
      saved: false
    }
  ];

  const internships = [
    {
      id: 1,
      title: "Software Development Intern",
      company: "StartupLab",
      logo: "https://images.pexels.com/photos/267507/pexels-photo-267507.jpeg?auto=compress&cs=tinysrgb&w=100",
      location: "Bangalore, Karnataka",
      type: "Internship",
      duration: "3-6 months",
      stipend: "₹25,000-40,000/month",
      postedDate: "1 day ago",
      saved: false
    },
    {
      id: 2,
      title: "Marketing Intern",
      company: "BrandBoost Agency",
      logo: "https://images.pexels.com/photos/416405/pexels-photo-416405.jpeg?auto=compress&cs=tinysrgb&w=100",
      location: "Delhi, NCR",
      type: "Internship",
      duration: "2-4 months",
      stipend: "₹15,000-25,000/month",
      postedDate: "4 days ago",
      saved: true
    }
  ];

  const currentData = activeTab === 'jobs' ? jobs : internships;

  return (
    <div className="flex-1 bg-gray-50 pb-20">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-6 pt-12 pb-4">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">Careers</h1>
        
        {/* Search Bar */}
        <div className="relative mb-4">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          <input
            type="text"
            placeholder="Search jobs or internships..."
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
            onClick={() => setActiveTab('jobs')}
            className={`flex-1 py-2 px-4 rounded-xl font-medium transition-all duration-200 ${
              activeTab === 'jobs'
                ? 'bg-white text-blue-600 shadow-sm'
                : 'text-gray-600'
            }`}
          >
            Jobs ({jobs.length})
          </button>
          <button
            onClick={() => setActiveTab('internships')}
            className={`flex-1 py-2 px-4 rounded-xl font-medium transition-all duration-200 ${
              activeTab === 'internships'
                ? 'bg-white text-blue-600 shadow-sm'
                : 'text-gray-600'
            }`}
          >
            Internships ({internships.length})
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="px-6 py-4">
        <div className="space-y-4">
          {currentData.map((item) => (
            <div key={item.id} className="bg-white rounded-2xl shadow-sm border border-gray-100 p-4">
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-start space-x-3 flex-1">
                  <img
                    src={item.logo}
                    alt={item.company}
                    className="w-12 h-12 rounded-xl object-cover border border-gray-200"
                  />
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-900 text-base leading-tight">{item.title}</h3>
                    <p className="text-blue-600 font-medium text-sm">{item.company}</p>
                    <div className="flex items-center mt-1">
                      <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                        item.type === 'Full-time' 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-blue-100 text-blue-800'
                      }`}>
                        {item.type}
                      </span>
                    </div>
                  </div>
                </div>
                <button className="p-2 hover:bg-gray-50 rounded-xl">
                  <Bookmark 
                    className={`w-5 h-5 ${
                      item.saved ? 'text-blue-600 fill-current' : 'text-gray-400'
                    }`} 
                  />
                </button>
              </div>

              <div className="space-y-2 mb-4">
                <div className="flex items-center text-sm text-gray-600">
                  <MapPin className="w-4 h-4 mr-2 text-gray-400" />
                  <span>{item.location}</span>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <DollarSign className="w-4 h-4 mr-2 text-gray-400" />
                  <span>{activeTab === 'jobs' ? item.salary : item.stipend}</span>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <Clock className="w-4 h-4 mr-2 text-gray-400" />
                  <span>{activeTab === 'jobs' ? item.experience : item.duration}</span>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-xs text-gray-500">{item.postedDate}</span>
                <div className="flex space-x-2">
                  <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-xl font-medium text-sm hover:bg-gray-200 transition-colors duration-200">
                    View Details
                  </button>
                  <button className="px-4 py-2 bg-blue-600 text-white rounded-xl font-medium text-sm hover:bg-blue-700 transition-colors duration-200 flex items-center space-x-1">
                    <span>Apply</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More */}
        <div className="mt-6 text-center">
          <button className="px-6 py-3 bg-white border border-gray-200 text-gray-700 rounded-2xl font-medium hover:bg-gray-50 transition-colors duration-200">
            Load More {activeTab}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CareersScreen;