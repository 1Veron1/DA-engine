import { useState } from "react";
import PizzaTorinoNav from "@/components/pizzatorino/PizzaTorinoNav";
import { Card, CardContent } from "@/components/ui/card";
import { Phone } from "lucide-react";
import { motion } from "framer-motion";

const pizzaMenu = [
  {
    name: "Margherita",
    price: 85,
    description: "Tomatsauce, mozzarella, basilikum"
  },
  {
    name: "Pepperoni",
    price: 95,
    description: "Tomatsauce, mozzarella, pepperoni"
  },
  {
    name: "Quattro Formaggi",
    price: 105,
    description: "Tomatsauce, mozzarella, gorgonzola, parmesan, pecorino"
  },
  {
    name: "Prosciutto e Funghi",
    price: 98,
    description: "Tomatsauce, mozzarella, skinke, champignon"
  },
  {
    name: "Capricciosa",
    price: 98,
    description: "Tomatsauce, mozzarella, skinke, champignon, artiskok, oliven"
  },
  {
    name: "Diavola",
    price: 98,
    description: "Tomatsauce, mozzarella, stærk salami, chili"
  },
  {
    name: "Vegetariana",
    price: 95,
    description: "Tomatsauce, mozzarella, grillede grøntsager, basilikum"
  },
  {
    name: "Bufala",
    price: 108,
    description: "Tomatsauce, bøffelmozzarella, cherrytomater, basilikum"
  },
  {
    name: "Marinara",
    price: 75,
    description: "Tomatsauce, hvidløg, oregano (uden ost)"
  },
  {
    name: "Parma",
    price: 115,
    description: "Tomatsauce, mozzarella, parmaskinke, rucola, parmesan"
  },
  {
    name: "Calzone",
    price: 98,
    description: "Indbagt: Tomatsauce, mozzarella, skinke, champignon"
  },
  {
    name: "Hawaii",
    price: 95,
    description: "Tomatsauce, mozzarella, skinke, ananas"
  },
  {
    name: "Torino Special",
    price: 125,
    description: "Tomatsauce, mozzarella, parmaskinke, trøffel, rucola"
  },
  {
    name: "Tonno",
    price: 98,
    description: "Tomatsauce, mozzarella, tun, rød løg, oliven"
  },
  {
    name: "Bianca",
    price: 108,
    description: "Mascarpone, mozzarella, gorgonzola, pære, valnødder"
  },
  {
    name: "Salsiccia",
    price: 108,
    description: "Tomatsauce, mozzarella, italiensk pølse, grillet peberfrugt"
  }
];

export default function Menu() {
  return (
    <div className="min-h-screen bg-gray-50">
      <PizzaTorinoNav />
      
      <div className="pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Vores Pizzaer</h1>
            <p className="text-lg text-gray-600">
              Autentiske italienske pizzaer bagt i stenovn
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative">
            {/* Menu items */}
            <div className="lg:col-span-2 grid gap-6">
              {pizzaMenu.map((pizza, index) => (
                <motion.div
                  key={pizza.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-xl font-bold">{pizza.name}</h3>
                        <span className="text-lg font-semibold text-primary">
                          {pizza.price} kr
                        </span>
                      </div>
                      <p className="text-gray-600">{pizza.description}</p>
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
                      Kontakt os direkte på telefon for levering eller afhenting
                    </p>
                    <div className="flex items-center justify-center gap-3 text-lg font-semibold">
                      <Phone className="h-5 w-5 text-primary" />
                      <a href="tel:81818181" className="text-primary hover:underline">
                        81 81 81 81
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
