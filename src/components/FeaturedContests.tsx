import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export const FeaturedContests = () => {
  const contests = [
    {
      title: "European Young Model 2024",
      location: "Berlin, Germany",
      deadline: "April 30, 2024",
      prize: "€10,000",
      image: "https://images.unsplash.com/photo-1621091226825-a6a2a5aee158?auto=format&fit=crop"
    },
    {
      title: "Sustainable Fashion Contest",
      location: "Copenhagen, Denmark",
      deadline: "May 15, 2024",
      prize: "€5,000",
      image: "https://images.unsplash.com/photo-1452960962994-acf4fd70b632?auto=format&fit=crop"
    }
  ];

  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Featured Contests</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {contests.map((contest, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow animate-fade-up">
              <img 
                src={contest.image} 
                alt={contest.title} 
                className="w-full h-48 object-cover"
              />
              <CardHeader>
                <CardTitle>{contest.title}</CardTitle>
                <CardDescription>{contest.location}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between text-sm">
                  <span>Deadline: {contest.deadline}</span>
                  <span>Prize: {contest.prize}</span>
                </div>
                <Button className="w-full">Learn More</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};