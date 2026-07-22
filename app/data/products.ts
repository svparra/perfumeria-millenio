export type Vibe = "fresco" | "dulce" | "amaderado" | "floral" | "especiado" | "citrico";
export type Occasion = "dia" | "noche" | "ambas";
export type Intensity = "suave" | "moderada" | "intensa";

export type Product = {
  id: string;
  brand: string;
  name: string;
  category: "Mujer" | "Hombre" | "Unisex";
  price: number;
  originalPrice?: number;
  sizes: string[];
  tag?: string;
  stock: number;
  notes: { salida: string[]; corazon: string[]; fondo: string[] };
  vibe: Vibe[];
  occasion: Occasion;
  intensity: Intensity;
  // rating/reviewCount son datos de ejemplo para maquetar la UI de confianza;
  // reemplazar por reseñas reales antes de publicar el sitio.
  rating: number;
  reviewCount: number;
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
    stock: 4,
    notes: { salida: ["Mandarina", "Bergamota"], corazon: ["Flor de azahar", "Jazmín"], fondo: ["Almizcle", "Cedro"] },
    vibe: ["citrico", "fresco"],
    occasion: "dia",
    intensity: "moderada",
    rating: 4.7,
    reviewCount: 312,
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
    stock: 9,
    notes: { salida: ["Canela", "Nuez moscada"], corazon: ["Dátil", "Caramelo"], fondo: ["Vainilla", "Ámbar"] },
    vibe: ["dulce", "especiado"],
    occasion: "noche",
    intensity: "intensa",
    rating: 4.9,
    reviewCount: 587,
  },
  {
    id: "sauvage-elixir",
    brand: "Dior",
    name: "Sauvage Elixir",
    category: "Hombre",
    price: 520000,
    sizes: ["5ml", "10ml", "60ml"],
    stock: 12,
    notes: { salida: ["Pimienta negra", "Nuez moscada"], corazon: ["Lavanda", "Canela"], fondo: ["Ámbar", "Vetiver"] },
    vibe: ["especiado", "amaderado"],
    occasion: "noche",
    intensity: "intensa",
    rating: 4.8,
    reviewCount: 421,
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
    stock: 3,
    notes: { salida: ["Almendra", "Café"], corazon: ["Jazmín sambac", "Tuberosa"], fondo: ["Cacao", "Haba tonka"] },
    vibe: ["dulce", "floral"],
    occasion: "noche",
    intensity: "intensa",
    rating: 4.8,
    reviewCount: 498,
  },
  {
    id: "asad",
    brand: "Lattafa",
    name: "Asad",
    category: "Hombre",
    price: 175000,
    sizes: ["5ml", "10ml", "100ml"],
    tag: "Nuevo",
    stock: 15,
    notes: { salida: ["Canela", "Manzana"], corazon: ["Oud", "Especias"], fondo: ["Ámbar", "Almizcle"] },
    vibe: ["especiado", "amaderado"],
    occasion: "noche",
    intensity: "intensa",
    rating: 4.6,
    reviewCount: 189,
  },
  {
    id: "baccarat-rouge",
    brand: "Maison Francis Kurkdjian",
    name: "Baccarat Rouge 540",
    category: "Unisex",
    price: 550000,
    sizes: ["5ml", "10ml", "70ml"],
    stock: 6,
    notes: { salida: ["Azafrán", "Jazmín"], corazon: ["Ámbar gris", "Madera de cedro"], fondo: ["Almizcle blanco"] },
    vibe: ["dulce", "amaderado"],
    occasion: "ambas",
    intensity: "moderada",
    rating: 4.9,
    reviewCount: 674,
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
    stock: 2,
    notes: { salida: ["Lavanda", "Mandarina"], corazon: ["Flor de azahar", "Jazmín"], fondo: ["Vainilla Madagascar", "Almizcle"] },
    vibe: ["floral", "dulce"],
    occasion: "dia",
    intensity: "moderada",
    rating: 4.7,
    reviewCount: 356,
  },
  {
    id: "aventus",
    brand: "Creed",
    name: "Aventus",
    category: "Hombre",
    price: 550000,
    sizes: ["5ml", "10ml", "100ml"],
    tag: "Nicho",
    stock: 8,
    notes: { salida: ["Piña", "Bergamota"], corazon: ["Abedul", "Jazmín"], fondo: ["Almizcle", "Roble"] },
    vibe: ["fresco", "amaderado"],
    occasion: "dia",
    intensity: "moderada",
    rating: 4.9,
    reviewCount: 812,
  },
];
