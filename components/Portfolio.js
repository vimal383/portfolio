'use client'
import React, { useState, useEffect } from 'react';
import { 
  Phone, Mail, ChevronDown, Calendar, MapPin, Briefcase, Star, 
  ExternalLink, Award, Github, Linkedin, Code, Palette, Database, Cloud, Download, Moon, Sun 
} from 'lucide-react';

const Portfolio = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Add your Google Drive resume link here
  const resumeLink = "https://drive.google.com/file/d/1C-WDS_yxOu5lKIJcrF-_kqVRtPLQWpH0/view?usp=sharing";

  useEffect(() => {
    setIsLoaded(true);
    // Check for saved theme preference or default to light mode
    const savedTheme = typeof window !== 'undefined' ? localStorage.getItem('theme') : null;
    if (savedTheme === 'dark') {
      setIsDarkMode(true);
    } else if (savedTheme === 'light') {
      setIsDarkMode(false);
    } else {
      // Default to light mode
      setIsDarkMode(false);
    }
  }, []);

  useEffect(() => {
    // Save theme preference
    if (typeof window !== 'undefined') {
      localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleResumeDownload = () => {
    const fileId = resumeLink.match(/\/d\/(.+?)\//)?.[1];
    
    if (fileId) {
      const downloadUrl = `https://drive.google.com/uc?export=download&id=${fileId}`;
      window.open(downloadUrl, '_blank');
    } else {
      alert('Invalid Google Drive link!');
    }
  };

  const experiences = [
    {
      title: "Software Development Engineer",
      company: "Maino AI",
      duration: "08/2024 - Present",
      startDate: "2024-08-01",
      endDate: null, // Present
      location: "Remote",
      achievements: [
        "Implemented client-side caching using Redis and global error handling, improving performance by 40%",
        "Developed dynamic dashboards with interactive charts and analytics widgets, enhancing efficiency by 25%",
        "Designed advanced filters for campaign and ad data management",
        "Built Audience Manager with Facebook API integration and Ads Library with full CRUD operations",
        "Created PMax Analyzer with Google Sheets integration and reusable UI components",
        "Developed SaaS landing page with real-time metrics and dynamic visualizations",
        "Built maino.ai website with GSAP and Framer Motion animations"
      ]
    },
    {
      title: "Full Stack Developer",
      company: "Undual Analytics",
      duration: "01/2024 - 07/2024",
      startDate: "2024-01-01",
      endDate: "2024-07-31",
      location: "Remote",
      achievements: [
        "Developed full-featured digital gold purchasing platform with React and Node.js",
        "Built secure role-based admin panel for user and transaction management",
        "Integrated real-time gold price APIs with automated cron jobs, reducing manual updates by 80%",
        "Implemented notification system for price alerts and system events",
        "Optimized Jenkins CI/CD pipelines, reducing deployment time by 50%",
        "Dockerized complete application stack for streamlined workflows",
        "Deployed on AWS EC2 with 99.9% uptime using NGINX and PM2"
      ]
    }
  ];

  // Calculate total experience
  const calculateTotalExperience = () => {
    let totalMonths = 0;
    const currentDate = new Date();
    
    experiences.forEach(exp => {
      const startDate = new Date(exp.startDate);
      const endDate = exp.endDate ? new Date(exp.endDate) : currentDate;
      
      const months = (endDate.getFullYear() - startDate.getFullYear()) * 12 + 
                    (endDate.getMonth() - startDate.getMonth());
      totalMonths += months;
    });
    
    const years = Math.floor(totalMonths / 12);
    const months = totalMonths % 12;
    
    if (years > 0 && months > 0) {
      return `${years} year${years > 1 ? 's' : ''} ${months} month${months > 1 ? 's' : ''}`;
    } else if (years > 0) {
      return `${years} year${years > 1 ? 's' : ''}`;
    } else {
      return `${months} month${months > 1 ? 's' : ''}`;
    }
  };

  const skillCategories = [
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Frontend",
      skills: ["React.js", "Next.js", "Redux", "GSAP", "Framer Motion", "HTML/CSS"],
      color: "from-purple-600 to-pink-600"
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "Programming Languages",
      skills: ["TypeScript", "JavaScript", "C++"],
      color: "from-blue-600 to-cyan-600"
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Backend",
      skills: ["Node.js", "Express.js", "RESTful APIs", "Google Script"],
      color: "from-green-600 to-teal-600"
    },
    {
      icon: <Cloud className="w-8 h-8" />,
      title: "Database",
      skills: ["MongoDB","PostgreSQL"],
      color: "from-orange-600 to-red-600"
    }
  ];

  const projects = [
    {
      title: "Cab Rental Web Application",
      tech: ["React.js", "JavaScript", "Node.js", "MongoDB", "OAuth"],
      achievements: [
        "Achieved 99.9% success rate in secure payment gateway integration",
        "Implemented advanced encryption with 95% increase in data integrity",
        "Integrated OTP verification for 98% enhancement in secure communication",
        "Designed admin panel reducing management time by 50%"
      ],
      gradient: "from-blue-600 to-purple-600",
      link:"https://dwiveditourstravels.in/"
    },
    {
      title: "Maino.ai Website",
      tech: ["React.js", "TypeScript", "GSAP", "Framer Motion", "AWS S3"],
      achievements: [
        "Built advanced animations with GSAP and Framer Motion",
        "Created reusable UI components with AWS S3 integration",
        "Implemented custom dynamic content renderer for blogs",
        "Integrated Slack messaging for lead collection"
      ],
      gradient: "from-purple-600 to-pink-600",
      link:"https://maino.ai"
    }
  ];

  const bgClasses = isDarkMode 
    ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white' 
    : 'bg-gradient-to-br from-gray-50 via-white to-gray-100 text-gray-900';
  
  const cardClasses = isDarkMode 
    ? 'backdrop-blur-lg bg-gray-800/70 border border-gray-700/50 hover:bg-gray-800/90' 
    : 'backdrop-blur-lg bg-white/70 border border-gray-200/50 hover:bg-white/90';

  const textClasses = isDarkMode ? 'text-gray-300' : 'text-gray-600';
  const headingClasses = isDarkMode ? 'text-white' : 'text-gray-900';
  const navClasses = isDarkMode 
    ? 'backdrop-blur-md bg-gray-900/90 border-b border-gray-700/50' 
    : 'backdrop-blur-md bg-white/90 border-b border-gray-200/50';

  return (
    <div className={`min-h-screen ${bgClasses} overflow-x-hidden transition-all duration-300`}>
      {/* Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className={`absolute inset-0 ${isDarkMode 
          ? 'bg-gradient-to-br from-gray-900/30 via-purple-900/30 to-gray-900/30' 
          : 'bg-gradient-to-br from-blue-50/30 via-purple-50/30 to-pink-50/30'}`}></div>
        <div className={`absolute top-1/4 left-1/4 w-72 h-72 ${isDarkMode 
          ? 'bg-gradient-to-r from-purple-900/20 to-blue-900/20' 
          : 'bg-gradient-to-r from-blue-100/20 to-purple-100/20'} rounded-full blur-3xl animate-pulse`}></div>
        <div className={`absolute bottom-1/4 right-1/4 w-72 h-72 ${isDarkMode 
          ? 'bg-gradient-to-r from-blue-900/20 to-purple-900/20' 
          : 'bg-gradient-to-r from-purple-100/20 to-pink-100/20'} rounded-full blur-3xl animate-pulse delay-1000`}></div>
      </div>

      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 ${navClasses} shadow-sm transition-all duration-300`}>
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Vimal Mishra
            </div>
            <div className="flex items-center gap-6">
              <div className="hidden md:flex space-x-8">
                {['home', 'experience', 'skills', 'projects', 'education', 'contact'].map((section) => (
                  <button
                    key={section}
                    onClick={() => scrollToSection(section)}
                    className={`capitalize hover:text-blue-600 transition-colors duration-300 relative group ${textClasses}`}
                  >
                    {section}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-full transition-all duration-300"></span>
                  </button>
                ))}
              </div>
              {/* Dark Mode Toggle */}
              <button
                onClick={toggleDarkMode}
                className={`p-3 rounded-full ${cardClasses} transition-all duration-300 hover:scale-110 shadow-lg`}
                aria-label="Toggle dark mode"
              >
                {isDarkMode ? (
                  <Sun className="w-5 h-5 text-yellow-500" />
                ) : (
                  <Moon className="w-5 h-5 text-gray-600" />
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className={`transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h1 className="text-5xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Vimal Mishra
            </h1>
            <p className={`text-xl md:text-2xl mb-4 ${textClasses}`}>
              Full Stack Software Developer
            </p>
            <p className={`text-lg mb-8 ${textClasses} font-medium`}>
              {calculateTotalExperience()} of Professional Experience
            </p>
            <div className="flex flex-col md:flex-row justify-center items-center gap-6 mb-8">
              <div className={`flex items-center gap-2 ${textClasses} hover:text-blue-600 transition-colors duration-300`}>
                <Phone className="w-5 h-5" />
                <span>+91-9517300355</span>
              </div>
              <div className={`flex items-center gap-2 ${textClasses} hover:text-purple-600 transition-colors duration-300`}>
                <Mail className="w-5 h-5" />
                <span>dev.vimal001@gmail.com</span>
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <button
                onClick={() => scrollToSection('contact')}
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-blue-600/25"
              >
                Get In Touch
              </button>
              <button
                onClick={handleResumeDownload}
                className="px-8 py-4 bg-gradient-to-r from-green-600 to-teal-600 text-white rounded-full font-semibold hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-green-600/25 flex items-center gap-2"
              >
                <Download className="w-5 h-5" />
                Download Resume
              </button>
              <button
                onClick={() => scrollToSection('projects')}
                className={`px-8 py-4 border-2 ${isDarkMode ? 'border-gray-600 text-gray-300 hover:bg-gray-800' : 'border-gray-300 text-gray-700 hover:bg-gray-50'} rounded-full font-semibold transition-all duration-300 backdrop-blur-sm`}
              >
                View Projects
              </button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className={`w-8 h-8 ${isDarkMode ? 'text-gray-500' : 'text-gray-400'}`} />
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 relative">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Experience
            </h2>
            <div className={`inline-flex items-center gap-2 px-6 py-3 rounded-full ${cardClasses} transition-all duration-300 shadow-lg`}>
              <Briefcase className="w-5 h-5 text-blue-600" />
              <span className={`text-lg font-semibold ${headingClasses}`}>
                Total Experience: {calculateTotalExperience()}
              </span>
            </div>
          </div>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="group">
                <div className={`${cardClasses} rounded-2xl p-8 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-purple-600/10`}>
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-6">
                    <div>
                      <h3 className={`text-2xl font-bold ${headingClasses} mb-2`}>{exp.title}</h3>
                      <p className="text-blue-600 text-lg font-semibold mb-1">{exp.company}</p>
                      <div className={`flex flex-col md:flex-row md:items-center gap-2 md:gap-4 ${textClasses}`}>
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          <span>{exp.duration}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                    </div>
                    <Briefcase className="w-8 h-8 text-purple-600 mt-4 md:mt-0" />
                  </div>
                  <div className="grid gap-3">
                    {exp.achievements.map((achievement, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <Star className="w-5 h-5 text-yellow-500 mt-0.5 flex-shrink-0" />
                        <p className={`${textClasses} leading-relaxed`}>{achievement}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 relative">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Skills
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skillCategories.map((category, index) => (
              <div key={index} className="group">
                <div className={`${cardClasses} rounded-2xl p-6 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-600/10 h-full`}>
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${category.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <div className="text-white">
                      {category.icon}
                    </div>
                  </div>
                  <h3 className={`text-xl font-bold ${headingClasses} mb-4`}>{category.title}</h3>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, i) => (
                      <span key={i} className={`px-3 py-1 ${isDarkMode ? 'bg-gray-700 border border-gray-600 text-gray-300 hover:bg-gray-600' : 'bg-gray-100 border border-gray-200 text-gray-700 hover:bg-gray-200'} rounded-full text-sm transition-colors duration-300`}>
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 relative">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Projects
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="group">
                <div className={`md:h-[20rem] ${cardClasses} rounded-2xl overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-600/10`}>
                  <div className={`h-2 bg-gradient-to-r ${project.gradient}`}></div>
                  <div className="p-8">
                    <div className="flex items-center justify-between mb-6">
                      <h3 className={`text-2xl font-bold ${headingClasses}`}>{project.title}</h3>
                      <a target='_blank' href={project.link} rel="noopener noreferrer">
                        <ExternalLink className={`w-6 h-6 ${isDarkMode ? 'text-gray-400 group-hover:text-gray-200' : 'text-gray-500 group-hover:text-gray-900'} transition-colors duration-300`} />
                      </a>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((tech, i) => (
                        <span key={i} className={`px-3 py-1 ${isDarkMode ? 'bg-gray-700 border border-gray-600 text-gray-300' : 'bg-gray-100 border border-gray-200 text-gray-700'} rounded-full text-sm`}>
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="space-y-3">
                      {project.achievements.map((achievement, i) => (
                        <div key={i} className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                          <p className={`${textClasses} text-sm leading-relaxed`}>{achievement}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

   {/* Contact Section */}
   <section id="contact" className="py-20 relative">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Let's Connect
          </h2>
          <p className="text-xl text-gray-600 mb-12">
            Ready to bring your ideas to life? Let's build something amazing together.
          </p>
          <div className="flex flex-wrap justify-center gap-8">
            <a href="mailto:dev.vimal001@gmail.com" className="group flex flex-col items-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300 shadow-lg hover:shadow-blue-600/25 mb-2">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <span className="text-sm text-gray-600 font-medium">Email</span>
            </a>
            <a href="https://github.com/vimal20002" target='_blank' className="group flex flex-col items-center">
              <div className="w-16 h-16 bg-gradient-to-r from-gray-800 to-gray-600 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300 shadow-lg hover:shadow-gray-600/25 mb-2">
                <Github className="w-8 h-8 text-white" />
              </div>
              <span className="text-sm text-gray-600 font-medium">GitHub</span>
            </a>
            <a href="https://www.linkedin.com/in/vimal-mishra9517/" target='_blank' className="group flex flex-col items-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-700 to-blue-500 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300 shadow-lg hover:shadow-blue-600/25 mb-2">
                <Linkedin className="w-8 h-8 text-white" />
              </div>
              <span className="text-sm text-gray-600 font-medium">LinkedIn</span>
            </a>
            <a href="https://leetcode.com/u/vimalmishra2002/" target='_blank' className="group flex flex-col items-center">
              <div className="w-16 h-16 bg-gradient-to-r from-yellow-600 to-orange-600 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300 shadow-lg hover:shadow-yellow-600/25 mb-2">
                {/* LeetCode Icon */}
                <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.824 2.133 8.02-.069l2.248-2.263a1.374 1.374 0 1 0-1.946-1.944l-2.248 2.263a3.504 3.504 0 0 1-4.942.043l-4.276-4.193a3.186 3.186 0 0 1-.682-.963 3.27 3.27 0 0 1-.19-.534 2.78 2.78 0 0 1-.031-1.177 2.909 2.909 0 0 1 .646-1.225l3.854-4.126 5.407-5.788a3.504 3.504 0 0 1 4.942-.043l4.276 4.193c.279.268.524.573.728.913a3.27 3.27 0 0 1 .19.534 2.78 2.78 0 0 1 .031 1.177 2.909 2.909 0 0 1-.646 1.225l-3.854 4.126-.039.038a1.374 1.374 0 1 0 1.946 1.944l.039-.038 3.854-4.126a5.266 5.266 0 0 0 1.209-2.104 5.35 5.35 0 0 0 .125-.513 5.527 5.527 0 0 0-.062-2.362 5.83 5.83 0 0 0-.349-1.017 5.938 5.938 0 0 0-1.271-1.818l-4.277-4.193-.039-.038c-2.248-2.165-5.824-2.133-8.02.069l-2.248 2.263a1.374 1.374 0 1 0 1.946 1.944l2.248-2.263a3.504 3.504 0 0 1 4.942-.043z"/>
                </svg>
              </div>
              <span className="text-sm text-gray-600 font-medium">LeetCode</span>
            </a>
            <a href="tel:+919517300355" className="group flex flex-col items-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-600 to-teal-600 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300 shadow-lg hover:shadow-green-600/25 mb-2">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <span className="text-sm text-gray-600 font-medium">Phone</span>
            </a>
            <button onClick={handleResumeDownload} className="group flex flex-col items-center">
              <div className="w-16 h-16 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300 shadow-lg hover:shadow-indigo-600/25 mb-2">
                <Download className="w-8 h-8 text-white" />
              </div>
              <span className="text-sm text-gray-600 font-medium">Resume</span>
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-gray-200 backdrop-blur-lg bg-white/80">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-gray-600">
            © 2024 Vimal Mishra. Crafted with passion and code.
          </p>
        </div>
      </footer>
    </div>
  );
};
export default Portfolio;
