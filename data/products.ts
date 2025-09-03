import { ImagePlus } from "lucide-react";

// data/products.ts
export const products = [
  {
    id: "lamborghini-urus-yellow",
    name: "Lamborghini Urus Yellow",
    brand: "Lamborghini",
    price: 1200,
    images: [
      "https://res.cloudinary.com/dqedckeaa/image/upload/v1756846870/photo_2025-08-17_08-23-28_zjrmoo.jpg",
      "https://res.cloudinary.com/dqedckeaa/image/upload/v1756846908/photo_2025-08-17_08-23-35_snnhww.jpg",
      "https://res.cloudinary.com/dqedckeaa/image/upload/v1756846910/photo_2025-08-17_08-23-42_ngmytq.jpg",
    ],
    details: [
      "Engine: 4.0L Twin-Turbo V8",
      "Horsepower: 650 hp",
      "Top Speed: 190 mph",
      "Features: All-wheel drive, adaptive air suspension",
    ],
  },
  {
    id: "570s-mclaren",
    name: "570s McLaren",
    brand: "McLaren",
    price: 800,
    images: [
      "https://res.cloudinary.com/dqedckeaa/image/upload/v1756846962/photo_2025-08-14_17-00-55_1_feimpa.jpg",
      "https://res.cloudinary.com/dqedckeaa/image/upload/v1756846965/photo_2025-08-14_17-00-58_arqyoj.jpg",
    ],
    details: [
      "Engine: 3.8L Twin-Turbo V8",
      "Horsepower: 562 hp",
      "0-60 mph: 3.2 seconds",
      "Features: Carbon ceramic brakes, electro-hydraulic steering",
    ],
  },
  {
    id: "brabus-grey",
    name: "Brabus Grey",
    brand: "Mercedes Benz",
    price: 1000,
    images: [
      "https://res.cloudinary.com/dqedckeaa/image/upload/v1756847063/photo_2025-07-03_22-41-33_gpquat.jpg",
      "https://res.cloudinary.com/dqedckeaa/image/upload/v1756847069/photo_2025-07-03_22-41-05_yoce8d.jpg",
      "https://res.cloudinary.com/dqedckeaa/image/upload/v1756847068/photo_2025-07-03_22-41-12_hiyoyp.jpg",
      "https://res.cloudinary.com/dqedckeaa/image/upload/v1756847067/photo_2025-07-03_22-41-15_nidda9.jpg",
      "https://res.cloudinary.com/dqedckeaa/image/upload/v1756847065/photo_2025-07-03_22-41-23_jxd1j8.jpg",
      "https://res.cloudinary.com/dqedckeaa/image/upload/v1756847065/photo_2025-07-03_22-41-21_km5yts.jpg",
      "https://res.cloudinary.com/dqedckeaa/image/upload/v1756847066/photo_2025-07-03_22-41-18_ydqqga.jpg",
      "https://res.cloudinary.com/dqedckeaa/image/upload/v1756847063/photo_2025-07-03_22-41-35_pov7wu.jpg",
      "https://res.cloudinary.com/dqedckeaa/image/upload/v1756847064/photo_2025-07-03_22-41-27_nhesgu.jpg",
      "https://res.cloudinary.com/dqedckeaa/image/upload/v1756847068/photo_2025-07-03_22-41-10_m9l6iu.jpg",
    ],
    details: [
      "Engine: V8 Twin-Turbo",
      "Horsepower: 800 hp",
      "Top Speed: 150 mph",
      "Features: Custom interior, Brabus carbon fiber body kit",
    ],
  },
  {
    id: "audi-rs7",
    name: "Audi RS7",
    brand: "Audi",
    price: 275,
    images: [
        "https://res.cloudinary.com/dqedckeaa/image/upload/v1756850861/main_zfzbpq.jpg",
        "https://res.cloudinary.com/dqedckeaa/image/upload/v1756850859/1_qpattx.jpg",
        "https://res.cloudinary.com/dqedckeaa/image/upload/v1756850858/2_a5hswu.jpg",
        "https://res.cloudinary.com/dqedckeaa/image/upload/v1756850859/3_mvmdne.jpg",
        "https://res.cloudinary.com/dqedckeaa/image/upload/v1756850859/4_tlyuls.jpg",
        "https://res.cloudinary.com/dqedckeaa/image/upload/v1756850859/5_dl7zwi.jpg",
        "https://res.cloudinary.com/dqedckeaa/image/upload/v1756850859/6_fdq5po.jpg",
        "https://res.cloudinary.com/dqedckeaa/image/upload/v1756850860/7_i3xluo.jpg",
        "https://res.cloudinary.com/dqedckeaa/image/upload/v1756850860/8_pqe1ua.jpg",
    ],
    details: [
      "Engine: 4.0L Twin-Turbo V8",
      "Horsepower: 591 hp",
      "Top Speed: 174 mph",
      "Features: Quattro all-wheel drive, adaptive air suspension"
    ],
  },
  {
    id: "sprinter-3500-limousine",
    name: "Sprinter 3500 Limousine",
    brand: "Mercedes-Benz",
    price: 800,
        images: [
        "https://res.cloudinary.com/dqedckeaa/image/upload/v1756850879/main_gfk8cd.jpg",
        "https://res.cloudinary.com/dqedckeaa/image/upload/v1756850876/1_qs4qwd.jpg",
        "https://res.cloudinary.com/dqedckeaa/image/upload/v1756850877/2_xzlleb.jpg",
        "https://res.cloudinary.com/dqedckeaa/image/upload/v1756850877/3_j9diu3.jpg",
        "https://res.cloudinary.com/dqedckeaa/image/upload/v1756850878/4_fljhhq.jpg",
        "https://res.cloudinary.com/dqedckeaa/image/upload/v1756850878/5_i26e7c.jpg",
        "https://res.cloudinary.com/dqedckeaa/image/upload/v1756850879/6_ixoc8x.jpg",
    ],
    details: [
      "Engine: 3.0L V6 Turbodiesel",
      "Seating: Up to 14 passengers",
      "Features: Luxury interior, premium sound system, ambient lighting"
    ],
  },
  {
    id: "benz-g63",
    name: "Mercedes-Benz G63",
    brand: "Mercedes-Benz",
    price: 750,
        images: [
        "https://res.cloudinary.com/dqedckeaa/image/upload/v1756850861/main_x9wbhy.jpg",
    ],
    details: [
      "Engine: 4.0L Twin-Turbo V8",
      "Horsepower: 577 hp",
      "Top Speed: 149 mph",
      "Features: AMG performance, off-road capability, luxury interior"
    ],
  },
  {
    id: "porsche-gt3-rs-red-(992)",
    name: "Porsche GT3 RS Red (992)",
    brand: "Porsche",
    price: 1250,
        images: [
        "https://res.cloudinary.com/dqedckeaa/image/upload/v1756850871/main_jhr4vz.jpg",
        "https://res.cloudinary.com/dqedckeaa/image/upload/v1756850870/1_j4cs6a.jpg",
        "https://res.cloudinary.com/dqedckeaa/image/upload/v1756850870/2_ziav51.jpg",
        "https://res.cloudinary.com/dqedckeaa/image/upload/v1756850870/3_ugisbn.jpg",
    ],
    details: [
      "Engine: 4.0L Naturally Aspirated Flat-6",
      "Horsepower: 518 hp",
      "0-60 mph: 3.0 seconds",
      "Features: Aerodynamic body kit, track-focused suspension"
    ],
  },
  {
    id: "gt3-rs-red",
    name: "Porsche GT3 RS Red",
    brand: "Porsche",
    price: 1150,
        images: [
        "https://res.cloudinary.com/dqedckeaa/image/upload/v1756850865/main_zvispy.jpg",
        "https://res.cloudinary.com/dqedckeaa/image/upload/v1756850864/1_m9f83x.jpg",
        "https://res.cloudinary.com/dqedckeaa/image/upload/v1756850864/2_lm4947.jpg",
        "https://res.cloudinary.com/dqedckeaa/image/upload/v1756850865/3_alaztq.jpg",
    ],
    details: [
      "Engine: 4.0L Naturally Aspirated Flat-6",
      "Horsepower: 502 hp",
      "0-60 mph: 3.1 seconds",
      "Features: Lightweight construction, race-inspired aerodynamics"
    ],
  },
  {
    id: "ferrari-488",
    name: "Ferrari 488",
    brand: "Ferrari",
    price: 1250,
        images: [
        "https://res.cloudinary.com/dqedckeaa/image/upload/v1756850862/main_z8xvue.jpg",
    ],
    details: [
      "Engine: 3.9L Twin-Turbo V8",
      "Horsepower: 661 hp",
      "Top Speed: 205 mph",
      "Features: Aerodynamic design, advanced traction control"
    ],
  },
  {
    id: "urus-performante",
    name: "Lamborghini Urus Performante",
    brand: "Lamborghini",
    price: 1650,
        images: [
        "https://res.cloudinary.com/dqedckeaa/image/upload/v1756850883/main_irf35r.jpg",
        "https://res.cloudinary.com/dqedckeaa/image/upload/v1756850882/1_euatia.avif",
    ],
    details: [
      "Engine: 4.0L Twin-Turbo V8",
      "Horsepower: 657 hp",
      "Top Speed: 190 mph",
      "Features: Enhanced aerodynamics, lightweight materials"
    ],
  },
  {
    id: "r8-yellow",
    name: "Audi R8 Yellow",
    brand: "Audi",
    price: 800,
        images: [
        "https://res.cloudinary.com/dqedckeaa/image/upload/v1756850872/main_lvq2os.jpg",
        "https://res.cloudinary.com/dqedckeaa/image/upload/v1756850871/1_zqiwod.jpg",
        "https://res.cloudinary.com/dqedckeaa/image/upload/v1756850871/2_ly1woo.jpg",
        "https://res.cloudinary.com/dqedckeaa/image/upload/v1756850872/3_j1dfdd.jpg",
    ],
    details: [
      "Engine: 5.2L V10",
      "Horsepower: 602 hp",
      "Top Speed: 205 mph",
      "Features: Quattro all-wheel drive, carbon fiber components"
    ],
  },
  {
    id: "rr-cullinan",
    name: "Rolls-Royce Cullinan",
    brand: "Rolls-Royce",
    price: 1500,
        images: [
        "https://res.cloudinary.com/dqedckeaa/image/upload/v1756850873/main_awupe3.jpg",
    ],
    details: [
      "Engine: 6.75L Twin-Turbo V12",
      "Horsepower: 563 hp",
      "Top Speed: 155 mph",
      "Features: Bespoke luxury interior, all-terrain capability"
    ],
  },
  {
    id: "rr-ghost-(2024)",
    name: "Rolls-Royce Ghost (2024)",
    brand: "Rolls-Royce",
    price: 1100,
        images: [
        "https://res.cloudinary.com/dqedckeaa/image/upload/v1756850886/main_dsj1da.jpg",
        "https://res.cloudinary.com/dqedckeaa/image/upload/v1756850873/1_bs8mc7.jpg",
        "https://res.cloudinary.com/dqedckeaa/image/upload/v1756850874/2_tfip8x.jpg",
        "https://res.cloudinary.com/dqedckeaa/image/upload/v1756850874/3_wyyepv.jpg",
    ],
    details: [
      "Engine: 6.75L Twin-Turbo V12",
      "Horsepower: 563 hp",
      "Top Speed: 155 mph",
      "Features: Advanced comfort systems, bespoke customization"
    ],
  },
  {
    id: "huracan-evo-spider-(red)",
    name: "Lamborghini Huracan EVO Spider (Red)",
    brand: "Lamborghini",
    price: 1250,
        images: [
        "https://res.cloudinary.com/dqedckeaa/image/upload/v1756851757/main-min_gfmoah.jpg",
        "https://res.cloudinary.com/dqedckeaa/image/upload/v1756851743/1-min_oedggd.jpg",
        "https://res.cloudinary.com/dqedckeaa/image/upload/v1756851751/2-min_ylqv43.jpg",
        "https://res.cloudinary.com/dqedckeaa/image/upload/v1756851754/3-min_waaisw.jpg",
    ],
    details: [
      "Engine: 5.2L V10",
      "Horsepower: 631 hp",
      "Top Speed: 202 mph",
      "Features: Convertible roof, advanced aerodynamics"
    ],
  },
  {
    id: "evo-spider-grey",
    name: "Lamborghini Huracan EVO Spider Grey",
    brand: "Lamborghini",
    price: 1250,
        images: [
        "https://res.cloudinary.com/dqedckeaa/image/upload/v1756850861/main_a1phfl.jpg",
    ],
    details: [
      "Engine: 5.2L V10",
      "Horsepower: 631 hp",
      "Top Speed: 202 mph",
      "Features: Convertible roof, all-wheel drive"
    ],
  },
  {
    id: "urus-tan",
    name: "Lamborghini Urus Tan",
    brand: "Lamborghini",
    price: 1250,
        images: [
        "https://res.cloudinary.com/dqedckeaa/image/upload/v1756850886/main_rjetpa.jpg",
        "https://res.cloudinary.com/dqedckeaa/image/upload/v1756850885/2_ea5wwt.jpg",
        "https://res.cloudinary.com/dqedckeaa/image/upload/v1756850886/3_nwnllv.jpg",
    ],
    details: [
      "Engine: 4.0L Twin-Turbo V8",
      "Horsepower: 641 hp",
      "Top Speed: 190 mph",
      "Features: All-wheel drive, luxury SUV features"
    ],
  },
  {
    id: "lamborghini-urus-matte-black-(green)",
    name: "Lamborghini Urus Matte Black (Green)",
    brand: "Lamborghini",
    price: 1150,
        images: [
        "https://res.cloudinary.com/dqedckeaa/image/upload/v1756850866/main_zrc0bu.jpg",
        "https://res.cloudinary.com/dqedckeaa/image/upload/v1756850865/1_wh3cto.jpg",
        "https://res.cloudinary.com/dqedckeaa/image/upload/v1756850866/2_okumyj.jpg",
        "https://res.cloudinary.com/dqedckeaa/image/upload/v1756850866/3_pb3zqc.jpg",
    ],
    details: [
      "Engine: 4.0L Twin-Turbo V8",
      "Horsepower: 641 hp",
      "Top Speed: 190 mph",
      "Features: Custom matte finish, premium interior"
    ],
  },
  {
    id: "urus-performante-(black)",
    name: "Lamborghini Urus Performante (Black)",
    brand: "Lamborghini",
    price: 1400,
        images: [
        "https://res.cloudinary.com/dqedckeaa/image/upload/v1756850884/main_pfhcc9.jpg",
        "https://res.cloudinary.com/dqedckeaa/image/upload/v1756850884/2_wskkcq.jpg",
        "https://res.cloudinary.com/dqedckeaa/image/upload/v1756850884/3_wsdemb.jpg",
    ],
    details: [
      "Engine: 4.0L Twin-Turbo V8",
      "Horsepower: 657 hp",
      "Top Speed: 190 mph",
      "Features: Lightweight materials, enhanced performance"
    ],
  },
  {
    id: "urus-black-(orange)",
    name: "Lamborghini Urus Black (Orange)",
    brand: "Lamborghini",
    price: 1250,
        images: [
        "https://res.cloudinary.com/dqedckeaa/image/upload/v1756850882/main_cd8bwu.jpg",
        "https://res.cloudinary.com/dqedckeaa/image/upload/v1756850882/1_ajy1pg.jpg",
        "https://res.cloudinary.com/dqedckeaa/image/upload/v1756850882/2_grkowd.jpg",
    ],
    details: [
      "Engine: 4.0L Twin-Turbo V8",
      "Horsepower: 641 hp",
      "Top Speed: 190 mph",
      "Features: Custom interior, all-wheel drive"
    ],
  },
  {
    id: "urus-black-(brown)",
    name: "Lamborghini Urus Black (Brown)",
    brand: "Lamborghini",
    price: 1250,
        images: [
        "https://res.cloudinary.com/dqedckeaa/image/upload/v1756850881/main_qv2yy9.jpg",
        "https://res.cloudinary.com/dqedckeaa/image/upload/v1756850879/1_mrmdzj.jpg",
        "https://res.cloudinary.com/dqedckeaa/image/upload/v1756850879/2_r0xpgg.jpg",
        "https://res.cloudinary.com/dqedckeaa/image/upload/v1756850880/3_nvguqj.jpg",
    ],
    details: [
      "Engine: 4.0L Twin-Turbo V8",
      "Horsepower: 641 hp",
      "Top Speed: 190 mph",
      "Features: Luxury SUV, premium sound system"
    ],
  },
  {
    id: "570s-spyder",
    name: "McLaren 570S Spyder",
    brand: "McLaren",
    price: 750,
        images: [
        "https://res.cloudinary.com/dqedckeaa/image/upload/v1756850858/main_iesvvo.jpg",
        "https://res.cloudinary.com/dqedckeaa/image/upload/v1756850858/2_dv7ozk.jpg",
    ],
    details: [
      "Engine: 3.8L Twin-Turbo V8",
      "Horsepower: 562 hp",
      "0-60 mph: 3.2 seconds",
      "Features: Convertible roof, carbon ceramic brakes"
    ],
  },
  {
    id: "gt3-blue",
    name: "Porsche GT3 Blue",
    brand: "Porsche",
    price: 900,
        images: [
        "https://res.cloudinary.com/dqedckeaa/image/upload/v1756850864/main_weu2dx.jpg",
        "https://res.cloudinary.com/dqedckeaa/image/upload/v1756850863/2_dpc1wt.jpg",
        "https://res.cloudinary.com/dqedckeaa/image/upload/v1756850864/3_w1vrcs.jpg",
    ],
    details: [
      "Engine: 4.0L Naturally Aspirated Flat-6",
      "Horsepower: 502 hp",
      "0-60 mph: 3.2 seconds",
      "Features: Track-focused design, lightweight construction"
    ],
  },
  {
    id: "mercedes-benz-g63-(black)",
    name: "Mercedes-Benz G63 (Black)",
    brand: "Mercedes-Benz",
    price: 750,
        images: [
        "https://res.cloudinary.com/dqedckeaa/image/upload/v1756850869/main_axab9o.jpg",
        "https://res.cloudinary.com/dqedckeaa/image/upload/v1756850868/1_jazdpi.jpg",
        "https://res.cloudinary.com/dqedckeaa/image/upload/v1756850869/2_juxrdq.jpg",
        "https://res.cloudinary.com/dqedckeaa/image/upload/v1756850869/3_tyshwv.jpg",
    ],
    details: [
      "Engine: 4.0L Twin-Turbo V8",
      "Horsepower: 577 hp",
      "Top Speed: 149 mph",
      "Features: AMG performance, luxury off-road capability"
    ],
  },
  {
    id: "gle63s-(black)",
    name: "Mercedes-Benz GLE63S (Black)",
    brand: "Mercedes-Benz",
    price: 400,
        images: [
        "https://res.cloudinary.com/dqedckeaa/image/upload/v1756851824/main-min_h82pzg.jpg",
        "https://res.cloudinary.com/dqedckeaa/image/upload/v1756851833/1-min_z85vfk.jpg",
        "https://res.cloudinary.com/dqedckeaa/image/upload/v1756851830/2-min_ps0sos.jpg",
        "https://res.cloudinary.com/dqedckeaa/image/upload/v1756851827/3-min_i2xd9u.jpg",
    ],
    details: [
      "Engine: 4.0L Twin-Turbo V8",
      "Horsepower: 603 hp",
      "Top Speed: 174 mph",
      "Features: AMG tuning, advanced driver assistance"
    ],
  },
  {
    id: "s580-maybach",
    name: "Mercedes-Benz S580 Maybach",
    brand: "Mercedes-Benz",
    price: 900,
        images: [
        "https://res.cloudinary.com/dqedckeaa/image/upload/v1756850876/main_uewyyy.jpg",
        "https://res.cloudinary.com/dqedckeaa/image/upload/v1756850889/1_xgx3ii.jpg",
    ],
    details: [
      "Engine: 4.0L Twin-Turbo V8",
      "Horsepower: 496 hp",
      "Top Speed: 155 mph",
      "Features: Luxury interior, rear-seat entertainment"
    ],
  },
  {
    id: "mercedes-s580-black-(2022)",
    name: "Mercedes-Benz S580 Black (2022)",
    brand: "Mercedes-Benz",
    price: 500,
        images: [
        "https://res.cloudinary.com/dqedckeaa/image/upload/v1756850890/main_bxvjr9.jpg",
    ],
    details: [
      "Engine: 4.0L Twin-Turbo V8",
      "Horsepower: 496 hp",
      "Top Speed: 155 mph",
      "Features: Advanced comfort systems, premium materials"
    ],
  },
  {
    id: "mercedes-c300-black-(2021)",
    name: "Mercedes-Benz C300 Black (2021)",
    brand: "Mercedes-Benz",
    price: 200,
        images: [
        "https://res.cloudinary.com/dqedckeaa/image/upload/v1756852022/main-min_wjajgp.jpg",
        "https://res.cloudinary.com/dqedckeaa/image/upload/v1756852021/1-min_z6oo8d.jpg",
        "https://res.cloudinary.com/dqedckeaa/image/upload/v1756852026/2-min_s2snsp.jpg",
        "https://res.cloudinary.com/dqedckeaa/image/upload/v1756852024/3-min_ed3wpp.jpg",
    ],
    details: [
      "Engine: 2.0L Turbo Inline-4",
      "Horsepower: 255 hp",
      "Top Speed: 130 mph",
      "Features: Premium interior, advanced infotainment"
    ],
  },
  {
    id: "m3-blue",
    name: "BMW M3 Blue",
    brand: "BMW",
    price: 500,
        images: [
        "https://res.cloudinary.com/dqedckeaa/image/upload/v1756850867/main_ae3qiw.jpg",
        "https://res.cloudinary.com/dqedckeaa/image/upload/v1756850867/1_v458fi.jpg",
        "https://res.cloudinary.com/dqedckeaa/image/upload/v1756850867/2_sy8u0j.jpg",
        "https://res.cloudinary.com/dqedckeaa/image/upload/v1756850867/3_lfwgrs.jpg",
    ],
    details: [
      "Engine: 3.0L Twin-Turbo Inline-6",
      "Horsepower: 473 hp",
      "0-60 mph: 4.1 seconds",
      "Features: M performance tuning, sport suspension"
    ],
  },
  {
    id: "m3-yellow",
    name: "BMW M3 Yellow",
    brand: "BMW",
    price: 500,
        images: [
        "https://res.cloudinary.com/dqedckeaa/image/upload/v1756850868/main_scvgcs.jpg",
        "https://res.cloudinary.com/dqedckeaa/image/upload/v1756852132/1-min_asfg3c.jpg",
        "https://res.cloudinary.com/dqedckeaa/image/upload/v1756852129/2-min_a4si0s.jpg",
    ],
    details: [
      "Engine: 3.0L Twin-Turbo Inline-6",
      "Horsepower: 473 hp",
      "0-60 mph: 4.1 seconds",
      "Features: M performance tuning, sport suspension"
    ],
  },
  {
    id: "430im-2023",
    name: "BMW 430i M (2023)",
    brand: "BMW",
    price: 225,
        images: [
        "https://res.cloudinary.com/dqedckeaa/image/upload/v1756850858/main_amreur.jpg",
    ],
    details: [
      "Engine: 2.0L Turbo Inline-4",
      "Horsepower: 255 hp",
      "Top Speed: 155 mph",
      "Features: M sport package, premium connectivity"
    ],
  },
  {
    id: "m2-blue",
    name: "BMW M2 Blue",
    brand: "BMW",
    price: 300,
        images: [
        "https://res.cloudinary.com/dqedckeaa/image/upload/v1756850866/main_vafado.jpg",
        "https://res.cloudinary.com/dqedckeaa/image/upload/v1756850890/1_gowd1o.jpg",
        "https://res.cloudinary.com/dqedckeaa/image/upload/v1756852202/2-min_1_yuczj4.jpg",
    ],
    details: [
      "Engine: 3.0L Twin-Turbo Inline-6",
      "Horsepower: 453 hp",
      "0-60 mph: 4.1 seconds",
      "Features: Compact performance, M-specific design"
    ],
  },
  {
    id: "s5-white",
    name: "Audi S5 White",
    brand: "Audi",
    price: 500,
        images: [
        "https://res.cloudinary.com/dqedckeaa/image/upload/v1756850876/main_b8s42r.jpg",
        "https://res.cloudinary.com/dqedckeaa/image/upload/v1756850875/1_duh9fj.jpg",
        "https://res.cloudinary.com/dqedckeaa/image/upload/v1756850875/2_qgmybi.jpg",
        "https://res.cloudinary.com/dqedckeaa/image/upload/v1756850875/3_xefwgb.jpg",
    ],
    details: [
      "Engine: 3.0L Turbo V6",
      "Horsepower: 349 hp",
      "Top Speed: 155 mph",
      "Features: Quattro all-wheel drive, sport-tuned suspension"
    ],
  },
  {
    id: "cadillac-escalade-bulletpoof",
    name: "Cadillac Escalade Bulletproof",
    brand: "Cadillac",
    price: 675,
        images: [
        "https://res.cloudinary.com/dqedckeaa/image/upload/v1756852301/main-min_bgqfuh.jpg",
        "https://res.cloudinary.com/dqedckeaa/image/upload/v1756852304/1-min_1_sfyplm.jpg",
        "https://res.cloudinary.com/dqedckeaa/image/upload/v1756852294/2-min_2_mlfk5e.jpg",
        "https://res.cloudinary.com/dqedckeaa/image/upload/v1756852297/3-min_zpjk8l.jpg",
    ],
    details: [
      "Engine: 6.2L V8",
      "Horsepower: 420 hp",
      "Features: Armored protection, luxury interior, advanced safety"
    ],
  },
  {
    id: "cadillac-escalade-2025-(black)",
    name: "Cadillac Escalade 2025 (Black)",
    brand: "Cadillac",
    price: 550,
        images: [
        "https://res.cloudinary.com/dqedckeaa/image/upload/v1756852403/main-min_dwt567.jpg",
        "https://res.cloudinary.com/dqedckeaa/image/upload/v1756852408/1-min_bq9imf.jpg",
        "https://res.cloudinary.com/dqedckeaa/image/upload/v1756852409/2-min_lodgxc.jpg",
        "https://res.cloudinary.com/dqedckeaa/image/upload/v1756852405/3-min_oallnu.jpg",
    ],
    details: [
      "Engine: 6.2L V8",
      "Horsepower: 420 hp",
      "Top Speed: 120 mph",
      "Features: Luxury SUV, advanced infotainment, spacious interior"
    ],
  },
  {
    id: "c8-coupe-yellow",
    name: "Chevrolet Corvette C8 Coupe Yellow",
    brand: "Chevrolet",
    price: 550,
        images: [
        "https://res.cloudinary.com/dqedckeaa/image/upload/v1756852520/main-min_zgyo00.jpg",
        "https://res.cloudinary.com/dqedckeaa/image/upload/v1756852515/1-min_fxnhqw.jpg",
        "https://res.cloudinary.com/dqedckeaa/image/upload/v1756852518/2-min_bdqmnh.jpg",
        "https://res.cloudinary.com/dqedckeaa/image/upload/v1756852513/3-min_bjidy1.jpg",
    ],
    details: [
      "Engine: 6.2L V8",
      "Horsepower: 490 hp",
      "0-60 mph: 2.9 seconds",
      "Features: Mid-engine design, performance suspension"
    ],
  },
  {
    id: "corvette-c8",
    name: "Chevrolet Corvette C8",
    brand: "Chevrolet",
    price: 550,
        images: [
        "https://res.cloudinary.com/dqedckeaa/image/upload/v1756850861/main_zuo5u4.jpg",
    ],
    details: [
      "Engine: 6.2L V8",
      "Horsepower: 490 hp",
      "0-60 mph: 2.9 seconds",
      "Features: Mid-engine layout, advanced aerodynamics"
    ],
  },
  {
    id: "c8-convertible-blue-(2025)",
    name: "Chevrolet Corvette C8 Convertible Blue (2025)",
    brand: "Chevrolet",
    price: 550,
        images: [
        "https://res.cloudinary.com/dqedckeaa/image/upload/v1756852640/main-min_fregpx.jpg",
        "https://res.cloudinary.com/dqedckeaa/image/upload/v1756852638/1-min_gdguc0.jpg",
        "https://res.cloudinary.com/dqedckeaa/image/upload/v1756852636/2-min_ff52cm.jpg",
    ],
    details: [
      "Engine: 6.2L V8",
      "Horsepower: 490 hp",
      "0-60 mph: 2.9 seconds",
      "Features: Convertible hardtop, performance exhaust"
    ],
  },
  {
    id: "tesla-cybertuck",
    name: "Tesla Cybertruck",
    brand: "Tesla",
    price: 800,
        images: [
        "https://res.cloudinary.com/dqedckeaa/image/upload/v1756852712/main-min_fprk2i.jpg",
        "https://res.cloudinary.com/dqedckeaa/image/upload/v1756852709/1-min_hutqhe.jpg",
        "https://res.cloudinary.com/dqedckeaa/image/upload/v1756852707/2-min_rth169.jpg",
        "https://res.cloudinary.com/dqedckeaa/image/upload/v1756852704/3-min_xrjjwq.jpg",
    ],
    details: [
      "Powertrain: Electric (Tri-Motor AWD)",
      "Horsepower: Up to 800 hp",
      "Top Speed: 130 mph",
      "Features: Armored exoskeleton, all-electric range"
    ],
  },
  {
    id: "honda-accord-sport",
    name: "Honda Accord Sport",
    brand: "Honda",
    price: 150,
        images: [
        "https://res.cloudinary.com/dqedckeaa/image/upload/v1756852777/main-min_qksxnm.jpg",
        "https://res.cloudinary.com/dqedckeaa/image/upload/v1756852775/1-min_vg8rqc.jpg",
        "https://res.cloudinary.com/dqedckeaa/image/upload/v1756852772/2-min_xluf4k.jpg",
        "https://res.cloudinary.com/dqedckeaa/image/upload/v1756852780/3-min_wsjtmj.jpg",
    ],
    details: [
      "Engine: 1.5L Turbo Inline-4",
      "Horsepower: 192 hp",
      "Top Speed: 130 mph",
      "Features: Sport-tuned suspension, advanced safety features"
    ],
  },
];