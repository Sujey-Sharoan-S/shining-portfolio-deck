
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Skills = () => {
  const skills = {
    programming: ["C Programming", "Embedded C", "ARM CORTEX", "STM CUBE IDE"],
    protocols: ["I²C", "SPI", "UART"],
  };

  return (
    <section id="skills" className="py-16">
      <div className="section-container">
        <h2 className="section-title">Skills</h2>
        <div className="grid md:grid-cols-2 gap-6 mt-8">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-xl">Programming</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="grid grid-cols-2 gap-2">
                {skills.programming.map((skill) => (
                  <li key={skill} className="flex items-center">
                    <div className="mr-2 h-2 w-2 rounded-full bg-primary"></div>
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-xl">Protocols</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="grid grid-cols-2 gap-2">
                {skills.protocols.map((skill) => (
                  <li key={skill} className="flex items-center">
                    <div className="mr-2 h-2 w-2 rounded-full bg-primary"></div>
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;
