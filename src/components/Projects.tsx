import { ExternalLink, Github, Clock, Code } from 'lucide-react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const Projects = () => {
  const projects = [
    {
      title: "Personal Portfolio Website",
      description: "A modern, responsive portfolio website built with HTML & CSS. Currently enhancing with JavaScript for improved interactivity and user experience.",
      status: "In Progress",
      technologies: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
      image: "/api/placeholder/400/250",
      color: "from-blue-500 to-purple-600",
      progress: 75
    }
  ];

  const comingSoonProjects = [
    {
      title: "E-commerce Mobile App",
      description: "Cross-platform e-commerce application with payment integration",
      technologies: ["Flutter", "Firebase", "Razorpay"],
      color: "from-green-500 to-teal-600"
    },
    {
      title: "E-waste Classification System",
      description: "ML-based system for classifying electronic waste",
      technologies: ["Python", "Machine Learning", "AI"],
      color: "from-orange-500 to-red-600"
    },
    {
      title: "Full-Stack Web Application",
      description: "Complete web application with modern tech stack",
      technologies: ["React", "Node.js", "Express", "Database"],
      color: "from-purple-500 to-pink-600"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            My <span className="text-primary">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A showcase of my work and ongoing projects that demonstrate my skills and learning journey
          </p>
        </div>

        {/* Current Projects */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-8 text-foreground flex items-center">
            <Code className="w-6 h-6 text-primary mr-2" />
            Current Projects
          </h3>
          <div className="grid gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105 animate-fade-in">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div className="flex items-start space-x-4">
                      <div className={`w-16 h-16 rounded-lg bg-gradient-to-br ${project.color} flex items-center justify-center text-white font-bold text-xl`}>
                        {project.title.split(' ').map(word => word[0]).join('').slice(0, 2)}
                      </div>
                      <div>
                        <h4 className="text-xl font-semibold text-foreground">{project.title}</h4>
                        <Badge variant="secondary" className="bg-yellow-100 text-yellow-800 border-yellow-200 mt-2">
                          <Clock className="w-3 h-3 mr-1" />
                          {project.status}
                        </Badge>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  {/* Progress Bar */}
                  <div className="mb-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-foreground">Progress</span>
                      <span className="text-sm text-muted-foreground">{project.progress}%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div 
                        className="bg-primary h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${project.progress}%` }}
                      />
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <h5 className="font-medium text-foreground mb-2">Technologies Used</h5>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex space-x-3">
                    <Button variant="outline" size="sm" disabled className="opacity-50">
                      <Github className="w-4 h-4 mr-2" />
                      Coming Soon
                    </Button>
                    <Button variant="outline" size="sm" disabled className="opacity-50">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Coming Soon Projects */}
        <div>
          <h3 className="text-2xl font-semibold mb-8 text-foreground flex items-center">
            <Clock className="w-6 h-6 text-primary mr-2" />
            Coming Soon
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {comingSoonProjects.map((project, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:transform hover:scale-105 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${project.color} flex items-center justify-center text-white font-bold text-sm`}>
                      {project.title.split(' ').map(word => word[0]).join('').slice(0, 2)}
                    </div>
                    <h4 className="font-semibold text-foreground">{project.title}</h4>
                  </div>
                  
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div>
                    <h5 className="font-medium text-foreground mb-2 text-sm">Planned Technologies</h5>
                    <div className="flex flex-wrap gap-1">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div className="mt-4 pt-4 border-t border-border">
                    <span className="text-xs text-muted-foreground font-medium">Status: In Planning</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;