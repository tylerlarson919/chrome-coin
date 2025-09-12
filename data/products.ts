// data/products.ts

export type Product = {
  id: string;
  name: string;
  artist: string;
  collection: string;
  price: number;
  description: string;
  modelUrl?: string;
  images?: string[];
  details: string[];
  viewerMargin?: number;
  brightness?: number;
  yMovement?: number;
};

export const products: Product[] = [
  {
    id: "chrome-cross",
    name: "Chrome Cross",
    artist: "Ivan Passerni",
    collection: "Genesis Collection",
    price: 2.5,
    description: "A signature piece, this digital pendant embodies the raw, gothic aesthetic of classic streetwear. Minted with unparalleled detail.",
    modelUrl: "/models/chrome-cross.glb",
     brightness: 2.5,
    details: [
      "Token Standard: SPL",
      "Blockchain: Solana",
      "Supply: 1 of 48",
      "File Type: GLB",
    ],
  },
  {
    id: "chrome-dagger",
    name: "Chrome Dagger",
    artist: "Ivan Passerni",
    collection: "Genesis Collection",
    price: 1.8,
    description: "Sleek, sharp, and symbolic. The Dagger is a versatile digital asset, perfect for any Web3 collection or as a centerpiece in the metaverse.",
    modelUrl: "/models/chrome-dagger.glb",
     brightness: 2.5,
    details: [
      "Token Standard: SPL",
      "Blockchain: Solana",
      "Supply: 1 of 48",
      "File Type: GLB",
    ],
  },
  {
    id: "chrome-keychain",
    name: "Chrome Keychain",
    artist: "Ivan Passerni",
    collection: "Artifacts Collection",
    price: 1.2,
    description: "Secure your digital identity. This ornate keychain features a heavy-duty clasp and iconic gothic detailing for everyday use in the digital realm.",
    modelUrl: "/models/chrome-keychain.glb",
     brightness: 2.5,
    details: [
      "Token Standard: SPL",
      "Blockchain: Solana",
      "Supply: 1 of 48",
      "File Type: GLB",
    ],
  },
  {
    id: "chrome-lighter",
    name: "Chrome Lighter",
    artist: "Ivan Passerni",
    collection: "Artifacts Collection",
    price: 3.5,
    description: "A functional piece of art. This meticulously crafted lighter sparks with a digital flame, encased in polished chrome with brand engravings.",
    modelUrl: "/models/chrome-lighter.glb",
    viewerMargin: 1.5,
    brightness: 2.5,
    details: [
      "Token Standard: SPL",
      "Blockchain: Solana",
      "Supply: 1 of 48",
      "File Type: GLB",
    ],
  },
  {
    id: "chrome-money-clip",
    name: "Chrome Money Clip",
    artist: "Ivan Passerni",
    collection: "Genesis Collection",
    price: 2.8,
    description: "Wealth preserved in style. A minimalist yet bold money clip, designed to hold digital assets securely with a touch of gothic elegance.",
    modelUrl: "/models/chrome-money-clip.glb",
     brightness: 2.5,
    viewerMargin: 1.4,
    details: [
      "Token Standard: SPL",
      "Blockchain: Solana",
      "Supply: 1 of 48",
      "File Type: GLB",
    ],
  },
  {
    id: "chrome-pokeball",
    name: "Chrome Pokeball",
    artist: "Ivan Passerni",
    collection: "Artifacts Collection",
    price: 5.0,
    description: "The ultimate catch. A cultural icon reimagined in hyper-detailed chrome, this legendary sphere is a grail piece for any collector.",
    modelUrl: "/models/chrome-pokeball.glb",
     brightness: 0.4,
    viewerMargin: 1.7,
    details: [
      "Token Standard: SPL",
      "Blockchain: Solana",
      "Supply: 1 of 48",
      "File Type: GLB",
    ],
  },
  {
    id: "chrome-puppy",
    name: "Chrome Puppy Charm",
    artist: "Ivan Passerni",
    collection: "Artifacts Collection",
    price: 2.2,
    description: "A loyal companion in the metaverse. This playful puppy charm is crafted with a high-shine finish, representing a softer side of the chrome aesthetic.",
    modelUrl: "/models/chrome-puppy.glb",
    viewerMargin: 1.5,
    details: [
      "Token Standard: SPL",
      "Blockchain: Solana",
      "Supply: 1 of 48",
      "File Type: GLB",
    ],
  },
  {
    id: "chrome-ring",
    name: "Chrome Cemetery Ring",
    artist: "Ivan Passerni",
    collection: "Genesis Collection",
    price: 3.0,
    description: "An iconic design reimagined for the digital world. The Cemetery Ring features intricate cross motifs, a cornerstone of the brand.",
    modelUrl: "/models/chrome-ring.glb",
    viewerMargin: 1.5,
    brightness: 2.5,
    details: [
      "Token Standard: SPL",
      "Blockchain: Solana",
      "Supply: 1 of 48",
      "File Type: GLB",
    ],
  },
  {
    id: "chrome-zip-hoodie",
    name: "Chrome Zip Hoodie",
    artist: "Ivan Passerni",
    collection: "Apparel Collection",
    price: 4.5,
    description: "Digital streetwear essential. This zip hoodie features a heavyweight feel, ornate dagger zipper, and custom brand graphics on the back.",
    modelUrl: "/models/chrome-zip-hoodie.glb",
    details: [
      "Token Standard: SPL",
      "Blockchain: Solana",
      "Supply: 1 of 48",
      "File Type: GLB",
    ],
  },
];