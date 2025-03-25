import { useState } from "react";
import GoldencateringNav from "@/components/goldencatering/GoldencateringNav";
import { Card, CardContent } from "@/components/ui/card";
import { Phone } from "lucide-react";
import { motion } from "framer-motion";

const menuItems = [
  {
    name: "Klassisk Brunch Buffet",
    price: 179,
    description: "Croissanter, røræg, bacon, pølser, yoghurt med müsli, frisk frugt og meget mere"
  },
  {
    name: "Frokost Deluxe",
    price: 159,
    description: "Luksus smørrebrød, lune retter, salater og hjemmebagt brød"
  },
  {
    name: "Tapas Menu",
    price: 225,
    description: "Spanske specialiteter, charcuteri, oste, oliven og antipasti"
  },
  {
    name: "BBQ Menu",
    price: 245,
    description: "Marineret kød, grillede grøntsager, hjemmelavede salater og dressinger"
  },
  {
    name: "Italiensk Buffet",
    price: 195,
    description: "Pasta, risotto, antipasti, italienske specialiteter og desserter"
  },
  {
    name: "Gourmet Menu",
    price: 395,
    description: "3-retters gourmetmenu med sæsonens bedste råvarer"
  },
  {
    name: "Asiatisk Fusion",
    price: 235,
    description: "Sushi, dumplings, wok-retter og asiatiske specialiteter"
  },
  {
    name: "Vegetarisk Delight",
    price: 185,
    description: "Plantebaserede retter, quinoa, bønner og friske grøntsager"
  },
  {
    name: "Dessert Buffet",
    price: 145,
    description: "Kager, tærter, mousse og andre søde fristelser"
  },
  {
    name: "Receptionsanretning",
    price: 165,
    description: "Fingermad, canapéer, små wraps og mini sandwich"
  },
  {
    name: "Julebuffet",
    price: 285,
    description: "Traditionelle juleretter, and, flæskesteg og alle klassiske tilbehør"
  },
  {
    name: "Konfirmationsmenu",
    price: 265,
    description: "Festlig buffet med både kolde og varme retter, perfekt til den store dag"
  }
];

export default function Menu() {
  return (
    <div className="min-h-screen bg-gray-50">
      <GoldencateringNav />
      
      <div className="pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Vores Menuer</h1>
            <p className="text-lg text-gray-600">
              Professionel catering til enhver lejlighed
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative">
            {/* Menu items */}
            <div className="lg:col-span-2 grid gap-6">
              {menuItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-xl font-bold">{item.name}</h3>
                        <span className="text-lg font-semibold text-primary">
                          {item.price} kr. pr. person
                        </span>
                      </div>
                      <p className="text-gray-600">{item.description}</p>
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
                    <h3 className="text-xl font-bold mb-4">Bestil Catering</h3>
                    <p className="text-gray-600 mb-6">
                      Kontakt os direkte for at bestille catering til dit arrangement
                    </p>
                    <div className="flex items-center justify-center gap-3 text-lg font-semibold">
                      <Phone className="h-5 w-5 text-primary" />
                      <a href="tel:+4582838485" className="text-primary hover:underline">
                        +45 82 83 84 85
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
