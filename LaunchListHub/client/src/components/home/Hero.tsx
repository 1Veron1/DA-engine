import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Link } from "wouter";

const restaurants = [
  {
    id: 1,
    name: "DA Taste",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4",
    href: "/dataste"  
  },
  {
    id: 2, 
    name: "Pizza Torino",
    image: "https://images.unsplash.com/photo-1590947132387-155cc02f3212",
    href: "/pizzatorino"
  },
  {
    id: 3,
    name: "Goldencatering",
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0",
    href: "/goldencatering"
  }
];

export default function Hero() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30 z-10" />
        <motion.div
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8 }}
          className="w-full h-full"
        >
          <img
            src="https://images.unsplash.com/photo-1559329007-40df8a9345d8"
            alt="Restaurant ambiance"
            className="w-full h-full object-cover"
          />
        </motion.div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Velkommen til Hjemme Siden
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Oplev vores tre unikke restauranter med hver deres særlige specialiteter
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {restaurants.map((restaurant, index) => (
            <motion.div
              key={restaurant.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Link href={restaurant.href}>
                <Card className="group cursor-pointer overflow-hidden">
                  <div className="relative aspect-[4/3]">
                    <img
                      src={restaurant.image}
                      alt={restaurant.name}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <h3 className="text-2xl font-bold text-white">
                        {restaurant.name}
                      </h3>
                    </div>
                  </div>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}