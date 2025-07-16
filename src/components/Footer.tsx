import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border py-8">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <div className="text-foreground mb-4">
            <h3 className="text-lg font-semibold mb-2">Muskan Jain</h3>
            <p className="text-muted-foreground text-sm">
              Web Development Enthusiast | B.Tech CS-AI Student | Learning & Growing
            </p>
          </div>
          
          <div className="border-t border-border pt-4">
            <p className="text-muted-foreground text-sm flex items-center justify-center">
              Made with <Heart className="w-4 h-4 mx-1 text-primary fill-current" /> by Muskan Jain
            </p>
            <p className="text-muted-foreground text-xs mt-1">
              © {new Date().getFullYear()} All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;