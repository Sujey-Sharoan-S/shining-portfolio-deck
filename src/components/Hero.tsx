
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 pb-8">
      <div className="container px-6 py-16 mx-auto text-center md:text-left md:flex md:items-center md:justify-between">
        <div className="md:w-1/2 md:pr-10">
          <h1 className="text-4xl font-bold text-gray-800 md:text-5xl xl:text-6xl">
            Hi, I'm <span className="text-primary">Sujey Sharoan</span>
          </h1>
          <p className="mt-4 text-xl text-gray-600">
            Embedded Engineer
          </p>
          <p className="mt-6 text-lg text-gray-600 max-w-lg mx-auto md:mx-0">
            I am passionate about embedded systems and hardware programming, specializing in microcontroller firmware development, circuit design, and interfacing technologies.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
            <Button asChild className="px-8 py-2">
              <a href="#contact">Contact Me</a>
            </Button>
            <Button variant="outline" asChild className="px-8 py-2">
              <a href="#projects">View Projects</a>
            </Button>
          </div>
        </div>
        <div className="hidden md:block md:w-1/2">
          <div className="relative w-full max-w-md mx-auto mt-10 md:mt-0">
            <div className="absolute -top-6 -left-6 w-full h-full bg-primary/10 rounded-full"></div>
            <img 
              src="/lovable-uploads/a90a349d-0a13-4783-88de-e1f3d4263731.png" 
              alt="Sujey Sharoan" 
              className="relative z-10 w-full h-auto rounded-full object-cover border-4 border-white shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
