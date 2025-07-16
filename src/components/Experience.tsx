import { Calendar, MapPin, Briefcase } from 'lucide-react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Experience = () => {
  const experiences = [
    {
      company: "Codec Technologies",
      role: "Full Stack Web Developer Intern",
      period: "June 2025 - Present",
      location: "Remote",
      description: "Working on full-stack web applications using modern technologies including HTML, CSS, JavaScript, React, Node.js and Express. Developing responsive and interactive user interfaces while building robust backend systems.",
      technologies: ["HTML5", "CSS3", "JavaScript", "React", "Node.js", "Express"],
      color: "from-blue-500 to-purple-600"
    },
    {
      company: "Edunet Foundation",
      role: "AI & ML Intern",
      period: "June 2025 - Present",
      location: "AICTE Collaboration",
      description: "Working on ML-based classification of e-waste project, focusing on data preprocessing, model training, and promoting sustainability through AI solutions. Gaining hands-on experience with machine learning algorithms and their real-world applications.",
      technologies: ["Python", "Machine Learning", "Data Processing", "AI", "Sustainability"],
      color: "from-green-500 to-teal-600"
    },
    {
      company: "CodeAlpha",
      role: "Full-Stack Developer Intern",
      period: "June 2025 - Present",
      location: "Remote",
      description: "Building a cross-platform e-commerce application using Flutter/React Native for mobile development. Integrating cloud services like Firebase/AWS and implementing payment solutions with Razorpay for seamless user experience.",
      technologies: ["Flutter", "React Native", "Firebase", "AWS", "Razorpay"],
      color: "from-orange-500 to-red-600"
    }
  ];

  return (
    <section id="experience" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Work <span className="text-primary">Experience</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My journey in gaining practical experience through internships and real-world projects
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105 animate-fade-in" style={{ animationDelay: `${index * 0.2}s` }}>
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div className="flex items-start space-x-4">
                    <div className={`w-16 h-16 rounded-lg bg-gradient-to-br ${exp.color} flex items-center justify-center text-white font-bold text-xl`}>
                      {exp.company.split(' ').map(word => word[0]).join('')}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-foreground">{exp.role}</h3>
                      <p className="text-lg text-primary font-medium">{exp.company}</p>
                      <div className="flex items-center space-x-4 mt-2 text-sm text-muted-foreground">
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 mr-1" />
                          {exp.period}
                        </div>
                        <div className="flex items-center">
                          <MapPin className="w-4 h-4 mr-1" />
                          {exp.location}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {exp.description}
                </p>
                
                <div>
                  <h4 className="font-medium text-foreground mb-2 flex items-center">
                    <Briefcase className="w-4 h-4 mr-2" />
                    Technologies & Tools
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;