import Hero from "@/components/home/Hero";
import { useQuery } from "@tanstack/react-query";
import type { Restaurant } from "@shared/schema";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export default function Home() {
  const { data: restaurants, isLoading } = useQuery<Restaurant[]>({
    queryKey: ["/api/restaurants"],
  });

  return (
    <div>
      <div className="relative">
        {/* Navigation buttons */}
        <div className="absolute top-8 right-8 z-20 flex gap-4">
          <Link href="/om-os">
            <Button variant="ghost" className="bg-white/20 hover:bg-white/30 text-white">
              Om os
            </Button>
          </Link>
          <Link href="/madordning">
            <Button variant="ghost" className="bg-white/20 hover:bg-white/30 text-white">
              Fast madordning
            </Button>
          </Link>
        </div>

        {/* Hero section with restaurant cards */}
        <Hero />
      </div>

      {/* Section with restaurants list is removed as requested */}
    </div>
  );
}