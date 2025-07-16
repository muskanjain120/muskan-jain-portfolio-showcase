import { GraduationCap, Calendar, Languages, Users, Clock, Brain } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  const skills = [
    { icon: Users, label: "Public Relations" },
    { icon: Users, label: "Teamwork" },
    { icon: Clock, label: "Time Management" },
    { icon: Brain, label: "Critical Thinking" }
  ];

  const education = [
    {
      degree: "B.Tech Computer Science (AI)",
      period: "2023 - 2027",
      institution: "Teerthanker Mahaveer University",
      status: "Current"
    },
    {
      degree: "Senior Secondary School",
      period: "2021 - 2023",
      institution: "Govt Girls Sr. Secondary School",
      status: "Completed"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-background to-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            About <span className="text-primary">Me</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Get to know more about my journey, skills, and passion for web development
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Bio Section */}
          <div className="space-y-6 animate-fade-in">
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-foreground">Hello There!</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Hi, I'm a motivated and passionate web development enthusiast, always eager to learn and grow. 
                Currently pursuing my B.Tech in Computer Science with specialization in Artificial Intelligence, 
                I'm gaining hands-on experience through multiple internships in full-stack development, AI & ML, 
                and mobile app development.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                My journey in technology is driven by curiosity and the desire to create impactful solutions 
                that make a difference in people's lives.
              </p>
            </div>

            {/* Languages */}
            <div className="flex items-center space-x-4 p-4 bg-card rounded-lg border">
              <Languages className="w-6 h-6 text-primary" />
              <div>
                <h4 className="font-semibold text-foreground">Languages</h4>
                <p className="text-muted-foreground">Hindi (Fluent), English (Moderate)</p>
              </div>
            </div>

            {/* Soft Skills */}
            <div>
              <h4 className="font-semibold mb-4 text-foreground">Core Strengths</h4>
              <div className="grid grid-cols-2 gap-3">
                {skills.map((skill, index) => (
                  <div key={index} className="flex items-center space-x-2 p-3 bg-card rounded-lg border hover:shadow-md transition-shadow">
                    <skill.icon className="w-5 h-5 text-primary" />
                    <span className="text-sm font-medium text-foreground">{skill.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Education Timeline */}
          <div className="animate-slide-in-right">
            <h3 className="text-2xl font-semibold mb-6 text-foreground flex items-center">
              <GraduationCap className="w-6 h-6 text-primary mr-2" />
              Education Journey
            </h3>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:transform hover:scale-105">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex-1">
                        <h4 className="font-semibold text-lg text-foreground">{edu.degree}</h4>
                        <p className="text-muted-foreground">{edu.institution}</p>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        edu.status === 'Current' 
                          ? 'bg-primary/10 text-primary' 
                          : 'bg-muted text-muted-foreground'
                      }`}>
                        {edu.status}
                      </span>
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Calendar className="w-4 h-4 mr-2" />
                      {edu.period}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;