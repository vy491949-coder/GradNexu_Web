import React, { useState } from 'react';
import { Search, Filter, MapPin, Calendar, Briefcase, GraduationCap, Users, Mail, MessageSquare, ChevronDown } from 'lucide-react';

const AlumniPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedBatch, setSelectedBatch] = useState('');
  const [selectedCompany, setSelectedCompany] = useState('');
  const [showFilters, setShowFilters] = useState(false);

  const alumni = [
    {
      id: 1,
      name: "Rajesh Kumar",
      profilePicture: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400",
      graduationYear: "2018",
      course: "B.Tech Computer Science",
      currentPosition: "Senior Software Engineer",
      company: "Google India",
      location: "Bangalore, Karnataka",
      experience: "5 years",
      bio: "Passionate about building scalable systems and mentoring junior developers.",
      achievements: ["Tech Lead for Google Pay India", "Published 3 research papers"],
      skills: ["Python", "Kubernetes", "Machine Learning"]
    },
    {
      id: 2,
      name: "Priya Sharma",
      profilePicture: "https://images.pexels.com/photos/3756681/pexels-photo-3756681.jpeg?auto=compress&cs=tinysrgb&w=400",
      graduationYear: "2017",
      course: "B.Tech Electronics",
      currentPosition: "Product Manager",
      company: "Microsoft",
      location: "Hyderabad, Telangana",
      experience: "6 years",
      bio: "Leading product strategy for enterprise solutions and AI-powered tools.",
      achievements: ["Shipped products used by 100M+ users", "Microsoft Gold Award winner"],
      skills: ["Product Strategy", "Data Analytics", "AI/ML"]
    },
    {
      id: 3,
      name: "Ankit Patel",
      profilePicture: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400",
      graduationYear: "2019",
      course: "MBA Finance",
      currentPosition: "Investment Banking Analyst",
      company: "Goldman Sachs",
      location: "Mumbai, Maharashtra",
      experience: "4 years",
      bio: "Specializing in mergers & acquisitions and corporate finance advisory.",
      achievements: ["Managed deals worth $500M+", "Top performer 2 years running"],
      skills: ["Financial Modeling", "Valuation", "Risk Management"]
    },
    {
      id: 4,
      name: "Sneha Reddy",
      profilePicture: "https://images.pexels.com/photos/3867273/pexels-photo-3867273.jpeg?auto=compress&cs=tinysrgb&w=400",
      graduationYear: "2020",
      course: "B.Des UI/UX",
      currentPosition: "Senior UX Designer",
      company: "Adobe Systems",
      location: "Noida, Uttar Pradesh",
      experience: "3 years",
      bio: "Creating intuitive digital experiences and leading design systems.",
      achievements: ["Adobe Design Excellence Award", "Speaker at 5+ design conferences"],
      skills: ["User Research", "Prototyping", "Design Systems"]
    },
    {
      id: 5,
      name: "Vikram Singh",
      profilePicture: "https://images.pexels.com/photos/2698681/pexels-photo-2698681.jpeg?auto=compress&cs=tinysrgb&w=400",
      graduationYear: "2016",
      course: "B.Tech Mechanical",
      currentPosition: "Startup Founder & CEO",
      company: "GreenTech Solutions",
      location: "Pune, Maharashtra",
      experience: "7 years",
      bio: "Building sustainable technology solutions for the future.",
      achievements: ["Raised $2M in Series A", "Forbes 30 Under 30"],
      skills: ["Leadership", "Strategy", "Sustainability"]
    },
    {
      id: 6,
      name: "Kavya Nair",
      profilePicture: "https://images.pexels.com/photos/3206153/pexels-photo-3206153.jpeg?auto=compress&cs=tinysrgb&w=400",
      graduationYear: "2018",
      course: "B.Tech IT",
      currentPosition: "Data Scientist",
      company: "Netflix",
      location: "Mumbai, Maharashtra",
      experience: "5 years",
      bio: "Working on recommendation algorithms and user behavior analytics.",
      achievements: ["Improved recommendation accuracy by 15%", "Published ML research"],
      skills: ["Python", "TensorFlow", "Statistics"]
    }
  ];

  const companies = [...new Set(alumni.map(alum => alum.company))];
  const batches = [...new Set(alumni.map(alum => alum.graduationYear))].sort((a, b) => b.localeCompare(a));

  const filteredAlumni = alumni.filter(alum => {
    const matchesSearch = alum.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         alum.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         alum.course.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesBatch = !selectedBatch || alum.graduationYear === selectedBatch;
    const matchesCompany = !selectedCompany || alum.company === selectedCompany;
    return matchesSearch && matchesBatch && matchesCompany;
  });

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Alumni Directory</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Connect with our accomplished graduates making their mark across industries worldwide
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
                placeholder="Search by Name, Batch, or Company..."
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
                  <label className="block text-sm font-medium text-gray-700 mb-2">Graduation Year</label>
                  <select
                    value={selectedBatch}
                    onChange={(e) => setSelectedBatch(e.target.value)}
                    className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option value="">All Batches</option>
                    {batches.map(batch => (
                      <option key={batch} value={batch}>Class of {batch}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Company</label>
                  <select
                    value={selectedCompany}
                    onChange={(e) => setSelectedCompany(e.target.value)}
                    className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option value="">All Companies</option>
                    {companies.map(company => (
                      <option key={company} value={company}>{company}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Industry</label>
                  <select className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                    <option value="">All Industries</option>
                    <option value="technology">Technology</option>
                    <option value="finance">Finance</option>
                    <option value="healthcare">Healthcare</option>
                    <option value="consulting">Consulting</option>
                  </select>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 text-center">
            <Users className="w-8 h-8 text-blue-600 mx-auto mb-3" />
            <div className="text-2xl font-bold text-gray-900">{alumni.length}</div>
            <div className="text-gray-600">Total Alumni</div>
          </div>
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 text-center">
            <Briefcase className="w-8 h-8 text-green-600 mx-auto mb-3" />
            <div className="text-2xl font-bold text-gray-900">{companies.length}</div>
            <div className="text-gray-600">Companies</div>
          </div>
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 text-center">
            <GraduationCap className="w-8 h-8 text-purple-600 mx-auto mb-3" />
            <div className="text-2xl font-bold text-gray-900">{batches.length}</div>
            <div className="text-gray-600">Batches</div>
          </div>
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 text-center">
            <MapPin className="w-8 h-8 text-red-600 mx-auto mb-3" />
            <div className="text-2xl font-bold text-gray-900">15+</div>
            <div className="text-gray-600">Cities</div>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-gray-600">
            Showing <span className="font-semibold">{filteredAlumni.length}</span> alumni
          </p>
        </div>

        {/* Alumni Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredAlumni.map((alum) => (
            <div key={alum.id} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="p-6">
                {/* Header */}
                <div className="flex items-center space-x-4 mb-4">
                  <img
                    src={alum.profilePicture}
                    alt={alum.name}
                    className="w-16 h-16 rounded-full object-cover border-4 border-gray-100"
                  />
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900">{alum.name}</h3>
                    <p className="text-blue-600 font-medium">{alum.currentPosition}</p>
                    <p className="text-gray-500 text-sm">{alum.company}</p>
                  </div>
                </div>

                {/* Bio */}
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">{alum.bio}</p>

                {/* Details Grid */}
                <div className="space-y-3 mb-4">
                  <div className="flex items-center text-sm text-gray-600">
                    <GraduationCap className="w-4 h-4 mr-2 text-blue-500" />
                    <span>{alum.course} • Class of {alum.graduationYear}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <MapPin className="w-4 h-4 mr-2 text-green-500" />
                    <span>{alum.location}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Calendar className="w-4 h-4 mr-2 text-purple-500" />
                    <span>{alum.experience} experience</span>
                  </div>
                </div>

                {/* Skills */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {alum.skills.slice(0, 3).map((skill, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-blue-50 text-blue-700 text-xs font-medium rounded-lg"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Achievements */}
                <div className="mb-6">
                  <h4 className="text-sm font-medium text-gray-700 mb-2">Key Achievements</h4>
                  <ul className="space-y-1">
                    {alum.achievements.slice(0, 2).map((achievement, index) => (
                      <li key={index} className="text-xs text-gray-600 flex items-start">
                        <span className="w-1 h-1 bg-blue-500 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-3">
                  <button className="flex-1 px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-medium rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all duration-200 text-sm">
                    View Profile
                  </button>
                  <button className="p-2 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors duration-200">
                    <Mail className="w-4 h-4 text-gray-600" />
                  </button>
                  <button className="p-2 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors duration-200">
                    <MessageSquare className="w-4 h-4 text-gray-600" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredAlumni.length === 0 && (
          <div className="text-center py-12">
            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="w-8 h-8 text-gray-400" />
            </div>
            <h3 className="text-xl font-medium text-gray-900 mb-2">No alumni found</h3>
            <p className="text-gray-600">Try adjusting your search criteria or filters</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AlumniPage;