import { motion } from "framer-motion";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface MenuItem {
  name: string;
  description: string;
  price: number;
}

interface MenuCategory {
  name: string;
  items: MenuItem[];
}

interface MenuSectionProps {
  menu: MenuCategory[];
}

export default function MenuSection({ menu }: MenuSectionProps) {
  return (
    <Tabs defaultValue={menu[0]?.name} className="w-full">
      <TabsList className="w-full justify-start overflow-x-auto">
        {menu.map((category) => (
          <TabsTrigger key={category.name} value={category.name}>
            {category.name}
          </TabsTrigger>
        ))}
      </TabsList>

      {menu.map((category) => (
        <TabsContent key={category.name} value={category.name}>
          <div className="grid gap-4">
            {category.items.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <Card>
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="text-lg font-semibold mb-2">{item.name}</h4>
                        <p className="text-gray-600">{item.description}</p>
                      </div>
                      <span className="text-lg font-semibold text-primary">
                        {item.price.toFixed(2)} kr
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </TabsContent>
      ))}
    </Tabs>
  );
}
