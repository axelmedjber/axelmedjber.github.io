import { Navbar } from "@/components/Navbar";
import { PhotoGallery } from "@/components/PhotoGallery";
import { Button } from "@/components/ui/button";
import { Camera, MapPin, Mail } from "lucide-react";

const Profile = () => {
  return (
    <div className="min-h-screen bg-secondary">
      <Navbar />
      
      <main className="container mx-auto px-4 py-24">
        <div className="max-w-6xl mx-auto space-y-8">
          {/* Profile Header */}
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="relative group">
              <img
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
                alt="Profile"
                className="w-48 h-48 object-cover rounded-full"
              />
              <Button
                variant="secondary"
                size="icon"
                className="absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <Camera className="h-4 w-4" />
              </Button>
            </div>
            
            <div className="flex-1 space-y-4">
              <div>
                <h1 className="text-3xl font-bold">Sofia Anderson</h1>
                <div className="flex items-center gap-2 text-muted-foreground mt-2">
                  <MapPin className="h-4 w-4" />
                  <span>Paris, France</span>
                </div>
              </div>
              
              <p className="max-w-2xl">
                Professional model with 5 years of experience in haute couture and editorial fashion.
                Represented by Elite Model Management Paris.
              </p>
              
              <div className="flex gap-4">
                <Button className="flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  Contact
                </Button>
                <Button variant="outline">View Resume</Button>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: "Projects", value: "124" },
              { label: "Contests Won", value: "12" },
              { label: "Following", value: "1.2k" },
              { label: "Followers", value: "15.6k" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="bg-white rounded-lg p-4 text-center space-y-1"
              >
                <div className="text-2xl font-bold">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Photo Gallery */}
          <PhotoGallery />
        </div>
      </main>
    </div>
  );
};

export default Profile;