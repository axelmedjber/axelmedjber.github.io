import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/Navbar";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const Index = () => {
  const models = [
    {
      id: 1,
      name: "Christina Rhodes",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb",
      rating: 5,
    },
    {
      id: 2,
      name: "Christian Nelson",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d",
      rating: 4,
    },
    {
      id: 3,
      name: "Geneva Parks",
      image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce",
      rating: 5,
    },
    {
      id: 4,
      name: "Curtis Anderson",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
      rating: 4,
    },
    {
      id: 5,
      name: "June Cruz",
      image: "https://images.unsplash.com/photo-1517841905240-472988babdf9",
      rating: 5,
    },
    {
      id: 6,
      name: "Edward Cain",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
      rating: 4,
    },
    {
      id: 7,
      name: "Ethel Cole",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
      rating: 5,
    },
    {
      id: 8,
      name: "Fernando Stevens",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7",
      rating: 4,
    },
    {
      id: 9,
      name: "Katrina Douglas",
      image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e",
      rating: 5,
    },
    {
      id: 10,
      name: "Gordon Simpson",
      image: "https://images.unsplash.com/photo-1488161628813-04466f872be2",
      rating: 4,
    },
    {
      id: 11,
      name: "Janie Harper",
      image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1",
      rating: 5,
    },
    {
      id: 12,
      name: "Ernest Drake",
      image: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce",
      rating: 4,
    },
  ];

  return (
    <div className="min-h-screen bg-[#1A1F2C]">
      <Navbar />
      
      {/* Hero Section */}
      <section className="py-24 text-center text-white">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">SEE OUR</h1>
        <h2 className="text-5xl md:text-7xl font-bold mb-8 text-primary">MODELS</h2>
      </section>

      {/* Models Grid */}
      <section className="container mx-auto px-4 pb-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {models.map((model) => (
            <Link key={model.id} to={`/profile/${model.id}`}>
              <Card className="group overflow-hidden bg-transparent border-none transition-transform duration-300 hover:scale-105">
                <CardContent className="p-0 relative">
                  <div className="aspect-[3/4] overflow-hidden">
                    <img
                      src={model.image}
                      alt={model.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                    <div className="flex items-center gap-2 mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < model.rating ? "text-primary fill-primary" : "text-gray-400"
                          }`}
                        />
                      ))}
                    </div>
                    <h3 className="text-white text-xl font-bold uppercase">{model.name}</h3>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Index;