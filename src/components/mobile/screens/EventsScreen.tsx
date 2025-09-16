import React, { useState } from 'react';
import { Calendar, Clock, MapPin, Users, Star, ChevronRight } from 'lucide-react';

const EventsScreen: React.FC = () => {
  const [activeTab, setActiveTab] = useState('events');

  const events = [
    {
      id: 1,
      title: "Tech Career Summit 2025",
      date: "March 15, 2025",
      time: "10:00 AM - 6:00 PM",
      location: "Bangalore Convention Center",
      type: "Conference",
      image: "https://images.pexels.com/photos/2608517/pexels-photo-2608517.jpeg?auto=compress&cs=tinysrgb&w=400",
      attendees: 250,
      price: "₹2,500",
      registered: false
    },
    {
      id: 2,
      title: "Alumni Networking Mixer",
      date: "March 8, 2025",
      time: "7:00 PM - 10:00 PM",
      location: "Mumbai Business Club",
      type: "Networking",
      image: "https://images.pexels.com/photos/1181354/pexels-photo-1181354.jpeg?auto=compress&cs=tinysrgb&w=400",
      attendees: 80,
      price: "₹1,000",
      registered: true
    },
    {
      id: 3,
      title: "Startup Pitch Competition",
      date: "March 20, 2025",
      time: "2:00 PM - 8:00 PM",
      location: "Delhi Innovation Hub",
      type: "Competition",
      image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400",
      attendees: 120,
      price: "Free",
      registered: false
    }
  ];

  const stories = [
    {
      id: 1,
      title: "From Student to Startup Founder",
      author: "Priya Sharma",
      readTime: "5 min read",
      image: "https://images.pexels.com/photos/3756681/pexels-photo-3756681.jpeg?auto=compress&cs=tinysrgb&w=400",
      excerpt: "How I built a ₹50 crore fintech startup within 3 years of graduation...",
      publishDate: "2 days ago",
      likes: 124
    },
    {
      id: 2,
      title: "Landing My Dream Job at Google",
      author: "Rajesh Kumar",
      readTime: "4 min read",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400",
      excerpt: "My journey from a Tier-3 college to becoming a Senior Software Engineer at Google...",
      publishDate: "1 week ago",
      likes: 89
    },
    {
      id: 3,
      title: "Breaking into Investment Banking",
      author: "Ankit Patel",
      readTime: "6 min read",
      image: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400",
      excerpt: "From engineering background to Wall Street: How I transitioned into investment banking...",
      publishDate: "3 days ago",
      likes: 67
    }
  ];

  return (
    <div className="flex-1 bg-gray-50 pb-20">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-6 pt-12 pb-4">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">Events & Stories</h1>
        
        {/* Tabs */}
        <div className="flex bg-gray-100 rounded-2xl p-1">
          <button
            onClick={() => setActiveTab('events')}
            className={`flex-1 py-2 px-4 rounded-xl font-medium transition-all duration-200 ${
              activeTab === 'events'
                ? 'bg-white text-blue-600 shadow-sm'
                : 'text-gray-600'
            }`}
          >
            Events ({events.length})
          </button>
          <button
            onClick={() => setActiveTab('stories')}
            className={`flex-1 py-2 px-4 rounded-xl font-medium transition-all duration-200 ${
              activeTab === 'stories'
                ? 'bg-white text-blue-600 shadow-sm'
                : 'text-gray-600'
            }`}
          >
            Stories ({stories.length})
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="px-6 py-4">
        {activeTab === 'events' ? (
          <div className="space-y-4">
            {events.map((event) => (
              <div key={event.id} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="relative">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-40 object-cover"
                  />
                  <div className="absolute top-3 right-3">
                    <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-blue-600 text-sm font-medium rounded-full">
                      {event.type}
                    </span>
                  </div>
                  {event.registered && (
                    <div className="absolute top-3 left-3">
                      <span className="px-3 py-1 bg-green-500 text-white text-sm font-medium rounded-full">
                        Registered
                      </span>
                    </div>
                  )}
                </div>
                
                <div className="p-4">
                  <h3 className="font-bold text-gray-900 text-lg mb-3">{event.title}</h3>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-sm text-gray-600">
                      <Calendar className="w-4 h-4 mr-2 text-blue-500" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Clock className="w-4 h-4 mr-2 text-green-500" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <MapPin className="w-4 h-4 mr-2 text-red-500" />
                      <span>{event.location}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center text-sm text-gray-600">
                      <Users className="w-4 h-4 mr-1 text-purple-500" />
                      <span>{event.attendees} attending</span>
                    </div>
                    <span className="font-bold text-blue-600">{event.price}</span>
                  </div>

                  <button 
                    className={`w-full py-3 rounded-xl font-semibold transition-all duration-200 ${
                      event.registered
                        ? 'bg-green-100 text-green-700 border border-green-200'
                        : 'bg-blue-600 text-white hover:bg-blue-700'
                    }`}
                    disabled={event.registered}
                  >
                    {event.registered ? 'Already Registered' : 'RSVP Now'}
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="space-y-4">
            {stories.map((story) => (
              <div key={story.id} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="flex">
                  <img
                    src={story.image}
                    alt={story.title}
                    className="w-24 h-24 object-cover rounded-l-2xl"
                  />
                  <div className="flex-1 p-4">
                    <h3 className="font-bold text-gray-900 text-base mb-2 line-clamp-2">{story.title}</h3>
                    <p className="text-gray-600 text-sm mb-3 line-clamp-2">{story.excerpt}</p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2 text-xs text-gray-500">
                        <span>By {story.author}</span>
                        <span>•</span>
                        <span>{story.readTime}</span>
                        <span>•</span>
                        <span>{story.publishDate}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="flex items-center text-xs text-gray-500">
                          <Star className="w-3 h-3 mr-1 text-yellow-400" />
                          <span>{story.likes}</span>
                        </div>
                        <ChevronRight className="w-4 h-4 text-gray-400" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

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

export default EventsScreen;