import { ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import profileImage from '@/assets/muskan-profile.jpg';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-secondary/30 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-32 h-32 rounded-full bg-primary"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 rounded-full bg-accent"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 rounded-full bg-primary/50"></div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="animate-fade-in">
          {/* Profile Picture */}
          <Avatar className="w-40 h-40 mx-auto mb-8 border-4 border-primary shadow-glow">
            <AvatarImage src={profileImage} alt="Muskan Jain" className="object-cover" />
            <AvatarFallback className="text-6xl font-bold bg-gradient-to-br from-primary to-primary-glow text-white">
              MJ
            </AvatarFallback>
          </Avatar>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-foreground">
            Hi! I Am
            <span className="block text-primary bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
              Muskan Jain
            </span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            A passionate web development enthusiast building responsive and interactive websites. 
            Currently pursuing B.Tech CS-AI and gaining real-world experience through multiple internships.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              size="lg"
              onClick={() => scrollToSection('projects')}
              className="bg-gradient-to-r from-primary to-primary-glow hover:shadow-glow transition-all duration-300 transform hover:scale-105"
            >
              View My Work
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => scrollToSection('contact')}
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            >
              Get In Touch
            </Button>
          </div>

          <div className="animate-bounce">
            <ArrowDown 
              className="w-6 h-6 text-primary mx-auto cursor-pointer hover:text-primary-glow transition-colors"
              onClick={() => scrollToSection('about')}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;