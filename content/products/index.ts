export type ProductCategory =
  | "Cameras"
  | "Lenses"
  | "Lighting"
  | "Creator Gear"
  | "Fashion"
  | "Jewellery"
  | "Accessories"
  | "Shoot Essentials";

export type Product = {
  id: string;
  name: string;
  brand: string;
  category: ProductCategory;
  subcategory?: string;
  description: string;
  price?: string;
  image: string;
  affiliateUrl: string;
  merchant: string;
  featured?: boolean;
  badge?: string;
};

export const products: Product[] = [
  /* =====================================================
     PHOTOGRAPHY
  ===================================================== */

  {
    id: "sony-alpha-camera",
    name: "Sony Alpha Camera",
    brand: "Sony",
    category: "Cameras",
    description:
      "A versatile camera option for photography, portraits, events and cinematic content.",
    price: "Check latest price",
    image: "/images/store/sony-camera.jpg",
    affiliateUrl: "YOUR_AFFILIATE_LINK",
    merchant: "Amazon",
    featured: true,
    badge: "HYFEE Pick",
  },

  {
    id: "sony-2470-gm",
    name: "Sony 24-70mm GM",
    brand: "Sony",
    category: "Lenses",
    description:
      "A professional standard zoom lens suited for portraits, events and cinematic photography.",
    price: "Check latest price",
    image: "/images/store/sony-24-70-gm.jpg",
    affiliateUrl: "YOUR_AFFILIATE_LINK",
    merchant: "Amazon",
    featured: true,
    badge: "Creator Favorite",
  },

  {
    id: "creator-light",
    name: "Creator Lighting Kit",
    brand: "Creator Gear",
    category: "Lighting",
    description:
      "A practical lighting setup for portraits, product photography and content creation.",
    price: "Check latest price",
    image: "/images/store/creator-light.jpg",
    affiliateUrl: "YOUR_AFFILIATE_LINK",
    merchant: "Amazon",
    featured: false,
  },

  {
    id: "camera-backpack",
    name: "Camera Backpack",
    brand: "Creator Gear",
    subcategory: "Camera Bags",
    category: "Creator Gear",
    description:
      "A practical camera bag for carrying your camera, lenses and everyday creator essentials.",
    price: "Check latest price",
    image: "/images/store/camera-backpack.jpg",
    affiliateUrl: "YOUR_AFFILIATE_LINK",
    merchant: "Amazon",
    featured: false,
  },

  /* =====================================================
     FASHION
  ===================================================== */

  {
    id: "editorial-womens-dress",
    name: "Editorial Women's Dress",
    brand: "Fashion Pick",
    category: "Fashion",
    subcategory: "Women's Dresses",
    description:
      "A stylish dress suitable for portraits, fashion editorials and outdoor photoshoots.",
    price: "Check latest price",
    image: "/images/store/editorial-dress.jpg",
    affiliateUrl: "YOUR_AFFILIATE_LINK",
    merchant: "Amazon",
    featured: true,
    badge: "Shoot Pick",
  },

  {
    id: "mens-editorial-shirt",
    name: "Men's Editorial Shirt",
    brand: "Fashion Pick",
    category: "Fashion",
    subcategory: "Men's Shirts",
    description:
      "A versatile shirt that works well for casual portraits, lifestyle shoots and editorial photography.",
    price: "Check latest price",
    image: "/images/store/editorial-shirt.jpg",
    affiliateUrl: "YOUR_AFFILIATE_LINK",
    merchant: "Amazon",
    featured: false,
  },

  /* =====================================================
     JEWELLERY
  ===================================================== */

  {
    id: "statement-earrings",
    name: "Statement Earrings",
    brand: "Jewellery Pick",
    category: "Jewellery",
    subcategory: "Earrings",
    description:
      "Statement earrings selected to complement fashion portraits and editorial photoshoots.",
    price: "Check latest price",
    image: "/images/store/statement-earrings.jpg",
    affiliateUrl: "YOUR_AFFILIATE_LINK",
    merchant: "Amazon",
    featured: true,
    badge: "Shoot Pick",
  },

  {
    id: "minimal-necklace",
    name: "Minimal Necklace",
    brand: "Jewellery Pick",
    category: "Jewellery",
    subcategory: "Necklaces",
    description:
      "A minimal necklace that works naturally with portraits, fashion styling and everyday looks.",
    price: "Check latest price",
    image: "/images/store/minimal-necklace.jpg",
    affiliateUrl: "YOUR_AFFILIATE_LINK",
    merchant: "Amazon",
    featured: false,
  },

  {
    id: "fashion-bracelet",
    name: "Fashion Bracelet",
    brand: "Jewellery Pick",
    category: "Jewellery",
    subcategory: "Bracelets",
    description:
      "A simple styling accessory for fashion shoots, portraits and lifestyle photography.",
    price: "Check latest price",
    image: "/images/store/fashion-bracelet.jpg",
    affiliateUrl: "YOUR_AFFILIATE_LINK",
    merchant: "Amazon",
    featured: false,
  },

  /* =====================================================
     ACCESSORIES
  ===================================================== */

  {
    id: "fashion-sunglasses",
    name: "Fashion Sunglasses",
    brand: "Accessories Pick",
    category: "Accessories",
    subcategory: "Sunglasses",
    description:
      "A fashion accessory that can add character and a strong visual element to portraits.",
    price: "Check latest price",
    image: "/images/store/fashion-sunglasses.jpg",
    affiliateUrl: "YOUR_AFFILIATE_LINK",
    merchant: "Amazon",
    featured: true,
    badge: "Style Pick",
  },

  {
    id: "fashion-handbag",
    name: "Fashion Handbag",
    brand: "Accessories Pick",
    category: "Accessories",
    subcategory: "Handbags",
    description:
      "A versatile handbag that works well as a styling prop for fashion and lifestyle shoots.",
    price: "Check latest price",
    image: "/images/store/fashion-handbag.jpg",
    affiliateUrl: "YOUR_AFFILIATE_LINK",
    merchant: "Amazon",
    featured: false,
  },

  /* =====================================================
     SHOOT ESSENTIALS
  ===================================================== */

  {
    id: "fashion-hair-accessory",
    name: "Hair Accessory",
    brand: "Shoot Essentials",
    category: "Shoot Essentials",
    subcategory: "Hair Accessories",
    description:
      "A small styling detail that can add texture and personality to fashion portraits.",
    price: "Check latest price",
    image: "/images/store/hair-accessory.jpg",
    affiliateUrl: "YOUR_AFFILIATE_LINK",
    merchant: "Amazon",
    featured: false,
  },

  {
    id: "fashion-watch",
    name: "Classic Watch",
    brand: "Shoot Essentials",
    category: "Shoot Essentials",
    subcategory: "Watches",
    description:
      "A classic styling piece suitable for men's portraits, lifestyle shoots and editorial work.",
    price: "Check latest price",
    image: "/images/store/classic-watch.jpg",
    affiliateUrl: "YOUR_AFFILIATE_LINK",
    merchant: "Amazon",
    featured: false,
  },
];

export const categories: ProductCategory[] = [
  "Cameras",
  "Lenses",
  "Lighting",
  "Creator Gear",
  "Fashion",
  "Jewellery",
  "Accessories",
  "Shoot Essentials",
];