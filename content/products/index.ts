export type ProductCategory =
  | "Cameras"
  | "Lenses"
  | "Lighting"
  | "Creator Gear"
  | "Fashion";

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
  specifications?: {
    label: string;
    value: string;
  }[];
};

export const products: Product[] = [
  /* =====================================================
     CAMERAS
  ===================================================== */

  {
    id: "sony-alpha-6400-18-135",
    name: "Sony α6400 with 18-135mm Lens",
    brand: "Sony",
    category: "Cameras",
    subcategory: "Mirrorless Cameras",
    description:
      "A compact APS-C mirrorless camera paired with Sony's versatile 18-135mm OSS zoom lens. A strong all-round setup for portraits, travel, everyday photography and creator content.",
    price: "Check latest price",
    image: "/images/store/sony-alpha-6400-18-135.jpg",
    affiliateUrl:
      "https://www.amazon.in/Sony-ILCE-6400M-Mirrorless-Digital-18-135mm/dp/B07NF5PT84?linkCode=sl2&tag=hyfeevisuals-21&linkId=933bbd1dbdbf6f95bc0b1f7a3f0e2412",
    merchant: "Amazon",
    featured: true,
    badge: "HYFEE Pick",
    specifications: [
      {
        label: "Camera",
        value: "Sony α6400",
      },
      {
        label: "Sensor",
        value: "APS-C",
      },
      {
        label: "Mount",
        value: "Sony E-mount",
      },
      {
        label: "Lens",
        value: "E 18-135mm F3.5-5.6 OSS",
      },
      {
        label: "Equivalent Range",
        value: "27-202.5mm",
      },
      {
        label: "Stabilization",
        value: "Optical SteadyShot",
      },
      {
        label: "Minimum Focus",
        value: "0.45m",
      },
      {
        label: "Lens Weight",
        value: "325g",
      },
    ],
  },

  {
    id: "canon-eos-r100-18-45",
    name: "Canon EOS R100 with RF-S 18-45mm Lens",
    brand: "Canon",
    category: "Cameras",
    subcategory: "Mirrorless Cameras",
    description:
      "A compact APS-C mirrorless camera with Canon's RF-S 18-45mm zoom lens, making it a practical entry-level option for photography, travel, portraits and everyday creator content.",
    price: "Check latest price",
    image: "/images/store/canon-eos-r100-18-45.jpg",
    affiliateUrl:
      "https://www.amazon.in/Canon-Digital-Camera-RF-S18-45mm-White/dp/B0BZHWQ2D1?linkCode=sl2&tag=hyfeevisuals-21&linkId=db95f5ef842e5429c507ed8eb9371138",
    merchant: "Amazon",
    featured: false,
    badge: "Beginner Pick",
    specifications: [
      {
        label: "Camera",
        value: "Canon EOS R100",
      },
      {
        label: "Sensor",
        value: "APS-C",
      },
      {
        label: "Mount",
        value: "Canon RF",
      },
      {
        label: "Lens",
        value: "RF-S 18-45mm",
      },
      {
        label: "Use",
        value: "Photography & Creator Content",
      },
    ],
  },

  /* =====================================================
     LENSES
  ===================================================== */

  {
    id: "sony-fe-24-70-f2-8-gm",
    name: "Sony FE 24-70mm F2.8 GM",
    brand: "Sony",
    category: "Lenses",
    subcategory: "Standard Zoom",
    description:
      "A professional full-frame standard zoom lens with a constant F2.8 aperture, designed for portraits, events, weddings, cinematic work and everyday professional photography.",
    price: "Check latest price",
    image: "/images/store/sony-fe-24-70-f2-8-gm.jpg",
    affiliateUrl:
      "https://www.amazon.in/Sony-FE-24-70mm-2-8-Lens/dp/B01BESQYJW?linkCode=sl2&tag=hyfeevisuals-21&linkId=a4e3f19682d155e4bf7bfffc12ec1fcf",
    merchant: "Amazon",
    featured: true,
    badge: "HYFEE Pick",
    specifications: [
      {
        label: "Focal Length",
        value: "24-70mm",
      },
      {
        label: "Maximum Aperture",
        value: "F2.8",
      },
      {
        label: "Mount",
        value: "Sony E-mount",
      },
      {
        label: "Format",
        value: "Full-frame",
      },
      {
        label: "Minimum Focus",
        value: "0.38m",
      },
      {
        label: "Weight",
        value: "886g",
      },
      {
        label: "Filter Size",
        value: "82mm",
      },
      {
        label: "Aperture Blades",
        value: "9",
      },
    ],
  },

  {
    id: "sony-fe-50mm-f1-8",
    name: "Sony FE 50mm F1.8",
    brand: "Sony",
    category: "Lenses",
    subcategory: "Prime Lenses",
    description:
      "A compact full-frame 50mm prime lens with a bright F1.8 aperture, making it a practical choice for portraits, low-light photography and cinematic-looking images.",
    price: "Check latest price",
    image: "/images/store/sony-fe-50mm-f1-8.jpg",
    affiliateUrl:
      "https://www.amazon.in/Sony-SEL50F18F-Mount-Frame-Prime/dp/B01DLMD5O6?linkCode=sl2&tag=hyfeevisuals-21&linkId=9239d91cfb6971904ef8d60cf10b22c6",
    merchant: "Amazon",
    featured: true,
    badge: "Portrait Pick",
    specifications: [
      {
        label: "Focal Length",
        value: "50mm",
      },
      {
        label: "Maximum Aperture",
        value: "F1.8",
      },
      {
        label: "Mount",
        value: "Sony E-mount",
      },
      {
        label: "Format",
        value: "Full-frame",
      },
      {
        label: "Minimum Focus",
        value: "0.45m",
      },
      {
        label: "Filter Size",
        value: "49mm",
      },
    ],
  },

  {
    id: "sigma-35mm-f1-4-dg-hsm-art",
    name: "Sigma 35mm F1.4 DG HSM Art",
    brand: "Sigma",
    category: "Lenses",
    subcategory: "Prime Lenses",
    description:
      "A fast 35mm prime lens with a bright F1.4 aperture, ideal for cinematic photography, environmental portraits, street photography, events and low-light shooting.",
    price: "Check latest price",
    image: "/images/store/sigma-35mm-f1-4-art.jpg",
    affiliateUrl:
      "https://www.amazon.in/Sigma-Mount-Mirrorless-Cameras-303965/dp/B093JQ7XPK?linkCode=sl2&tag=hyfeevisuals-21&linkId=52a7b8887d654f4ccbb2f939674e2daf",
    merchant: "Amazon",
    featured: true,
    badge: "Cinematic Pick",
    specifications: [
      {
        label: "Focal Length",
        value: "35mm",
      },
      {
        label: "Maximum Aperture",
        value: "F1.4",
      },
      {
        label: "Mount",
        value: "Sony E-mount",
      },
      {
        label: "Format",
        value: "Full-frame",
      },
      {
        label: "Lens Series",
        value: "Art",
      },
    ],
  },

  /* =====================================================
     LIGHTING
  ===================================================== */

  {
    id: "digitek-drl-14c-ring-light",
    name: "Digitek DRL-14C LED Ring Light",
    brand: "Digitek",
    category: "Lighting",
    subcategory: "Ring Lights",
    description:
      "A 31cm dual-temperature LED ring light with a 5-foot stand, smartphone mount and adjustable intensity. A practical lighting option for portraits, reels, makeup, vlogging and home content creation.",
    price: "Check latest price",
    image: "/images/store/digitek-drl-14c-ring-light.jpg",
    affiliateUrl:
      "https://www.amazon.in/DIGITEK%C2%AE-DRL-14C-Temperature-Photo-Shoot-Vlogging/dp/B09BN2NPBD?linkCode=sl2&tag=hyfeevisuals-21&linkId=e69a8a429b0859943ccadf250de70754",
    merchant: "Amazon",
    featured: true,
    badge: "Budget Pick",
    specifications: [
      {
        label: "Size",
        value: "31cm",
      },
      {
        label: "Light Type",
        value: "Dual Temperature LED",
      },
      {
        label: "Stand",
        value: "5 Feet",
      },
      {
        label: "Brightness",
        value: "Adjustable",
      },
      {
        label: "Colour Temperature",
        value: "Adjustable",
      },
      {
        label: "Phone Mount",
        value: "Included",
      },
      {
        label: "Hot Shoe Mount",
        value: "Included",
      },
      {
        label: "Warranty",
        value: "6 Months",
      },
    ],
  },

  /* =====================================================
     CREATOR GEAR
  ===================================================== */

  {
    id: "digitek-dtr-550-lw",
    name: "Digitek DTR 550 LW Tripod",
    brand: "Digitek",
    category: "Creator Gear",
    subcategory: "Tripods",
    description:
      "A 67-inch lightweight tripod with a 360° ball head, phone holder and 5kg recommended load capacity. A practical option for photography, video shoots and creator content.",
    price: "Check latest price",
    image: "/images/store/digitek-dtr-550-lw.jpg",
    affiliateUrl:
      "https://www.amazon.in/Digitek-DTR-550-LW-Tripod/dp/B074CWD7MS?linkCode=sl2&tag=hyfeevisuals-21&linkId=5fa2eebbc26d49fa22e060dca407a9ad",
    merchant: "Amazon",
    featured: true,
    badge: "HYFEE Pick",
    specifications: [
      {
        label: "Maximum Height",
        value: "67 inches / 1700mm",
      },
      {
        label: "Load Capacity",
        value: "Up to 5kg",
      },
      {
        label: "Head",
        value: "360° Ball Head",
      },
      {
        label: "Material",
        value: "Aluminium",
      },
      {
        label: "Phone Holder",
        value: "Included",
      },
      {
        label: "Leg Lock",
        value: "Flip Locks",
      },
      {
        label: "Weight",
        value: "Approx. 2.3kg",
      },
      {
        label: "Carry Bag",
        value: "Included",
      },
    ],
  },

  {
    id: "syvo-wt-3130-tripod",
    name: "Syvo WT-3130 Aluminum Tripod",
    brand: "Syvo",
    category: "Creator Gear",
    subcategory: "Tripods",
    description:
      "A lightweight and versatile tripod for smartphones, cameras and everyday creator setups. A practical budget option for photography, reels and content creation.",
    price: "Check latest price",
    image: "/images/store/syvo-wt-3130-tripod.jpg",
    affiliateUrl:
      "https://www.amazon.in/Syvo-3130-Aluminum-Universal-Lightweight/dp/B07N42JB4S?content-id=amzn1.sym.500f4266-6f17-4445-b9e1-eb8cd7ca4719%3Aamzn1.sym.500f4266-6f17-4445-b9e1-eb8cd7ca4719&dib=eyJ2IjoiMSJ9.qYLnQmchU7SBXkQK59WW9Tv53LQpQZYtqtIVggMR_pxiBd0NevVVzZZ7Km73vYfg6-YcaA3mG3nKM-IMD4tGGG3b_TJKlGbbs0JgY3rFxCCddT5I1Nj7Kfz13KXePpfuk0an7dZbm0r1xkkemAd74iBOZ5ckqGv_hXzQvYRMr66KkLZQhFbPGvPl38YhyrWvHervGBbYa4Zhrx1pyC80dpXS-Nn2WUC5gGYC2zcrwqA.rvsGPi_XXW6GtkMKsRXkZTXjSz6XeXPyKtvA5rjxMO8&dib_tag=se&keywords=tabletop%2Bphone%2Btripod&pd_rd_i=tabletop%2Bphone%2Btripod&pd_rd_r=d8e69d6b-315a-486f-8e4d-903fe5496c19&pd_rd_w=Ss3S5&pd_rd_wg=ZtGVf&qid=1786598945&sr=8-8&th=1&linkCode=sl2&tag=hyfeevisuals-21&linkId=d9eda6c7f56dc496c5384166f2cb4ee8&ref_=as_li_ss_tl&ascsubtag=srctok-35bcb1aa5a1a4aef&btn_type=ss&btn_ref=srctok-35bcb1aa5a1a4aef",
    merchant: "Amazon",
    featured: true,
    badge: "Budget Pick",
    specifications: [
      {
        label: "Type",
        value: "Aluminum Tripod",
      },
      {
        label: "Height",
        value: "Up to 133cm",
      },
      {
        label: "Compatibility",
        value: "Camera & Smartphone",
      },
      {
        label: "Phone Holder",
        value: "Included",
      },
      {
        label: "Material",
        value: "Aluminum",
      },
    ],
  },

  {
    id: "hiffin-camera-cleaning-kit",
    name: "HIFFIN Professional Camera Cleaning Kit",
    brand: "HIFFIN",
    category: "Creator Gear",
    subcategory: "Camera Care",
    description:
      "A practical camera and lens cleaning kit for keeping your photography equipment clean and ready for the next shoot.",
    price: "Check latest price",
    image: "/images/store/hiffin-camera-cleaning-kit.jpg",
    affiliateUrl:
      "https://www.amazon.in/HIFFIN-Cleaning-Cleaner-Professional-Accessories/dp/B0CD42ZPLS?linkCode=sl2&tag=hyfeevisuals-21&linkId=caefba60fc9f4cdcabda963245cbbf82",
    merchant: "Amazon",
    featured: false,
    badge: "Budget Pick",
  },

  {
    id: "digitek-5-in-1-reflector-47",
    name: "Digitek 5-in-1 Photography Reflector",
    brand: "Digitek",
    category: "Creator Gear",
    subcategory: "Reflectors",
    description:
      "A 47-inch collapsible 5-in-1 reflector for controlling and shaping natural or artificial light during portraits, outdoor shoots and photography sessions.",
    price: "Check latest price",
    image: "/images/store/digitek-5-in-1-reflector-47.jpg",
    affiliateUrl:
      "https://www.amazon.in/Digitek-Reflector-47-inch-Collapsible-Multi-Disc/dp/B0BNB9D8Z9?linkCode=sl2&tag=hyfeevisuals-21&linkId=71d50a15578ab0e4b714eaeaa314dd19",
    merchant: "Amazon",
    featured: true,
    badge: "Shoot Essential",
    specifications: [
      {
        label: "Size",
        value: "47 inches",
      },
      {
        label: "Type",
        value: "5-in-1 Reflector",
      },
      {
        label: "Design",
        value: "Collapsible",
      },
      {
        label: "Use",
        value: "Portrait & Outdoor Photography",
      },
    ],
  },

  {
    id: "camera-sling-bag",
    name: "Water-Resistant Camera Sling Bag",
    brand: "Camera Gear",
    category: "Creator Gear",
    subcategory: "Camera Bags",
    description:
      "A compact water-resistant camera sling designed to keep your camera and essential accessories protected while shooting on the go.",
    price: "Check latest price",
    image: "/images/store/camera-sling-bag.jpg",
    affiliateUrl:
      "https://www.amazon.in/Resistant-Photography-Accessories-Compatible-Panasonic/dp/B0BRJLWQ6R?linkCode=sl2&tag=hyfeevisuals-21&linkId=30a89037e62e4179109fec068d9b206d",
    merchant: "Amazon",
    featured: false,
    badge: "Creator Essential",
  },

  {
    id: "sandisk-extreme-256gb-microsd",
    name: "SanDisk Extreme 256GB microSDXC",
    brand: "SanDisk",
    category: "Creator Gear",
    subcategory: "Storage",
    description:
      "A high-performance 256GB microSDXC card for compatible cameras, action cameras, smartphones and other creator devices.",
    price: "Check latest price",
    image: "/images/store/sandisk-extreme-256gb-microsd.jpg",
    affiliateUrl:
      "https://www.amazon.in/SanDisk-Extreme-microSD-Smartphones-Action/dp/B0B2DCZDJZ?linkCode=sl2&tag=hyfeevisuals-21&linkId=ce20cc3d442640f62383b6a65057bc7b",
    merchant: "Amazon",
    featured: false,
    badge: "Creator Essential",
    specifications: [
      {
        label: "Capacity",
        value: "256GB",
      },
      {
        label: "Type",
        value: "microSDXC",
      },
      {
        label: "Series",
        value: "SanDisk Extreme",
      },
      {
        label: "Use",
        value: "Compatible cameras & creator devices",
      },
    ],
  },

  {
    id: "amazon-basics-8-in-1-usb-c-hub",
    name: "Amazon Basics 8-in-1 USB-C Hub",
    brand: "Amazon Basics",
    category: "Creator Gear",
    subcategory: "Storage & Connectivity",
    description:
      "An 8-in-1 USB-C hub with SD and TF card readers, USB 3.0, HDMI, USB-C Power Delivery and Ethernet. A practical solution for transferring photos and videos from memory cards to USB-C laptops and other compatible devices.",
    price: "Check latest price",
    image: "/images/store/amazon-basics-8-in-1-usb-c-hub.jpg",
    affiliateUrl:
      "https://www.amazon.in/Aluminium-Adapter-Ethernet-100mbps-Delivery/dp/B0BT179DV6?crid=2TG2KQPDFFRX6&dib=eyJ2IjoiMSJ9.Fz_6iyZ9YGvneJ_pOzLLUHq11v6cONCqjlcKzVbCTt6FYqX7KHKqePdMeGRmvNLwjNcIlWm1F12RMgahnOFqw0H296BD5QvVdOK19W_YF7EMD1oJqPTsHPjn-VqycOSaKb-z7YnERsn4PWCN9MSo-Pexl2MJxKHDtIDxbr7UmPBIg6UsJM4giqHuZABdjZnZjoQKwXRNhx5IbZxzAvDeCRhe4zG-71RzspIE_OThU4a2GNl_y9EQ_U0FBhjStU8LRBUwKgbTgc2RlJpAr8Ty5YgRmfFHIWCvuSmmZ0xeGGc.6p2TqfKaCpB5DfagrYCG6GoHoG5uJGfqi2Ku_YTPb78&dib_tag=se&keywords=amazon%2Bbasic%2Botg&qid=1786618038&s=electronics&sprefix=amazon%2Bbaisc%2Bot%2Celectronics%2C326&sr=1-2&th=1&linkCode=sl2&tag=hyfeevisuals-21&linkId=2d1aa0c9df342f7c0d490b4173565d75&ref_=as_li_ss_tl&ascsubtag=srctok-56d96742b05361c9&btn_type=ss&btn_ref=srctok-56d96742b05361c9",
    merchant: "Amazon",
    featured: false,
    badge: "Creator Essential",
    specifications: [
      {
        label: "Ports",
        value: "8-in-1",
      },
      {
        label: "Card Reader",
        value: "SD + TF / microSD",
      },
      {
        label: "USB",
        value: "USB 3.0",
      },
      {
        label: "Display",
        value: "4K HDMI",
      },
      {
        label: "Power",
        value: "USB-C Power Delivery",
      },
      {
        label: "Ethernet",
        value: "100 Mbps",
      },
      {
        label: "Body",
        value: "Aluminium",
      },
    ],
  },

  {
    id: "sandisk-256gb-usb-flash-drive",
    name: "SanDisk 256GB USB Flash Drive",
    brand: "SanDisk",
    category: "Creator Gear",
    subcategory: "Storage",
    description:
      "A compact 256GB USB flash drive for convenient photo, video and file storage and transfer between compatible devices.",
    price: "Check latest price",
    image: "/images/store/sandisk-256gb-usb-flash-drive.jpg",
    affiliateUrl: "https://link.amazon/B0ghhhDfN",
    merchant: "Amazon",
    featured: false,
    badge: "Creator Essential",
    specifications: [
      {
        label: "Capacity",
        value: "256GB",
      },
      {
        label: "Interface",
        value: "USB 3.2 Gen 1",
      },
      {
        label: "Type",
        value: "USB Flash Drive",
      },
      {
        label: "Use",
        value: "Photo, Video & File Transfer",
      },
    ],
  },

  {
    id: "sandisk-extreme-256gb-sd",
    name: "SanDisk Extreme 256GB SDXC",
    brand: "SanDisk",
    category: "Creator Gear",
    subcategory: "Memory Cards",
    description:
      "A high-performance 256GB SDXC memory card designed for compatible mirrorless cameras, DSLRs and other devices that use full-size SD cards.",
    price: "Check latest price",
    image: "/images/store/sandisk-extreme-256gb-sd.jpg",
    affiliateUrl:
      "https://www.amazon.in/SanDisk-Extreme-256GB-Mirrorless-Cameras/dp/B09X7CFXSX?linkCode=sl2&tag=hyfeevisuals-21&linkId=a231efc19ed99b4713c96069b1054388",
    merchant: "Amazon",
    featured: false,
    badge: "Creator Essential",
    specifications: [
      {
        label: "Capacity",
        value: "256GB",
      },
      {
        label: "Type",
        value: "SDXC",
      },
      {
        label: "Series",
        value: "SanDisk Extreme",
      },
      {
        label: "Use",
        value: "Compatible mirrorless & DSLR cameras",
      },
    ],
  },

  {
    id: "flying-collection-camera-rain-cover",
    name: "Professional Camera Rain Cover",
    brand: "FLYING COLLECTION",
    category: "Creator Gear",
    subcategory: "Camera Protection",
    description:
      "A practical rain cover designed to help protect compatible DSLR and mirrorless cameras during outdoor photography and video shoots in wet weather.",
    price: "Check latest price",
    image: "/images/store/camera-rain-cover.jpg",
    affiliateUrl:
      "https://www.amazon.in/FLYING-COLLECTION-Professional-Mirrorless-Cameras/dp/B0D7CYDSM5?linkCode=sl2&tag=hyfeevisuals-21&linkId=e054d2ff30ef9a70e19e504906c882fe",
    merchant: "Amazon",
    featured: false,
    badge: "Shoot Essential",
  },

];

/* =====================================================
   AVAILABLE CATEGORIES
   Only categories with actual products are listed here.
===================================================== */

export const categories: ProductCategory[] = [
  "Cameras",
  "Lenses",
  "Lighting",
  "Creator Gear",
  "Fashion",
];