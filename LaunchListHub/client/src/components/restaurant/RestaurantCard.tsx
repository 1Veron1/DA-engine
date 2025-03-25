import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, MapPin, Mail } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import type { Restaurant } from "@shared/schema";

interface RestaurantCardProps {
  restaurant: Restaurant;
}

export default function RestaurantCard({ restaurant }: RestaurantCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Card className="overflow-hidden">
        <div className="aspect-video relative">
          <img
            src={`https://source.unsplash.com/800x600/?restaurant,${restaurant.name}`}
            alt={restaurant.name}
            className="w-full h-full object-cover"
          />
        </div>
        <CardHeader>
          <h3 className="text-2xl font-bold">{restaurant.name}</h3>
        </CardHeader>
        <CardContent>
          <p className="text-gray-600 mb-4">{restaurant.description}</p>
          
          <div className="space-y-2 mb-6">
            <div className="flex items-center gap-2">
              <MapPin className="h-5 w-5 text-primary" />
              <span>{restaurant.address}</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="h-5 w-5 text-primary" />
              <span>{restaurant.phone}</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="h-5 w-5 text-primary" />
              <span>{restaurant.email}</span>
            </div>
          </div>

          <div className="flex gap-4">
            <Link href={`/restaurant/${restaurant.id}`}>
              <Button className="w-full">Se menu</Button>
            </Link>
            <Link href="/madordning">
              <Button variant="outline" className="w-full">
                Fast madordning
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
