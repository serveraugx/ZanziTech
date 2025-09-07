import React from 'react';
import { ExternalLink, Github, Calendar, Users, Zap } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'AI-Powered Analytics Platform',
      description: 'A comprehensive analytics platform that uses machine learning to provide actionable business insights.',
      image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800',
      status: 'In Development',
      progress: 75,
      technologies: ['React', 'Python', 'TensorFlow', 'AWS'],
      team: ['Alex Chen', 'Lisa Thompson', 'Emily Zhang'],
      timeline: 'Q2 2024',
    },
    {
      title: 'Smart IoT Management System',
      description: 'An integrated platform for managing and monitoring IoT devices across multiple environments.',
      image: 'https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&cs=tinysrgb&w=800',
      status: 'Planning',
      progress: 25,
      technologies: ['Node.js', 'MongoDB', 'MQTT', 'Docker'],
      team: ['Michael Rodriguez', 'David Kim'],
      timeline: 'Q3 2024',
    },
    {
      title: 'Blockchain Supply Chain Tracker',
      description: 'A transparent supply chain tracking system built on blockchain technology for enhanced security.',
      image: 'https://images.pexels.com/photos/730547/pexels-photo-730547.jpeg?auto=compress&cs=tinysrgb&w=800',
      status: 'Research',
      progress: 10,
      technologies: ['Solidity', 'Web3.js', 'React', 'Ethereum'],
      team: ['Alex Chen', 'Emily Zhang'],
      timeline: 'Q4 2024',
    },
    {
      title: 'Mobile Health Companion',
      description: 'A comprehensive mobile application for personal health monitoring and wellness tracking.',
      image: 'https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=800',
      status: 'Design Phase',
      progress: 40,
      technologies: ['React Native', 'Firebase', 'HealthKit', 'ML Kit'],
      team: ['David Kim', 'Sarah Johnson', 'Lisa Thompson'],
      timeline: 'Q1 2025',
    },
    {
      title: 'Cloud Infrastructure Automation',
      description: 'Automated cloud infrastructure management tools for seamless deployment and scaling.',
      image: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=800',
      status: 'Beta Testing',
      progress: 90,
      technologies: ['Terraform', 'Kubernetes', 'Python', 'AWS'],
      team: ['Michael Rodriguez', 'Alex Chen'],
      timeline: 'Q1 2024',
    },
    {
      title: 'AR Shopping Experience',
      description: 'An augmented reality platform that revolutionizes online shopping with immersive experiences.',
      image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800',
      status: 'Concept',
      progress: 5,
      technologies: ['Unity', 'ARCore', 'ARKit', 'C#'],
      team: ['Sarah Johnson', 'David Kim'],
      timeline: 'Q2 2025',
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'In Development': return 'bg-blue-100 text-blue-800';
      case 'Planning': return 'bg-yellow-100 text-yellow-800';
      case 'Research': return 'bg-purple-100 text-purple-800';
      case 'Design Phase': return 'bg-pink-100 text-pink-800';
      case 'Beta Testing': return 'bg-green-100 text-green-800';
      case 'Concept': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our <span className="text-blue-600">Projects</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We're working on revolutionary projects that will shape the future of technology. 
            From AI-powered solutions to blockchain innovations, our portfolio represents 
            cutting-edge development across multiple domains.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(project.status)}`}>
                    {project.status}
                  </span>
                </div>
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex space-x-2">
                    <button className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors">
                      <Github className="w-4 h-4" />
                    </button>
                    <button className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors">
                      <ExternalLink className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">{project.description}</p>

                {/* Progress Bar */}
                <div className="mb-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium text-gray-700">Progress</span>
                    <span className="text-sm text-gray-500">{project.progress}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-blue-600 to-purple-600 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${project.progress}%` }}
                    ></div>
                  </div>
                </div>

                {/* Technologies */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Team and Timeline */}
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <div className="flex items-center">
                    <Users className="w-4 h-4 mr-1" />
                    <span>{project.team.length} members</span>
                  </div>
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    <span>{project.timeline}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 md:p-12 text-white">
            <div className="max-w-4xl mx-auto">
              <Zap className="w-16 h-16 mx-auto mb-6 opacity-80" />
              <h3 className="text-3xl md:text-4xl font-bold mb-6">More Projects Coming Soon</h3>
              <p className="text-lg md:text-xl leading-relaxed opacity-90 mb-8">
                We have an exciting roadmap of innovative projects in development. 
                Stay tuned as we continue to push the boundaries of what's possible with technology.
              </p>
              <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200">
                Subscribe for Updates
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;