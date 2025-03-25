import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function AboutSection() {
  return (
    <section className="bg-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-6">Om Hjemme Siden</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Vi samler tre unikke madoplevelser under ét tag, med fokus på kvalitet,
            service og den gode smag
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
                  src="https://images.unsplash.com/photo-1577106263724-2c8e03bfe9cf"
                  alt="Kvalitet"
                  className="w-20 h-20 object-cover rounded-full mx-auto mb-4"
                />
                <h3 className="text-xl font-semibold mb-3">Vores Mål</h3>
                <p className="text-gray-600">
                  At levere den bedste madoplevelse til vores kunder, hver eneste dag
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
                  src="https://images.unsplash.com/photo-1556911220-e15b29be8c8f"
                  alt="Service"
                  className="w-20 h-20 object-cover rounded-full mx-auto mb-4"
                />
                <h3 className="text-xl font-semibold mb-3">Vores Vision</h3>
                <p className="text-gray-600">
                  At skabe et samlingspunkt for mad-elskere i Aarhus og omegn
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
                  src="https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf"
                  alt="Bæredygtighed"
                  className="w-20 h-20 object-cover rounded-full mx-auto mb-4"
                />
                <h3 className="text-xl font-semibold mb-3">Vores Værdier</h3>
                <p className="text-gray-600">
                  Kvalitet, bæredygtighed og den gode service i højsædet
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link href="/om-os">
            <Button size="lg">Læs mere om os</Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
