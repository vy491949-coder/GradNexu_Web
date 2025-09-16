import React, { useState } from 'react';
import { Search, Filter, Star, MapPin, Users, Clock, MessageSquare, ChevronDown } from 'lucide-react';

const MentorshipPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedExpertise, setSelectedExpertise] = useState('');
  const [selectedIndustry, setSelectedIndustry] = useState('');
  const [showFilters, setShowFilters] = useState(false);

  const mentors = [
    {
      id: 1,
      name: "Priya Nair",
      title: "Senior Software Engineer",
      company: "Google",
      image: "https://images.pexels.com/photos/3756681/pexels-photo-3756681.jpeg?auto=compress&cs=tinysrgb&w=400",
      expertise: ["Machine Learning", "Python", "Data Science"],
      rating: 4.9,
      sessions: 156,
      location: "Bangalore",
      availability: "Available",
      bio: "ML Engineer with 8+ years experience. Specialized in NLP and computer vision projects."
    },
    {
      id: 2,
      name: "Rahul Gupta",
      title: "Product Manager",
      company: "Microsoft",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400",
      expertise: ["Product Management", "Strategy", "Leadership"],
      rating: 4.8,
      sessions: 203,
      location: "Hyderabad",
      availability: "Available",
      bio: "Leading product teams for enterprise solutions. Passionate about mentoring aspiring PMs."
    },
    {
      id: 3,
      name: "Ananya Sharma",
      title: "UX Design Director",
      company: "Adobe",
      image: "https://images.pexels.com/photos/3867273/pexels-photo-3867273.jpeg?auto=compress&cs=tinysrgb&w=400",
      expertise: ["UI/UX Design", "Design Thinking", "User Research"],
      rating: 4.9,
      sessions: 89,
      location: "Mumbai",
      availability: "Busy",
      bio: "Design leader with expertise in creating user-centered digital experiences."
    },
    {
      id: 4,
      name: "Vikram Singh",
      title: "Cybersecurity Architect",
      company: "Amazon",
      image: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400",
      expertise: ["Cybersecurity", "Cloud Security", "DevSecOps"],
      rating: 4.7,
      sessions: 134,
      location: "Delhi",
      availability: "Available",
      bio: "Security expert helping organizations build robust security frameworks."
    },
    {
      id: 5,
      name: "Shreya Patel",
      title: "Data Scientist",
      company: "Netflix",
      image: "https://images.pexels.com/photos/3206153/pexels-photo-3206153.jpeg?auto=compress&cs=tinysrgb&w=400",
      expertise: ["Data Science", "Analytics", "Machine Learning"],
      rating: 4.8,
      sessions: 178,
      location: "Pune",
      availability: "Available",
      bio: "Data scientist working on recommendation systems and user behavior analytics."
    },
    {
      id: 6,
      name: "Arjun Malhotra",
      title: "Startup Founder",
      company: "TechStart Inc",
      image: "https://images.pexels.com/photos/2698681/pexels-photo-2698681.jpeg?auto=compress&cs=tinysrgb&w=400",
      expertise: ["Entrepreneurship", "Startup Strategy", "Fundraising"],
      rating: 4.6,
      sessions: 97,
      location: "Bangalore",
      availability: "Available",
      bio: "Serial entrepreneur with 2 successful exits. Helping startups scale and raise funding."
    }
  ];

  const expertiseOptions = ["Machine Learning", "Product Management", "UI/UX Design", "Cybersecurity", "Data Science", "Entrepreneurship"];
  const industryOptions = ["Technology", "Finance", "Healthcare", "E-commerce", "Education", "Startup"];

  const filteredMentors = mentors.filter(mentor => {
    const matchesSearch = mentor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         mentor.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         mentor.expertise.some(exp => exp.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesExpertise = !selectedExpertise || mentor.expertise.includes(selectedExpertise);
    return matchesSearch && matchesExpertise;
  });

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Find Your Mentor</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Connect with industry experts and accelerate your career growth through personalized mentorship
          </p>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mb-8">
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Search Bar */}
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search by Name, Company, or Expertise..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            {/* Filter Button */}
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="px-6 py-3 bg-gray-100 text-gray-700 rounded-xl hover:bg-gray-200 transition-colors duration-200 flex items-center space-x-2"
            >
              <Filter size={18} />
              <span>Filters</span>
              <ChevronDown className={`transform transition-transform duration-200 ${showFilters ? 'rotate-180' : ''}`} size={16} />
            </button>
          </div>

          {/* Expandable Filters */}
          {showFilters && (
            <div className="mt-6 pt-6 border-t border-gray-100">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Area of Expertise</label>
                  <select
                    value={selectedExpertise}
                    onChange={(e) => setSelectedExpertise(e.target.value)}
                    className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option value="">All Expertise</option>
                    {expertiseOptions.map(option => (
                      <option key={option} value={option}>{option}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Industry</label>
                  <select
                    value={selectedIndustry}
                    onChange={(e) => setSelectedIndustry(e.target.value)}
                    className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option value="">All Industries</option>
                    {industryOptions.map(option => (
                      <option key={option} value={option}>{option}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Availability</label>
                  <select className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                    <option value="">All</option>
                    <option value="available">Available</option>
                    <option value="busy">Busy</option>
                  </select>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-gray-600">
            Showing <span className="font-semibold">{filteredMentors.length}</span> mentors
          </p>
        </div>

        {/* Mentors Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredMentors.map((mentor) => (
            <div key={mentor.id} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-4">
                    <img
                      src={mentor.image}
                      alt={mentor.name}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">{mentor.name}</h3>
                      <p className="text-blue-600 font-medium">{mentor.title}</p>
                      <p className="text-gray-500 text-sm">{mentor.company}</p>
                    </div>
                  </div>
                  <div className={`px-2 py-1 rounded-full text-xs font-medium ${
                    mentor.availability === 'Available' 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {mentor.availability}
                  </div>
                </div>

                <p className="text-gray-600 text-sm mb-4 line-clamp-2">{mentor.bio}</p>

                {/* Expertise Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {mentor.expertise.slice(0, 3).map((skill, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-blue-50 text-blue-700 text-xs font-medium rounded-lg"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Stats */}
                <div className="flex items-center justify-between text-sm text-gray-500 mb-6">
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="font-medium">{mentor.rating}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Users className="w-4 h-4" />
                    <span>{mentor.sessions} sessions</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <MapPin className="w-4 h-4" />
                    <span>{mentor.location}</span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-3">
                  <button 
                    className={`flex-1 px-4 py-2 rounded-xl font-medium transition-all duration-200 ${
                      mentor.availability === 'Available'
                        ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:from-blue-700 hover:to-blue-800 shadow-md hover:shadow-lg'
                        : 'bg-gray-100 text-gray-500 cursor-not-allowed'
                    }`}
                    disabled={mentor.availability !== 'Available'}
                  >
                    {mentor.availability === 'Available' ? 'Request Mentorship' : 'Currently Busy'}
                  </button>
                  <button className="p-2 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors duration-200">
                    <MessageSquare className="w-5 h-5 text-gray-600" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredMentors.length === 0 && (
          <div className="text-center py-12">
            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="w-8 h-8 text-gray-400" />
            </div>
            <h3 className="text-xl font-medium text-gray-900 mb-2">No mentors found</h3>
            <p className="text-gray-600">Try adjusting your search criteria or filters</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default MentorshipPage;