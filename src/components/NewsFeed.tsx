import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export const NewsFeed = () => {
  const news = [
    {
      title: "Paris Fashion Week Contest",
      date: "March 15, 2024",
      description: "Join the exclusive runway competition during Paris Fashion Week. Open for emerging models.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop"
    },
    {
      title: "Milan Designer Collaboration",
      date: "March 10, 2024",
      description: "Leading Italian designers seeking fresh faces for upcoming summer collection.",
      image: "https://images.unsplash.com/photo-1482990128604-9ccab0bcb7a7?auto=format&fit=crop"
    }
  ];

  return (
    <section className="py-16 px-4 bg-white">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Latest Updates</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {news.map((item, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow animate-fade-up">
              <img 
                src={item.image} 
                alt={item.title} 
                className="w-full h-48 object-cover"
              />
              <CardHeader>
                <CardTitle>{item.title}</CardTitle>
                <CardDescription>{item.date}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};