import React, { useState } from 'react';
import { Search, Filter, MapPin, DollarSign, Clock, Building, Calendar, ChevronDown, Briefcase } from 'lucide-react';

const JobsPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('jobs');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('');
  const [selectedIndustry, setSelectedIndustry] = useState('');
  const [showFilters, setShowFilters] = useState(false);

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
      description: "Join our team to build scalable web applications using React, Node.js, and cloud technologies.",
      requirements: ["3+ years React experience", "Node.js proficiency", "AWS knowledge", "Strong problem-solving skills"],
      benefits: ["Health Insurance", "Work from Home", "Learning Budget", "Stock Options"],
      industry: "Technology"
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
      description: "Lead product strategy and development for our B2B SaaS platform serving enterprise clients.",
      requirements: ["2+ years PM experience", "Technical background", "Data-driven approach", "Strong communication"],
      benefits: ["Flexible Hours", "Health Coverage", "Performance Bonus", "Professional Development"],
      industry: "Technology"
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
      description: "Work with machine learning models and big data to derive actionable business insights.",
      requirements: ["Python/R expertise", "ML algorithms", "SQL proficiency", "Statistics background"],
      benefits: ["Remote Work", "Training Programs", "Health Insurance", "Flexible PTO"],
      industry: "Technology"
    },
    {
      id: 4,
      title: "UX Designer",
      company: "DesignFirst Studio",
      logo: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=100",
      location: "Pune, Maharashtra",
      type: "Full-time",
      experience: "1-3 years",
      salary: "₹8-15 LPA",
      postedDate: "5 days ago",
      description: "Create intuitive user experiences for mobile and web applications across various industries.",
      requirements: ["Design portfolio", "Figma/Sketch skills", "User research experience", "Prototyping abilities"],
      benefits: ["Creative Freedom", "Latest Tools", "Health Benefits", "Skill Development"],
      industry: "Design"
    }
  ];

  const internships = [
    {
      id: 5,
      title: "Software Development Intern",
      company: "StartupLab",
      logo: "https://images.pexels.com/photos/267507/pexels-photo-267507.jpeg?auto=compress&cs=tinysrgb&w=100",
      location: "Bangalore, Karnataka",
      type: "Internship",
      duration: "3-6 months",
      stipend: "₹25,000-40,000/month",
      postedDate: "1 day ago",
      description: "Work on real-world projects using modern web technologies and contribute to product development.",
      requirements: ["CS/IT background", "Basic programming skills", "Eager to learn", "Problem-solving mindset"],
      benefits: ["Mentorship", "Certificate", "Potential Full-time", "Learning Opportunities"],
      industry: "Technology"
    },
    {
      id: 6,
      title: "Marketing Intern",
      company: "BrandBoost Agency",
      logo: "https://images.pexels.com/photos/416405/pexels-photo-416405.jpeg?auto=compress&cs=tinysrgb&w=100",
      location: "Delhi, NCR",
      type: "Internship",
      duration: "2-4 months",
      stipend: "₹15,000-25,000/month",
      postedDate: "4 days ago",
      description: "Support digital marketing campaigns and content creation for diverse client portfolio.",
      requirements: ["Marketing/MBA student", "Content writing", "Social media knowledge", "Creative thinking"],
      benefits: ["Portfolio Building", "Industry Exposure", "Networking", "Skill Development"],
      industry: "Marketing"
    }
  ];

  const locations = ["Bangalore", "Mumbai", "Delhi", "Hyderabad", "Pune", "Chennai"];
  const industries = ["Technology", "Finance", "Healthcare", "E-commerce", "Design", "Marketing"];

  const currentData = activeTab === 'jobs' ? jobs : internships;
  const filteredData = currentData.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.company.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesLocation = !selectedLocation || item.location.includes(selectedLocation);
    const matchesIndustry = !selectedIndustry || item.industry === selectedIndustry;
    return matchesSearch && matchesLocation && matchesIndustry;
  });

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Career Opportunities</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover exciting job opportunities and internships tailored to your skills and aspirations
          </p>
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 mb-8">
          <div className="border-b border-gray-100">
            <nav className="flex space-x-8 px-6">
              <button
                onClick={() => setActiveTab('jobs')}
                className={`py-4 px-2 border-b-2 font-medium transition-colors duration-200 ${
                  activeTab === 'jobs'
                    ? 'border-blue-600 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                Full-time Jobs ({jobs.length})
              </button>
              <button
                onClick={() => setActiveTab('internships')}
                className={`py-4 px-2 border-b-2 font-medium transition-colors duration-200 ${
                  activeTab === 'internships'
                    ? 'border-blue-600 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                Internships ({internships.length})
              </button>
            </nav>
          </div>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mb-8">
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Search Bar */}
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search jobs, companies, or skills..."
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
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
                  <select
                    value={selectedLocation}
                    onChange={(e) => setSelectedLocation(e.target.value)}
                    className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option value="">All Locations</option>
                    {locations.map(location => (
                      <option key={location} value={location}>{location}</option>
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
                    {industries.map(industry => (
                      <option key={industry} value={industry}>{industry}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Experience</label>
                  <select className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                    <option value="">All Experience</option>
                    <option value="entry">Entry Level (0-2 years)</option>
                    <option value="mid">Mid Level (2-5 years)</option>
                    <option value="senior">Senior Level (5+ years)</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Job Type</label>
                  <select className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                    <option value="">All Types</option>
                    <option value="full-time">Full-time</option>
                    <option value="part-time">Part-time</option>
                    <option value="remote">Remote</option>
                  </select>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-gray-600">
            Showing <span className="font-semibold">{filteredData.length}</span> {activeTab}
          </p>
        </div>

        {/* Jobs/Internships List */}
        <div className="space-y-6">
          {filteredData.map((item) => (
            <div key={item.id} className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-all duration-300">
              <div className="flex flex-col lg:flex-row lg:items-center justify-between">
                {/* Left Section */}
                <div className="flex-1">
                  <div className="flex items-start space-x-4">
                    <img
                      src={item.logo}
                      alt={item.company}
                      className="w-12 h-12 rounded-lg object-cover border border-gray-200"
                    />
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-1">
                        <h3 className="text-xl font-semibold text-gray-900">{item.title}</h3>
                        <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                          item.type === 'Full-time' 
                            ? 'bg-green-100 text-green-800' 
                            : 'bg-blue-100 text-blue-800'
                        }`}>
                          {item.type}
                        </span>
                      </div>
                      <p className="text-blue-600 font-medium mb-2">{item.company}</p>
                      
                      <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-3">
                        <div className="flex items-center space-x-1">
                          <MapPin className="w-4 h-4" />
                          <span>{item.location}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <DollarSign className="w-4 h-4" />
                          <span>{activeTab === 'jobs' ? item.salary : item.stipend}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock className="w-4 h-4" />
                          <span>{activeTab === 'jobs' ? item.experience : item.duration}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Calendar className="w-4 h-4" />
                          <span>{item.postedDate}</span>
                        </div>
                      </div>

                      <p className="text-gray-600 mb-4">{item.description}</p>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {item.requirements.slice(0, 3).map((req, index) => (
                          <span
                            key={index}
                            className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                          >
                            {req}
                          </span>
                        ))}
                        {item.requirements.length > 3 && (
                          <span className="px-3 py-1 bg-blue-50 text-blue-600 text-sm rounded-full">
                            +{item.requirements.length - 3} more
                          </span>
                        )}
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {item.benefits.slice(0, 4).map((benefit, index) => (
                          <span
                            key={index}
                            className="px-2 py-1 bg-green-50 text-green-700 text-xs rounded-lg font-medium"
                          >
                            {benefit}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Section - Actions */}
                <div className="lg:ml-6 mt-4 lg:mt-0 flex flex-col space-y-3">
                  <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-medium rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all duration-200 shadow-md hover:shadow-lg">
                    Easy Apply
                  </button>
                  <button className="px-6 py-3 border border-gray-200 text-gray-700 font-medium rounded-xl hover:bg-gray-50 transition-colors duration-200">
                    Save Job
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredData.length === 0 && (
          <div className="text-center py-12">
            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Briefcase className="w-8 h-8 text-gray-400" />
            </div>
            <h3 className="text-xl font-medium text-gray-900 mb-2">No {activeTab} found</h3>
            <p className="text-gray-600">Try adjusting your search criteria or filters</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default JobsPage;