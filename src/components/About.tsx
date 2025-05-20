
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <section id="about" className="py-16 bg-secondary/50">
      <div className="section-container">
        <h2 className="section-title">About Me</h2>
        <div className="mt-8 grid md:grid-cols-3 gap-8">
          <Card className="md:col-span-2">
            <CardContent className="pt-6">
              <p className="text-lg leading-relaxed">
                I am passionate about embedded systems and hardware programming, specializing in microcontroller firmware 
                development, circuit design, and interfacing technologies. With hands-on experience in Arduino and 
                STM32 platforms, I write efficient code for SPI, UART, and I²C communication, ensuring seamless data exchange
                between devices.
              </p>
              <p className="text-lg leading-relaxed mt-4">
                I enjoy simplifying complex concepts, making them accessible to learners and professionals alike. I strive
                to bridge hardware and software seamlessly to create impactful and intelligent solutions.
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="pt-6">
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-medium">Contact Information</h3>
                  <div className="mt-2 space-y-1">
                    <p><span className="font-medium">Phone:</span> 9500874458</p>
                    <p>
                      <span className="font-medium">Email:</span>{" "}
                      <a href="mailto:sujeysharoan10@gmail.com" className="text-primary hover:underline">
                        sujeysharoan10@gmail.com
                      </a>
                    </p>
                    <p>
                      <span className="font-medium">LinkedIn:</span>{" "}
                      <a 
                        href="https://www.linkedin.com/in/sujey-sharoan-s/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-primary hover:underline"
                      >
                        linkedin.com/in/sujey-sharoan-s/
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
