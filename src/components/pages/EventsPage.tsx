import React, { useState } from 'react';
import { Calendar, Clock, MapPin, Users, Star, ArrowRight, Filter, Search, ChevronDown } from 'lucide-react';

const EventsPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('events');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [showFilters, setShowFilters] = useState(false);

  const events = [
    {
      id: 1,
      title: "Tech Career Summit 2025",
      date: "March 15, 2025",
      time: "10:00 AM - 6:00 PM",
      location: "Bangalore Convention Center",
      type: "Conference",
      category: "Technology",
      image: "https://images.pexels.com/photos/2608517/pexels-photo-2608517.jpeg?auto=compress&cs=tinysrgb&w=600",
      attendees: 250,
      price: "₹2,500",
      description: "Join industry leaders for insights into the latest tech trends, AI advancements, and career opportunities in the digital age.",
      highlights: ["50+ Speakers", "Networking Sessions", "Job Fair", "Workshops"],
      organizer: "TechCorp India"
    },
    {
      id: 2,
      title: "Alumni Networking Mixer",
      date: "March 8, 2025",
      time: "7:00 PM - 10:00 PM",
      location: "Mumbai Business Club",
      type: "Networking",
      category: "Alumni",
      image: "https://images.pexels.com/photos/1181354/pexels-photo-1181354.jpeg?auto=compress&cs=tinysrgb&w=600",
      attendees: 80,
      price: "₹1,000",
      description: "Connect with fellow alumni, share experiences, and build meaningful professional relationships in a relaxed environment.",
      highlights: ["Alumni Meet", "Business Cards Exchange", "Dinner & Drinks", "Success Stories"],
      organizer: "Alumni Association"
    },
    {
      id: 3,
      title: "Startup Pitch Competition",
      date: "March 20, 2025",
      time: "2:00 PM - 8:00 PM",
      location: "Delhi Innovation Hub",
      type: "Competition",
      category: "Entrepreneurship",
      image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600",
      attendees: 120,
      price: "Free",
      description: "Watch emerging startups pitch their ideas to top investors and industry experts. Network with entrepreneurs and mentors.",
      highlights: ["₹10L Prize Pool", "Investor Panel", "Mentorship", "Media Coverage"],
      organizer: "StartupLab"
    },
    {
      id: 4,
      title: "Women in Tech Workshop",
      date: "March 12, 2025",
      time: "1:00 PM - 5:00 PM",
      location: "Virtual Event",
      type: "Workshop",
      category: "Technology",
      image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600",
      attendees: 300,
      price: "Free",
      description: "Empower women in technology with skill-building workshops, panel discussions, and networking opportunities.",
      highlights: ["Coding Workshops", "Leadership Panel", "Mentorship Program", "Certificate"],
      organizer: "Women Tech Community"
    }
  ];

  const successStories = [
    {
      id: 1,
      title: "From Student to Startup Founder",
      author: "Priya Sharma",
      readTime: "5 min read",
      category: "Entrepreneurship",
      image: "https://images.pexels.com/photos/3756681/pexels-photo-3756681.jpeg?auto=compress&cs=tinysrgb&w=600",
      excerpt: "How I built a ₹50 crore fintech startup within 3 years of graduation, overcoming challenges and scaling rapidly.",
      tags: ["Startup", "Fintech", "Leadership"],
      publishDate: "2 days ago"
    },
    {
      id: 2,
      title: "Landing My Dream Job at Google",
      author: "Rajesh Kumar",
      readTime: "4 min read",
      category: "Career",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=600",
      excerpt: "My journey from a Tier-3 college to becoming a Senior Software Engineer at Google, with tips for technical interviews.",
      tags: ["Google", "Career", "Programming"],
      publishDate: "1 week ago"
    },
    {
      id: 3,
      title: "Breaking into Investment Banking",
      author: "Ankit Patel",
      readTime: "6 min read",
      category: "Finance",
      image: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=600",
      excerpt: "From engineering background to Wall Street: How I transitioned into investment banking and what it takes to succeed.",
      tags: ["Finance", "Career Switch", "MBA"],
      publishDate: "3 days ago"
    },
    {
      id: 4,
      title: "Product Design Success Story",
      author: "Sneha Reddy",
      readTime: "4 min read",
      category: "Design",
      image: "https://images.pexels.com/photos/3867273/pexels-photo-3867273.jpeg?auto=compress&cs=tinysrgb&w=600",
      excerpt: "Building award-winning products at Adobe: My journey from a design intern to leading UX for million-user products.",
      tags: ["UX Design", "Adobe", "Product"],
      publishDate: "5 days ago"
    }
  ];

  const categories = ["Technology", "Alumni", "Entrepreneurship", "Finance", "Design", "Career"];

  const currentData = activeTab === 'events' ? events : successStories;
  const filteredData = currentData.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         ('organizer' in item ? item.organizer.toLowerCase().includes(searchTerm.toLowerCase()) : 
                          item.author.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = !selectedCategory || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Events & Stories</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join exciting events, workshops, and get inspired by success stories from our community
          </p>
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 mb-8">
          <div className="border-b border-gray-100">
            <nav className="flex space-x-8 px-6">
              <button
                onClick={() => setActiveTab('events')}
                className={`py-4 px-2 border-b-2 font-medium transition-colors duration-200 ${
                  activeTab === 'events'
                    ? 'border-blue-600 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                Upcoming Events ({events.length})
              </button>
              <button
                onClick={() => setActiveTab('stories')}
                className={`py-4 px-2 border-b-2 font-medium transition-colors duration-200 ${
                  activeTab === 'stories'
                    ? 'border-blue-600 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                Success Stories ({successStories.length})
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
                placeholder={`Search ${activeTab}...`}
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
              <div className="grid md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option value="">All Categories</option>
                    {categories.map(category => (
                      <option key={category} value={category}>{category}</option>
                    ))}
                  </select>
                </div>
                {activeTab === 'events' && (
                  <>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Event Type</label>
                      <select className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                        <option value="">All Types</option>
                        <option value="conference">Conference</option>
                        <option value="workshop">Workshop</option>
                        <option value="networking">Networking</option>
                        <option value="competition">Competition</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Price Range</label>
                      <select className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                        <option value="">All Prices</option>
                        <option value="free">Free</option>
                        <option value="paid">Paid</option>
                      </select>
                    </div>
                  </>
                )}
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

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredData.map((item) => (
            <div key={item.id} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="relative">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 right-4">
                  <span className={`px-3 py-1 text-sm font-medium rounded-full ${
                    activeTab === 'events'
                      ? 'bg-blue-100 text-blue-800'
                      : 'bg-green-100 text-green-800'
                  }`}>
                    {activeTab === 'events' ? (item as any).type : (item as any).category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">{item.title}</h3>
                
                {activeTab === 'events' ? (
                  // Events Content
                  <>
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center text-sm text-gray-600">
                        <Calendar className="w-4 h-4 mr-2 text-blue-500" />
                        <span>{(item as any).date}</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <Clock className="w-4 h-4 mr-2 text-green-500" />
                        <span>{(item as any).time}</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <MapPin className="w-4 h-4 mr-2 text-red-500" />
                        <span>{(item as any).location}</span>
                      </div>
                      <div className="flex items-center justify-between text-sm text-gray-600">
                        <div className="flex items-center">
                          <Users className="w-4 h-4 mr-2 text-purple-500" />
                          <span>{(item as any).attendees} attendees</span>
                        </div>
                        <span className="font-semibold text-blue-600">{(item as any).price}</span>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 mb-4 line-clamp-3">{item.description}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {(item as any).highlights.slice(0, 3).map((highlight: string, index: number) => (
                        <span key={index} className="px-2 py-1 bg-blue-50 text-blue-700 text-xs font-medium rounded-lg">
                          {highlight}
                        </span>
                      ))}
                    </div>
                    
                    <button className="w-full px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-medium rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all duration-200 flex items-center justify-center space-x-2">
                      <span>RSVP Now</span>
                      <ArrowRight size={16} />
                    </button>
                  </>
                ) : (
                  // Success Stories Content
                  <>
                    <div className="flex items-center space-x-4 mb-3">
                      <span className="text-sm text-gray-500">By {(item as any).author}</span>
                      <span className="text-sm text-gray-400">•</span>
                      <span className="text-sm text-gray-500">{(item as any).readTime}</span>
                    </div>
                    
                    <p className="text-gray-600 mb-4 line-clamp-3">{(item as any).excerpt}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {(item as any).tags.slice(0, 3).map((tag: string, index: number) => (
                        <span key={index} className="px-2 py-1 bg-green-50 text-green-700 text-xs font-medium rounded-lg">
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">{(item as any).publishDate}</span>
                      <button className="px-4 py-2 bg-gradient-to-r from-green-600 to-green-700 text-white font-medium rounded-xl hover:from-green-700 hover:to-green-800 transition-all duration-200 flex items-center space-x-2">
                        <span>Read More</span>
                        <ArrowRight size={14} />
                      </button>
                    </div>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredData.length === 0 && (
          <div className="text-center py-12">
            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              {activeTab === 'events' ? 
                <Calendar className="w-8 h-8 text-gray-400" /> : 
                <Star className="w-8 h-8 text-gray-400" />
              }
            </div>
            <h3 className="text-xl font-medium text-gray-900 mb-2">No {activeTab} found</h3>
            <p className="text-gray-600">Try adjusting your search criteria or filters</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default EventsPage;