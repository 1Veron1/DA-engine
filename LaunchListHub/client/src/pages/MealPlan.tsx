import { motion } from "framer-motion";
import MealPlanForm from "@/components/contact/MealPlanForm";
import { Card, CardContent } from "@/components/ui/card";
import { Check } from "lucide-react";

const benefits = [
  "Fleksible leveringsmuligheder",
  "Skræddersyede menuer efter behov",
  "Fokus på kvalitet og variation",
  "Professionel service og levering",
  "Særlige kostbehov kan tilgodeses",
  "Konkurrencedygtige priser"
];

const plans = [
  {
    title: "Daglig levering",
    description: "Perfekt til virksomheder med faste medarbejdere",
    features: [
      "Frisk mad hver dag",
      "Varieret menu",
      "Fleksibel bestilling",
      "Levering til døren"
    ]
  },
  {
    title: "Ugentlig levering",
    description: "Ideel til mindre virksomheder og familier",
    features: [
      "Ugeplan med variation",
      "Økonomisk løsning",
      "Tilpasset portionsstørrelse",
      "Valgfri leveringsdag"
    ]
  },
  {
    title: "Månedlig levering",
    description: "Til special events og større arrangementer",
    features: [
      "Skræddersyet menu",
      "Professionel catering",
      "Komplet service",
      "Særlige diæthensyn"
    ]
  }
];

export default function MealPlan() {
  return (
    <div>
      <div className="relative h-[40vh] min-h-[400px]">
        <div className="absolute inset-0 bg-black/50 z-10" />
        <img
          src="https://images.unsplash.com/photo-1555244162-803834f70033"
          alt="Fast madordning"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 z-20 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center text-white"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Fast madordning
            </h1>
            <p className="text-xl max-w-2xl mx-auto">
              Skræddersyede madløsninger til virksomheder og private
            </p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-24">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-6">
              Hvorfor vælge vores madordning?
            </h2>
            <p className="text-gray-600 mb-8">
              Vi tilbyder skræddersyede madordninger, der passer til netop dine
              behov. Uanset om du er en virksomhed eller privatperson, har vi den
              rette løsning til dig.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 text-gray-700"
                >
                  <Check className="h-5 w-5 text-primary" />
                  <span>{benefit}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <img
              src="https://images.unsplash.com/photo-1557499305-0af888c3d8ec"
              alt="Madordning service"
              className="rounded-lg shadow-xl"
            />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-6">Vores løsninger</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Vi tilbyder forskellige typer madordninger, der kan tilpasses dine
            specifikke behov
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3">{plan.title}</h3>
                  <p className="text-gray-600 mb-6">{plan.description}</p>
                  <ul className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-3">
                        <Check className="h-5 w-5 text-primary" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-6">Kom i gang</h2>
            <p className="text-gray-600">
              Udfyld formularen nedenfor, så kontakter vi dig for at diskutere
              den bedste løsning til dine behov
            </p>
          </motion.div>

          <Card>
            <CardContent className="p-6">
              <MealPlanForm />
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
