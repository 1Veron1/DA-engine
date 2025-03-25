import { motion } from "framer-motion";
import DaTasteNav from "@/components/dataste/DaTasteNav";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight, Facebook, Instagram, Star, CheckCircle2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function DaTasteHome() {
  return (
    <div className="min-h-screen">
      <DaTasteNav />

      {/* Hero Section */}
      <div className="relative h-[80vh]">
        <div className="absolute inset-0 bg-black/50 z-10" />
        <img
          src="https://images.unsplash.com/photo-1586816001966-79b736744398"
          alt="DA Taste burger"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 z-20 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center text-white"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">DA Taste</h1>
            <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
              Byens bedste burgere lavet med kærlighed og de bedste råvarer
            </p>
            <Link href="/dataste/menu">
              <Button size="lg" className="text-lg">
                Se vores menu
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Velkommen Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-6">Velkommen til DA Taste</h2>
              <p className="text-gray-600 mb-4">
                Vi har specialiseret os i at lave de mest smagfulde og saftige burgere
                i Aarhus. Vores passion for kvalitet og god service har gjort os til
                et foretrukket valg for mange burger-elskere.
              </p>
              <p className="text-gray-600">
                Alle vores burgere er lavet fra bunden med omhu og kærlighed, og vi
                bruger kun de bedste råvarer fra lokale leverandører.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <img
                src="https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5"
                alt="Restaurant interior"
                className="rounded-lg shadow-xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Production Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-6">Vores Burgere</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Kvalitet og håndværk i hver eneste bid
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card>
                <CardContent className="p-6 text-center">
                  <img
                    src="https://images.unsplash.com/photo-1607013251379-e6eecfffe234"
                    alt="Kvalitet"
                    className="w-20 h-20 object-cover rounded-full mx-auto mb-4"
                  />
                  <h3 className="text-xl font-semibold mb-3">Friske Råvarer</h3>
                  <p className="text-gray-600">
                    Vi bruger kun de bedste og friskeste råvarer fra lokale leverandører
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Card>
                <CardContent className="p-6 text-center">
                  <img
                    src="https://images.unsplash.com/photo-1603073163308-9654c3fb2852"
                    alt="Håndlavet"
                    className="w-20 h-20 object-cover rounded-full mx-auto mb-4"
                  />
                  <h3 className="text-xl font-semibold mb-3">Håndlavet med Kærlighed</h3>
                  <p className="text-gray-600">
                    Hver burger er håndlavet og grillet til perfektion
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <Card>
                <CardContent className="p-6 text-center">
                  <img
                    src="https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2"
                    alt="Opskrift"
                    className="w-20 h-20 object-cover rounded-full mx-auto mb-4"
                  />
                  <h3 className="text-xl font-semibold mb-3">Unikke Opskrifter</h3>
                  <p className="text-gray-600">
                    Vores signatur-burgere er udviklet gennem års erfaring
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Social Media Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold mb-6">Følg Os</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-12">
              Følg os på sociale medier og vær med til at dele burger-glæden
            </p>
            <div className="flex justify-center gap-6">
              <a
                href="https://facebook.com/dataste"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary text-white p-4 rounded-full hover:bg-primary/90 transition-colors"
              >
                <Facebook className="h-6 w-6" />
              </a>
              <a
                href="https://instagram.com/dataste"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary text-white p-4 rounded-full hover:bg-primary/90 transition-colors"
              >
                <Instagram className="h-6 w-6" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quality Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-6">Kvalitet & Anmeldelser</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Vi er stolte af vores kvalitet og vores kunders tilfredshed
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-center mb-6">
                    <img
                      src="https://www.findsmiley.dk/img/1.png"
                      alt="Elite Smiley"
                      className="h-24"
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-center mb-4">
                    Elite Smiley fra Fødevarestyrelsen
                  </h3>
                  <div className="flex items-center justify-center gap-2 text-primary">
                    <CheckCircle2 className="h-5 w-5" />
                    <span>4 års uafbrudt elite-status</span>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-2">
                      <img
                        src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png"
                        alt="Google Reviews"
                        className="h-8"
                      />
                      <span className="text-xl font-semibold">Anmeldelser</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <span className="text-xl font-bold">4.8</span>
                      <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="border-b pb-4">
                      <p className="text-gray-600 mb-2">
                        "De bedste burgere i Aarhus! Altid friske råvarer og fantastisk service."
                      </p>
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      </div>
                    </div>
                    <div>
                      <p className="text-gray-600 mb-2">
                        "Kvaliteten er i top og man kan virkelig smage at der er kærlighed i hver bid!"
                      </p>
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-6">Find Os Her</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Kom forbi og oplev vores lækre burgere
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h3 className="text-xl font-semibold mb-4">Adresse</h3>
              <p className="text-gray-300">Burger Allé 123</p>
              <p className="text-gray-300">8000 Aarhus C</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h3 className="text-xl font-semibold mb-4">Kontakt</h3>
              <p className="text-gray-300">Tlf: +45 86 12 34 56</p>
              <p className="text-gray-300">Email: info@dataste.dk</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h3 className="text-xl font-semibold mb-4">Åbningstider</h3>
              <p className="text-gray-300">Mandag - Torsdag: 11:00 - 21:00</p>
              <p className="text-gray-300">Fredag - Lørdag: 11:00 - 22:00</p>
              <p className="text-gray-300">Søndag: 12:00 - 21:00</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h3 className="text-xl font-semibold mb-4">Parkering</h3>
              <p className="text-gray-300">Gratis parkering foran restauranten</p>
              <p className="text-gray-300">Cykelstativer tilgængelige</p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}