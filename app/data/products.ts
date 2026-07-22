export type Product = {
  id: string;
  brand: string;
  name: string;
  category: "Mujer" | "Hombre" | "Unisex";
  price: number;
  originalPrice?: number;
  sizes: string[];
  tag?: string;
};

export const products: Product[] = [
  {
    id: "odyssey-mandarin-sky",
    brand: "Armaf",
    name: "Odyssey Mandarin Sky",
    category: "Unisex",
    price: 193500,
    originalPrice: 270000,
    sizes: ["5ml", "10ml", "100ml"],
    tag: "-28%",
  },
  {
    id: "khamrah",
    brand: "Lattafa",
    name: "Khamrah",
    category: "Unisex",
    price: 165000,
    originalPrice: 210000,
    sizes: ["5ml", "10ml", "100ml"],
    tag: "-21%",
  },
  {
    id: "sauvage-elixir",
    brand: "Dior",
    name: "Sauvage Elixir",
    category: "Hombre",
    price: 520000,
    sizes: ["5ml", "10ml", "60ml"],
  },
  {
    id: "good-girl",
    brand: "Carolina Herrera",
    name: "Good Girl",
    category: "Mujer",
    price: 480000,
    originalPrice: 560000,
    sizes: ["5ml", "10ml", "80ml"],
    tag: "-14%",
  },
  {
    id: "asad",
    brand: "Lattafa",
    name: "Asad",
    category: "Hombre",
    price: 175000,
    sizes: ["5ml", "10ml", "100ml"],
    tag: "Nuevo",
  },
  {
    id: "baccarat-rouge",
    brand: "Maison Francis Kurkdjian",
    name: "Baccarat Rouge 540",
    category: "Unisex",
    price: 550000,
    sizes: ["5ml", "10ml", "70ml"],
  },
  {
    id: "libre",
    brand: "Yves Saint Laurent",
    name: "Libre",
    category: "Mujer",
    price: 450000,
    originalPrice: 510000,
    sizes: ["5ml", "10ml", "90ml"],
    tag: "-12%",
  },
  {
    id: "aventus",
    brand: "Creed",
    name: "Aventus",
    category: "Hombre",
    price: 550000,
    sizes: ["5ml", "10ml", "100ml"],
    tag: "Nicho",
  },
];
