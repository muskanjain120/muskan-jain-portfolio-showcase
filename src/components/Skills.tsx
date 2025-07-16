import { Code, Database, Smartphone, Cpu } from 'lucide-react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: Code,
      color: "from-blue-500 to-cyan-500",
      skills: [
        { name: "HTML5", level: 90 },
        { name: "CSS3", level: 85 },
        { name: "JavaScript", level: 80 },
        { name: "React", level: 75 }
      ]
    },
    {
      title: "Backend Development",
      icon: Database,
      color: "from-green-500 to-emerald-500",
      skills: [
        { name: "Node.js", level: 70 },
        { name: "Express", level: 65 },
        { name: "Python", level: 75 },
        { name: "DSA (Basics)", level: 60 }
      ]
    },
    {
      title: "Mobile Development",
      icon: Smartphone,
      color: "from-purple-500 to-pink-500",
      skills: [
        { name: "Flutter", level: 65 },
        { name: "React Native", level: 60 },
        { name: "Cross-platform", level: 70 }
      ]
    },
    {
      title: "AI & Machine Learning",
      icon: Cpu,
      color: "from-orange-500 to-red-500",
      skills: [
        { name: "Machine Learning", level: 65 },
        { name: "Data Processing", level: 70 },
        { name: "Python ML Libraries", level: 60 }
      ]
    }
  ];

  const getProgressColor = (level: number) => {
    if (level >= 80) return 'bg-green-500';
    if (level >= 70) return 'bg-blue-500';
    if (level >= 60) return 'bg-yellow-500';
    return 'bg-orange-500';
  };

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-background to-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            My <span className="text-primary">Skills</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Technologies and tools I work with to bring ideas to life
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <Card key={index} className="hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${category.color} flex items-center justify-center text-white`}>
                    <category.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">{category.title}</h3>
                </div>
              </CardHeader>
              
              <CardContent>
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="font-medium text-foreground">{skill.name}</span>
                        <span className="text-sm text-muted-foreground">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                        <div 
                          className={`h-full rounded-full transition-all duration-1000 ease-out ${getProgressColor(skill.level)}`}
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Soft Skills Section */}
        <div className="mt-16">
          <h3 className="text-2xl font-semibold text-center mb-8 text-foreground">
            Soft Skills & Qualities
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "Public Relations",
              "Teamwork",
              "Time Management", 
              "Critical Thinking",
              "Problem Solving",
              "Communication",
              "Adaptability",
              "Leadership"
            ].map((skill, index) => (
              <div 
                key={index} 
                className="text-center p-4 bg-card rounded-lg border hover:shadow-md transition-all duration-300 hover:transform hover:scale-105 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <span className="font-medium text-foreground">{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;