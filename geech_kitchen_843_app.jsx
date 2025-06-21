import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";

const menuData = {
  tacos: [
    { name: "Lowcountry Taco", desc: "Shrimp & red rice in a crispy corn tortilla" },
    { name: "Gullah Street Taco", desc: "Smoked meats, tangy slaw, and pepper sauce" },
    { name: "Chicken Soul Taco", desc: "Fried or baked chicken, mac, & cheese, collards" },
    { name: "Fried Chicken Soul Taco", desc: "Crispy chicken, greens, Dat Gullah Coleslaw" },
    { name: "Fried Fish & Grits Taco", desc: "Whiting + creamy grits, wrapped & soulful" },
    { name: "Lowcountry Soul Taco", desc: "Pulled pork, okra pilau, spicy peach drizzle" },
    { name: "Crab Cake Taco", desc: "Lump crab cake with Old Bay aioli and lettuce" }
  ],
  classics: [
    { name: "Deep Fried Ribs", desc: "Juicy, seasoned, and crackly-good" },
    { name: "Deep Fried Chicken Feet & Neck", desc: "Straight from the roots" },
    { name: "Soulfood Eggrolls", desc: "Stuffed with mac, yams, greens & meat" }
  ],
  plates: [
    { name: "Lowcountry Seafood Boil", desc: "Shrimp, crab, sausage, corn, & potato" },
    { name: "Geech SetUp", desc: "Fried fish, okra pilau, mac, slaw & Gullah Pep Bacon" },
    { name: "Okra Pilau (pih-LOW)", desc: "Gullah-style rice dish with tomato & spice" }
  ],
  sides: [
    { name: "Mac & Cheese", desc: "Baked golden and gooey" },
    { name: "Gullah Pep Bacon", desc: "Sweet heat. slow cooked, crispy edges" },
    { name: "Fried Okra", desc: "Crunchy and addictive" },
    { name: "Fries", desc: "Seasoned and crispy" },
    { name: "Green Beans", desc: "Smoked turkey & onion style" },
    { name: "Baked Beans", desc: "With brown sugar & Gullah spices" },
    { name: "Fried Corn on the Cob", desc: "Sweet, battered, golden" },
    { name: "Potato Salad", desc: "Creamy Southern style" },
    { name: "Dat Gullah Coleslaw", desc: "Tangy, creamy, fresh" }
  ],
  dessert: [
    { name: "Strawberry French Pound Cake", desc: "Sweet, buttery, Gullah grandma approved" }
  ]
};

export default function GeechKitchen843App() {
  return (
    <div className="p-4 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-6 text-orange-900">GeechKitchen843</h1>
      <h2 className="text-xl font-semibold text-center text-teal-700 mb-4">Soul Food + Gullah Fusion</h2>
      <ScrollArea className="h-[80vh] p-2 border rounded-xl bg-orange-50">
        {Object.entries(menuData).map(([section, items]) => (
          <div key={section} className="mb-6">
            <h3 className="text-2xl text-orange-800 font-bold capitalize mb-2">
              {section.replace(/dessert/, "Desserts").replace(/s$/, '') + (section === "sides" ? "" : "s")}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {items.map((item, idx) => (
                <Card key={idx} className="bg-white shadow-md border-2 border-orange-100">
                  <CardContent className="p-4">
                    <h4 className="text-lg font-semibold text-orange-900">{item.name}</h4>
                    <p className="text-sm text-gray-600">{item.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        ))}
      </ScrollArea>
      <div className="text-center mt-6">
        <Button className="bg-orange-700 text-white px-6 py-2 rounded-full hover:bg-orange-800">
          Order Now
        </Button>
      </div>
    </div>
  );
}
