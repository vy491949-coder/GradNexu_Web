import React, { useState } from 'react';
import { Mail, Phone, MapPin, Calendar, Briefcase, GraduationCap, Star, Award, Github, Linkedin, Globe, Edit3 } from 'lucide-react';

const ProfilePage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const user = {
    name: "Arjun Sharma",
    profilePicture: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400",
    graduationYear: "2022",
    course: "B.Tech Computer Science",
    cgpa: "8.7",
    email: "arjun.sharma@example.com",
    phone: "+91 98765 43210",
    location: "Bangalore, Karnataka",
    bio: "Passionate software engineer with expertise in full-stack development. Love building scalable applications and contributing to open-source projects."
  };

  const skills = [
    "Python", "JavaScript", "React.js", "Node.js", "Machine Learning", 
    "UI/UX Design", "PostgreSQL", "MongoDB", "AWS", "Docker"
  ];

  const workExperience = [
    {
      title: "Software Engineer",
      company: "TechCorp India",
      duration: "2022 - Present",
      description: "Developing scalable web applications using React and Node.js. Led a team of 3 developers in building an e-commerce platform."
    },
    {
      title: "Frontend Developer Intern",
      company: "StartupXYZ",
      duration: "2021 - 2022",
      description: "Built responsive user interfaces and improved application performance by 40%. Collaborated with design team to implement new features."
    }
  ];

  const achievements = [
    "Winner - National Coding Championship 2021",
    "Published research paper on AI in Healthcare",
    "Open Source Contributor - 50+ repositories",
    "Google Developer Student Club Lead"
  ];

  const tabs = [
    { id: 'overview', label: 'Overview' },
    { id: 'experience', label: 'Experience' },
    { id: 'achievements', label: 'Achievements' },
    { id: 'settings', label: 'Settings' }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Left Sidebar - Profile Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sticky top-24">
              <div className="text-center mb-6">
                <div className="relative inline-block">
                  <img
                    src={user.profilePicture}
                    alt={user.name}
                    className="w-24 h-24 rounded-full object-cover border-4 border-blue-100"
                  />
                  <button className="absolute -bottom-2 -right-2 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors duration-200">
                    <Edit3 size={14} />
                  </button>
                </div>
                <h1 className="text-2xl font-bold text-gray-900 mt-4">{user.name}</h1>
                <p className="text-gray-600 font-medium">{user.course}</p>
                <p className="text-blue-600 font-semibold">Class of {user.graduationYear}</p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center space-x-3 text-gray-600">
                  <Mail size={18} />
                  <span className="text-sm">{user.email}</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-600">
                  <Phone size={18} />
                  <span className="text-sm">{user.phone}</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-600">
                  <MapPin size={18} />
                  <span className="text-sm">{user.location}</span>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-gray-100">
                <h3 className="font-semibold text-gray-900 mb-3">Connect</h3>
                <div className="flex space-x-3">
                  <button className="p-2 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 transition-colors duration-200">
                    <Linkedin size={18} />
                  </button>
                  <button className="p-2 bg-gray-50 text-gray-600 rounded-lg hover:bg-gray-100 transition-colors duration-200">
                    <Github size={18} />
                  </button>
                  <button className="p-2 bg-green-50 text-green-600 rounded-lg hover:bg-green-100 transition-colors duration-200">
                    <Globe size={18} />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Tab Navigation */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 mb-6">
              <div className="border-b border-gray-100">
                <nav className="flex space-x-8 px-6">
                  {tabs.map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`py-4 px-2 border-b-2 font-medium text-sm transition-colors duration-200 ${
                        activeTab === tab.id
                          ? 'border-blue-600 text-blue-600'
                          : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                      }`}
                    >
                      {tab.label}
                    </button>
                  ))}
                </nav>
              </div>
            </div>

            {/* Tab Content */}
            <div className="space-y-6">
              {activeTab === 'overview' && (
                <>
                  {/* Bio Section */}
                  <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                    <h2 className="text-xl font-bold text-gray-900 mb-4">About</h2>
                    <p className="text-gray-600 leading-relaxed">{user.bio}</p>
                  </div>

                  {/* Skills Section */}
                  <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                    <h2 className="text-xl font-bold text-gray-900 mb-4">Skills</h2>
                    <div className="flex flex-wrap gap-2">
                      {skills.map((skill, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-gradient-to-r from-blue-50 to-cyan-50 text-blue-700 text-sm font-medium rounded-full border border-blue-200"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Academic Details */}
                  <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                    <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                      <GraduationCap className="w-5 h-5 mr-2 text-blue-600" />
                      Academic Details
                    </h2>
                    <div className="grid md:grid-cols-3 gap-6">
                      <div className="text-center p-4 bg-blue-50 rounded-xl">
                        <div className="text-2xl font-bold text-blue-600">{user.course}</div>
                        <div className="text-sm text-gray-600 mt-1">Course</div>
                      </div>
                      <div className="text-center p-4 bg-green-50 rounded-xl">
                        <div className="text-2xl font-bold text-green-600">{user.graduationYear}</div>
                        <div className="text-sm text-gray-600 mt-1">Graduation Year</div>
                      </div>
                      <div className="text-center p-4 bg-purple-50 rounded-xl">
                        <div className="text-2xl font-bold text-purple-600">{user.cgpa}</div>
                        <div className="text-sm text-gray-600 mt-1">CGPA</div>
                      </div>
                    </div>
                  </div>
                </>
              )}

              {activeTab === 'experience' && (
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                  <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                    <Briefcase className="w-5 h-5 mr-2 text-blue-600" />
                    Work Experience
                  </h2>
                  <div className="space-y-6">
                    {workExperience.map((exp, index) => (
                      <div key={index} className="border-l-4 border-blue-200 pl-6 relative">
                        <div className="absolute -left-2 top-0 w-4 h-4 bg-blue-600 rounded-full"></div>
                        <div className="bg-gray-50 rounded-xl p-4">
                          <h3 className="text-lg font-semibold text-gray-900">{exp.title}</h3>
                          <p className="text-blue-600 font-medium mb-2">{exp.company}</p>
                          <p className="text-sm text-gray-500 mb-3 flex items-center">
                            <Calendar size={14} className="mr-1" />
                            {exp.duration}
                          </p>
                          <p className="text-gray-600">{exp.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'achievements' && (
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                  <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                    <Award className="w-5 h-5 mr-2 text-blue-600" />
                    Achievements
                  </h2>
                  <div className="space-y-4">
                    {achievements.map((achievement, index) => (
                      <div key={index} className="flex items-center space-x-3 p-4 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-xl border border-yellow-200">
                        <Star className="w-5 h-5 text-yellow-600 flex-shrink-0" />
                        <span className="text-gray-700 font-medium">{achievement}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'settings' && (
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                  <h2 className="text-xl font-bold text-gray-900 mb-6">Profile Settings</h2>
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Privacy Settings
                      </label>
                      <div className="space-y-3">
                        <label className="flex items-center">
                          <input type="checkbox" className="rounded border-gray-300 text-blue-600" defaultChecked />
                          <span className="ml-2 text-gray-600">Make profile visible to all users</span>
                        </label>
                        <label className="flex items-center">
                          <input type="checkbox" className="rounded border-gray-300 text-blue-600" defaultChecked />
                          <span className="ml-2 text-gray-600">Allow mentorship requests</span>
                        </label>
                        <label className="flex items-center">
                          <input type="checkbox" className="rounded border-gray-300 text-blue-600" />
                          <span className="ml-2 text-gray-600">Show contact information publicly</span>
                        </label>
                      </div>
                    </div>
                    <div className="pt-4 border-t border-gray-100">
                      <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-medium rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all duration-200">
                        Save Changes
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;