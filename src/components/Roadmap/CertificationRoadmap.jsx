import React from 'react';
import { Shield, CheckCircle, Clock, Trophy, Award, Cpu, Database, Cloud, Server, Lock } from 'lucide-react';

// Custom color theme matching lizgore.com main page colors
const theme = {
  background: 'rgb(254, 201, 215)',
  foreground: 'rgb(121, 211, 190)',
  foregroundMuted: 'rgb(57, 184, 154)',
  linkBackground: 'rgb(185, 238, 225)',
  linkBackgroundHover: 'rgb(121, 211, 190)',
  linkOutline: 'rgb(57, 184, 154)',
  linkOutlineHover: 'rgb(255, 88, 131)',
  linkText: 'rgb(255, 88, 131)',
  linkTextHover: 'rgb(185, 238, 225)',
};

const CertificationRoadmap = () => {
  // Sample data - you'll want to customize this with your actual certifications
  const certifications = [
    {
      id: 'gfact',
      name: 'GIAC Foundational Cybersecurity Technologies (GFACT)',
      category: 'Foundational',
      status: 'completed',
      date: '2024-11-26',
      icon: <Cpu size={24} />,
      description: "Validates knowledge of essential cybersecurity fundamentals and practical security skills.",
      difficulty: 1,
    },
    {
      id: 'gsec',
      name: 'GIAC Security Essentials (GSEC)',
      category: 'Foundational',
      status: 'completed',
      date: '2025-02-24',
      icon: <Server size={24} />,
      description: "Demonstrates hands-on IT security skills beyond basic terminology and concepts.",
      difficulty: 2,
    },
    {
      id: 'gcih',
      name: 'GIAC Certified Incident Handler Certification (GCIH)',
      category: 'Intermediate',
      status: 'completed',
      date: '2025-05-23',
      icon: <Shield size={24} />,
      description: "Validates incident detection, response, and resolution skills for managing security incidents.",
      difficulty: 3,
    },
    {
      id: 'gx-ih',
      name: 'GIAC Exploit Researcher and Advanced Penetration Tester (GX-IH)',
      category: 'Intermediate',
      status: 'planned',
      date: '2025-12-15',
      icon: <Shield size={24} />,
      description: 'Validates advanced penetration testing and exploit development skills for complex security assessments.',
      difficulty: 3,
    },
    {
      id: 'wiz-foundations',
      name: 'Wiz Certified Cloud Fundamentals',
      category: 'Beginner',
      status: 'planned',
      date: '2025-12-20',
      icon: <Database size={24} />,
      description: 'Wiz Certified Cloud Fundamentals',
      difficulty: 2,
    },
    {
      id: 'aws-saa',
      name: 'AWS Certified Solutions Architect - Associate',
      category: 'Specialized',
      status: 'planned',
      date: '2026-01-30',
      icon: <Lock size={24} />,
      description: 'Introduction to AWS Services.',
      difficulty: 3,
    },
    {
      id: 'az100',
      name: 'Microsoft Certified: Azure Administrator Associate',
      category: 'Advanced',
      status: 'planned',
      date: '2026-02-28',
      icon: <Award size={24} />,
      description: 'Demonstrate key skills to configure, manage, secure, and administer key professional functions in Microsoft Azure.',
      difficulty: 4,
    },
    {
      id: 'aws-security',
      name: 'AWS Certified Security - Specialty',
      category: 'Specialized',
      status: 'planned',
      date: '2026-03-28',
      icon: <Cloud size={24} />,
      description: 'Validates expertise in AWS security services and implementations',
      difficulty: 4,
    },
    {
      id: 'gx-cs',
      name: 'GIAC Certified Forensic Analyst (GX-CS)',
      category: 'Advanced',
      status: 'planned',
      date: '2026-03-15',
      icon: <Database size={24} />,
      description: 'Validates advanced digital forensics and incident response skills for complex investigations.',
      difficulty: 4,
    }
  ];

  // Group certifications by category
  const categories = [...new Set(certifications.map(cert => cert.category))];

  // Status icons
  const StatusIcon = ({ status }) => {
    switch(status) {
      case 'completed':
        return <CheckCircle style={{ color: theme.foreground }} size={20} />;
      case 'in-progress':
        return <Clock style={{ color: theme.foregroundMuted }} size={20} />;
      case 'planned':
        return <Trophy style={{ color: theme.linkOutlineHover }} size={20} />;
      default:
        return null;
    }
  };

  // Calculate difficulty stars
  const DifficultyStars = ({ level }) => {
    return (
      <div className="flex">
        {[...Array(5)].map((_, i) => (
          <div 
            key={i} 
            className="w-2 h-2 rounded-full mx-0.5" 
            style={{ 
              backgroundColor: i < level ? theme.foreground : theme.linkBackgroundHover 
            }} 
          />
        ))}
      </div>
    );
  };

  // Format date to be more readable
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
  };

  return (
    <div className="p-6 rounded-lg shadow-md max-w-4xl mx-auto" style={{ backgroundColor: theme.background }}>
      <h2 className="text-2xl font-bold mb-6 text-center" style={{ color: theme.foreground }}>My Cybersecurity Certification Roadmap</h2>
      
      <div className="mb-8 flex justify-center space-x-8">
        <div className="flex items-center">
          <CheckCircle style={{ color: theme.foreground }} className="mr-2" size={20} />
          <span style={{ color: theme.foreground }}>Completed</span>
        </div>
        <div className="flex items-center">
          <Clock style={{ color: theme.foregroundMuted }} className="mr-2" size={20} />
          <span style={{ color: theme.foreground }}>In Progress</span>
        </div>
        <div className="flex items-center">
          <Trophy style={{ color: theme.linkOutlineHover }} className="mr-2" size={20} />
          <span style={{ color: theme.foreground }}>Planned</span>
        </div>
      </div>

      <div className="relative">
        {/* Vertical timeline line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1" style={{ backgroundColor: theme.linkOutline }}></div>
        
        {/* Timeline content */}
        <div className="relative z-10">
          {categories.map((category, categoryIndex) => (
            <div key={category} className="mb-8">
              <h3 className="text-xl font-semibold mb-4 text-center py-2 rounded-md relative z-10" 
                  style={{ backgroundColor: theme.linkBackground, color: theme.linkText }}>
                {category} Certifications
              </h3>
              
              <div className="space-y-8">
                {certifications
                  .filter(cert => cert.category === category)
                  .map((cert, index) => (
                    <div 
                      key={cert.id} 
                      className={`relative flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                    >
                      {/* Timeline node */}
                      <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full" 
                           style={{ 
                             backgroundColor: theme.background,
                             borderWidth: '4px',
                             borderStyle: 'solid',
                             borderColor: theme.linkOutline
                           }}></div>
                      
                      {/* Content box */}
                      <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                        <div className={`p-4 rounded-lg shadow-sm border-2`}
                             style={{
                               backgroundColor: theme.linkBackground,
                               borderColor: cert.status === 'completed' ? theme.foreground : 
                                           cert.status === 'in-progress' ? theme.foregroundMuted : 
                                           theme.linkOutlineHover
                             }}>
                          <div className="flex items-center mb-2 justify-between">
                            <div className="p-2 rounded-full" style={{ 
                              backgroundColor: cert.status === 'completed' ? theme.foreground : 
                                              cert.status === 'in-progress' ? theme.foregroundMuted : 
                                              theme.linkOutlineHover,
                              color: theme.background
                            }}>
                              {cert.icon}
                            </div>
                            <StatusIcon status={cert.status} />
                          </div>
                          
                          <h4 className="font-bold text-lg" style={{ color: theme.foreground }}>{cert.name}</h4>
                          <p className="text-sm my-2" style={{ color: theme.linkOutline }}>{cert.description}</p>
                          
                          <div className="flex items-center justify-between mt-3">
                            <DifficultyStars level={cert.difficulty} />
                            <span className="text-sm font-medium" style={{ color: theme.foreground }}>
                              {cert.status === 'completed' ? 'Achieved:' : 'Target:'} {formatDate(cert.date)}
                            </span>
                          </div>
                        </div>
                      </div>
                      
                      {/* Empty space for the other side */}
                      <div className="w-5/12"></div>
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CertificationRoadmap;