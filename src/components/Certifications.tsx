
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Certifications = () => {
  const certifications = [
    {
      title: "C Programming – Prep Insta",
      institution: "",
      year: "",
    },
    {
      title: "ARM CORTEX M4 – Pantech AI",
      institution: "",
      year: "",
    },
  ];

  return (
    <section id="certifications" className="py-16 bg-secondary/50">
      <div className="section-container">
        <h2 className="section-title">Certifications</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {certifications.map((cert, index) => (
            <Card key={index} className="overflow-hidden">
              <div className="h-2 bg-primary"></div>
              <CardHeader>
                <CardTitle className="text-lg">{cert.title}</CardTitle>
              </CardHeader>
              <CardContent>
                {cert.institution && <p className="text-gray-600">{cert.institution}</p>}
                {cert.year && <p className="text-gray-600">{cert.year}</p>}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
