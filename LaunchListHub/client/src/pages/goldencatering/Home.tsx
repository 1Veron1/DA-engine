import { motion } from "framer-motion";
import GoldencateringNav from "@/components/goldencatering/GoldencateringNav";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight, Facebook, Instagram, Star, CheckCircle2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function GoldencateringHome() {
  return (
    <div className="min-h-screen">
      <GoldencateringNav />

      <div className="relative h-[80vh]">
        <div className="absolute inset-0 bg-black/50 z-10" />
        <img
          src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0"
          alt="Goldencatering"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 z-20 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center text-white"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">Goldencatering</h1>
            <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
              Professionel catering og mad til alle anledninger
            </p>
            <Link href="/goldencatering/menu">
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
              <h2 className="text-3xl font-bold mb-6">Velkommen til Goldencatering</h2>
              <p className="text-gray-600 mb-4">
                Vi har specialiseret os i at levere mad i høj kvalitet til alle
                typer arrangementer. Med mange års erfaring sikrer vi, at dit
                arrangement bliver en kulinarisk succes.
              </p>
              <p className="text-gray-600">
                Vores dedikerede team af kokke og tjenere står klar til at give
                dig og dine gæster en uforglemmelig madoplevelse.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <img
                src="https://images.unsplash.com/photo-1485875437342-9b39470b3d95"
                alt="Goldencatering mad"
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
            <h2 className="text-3xl font-bold mb-6">Professionel Catering</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Din garanti for en succesfuld event
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
                    src="https://images.unsplash.com/photo-1556910103-1c02745aae4d"
                    alt="Planlægning"
                    className="w-20 h-20 object-cover rounded-full mx-auto mb-4"
                  />
                  <h3 className="text-xl font-semibold mb-3">Grundig Planlægning</h3>
                  <p className="text-gray-600">
                    Vi planlægger hvert arrangement ned til mindste detalje
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
                    src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c"
                    alt="Køkken"
                    className="w-20 h-20 object-cover rounded-full mx-auto mb-4"
                  />
                  <h3 className="text-xl font-semibold mb-3">Professionelt Køkken</h3>
                  <p className="text-gray-600">
                    Vores erfarne kokke sikrer mad af højeste kvalitet
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
                    src="https://images.unsplash.com/photo-1442544213729-6a15f1611937"
                    alt="Service"
                    className="w-20 h-20 object-cover rounded-full mx-auto mb-4"
                  />
                  <h3 className="text-xl font-semibold mb-3">Komplet Service</h3>
                  <p className="text-gray-600">
                    Fra opdækning til oprydning - vi klarer det hele
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
              Se vores seneste arrangementer og få inspiration til dit næste event
            </p>
            <div className="flex justify-center gap-6">
              <a
                href="https://facebook.com/goldencatering"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary text-white p-4 rounded-full hover:bg-primary/90 transition-colors"
              >
                <Facebook className="h-6 w-6" />
              </a>
              <a
                href="https://instagram.com/goldencatering"
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
              Danmarks førende cateringservice
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
                    <span>6 års uafbrudt elite-status</span>
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
                        "Fantastisk catering til vores bryllup! Professionel service og sublime retter."
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
                        "Upåklagelig service og mad til vores firmaevent. Alt var perfekt!"
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
            <h2 className="text-3xl font-bold mb-6">Kontakt Os</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Lad os hjælpe med at gøre dit arrangement til noget særligt
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
              <h3 className="text-xl font-semibold mb-4">Hovedkontor</h3>
              <p className="text-gray-300">Catering Boulevard 78</p>
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
              <p className="text-gray-300">Tlf: +45 82 83 84 85</p>
              <p className="text-gray-300">Email: info@goldencatering.dk</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h3 className="text-xl font-semibold mb-4">Kontor Åbningstider</h3>
              <p className="text-gray-300">Mandag - Fredag: 09:00 - 17:00</p>
              <p className="text-gray-300">Lørdag - Søndag: Efter aftale</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h3 className="text-xl font-semibold mb-4">Service</h3>
              <p className="text-gray-300">Levering i hele Danmark</p>
              <p className="text-gray-300">Professionel service til alle events</p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}