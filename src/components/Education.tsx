
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Education = () => {
  const education = [
    {
      institution: "SNS COLLEGE OF ENGINEERING",
      degree: "BE in Electronics and Communication Engineering",
      period: "2022-2026",
      details: "",
    },
    {
      institution: "PERKS MATRICULATION HIGHER SECONDARY SCHOOL",
      degree: "Higher Secondary Education",
      period: "2020-2022",
      details: "HSC – 75%",
    },
    {
      institution: "PERKS MATRICULATION HIGHER SECONDARY SCHOOL",
      degree: "SSLC",
      period: "2020",
      details: "SSLC – 77%",
    },
  ];

  return (
    <section id="education" className="py-16">
      <div className="section-container">
        <h2 className="section-title">Education</h2>
        <div className="mt-8 space-y-6">
          {education.map((edu, index) => (
            <Card key={index} className="overflow-hidden">
              <div className="h-2 bg-primary"></div>
              <CardHeader>
                <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                  <CardTitle className="text-lg">{edu.institution}</CardTitle>
                  <span className="text-sm text-gray-500 mt-1 md:mt-0">{edu.period}</span>
                </div>
              </CardHeader>
              <CardContent>
                <p className="font-medium">{edu.degree}</p>
                {edu.details && <p className="text-gray-600 mt-1">{edu.details}</p>}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
