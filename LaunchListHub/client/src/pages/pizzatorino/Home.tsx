import { motion } from "framer-motion";
import PizzaTorinoNav from "@/components/pizzatorino/PizzaTorinoNav";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight, Facebook, Instagram, Star, CheckCircle2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function PizzaTorinoHome() {
  return (
    <div className="min-h-screen">
      <PizzaTorinoNav />

      <div className="relative h-[80vh]">
        <div className="absolute inset-0 bg-black/50 z-10" />
        <img
          src="https://images.unsplash.com/photo-1513104890138-7c749659a591"
          alt="Pizza Torino"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 z-20 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center text-white"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">Pizza Torino</h1>
            <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
              Autentiske italienske pizzaer lavet med de bedste råvarer og ægte kærlighed
            </p>
            <Link href="/pizzatorino/menu">
              <Button size="lg" className="text-lg">
                Se vores menu
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>

      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-6">Velkommen til Pizza Torino</h2>
              <p className="text-gray-600 mb-4">
                Siden 1995 har vi serveret autentiske italienske pizzaer i hjertet af Aarhus.
                Vores passion for kvalitet og traditionelle opskrifter har gjort os til
                en af byens mest elskede pizzeriaer.
              </p>
              <p className="text-gray-600">
                Vi bruger kun de fineste italienske råvarer og vores pizzadej modnes
                i minimum 24 timer for at opnå den perfekte smag og konsistens.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <img
                src="https://images.unsplash.com/photo-1541745537411-b8046dc6d66c"
                alt="Pizza Torino køkken"
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
            <h2 className="text-3xl font-bold mb-6">Ægte Italiensk Pizza</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Tradition og håndværk i hver eneste pizza
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
                    src="https://images.unsplash.com/photo-1571407970349-bc81e7e96d47"
                    alt="Dej"
                    className="w-20 h-20 object-cover rounded-full mx-auto mb-4"
                  />
                  <h3 className="text-xl font-semibold mb-3">Hjemmelavet Dej</h3>
                  <p className="text-gray-600">
                    Vores dej modnes i 24 timer for den perfekte konsistens og smag
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
                    src="https://images.unsplash.com/photo-1593504049359-74330189a345"
                    alt="Ingredienser"
                    className="w-20 h-20 object-cover rounded-full mx-auto mb-4"
                  />
                  <h3 className="text-xl font-semibold mb-3">Italienske Råvarer</h3>
                  <p className="text-gray-600">
                    Importerede italienske specialiteter af højeste kvalitet
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
                    src="https://images.unsplash.com/photo-1513618827672-0d7c5ad591b1"
                    alt="Stenovn"
                    className="w-20 h-20 object-cover rounded-full mx-auto mb-4"
                  />
                  <h3 className="text-xl font-semibold mb-3">Ægte Stenovn</h3>
                  <p className="text-gray-600">
                    Bagt i traditionel italiensk stenovn ved høj temperatur
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
              Del din pizza-kærlighed med os på sociale medier
            </p>
            <div className="flex justify-center gap-6">
              <a
                href="https://facebook.com/pizzatorino"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary text-white p-4 rounded-full hover:bg-primary/90 transition-colors"
              >
                <Facebook className="h-6 w-6" />
              </a>
              <a
                href="https://instagram.com/pizzatorino"
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
              Aarhus' bedst bedømte italienske pizzeria
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
                    <span>5 års uafbrudt elite-status</span>
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
                      <span className="text-xl font-bold">4.9</span>
                      <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="border-b pb-4">
                      <p className="text-gray-600 mb-2">
                        "Den bedste italienske pizza i Aarhus! Autentisk smag og fantastisk service."
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
                        "Som at være i Italien! Pizzaerne er perfekte og personalet er super venlige."
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
            <h2 className="text-3xl font-bold mb-6">Besøg Vores Restaurant</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Kom og oplev ægte italiensk atmosfære
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
              <p className="text-gray-300">Italiensk Plads 45</p>
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
              <p className="text-gray-300">Tlf: 81 81 81 81</p>
              <p className="text-gray-300">Email: info@pizzatorino.dk</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h3 className="text-xl font-semibold mb-4">Åbningstider</h3>
              <p className="text-gray-300">Tirsdag - Torsdag: 16:00 - 22:00</p>
              <p className="text-gray-300">Fredag - Lørdag: 12:00 - 23:00</p>
              <p className="text-gray-300">Søndag: 16:00 - 22:00</p>
              <p className="text-gray-300">Mandag: Lukket</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h3 className="text-xl font-semibold mb-4">Faciliteter</h3>
              <p className="text-gray-300">Hyggelig udendørs terrasse</p>
              <p className="text-gray-300">Handicapvenlig adgang</p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}