
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Projects = () => {
  const projects = [
    {
      title: "OBSTACLE AVOIDING ROBOT USING ARDUINO",
      description: "An Obstacle Avoiding Robot using Arduino detects and avoids objects using ultrasonic sensors. The Arduino processes signals to control motors via a driver module. When an obstacle is detected, it stops, turns, and resumes movement. Enhancements include UV sensors, and wireless Bluetooth control for smarter navigation.",
    },
    {
      title: "HUMAN DETECTION AND DISASTER MANAGEMENT",
      description: "Human Detection Drone integrates computer vision and embedded systems for real-time tracking. Using an STM32 microcontroller, camera module, and AI-based image recognition, it detects humans from aerial footage. Applications include security, rescue ops, and crowd monitoring.",
    },
  ];

  return (
    <section id="projects" className="py-16 bg-secondary/50">
      <div className="section-container">
        <h2 className="section-title">Projects</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden h-full">
              <div className="h-2 bg-primary"></div>
              <CardHeader>
                <CardTitle className="text-lg">{project.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm text-gray-600">
                  {project.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
