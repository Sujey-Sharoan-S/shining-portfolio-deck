
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Experience = () => {
  const experiences = [
    {
      title: "Embedded Systems Internship",
      company: "Micro Infotech",
      period: "3 weeks (21 days)",
      description: "",
    },
  ];

  const workshops = [
    {
      title: "PCB DESIGNING",
      description: "PCB designing workshop using Eagle for two days at SNS college of engineering.",
    },
  ];

  return (
    <section id="experience" className="py-16">
      <div className="section-container">
        <h2 className="section-title">Experience</h2>
        
        <h3 className="text-xl font-medium mt-8 mb-4">Internships</h3>
        <div className="grid gap-6 md:grid-cols-2">
          {experiences.map((exp, index) => (
            <Card key={index} className="overflow-hidden h-full">
              <div className="h-2 bg-primary"></div>
              <CardHeader>
                <div className="flex flex-col md:flex-row md:justify-between md:items-start">
                  <div>
                    <CardTitle className="text-lg">{exp.title}</CardTitle>
                    <p className="text-gray-600 mt-1">{exp.company}</p>
                  </div>
                  <span className="text-sm text-gray-500 mt-1 md:mt-0">{exp.period}</span>
                </div>
              </CardHeader>
              {exp.description && (
                <CardContent>
                  <CardDescription>{exp.description}</CardDescription>
                </CardContent>
              )}
            </Card>
          ))}
        </div>
        
        <h3 className="text-xl font-medium mt-12 mb-4">Workshops</h3>
        <div className="grid gap-6 md:grid-cols-2">
          {workshops.map((workshop, index) => (
            <Card key={index} className="overflow-hidden h-full">
              <div className="h-2 bg-primary"></div>
              <CardHeader>
                <CardTitle className="text-lg">{workshop.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{workshop.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
