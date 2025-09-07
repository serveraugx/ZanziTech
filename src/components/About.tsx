import React from 'react';
import { Target, Lightbulb, Globe, Award } from 'lucide-react';

const About = () => {
  const stats = [
    { number: '50+', label: 'Team Members' },
    { number: '100+', label: 'Projects Planned' },
    { number: '5+', label: 'Technology Stacks' },
    { number: '24/7', label: 'Innovation Mode' },
  ];

  const values = [
    {
      icon: Target,
      title: 'Mission Driven',
      description: 'We are committed to delivering exceptional technology solutions that make a real impact in the world.',
    },
    {
      icon: Lightbulb,
      title: 'Innovation Focus',
      description: 'Constantly exploring new technologies and methodologies to stay ahead of the curve.',
    },
    {
      icon: Globe,
      title: 'Global Vision',
      description: 'Building solutions that transcend boundaries and connect people across the globe.',
    },
    {
      icon: Award,
      title: 'Excellence Standard',
      description: 'Every project we undertake meets the highest standards of quality and performance.',
    },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About <span className="text-blue-600">Zan Tech</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We are a forward-thinking technology organization on the brink of launching revolutionary projects. 
            Our diverse team of experts is united by a shared vision of creating innovative solutions that 
            will define the future of technology.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Values */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div key={index} className="bg-gray-50 p-8 rounded-xl hover:bg-white hover:shadow-lg transition-all duration-300">
              <value.icon className="w-12 h-12 text-blue-600 mb-6" />
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{value.title}</h3>
              <p className="text-gray-600 leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>

        {/* Story */}
        <div className="mt-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 md:p-12 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-3xl md:text-4xl font-bold mb-6">Our Story</h3>
            <p className="text-lg md:text-xl leading-relaxed opacity-90">
              Zan Tech was born from a simple yet powerful idea: to bring together brilliant minds 
              who share a passion for technology and innovation. As we prepare for our official launch, 
              we're already working on groundbreaking projects that will revolutionize how people 
              interact with technology. Our journey is just beginning, but our vision is crystal clear – 
              to be at the forefront of technological advancement.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;