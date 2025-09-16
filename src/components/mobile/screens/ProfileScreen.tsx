import React, { useState } from 'react';
import { Edit3, Mail, Phone, MapPin, Calendar, Star, Award, Settings, Heart, LogOut, ChevronRight } from 'lucide-react';

const ProfileScreen: React.FC = () => {
  const [showSettings, setShowSettings] = useState(false);

  const user = {
    name: "Arjun Sharma",
    profilePicture: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=200",
    graduationYear: "2022",
    course: "B.Tech Computer Science",
    cgpa: "8.7",
    email: "arjun.sharma@example.com",
    phone: "+91 98765 43210",
    location: "Bangalore, Karnataka",
    bio: "Passionate software engineer with expertise in full-stack development."
  };

  const skills = [
    "Python", "JavaScript", "React.js", "Node.js", "Machine Learning", 
    "UI/UX Design", "PostgreSQL", "MongoDB", "AWS", "Docker"
  ];

  const achievements = [
    "Winner - National Coding Championship 2021",
    "Published research paper on AI in Healthcare",
    "Open Source Contributor - 50+ repositories",
    "Google Developer Student Club Lead"
  ];

  const stats = [
    { label: "Applications", value: "12", color: "blue" },
    { label: "Interviews", value: "3", color: "green" },
    { label: "Connections", value: "8", color: "purple" }
  ];

  if (showSettings) {
    return (
      <div className="flex-1 bg-gray-50 pb-20">
        {/* Header */}
        <div className="bg-white border-b border-gray-200 px-6 pt-12 pb-4">
          <div className="flex items-center space-x-4">
            <button 
              onClick={() => setShowSettings(false)}
              className="p-2 hover:bg-gray-100 rounded-xl"
            >
              <ChevronRight className="w-5 h-5 text-gray-600 rotate-180" />
            </button>
            <h1 className="text-2xl font-bold text-gray-900">Settings</h1>
          </div>
        </div>

        {/* Settings Content */}
        <div className="px-6 py-4 space-y-4">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-4">
            <h3 className="font-bold text-gray-900 mb-4">Account Settings</h3>
            <div className="space-y-3">
              <button className="w-full flex items-center justify-between p-3 hover:bg-gray-50 rounded-xl">
                <span className="text-gray-700">Edit Profile</span>
                <ChevronRight className="w-5 h-5 text-gray-400" />
              </button>
              <button className="w-full flex items-center justify-between p-3 hover:bg-gray-50 rounded-xl">
                <span className="text-gray-700">Privacy Settings</span>
                <ChevronRight className="w-5 h-5 text-gray-400" />
              </button>
              <button className="w-full flex items-center justify-between p-3 hover:bg-gray-50 rounded-xl">
                <span className="text-gray-700">Notification Preferences</span>
                <ChevronRight className="w-5 h-5 text-gray-400" />
              </button>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-4">
            <h3 className="font-bold text-gray-900 mb-4">Support</h3>
            <div className="space-y-3">
              <button className="w-full flex items-center justify-between p-3 hover:bg-gray-50 rounded-xl">
                <span className="text-gray-700">Help Center</span>
                <ChevronRight className="w-5 h-5 text-gray-400" />
              </button>
              <button className="w-full flex items-center justify-between p-3 hover:bg-gray-50 rounded-xl">
                <span className="text-gray-700">Contact Support</span>
                <ChevronRight className="w-5 h-5 text-gray-400" />
              </button>
              <button className="w-full flex items-center justify-between p-3 hover:bg-gray-50 rounded-xl">
                <span className="text-gray-700">Terms & Privacy</span>
                <ChevronRight className="w-5 h-5 text-gray-400" />
              </button>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-4">
            <button className="w-full flex items-center justify-between p-3 hover:bg-red-50 rounded-xl text-red-600">
              <div className="flex items-center space-x-3">
                <LogOut className="w-5 h-5" />
                <span>Sign Out</span>
              </div>
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex-1 bg-gray-50 pb-20">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 px-6 pt-12 pb-8">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold text-white">Profile</h1>
          <button 
            onClick={() => setShowSettings(true)}
            className="p-2 bg-white/20 rounded-xl"
          >
            <Settings className="w-5 h-5 text-white" />
          </button>
        </div>

        {/* Profile Header */}
        <div className="flex items-center space-x-4">
          <div className="relative">
            <img
              src={user.profilePicture}
              alt={user.name}
              className="w-20 h-20 rounded-full object-cover border-4 border-white/20"
            />
            <button className="absolute -bottom-1 -right-1 w-8 h-8 bg-white text-blue-600 rounded-full flex items-center justify-center shadow-lg">
              <Edit3 size={14} />
            </button>
          </div>
          <div className="flex-1">
            <h2 className="text-xl font-bold text-white">{user.name}</h2>
            <p className="text-blue-100 font-medium">{user.course}</p>
            <p className="text-blue-200 text-sm">Class of {user.graduationYear}</p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="px-6 -mt-4">
        {/* Stats Cards */}
        <div className="grid grid-cols-3 gap-3 mb-6">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-sm border border-gray-100 p-4 text-center">
              <div className={`text-2xl font-bold text-${stat.color}-600`}>{stat.value}</div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Bio Section */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-4 mb-4">
          <div className="flex items-center justify-between mb-3">
            <h3 className="font-bold text-gray-900">About</h3>
            <button className="p-1 hover:bg-gray-100 rounded-lg">
              <Edit3 className="w-4 h-4 text-gray-400" />
            </button>
          </div>
          <p className="text-gray-600 text-sm leading-relaxed">{user.bio}</p>
        </div>

        {/* Contact Info */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-4 mb-4">
          <h3 className="font-bold text-gray-900 mb-3">Contact Information</h3>
          <div className="space-y-3">
            <div className="flex items-center space-x-3 text-gray-600">
              <Mail className="w-4 h-4 text-blue-500" />
              <span className="text-sm">{user.email}</span>
            </div>
            <div className="flex items-center space-x-3 text-gray-600">
              <Phone className="w-4 h-4 text-green-500" />
              <span className="text-sm">{user.phone}</span>
            </div>
            <div className="flex items-center space-x-3 text-gray-600">
              <MapPin className="w-4 h-4 text-red-500" />
              <span className="text-sm">{user.location}</span>
            </div>
          </div>
        </div>

        {/* Academic Details */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-4 mb-4">
          <h3 className="font-bold text-gray-900 mb-3">Academic Details</h3>
          <div className="grid grid-cols-2 gap-4">
            <div className="text-center p-3 bg-blue-50 rounded-xl">
              <div className="text-lg font-bold text-blue-600">{user.course}</div>
              <div className="text-xs text-gray-600">Course</div>
            </div>
            <div className="text-center p-3 bg-green-50 rounded-xl">
              <div className="text-lg font-bold text-green-600">{user.cgpa}</div>
              <div className="text-xs text-gray-600">CGPA</div>
            </div>
          </div>
        </div>

        {/* Skills */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-4 mb-4">
          <div className="flex items-center justify-between mb-3">
            <h3 className="font-bold text-gray-900">Skills</h3>
            <button className="p-1 hover:bg-gray-100 rounded-lg">
              <Edit3 className="w-4 h-4 text-gray-400" />
            </button>
          </div>
          <div className="flex flex-wrap gap-2">
            {skills.slice(0, 8).map((skill, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-blue-50 text-blue-700 text-sm font-medium rounded-full"
              >
                {skill}
              </span>
            ))}
            {skills.length > 8 && (
              <span className="px-3 py-1 bg-gray-100 text-gray-600 text-sm font-medium rounded-full">
                +{skills.length - 8} more
              </span>
            )}
          </div>
        </div>

        {/* Achievements */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-4 mb-4">
          <h3 className="font-bold text-gray-900 mb-3 flex items-center">
            <Award className="w-5 h-5 mr-2 text-yellow-500" />
            Achievements
          </h3>
          <div className="space-y-2">
            {achievements.slice(0, 3).map((achievement, index) => (
              <div key={index} className="flex items-start space-x-2 p-2 bg-yellow-50 rounded-xl">
                <Star className="w-4 h-4 text-yellow-500 mt-0.5 flex-shrink-0" />
                <span className="text-sm text-gray-700">{achievement}</span>
              </div>
            ))}
            {achievements.length > 3 && (
              <button className="text-blue-600 text-sm font-medium">
                View all achievements
              </button>
            )}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-4 mb-6">
          <h3 className="font-bold text-gray-900 mb-3">Quick Actions</h3>
          <div className="space-y-2">
            <button className="w-full flex items-center justify-between p-3 hover:bg-gray-50 rounded-xl">
              <div className="flex items-center space-x-3">
                <Heart className="w-5 h-5 text-red-500" />
                <span className="text-gray-700">Support GradNexus</span>
              </div>
              <ChevronRight className="w-5 h-5 text-gray-400" />
            </button>
            <button className="w-full flex items-center justify-between p-3 hover:bg-gray-50 rounded-xl">
              <div className="flex items-center space-x-3">
                <Star className="w-5 h-5 text-yellow-500" />
                <span className="text-gray-700">Rate the App</span>
              </div>
              <ChevronRight className="w-5 h-5 text-gray-400" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileScreen;