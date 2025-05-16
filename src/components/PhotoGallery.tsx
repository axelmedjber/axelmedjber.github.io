import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Plus, X } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

interface Photo {
  id: string;
  url: string;
  caption?: string;
}

export const PhotoGallery = () => {
  const [photos, setPhotos] = useState<Photo[]>([
    {
      id: "1",
      url: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7",
      caption: "Summer Fashion Editorial",
    },
    {
      id: "2",
      url: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
      caption: "Studio Session",
    },
    {
      id: "3",
      url: "https://images.unsplash.com/photo-1501854140801-50d01698950b",
      caption: "Outdoor Campaign",
    },
  ]);
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);
  const { toast } = useToast();

  const handlePhotoUpload = () => {
    toast({
      title: "Coming Soon",
      description: "Photo upload functionality will be available soon!",
    });
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-semibold">Portfolio</h2>
        <Button onClick={handlePhotoUpload} className="flex items-center gap-2">
          <Plus className="h-4 w-4" /> Add Photos
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {photos.map((photo) => (
          <div
            key={photo.id}
            className="group relative aspect-[3/4] overflow-hidden rounded-lg cursor-pointer hover:scale-[1.02] transition-transform duration-300"
            onClick={() => setSelectedPhoto(photo)}
          >
            <img
              src={photo.url}
              alt={photo.caption}
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                <p className="text-sm">{photo.caption}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <Dialog open={!!selectedPhoto} onOpenChange={() => setSelectedPhoto(null)}>
        <DialogContent className="max-w-4xl p-0">
          {selectedPhoto && (
            <div className="relative">
              <img
                src={selectedPhoto.url}
                alt={selectedPhoto.caption}
                className="w-full h-auto"
              />
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-2 right-2 text-white hover:bg-black/20"
                onClick={() => setSelectedPhoto(null)}
              >
                <X className="h-4 w-4" />
              </Button>
              {selectedPhoto.caption && (
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-black/60 text-white">
                  <p>{selectedPhoto.caption}</p>
                </div>
              )}
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};