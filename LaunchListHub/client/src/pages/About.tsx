import { motion } from "framer-motion";
import AboutSection from "@/components/home/AboutSection";

export default function About() {
  return (
    <div>
      <div className="relative h-[40vh] min-h-[400px]">
        <div className="absolute inset-0 bg-black/50 z-10" />
        <img
          src="https://images.unsplash.com/photo-1542528180-1c2803fa048c"
          alt="Om os"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 z-20 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center text-white"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Om os</h1>
            <p className="text-xl max-w-2xl mx-auto">
              Lær mere om vores passion for mad og service
            </p>
          </motion.div>
        </div>
      </div>

      <AboutSection />

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-6">Vores Historie</h2>
              <p className="text-gray-600 mb-4">
                Hjemme Siden startede som en vision om at samle de bedste madoplevelser
                under ét tag. Vi ønskede at skabe et koncept, hvor kvalitet og
                variation går hånd i hånd.
              </p>
              <p className="text-gray-600">
                I dag er vi stolte af at kunne præsentere tre unikke restauranter,
                der hver især bidrager med deres særlige specialiteter og passion
                for god mad.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <img
                src="https://images.unsplash.com/photo-1514933651103-005eec06c04b"
                alt="Vores historie"
                className="rounded-lg shadow-xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-6">Vores Team</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Mød de passionerede mennesker bag vores succes
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Anders Jensen",
                role: "Restaurantchef",
                image: "https://images.unsplash.com/photo-1560250097-0b93528c311a",
              },
              {
                name: "Marie Nielsen",
                role: "Køkkenchef",
                image: "https://images.unsplash.com/photo-1595257841889-eca2678454e2",
              },
              {
                name: "Peter Hansen",
                role: "Servicechef",
                image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
              },
            ].map((member) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
