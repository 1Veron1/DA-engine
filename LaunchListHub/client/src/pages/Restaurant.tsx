import { useQuery } from "@tanstack/react-query";
import { useParams } from "wouter";
import { motion } from "framer-motion";
import MenuSection from "@/components/restaurant/MenuSection";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, ExternalLink } from "lucide-react";
import type { Restaurant } from "@shared/schema";
import { Link } from "wouter";

export default function RestaurantPage() {
  const { id } = useParams();
  
  const { data: restaurant, isLoading } = useQuery<Restaurant>({
    queryKey: [`/api/restaurants/${id}`],
  });

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  if (!restaurant) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Restaurant ikke fundet</h2>
          <Link href="/">
            <Button>Gå til forsiden</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="relative h-[40vh] min-h-[400px]">
        <div className="absolute inset-0 bg-black/50 z-10" />
        <img
          src={`https://source.unsplash.com/1600x900/?restaurant,interior,${restaurant.name}`}
          alt={restaurant.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 z-20 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center text-white"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-4">{restaurant.name}</h1>
            <p className="text-xl max-w-2xl mx-auto">{restaurant.description}</p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-bold mb-8">Menu</h2>
            <MenuSection menu={restaurant.menu} />
          </div>

          <div>
            <div className="sticky top-24">
              <h3 className="text-2xl font-bold mb-6">Information</h3>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-primary" />
                  <span>{restaurant.address}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-primary" />
                  <a href={`tel:${restaurant.phone}`} className="hover:text-primary">
                    {restaurant.phone}
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-primary" />
                  <a href={`mailto:${restaurant.email}`} className="hover:text-primary">
                    {restaurant.email}
                  </a>
                </div>
              </div>

              <div className="space-y-4">
                <Link href="/madordning">
                  <Button className="w-full">
                    Fast madordning
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/kontakt">
                  <Button variant="outline" className="w-full">
                    Kontakt os
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
