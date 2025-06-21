## Hi there 👋
import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Image as ImageIcon, MapPin, UploadCloud } from "lucide-react";

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
  const [galleryImages, setGalleryImages] = useState([]);

  const handleImageUpload = (event) => {
    const files = Array.from(event.target.files);
    const urls = files.map(file => URL.createObjectURL(file));
    setGalleryImages(prev => [...prev, ...urls]);
  };

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <Tabs defaultValue="home" className="w-full">
        <TabsList className="flex justify-center gap-2 mb-4">
          <TabsTrigger value="home">Home</TabsTrigger>
          <TabsTrigger value="menu">Menu</TabsTrigger>
          <TabsTrigger value="gallery">Gallery</TabsTrigger>
          <TabsTrigger value="map">Find Us</TabsTrigger>
        </TabsList>

        <TabsContent value="home">
          <div className="text-center py-10 px-4">
            <h1 className="text-4xl font-bold text-orange-900 mb-2">GeechKitchen843</h1>
            <p className="text-lg text-teal-700 mb-4">Soul Food + Gullah Fusion</p>
            <p className="text-md text-gray-700 mb-2">Serving up Lowcountry flavor wherever you are!</p>
            <p className="text-sm text-gray-500">📍 Charleston, SC & surrounding areas</p>
            <p className="text-sm text-gray-500">📞 843-518-9680</p>
            <p className="text-sm text-gray-500">📧 GeechKitchen843@Gmail.Com</p>
            <p className="text-sm text-gray-500">🔗 <a href="https://www.facebook.com/geechkitchen843.2019/" className="underline" target="_blank">Facebook</a></p>
          </div>
        </TabsContent>

        <TabsContent value="menu">
          <ScrollArea className="h-[75vh] p-2 border rounded-xl bg-orange-50">
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
        </TabsContent>

        <TabsContent value="gallery">
          <div className="text-center py-8">
            <h2 className="text-2xl font-bold text-orange-900 mb-4 flex justify-center items-center gap-2">
              <ImageIcon className="w-5 h-5" /> Photo Gallery
            </h2>
            <input type="file" multiple accept="image/*" onChange={handleImageUpload} className="mb-4" />
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {galleryImages.map((src, idx) => (
                <img key={idx} src={src} alt={`Gallery ${idx}`} className="rounded-lg border shadow" />
              ))}
            </div>
          </div>
        </TabsContent>

        <TabsContent value="map">
          <div className="text-center py-8">
            <h2 className="text-2xl font-bold text-orange-900 mb-4 flex justify-center items-center gap-2">
              <MapPin className="w-5 h-5" /> Truck Locator
            </h2>
            <p className="text-sm text-gray-500 mb-2">Find out where the truck is today!</p>
            <iframe
              className="w-full h-[300px] rounded-xl border"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10659.940722658926!2d-79.9402227!3d32.7764741!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88fe7a232fd5932d%3A0xbad1e02f5eb110e7!2sCharleston%2C%20SC!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
