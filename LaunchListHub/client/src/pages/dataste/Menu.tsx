import { useState } from "react";
import DaTasteNav from "@/components/dataste/DaTasteNav";
import { Card, CardContent } from "@/components/ui/card";
import { Phone } from "lucide-react";
import { motion } from "framer-motion";

const burgers = [
  {
    name: "DA Cheeseburger",
    price: 89,
    description: "Saftig oksebøf med cheddar, friske grøntsager, og vores signatur burgerdressing"
  },
  {
    name: "DA Chickenburger",
    price: 89,
    description: "Sprød panderet kyllingefilet med salat, tomat og vores hjemmelavede aioli"
  },
  {
    name: "DA Spicy Chickenburger",
    price: 95,
    description: "Krydret kyllingefilet med jalapeños, chipotle mayo og friske grøntsager"
  },
  {
    name: "DA Dobbelt Cheeseburger",
    price: 109,
    description: "Dobbelt op på alt det gode - to bøffer, dobbelt ost og alle vores toppings"
  },
  {
    name: "DA Baconcheeseburger",
    price: 99,
    description: "Klassisk cheeseburger opgraderet med sprød bacon og karamelliserede løg"
  },
  {
    name: "DA Heartattack",
    price: 129,
    description: "Vores ultimative burger med tre bøffer, tre skiver ost, bacon og BBQ sauce"
  }
];

export default function Menu() {
  return (
    <div className="min-h-screen bg-gray-50">
      <DaTasteNav />
      
      <div className="pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Vores Burgere</h1>
            <p className="text-lg text-gray-600">
              Håndlavede burgere med de bedste råvarer
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative">
            {/* Menu items */}
            <div className="lg:col-span-2 grid gap-6">
              {burgers.map((burger, index) => (
                <motion.div
                  key={burger.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-xl font-bold">{burger.name}</h3>
                        <span className="text-lg font-semibold text-primary">
                          {burger.price} kr
                        </span>
                      </div>
                      <p className="text-gray-600">{burger.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Contact box */}
            <div className="lg:sticky lg:top-24 h-fit">
              <Card className="bg-primary/5">
                <CardContent className="p-6">
                  <div className="text-center">
                    <h3 className="text-xl font-bold mb-4">Bestil direkte</h3>
                    <p className="text-gray-600 mb-6">
                      Ring direkte til butikken for levering eller afhentning
                    </p>
                    <div className="flex items-center justify-center gap-3 text-lg font-semibold">
                      <Phone className="h-5 w-5 text-primary" />
                      <a href="tel:+4586123456" className="text-primary hover:underline">
                        +45 86 12 34 56
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
