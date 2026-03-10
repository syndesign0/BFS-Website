export type CategoriaProyecto = "tresde" | "ropa";

export type Proyecto = {
  slug: string;
  categoria: CategoriaProyecto;
  titulo: string;
  ano?: string;
  resumen: string;
  descripcion: string;
  etiquetas: string[];
  portada: string;
  galeria: string[];
  herramientas?: string[];
  enlaces?: { label: string; href: string }[];
  videoYoutube?: string;
};

export const proyectos: Proyecto[] = [
  {
    slug: "hospital3d",
    categoria: "tresde",
    titulo: "Entorno 3D de hospital abandonado para videojuego",
    ano: "2024",
    resumen: "Animación 3D con estilo sencillo basado en iluminación.",
    descripcion:
      "Entorno 3D inspirado en juegos como Outlast, con especial atención a la iluminación y la composición.",
    etiquetas: ["Maya", "Iluminación", "Animación"],
    portada: "/img/proyectos/Hospital/portada.jpg",
    galeria: [
      "/img/proyectos/Hospital/1.jpg",
      "/img/proyectos/Hospital/2.jpg",
      "/img/proyectos/Hospital/3.jpg",
    ],
    herramientas: ["Maya", "Rizom UV", "Unreal Engine 5", "Photoshop"],
    videoYoutube: "https://www.youtube.com/embed/uPQiOZMGfsA?si=qtaZaFmwjBYLBv46",
  },
  {
    slug: "mercado3d",
    categoria: "tresde",
    titulo: "Supermarket Asset 3d VR AR Low-poly",
    ano: "2023",
    resumen: "Supermercado California Ghetto VR AR modelo 3D de baja poli Modelo 3D de baja poli",
    descripcion:
      "Supermercado inspirado en una referencia real, creado en Blender y texturizado con Substance Painter. Este modelo está diseñado para usarse en motores de juegos. Está construido a escala real.",
    etiquetas: ["Blender", "Texture", "Render"],
    portada: "/img/proyectos/Mercado/saint3d-rm5.jpg",
    galeria: [
      "/img/proyectos/Mercado/saint3d-rm1.jpg",
      "/img/proyectos/Mercado/saint3d-rm2.jpg",
      "/img/proyectos/Mercado/saint3d-rm3.jpg",
      "/img/proyectos/Mercado/saint3d-rm4.jpg",
      "/img/proyectos/Mercado/saint3d-rm5.jpg",
      "/img/proyectos/Mercado/saint3d-rm6.jpg",
      "/img/proyectos/Mercado/saint3d-rm7.jpg",
      "/img/proyectos/Mercado/saint3d-rm8.jpg",
      "/img/proyectos/Mercado/saint3d-rm9.jpg",

    ],
    herramientas: ["Blender", "Substance Painter", "Unreal Engine 5", "Photoshop"],
  },
  {
    slug: "renders3d",
    categoria: "tresde",
    titulo: "Renders 3D varios",
    ano: "2025",
    resumen: "Estas representaciones se centran más en el aspecto técnico de las formas 3D y la topología.",
    descripcion:
      "Creé estas representaciones para mejorar los aspectos centrales del 3D durante la transición al software Maya 2026.",
    etiquetas: ["Maya", "Ejercicio", "Render"],
    portada: "/img/proyectos/Renders3D/Monster_Color_Render.jpg",
    galeria: [
      "/img/proyectos/Renders3D/Chess_Render.jpg",
      "/img/proyectos/Renders3D/Hammer_Render.jpg",
      "/img/proyectos/Renders3D/Door_Render.jpg",
      "/img/proyectos/Renders3D/Monster_Render.jpg",
      "/img/proyectos/Renders3D/Monster_Color_Render.jpg",


    ],
    herramientas: ["Maya", "Arnold Renderer"],
  },
  {
    slug: "bornfromsyn-mud-denim",
    categoria: "ropa",
    titulo: "BornFromSyn - MUD Denim",
    ano: "2025",
    resumen: "Denim con narrativa y detalles por cremalleras.",
    descripcion:
      "Concepto streetwear con elementos de protesta y storytelling. Cremalleras que revelan texturas de humo.",
    etiquetas: ["Concepto", "Diseño", "Branding"],
    portada: "/img/proyectos/bornfromsyn/MUD-JEANS/MudJeans_1 (1).jpg",
    galeria: [
      "/img/proyectos/bornfromsyn/MUD-JEANS/MudJeans_1 (1).jpg",
      "/img/proyectos/bornfromsyn/MUD-JEANS/MudJeans_2 (1).jpg",
      "/img/proyectos/bornfromsyn/MUD-JEANS/MudJeans_3 (1).jpg",
      "/img/proyectos/bornfromsyn/MUD-JEANS/Front.png",
      "/img/proyectos/bornfromsyn/MUD-JEANS/Front Open.png",
      "/img/proyectos/bornfromsyn/MUD-JEANS/Back.png",
    ],
    herramientas: ["Photoshop", "Illustrator"],
    enlaces: [{ label: "Instagram", href: "https://instagram.com/fromsyn" }],
  },
  {
  slug: "bornfromsyn-static-jacket",
  categoria: "ropa",
  titulo: "BornFromSyn — Static Jacket",
  ano: "2025",
  resumen: "Chaqueta conceptual inspirada en el ruido digital y la estética glitch.",
  descripcion:
    "Static Jacket es una pieza conceptual que explora la relación entre tecnología, ruido digital y moda urbana. El diseño toma inspiración visual del 'static noise' de las pantallas y de la estética glitch, trasladando esa idea a una prenda física. La chaqueta combina una silueta amplia con detalles gráficos y texturas que evocan interferencias digitales, creando una pieza que transmite una sensación de energía caótica y distorsión visual. El proyecto forma parte del universo creativo de BornFromSyn, donde cada prenda busca contar una historia a través de estética oscura, referencias digitales y diseño experimental.",
  etiquetas: ["Streetwear", "Concepto", "Diseño de prenda", "Estética digital"],
  portada: "/img/proyectos/bornfromsyn/STATIC-JACKET/Static_IGStory1.jpg",
  galeria: [
    "/img/proyectos/bornfromsyn/STATIC-JACKET/Static_IGStory1.jpg",
    "/img/proyectos/bornfromsyn/STATIC-JACKET/Static_IGStory2.jpg",
    "/img/proyectos/bornfromsyn/STATIC-JACKET/Static_IGStory3.jpg",
    "/img/proyectos/bornfromsyn/STATIC-JACKET/Static_IGStory4.jpg",
    "/img/proyectos/bornfromsyn/STATIC-JACKET/Static_Front.png",
    "/img/proyectos/bornfromsyn/STATIC-JACKET/Static_Back.png",
  ],
  herramientas: ["Photoshop", "Illustrator",],
  enlaces: [
    { label: "Instagram", href: "https://instagram.com/fromsyn" }
  ]
  },
  {
    slug: "bornfromsyn-nox-denim",
    categoria: "ropa",
    titulo: "BornFromSyn - NOX Denim",
    ano: "2025",
    resumen: "Denim conceptual con estética oscura y construcción técnica basada en capas y cremalleras.",
    descripcion:
      "NOX Denim es una pieza conceptual desarrollada dentro del universo de BornFromSyn. El diseño explora una estética oscura e industrial inspirada en la idea de 'nox' (noche / oscuridad). El pantalón utiliza múltiples cremalleras que permiten revelar capas internas y modificar la silueta de la prenda. La construcción busca combinar narrativa visual con funcionalidad, creando una pieza que cambia de apariencia según cómo se lleve. El proyecto forma parte de una exploración de identidad de marca centrada en streetwear conceptual, texturas oscuras y detalles técnicos.",
    etiquetas: ["Streetwear", "Concepto", "Diseño de prenda", "Branding"],
    portada: "/img/proyectos/bornfromsyn/NOX-JEANS/Front_Render_3.png",
    galeria: [
      "/img/proyectos/bornfromsyn/NOX-JEANS/Front_Render_3.png",
      "/img/proyectos/bornfromsyn/NOX-JEANS/FrontOpen.png",
      "/img/proyectos/bornfromsyn/NOX-JEANS/Front.png",
      "/img/proyectos/bornfromsyn/NOX-JEANS/Back.png",
    ],
    herramientas: ["Photoshop", "Illustrator"],
    enlaces: [{ label: "Instagram", href: "https://instagram.com/fromsyn" }],
  },
  {
  slug: "bornfromsyn-cross-sweater",
  categoria: "ropa",
  titulo: "BornFromSyn — Cross Sweater",
  ano: "2025",
  resumen: "Sudadera conceptual con contraste de materiales y detalles ocultos mediante cremalleras.",
  descripcion:
    "Cross Sweater es una pieza conceptual desarrollada dentro del universo creativo de BornFromSyn. La prenda utiliza una base de color beige con una construcción limpia y minimalista, contrastada por un panel trasero en forma de cruz realizado con un tejido más oscuro. Este contraste introduce un elemento gráfico fuerte sin perder la simplicidad de la silueta. Las mangas incorporan cremalleras bajo las muñecas que revelan símbolos '+' ocultos, añadiendo un detalle interactivo que refuerza la idea de capas y significado oculto en la prenda. El proyecto explora la relación entre simbología, contraste de materiales y diseño técnico dentro del lenguaje del streetwear conceptual.",
  etiquetas: ["Streetwear", "Concepto", "Diseño de prenda", "Simbología"],
  portada: "/img/proyectos/bornfromsyn/SYN-SWEATER/Front_Render.png",
  galeria: [
    "/img/proyectos/bornfromsyn/SYN-SWEATER/Front_Render.png",
    "/img/proyectos/bornfromsyn/SYN-SWEATER/Back_Render.png",
    "/img/proyectos/bornfromsyn/SYN-SWEATER/+_Sweater_Front.png",
    "/img/proyectos/bornfromsyn/SYN-SWEATER/+_Sweater_Back.png",
    "/img/proyectos/bornfromsyn/SYN-SWEATER/+_Sweater_Back_Open.png",
  ],
  herramientas: ["Photoshop", "Illustrator",],
  enlaces: [
    { label: "Instagram", href: "https://instagram.com/fromsyn" }
  ]
  },
  {
  slug: "bornfromsyn-triple-waist-sweatpants",
  categoria: "ropa",
  titulo: "BornFromSyn — Triple Waist Sweatpants",
  ano: "2025",
  resumen: "Pantalón de chándal conceptual que explora la superposición de cinturillas y la distorsión de la silueta.",
  descripcion:
    "Triple Waist Sweatpants es una pieza conceptual centrada en la idea de capas y proporciones exageradas dentro del streetwear contemporáneo. El diseño presenta una construcción de triple cinturilla que simula varias capas de pantalones superpuestos, generando una silueta visualmente compleja mientras mantiene la comodidad de una sola prenda. El tejido gris y la forma amplia refuerzan una estética minimalista e industrial, mientras que la construcción estructural introduce un elemento experimental que rompe con la lógica tradicional de los pantalones deportivos. El proyecto explora cómo pequeños cambios en la estructura de una prenda pueden alterar significativamente la percepción de volumen y forma.",
  etiquetas: ["Streetwear", "Concepto", "Diseño de prenda", "Proporción"],
  portada: "/img/proyectos/bornfromsyn/SYN-SWEATS/Front_Render_2.png",
  galeria: [
    "/img/proyectos/bornfromsyn/SYN-SWEATS/Front_Render_2.png",
    "/img/proyectos/bornfromsyn/SYN-SWEATS/Back_Render_2.png",
    "/img/proyectos/bornfromsyn/SYN-SWEATS/Front_Gray_Sweats.png",
    "/img/proyectos/bornfromsyn/SYN-SWEATS/Side_Gray_Sweats.png",
    "/img/proyectos/bornfromsyn/SYN-SWEATS/Back_Gray_Sweats.png",
  ],
  herramientas: ["Photoshop", "Illustrator",],
  enlaces: [
    { label: "Instagram", href: "https://instagram.com/fromsyn" }
  ]
  },
  {
  slug: "bornfromsyn-fragments-tshirt",
  categoria: "ropa",
  titulo: "BornFromSyn — Fragments T-Shirt",
  ano: "2025",
  resumen: "Camiseta conceptual basada en gráficos fragmentados y estética deconstructiva.",
  descripcion:
    "Fragments T-Shirt es una pieza conceptual que explora la idea de identidad fragmentada a través de gráficos y composición visual. El diseño utiliza elementos divididos, superpuestos o incompletos que sugieren una imagen rota o en proceso de reconstrucción. La prenda se mantiene dentro de una silueta sencilla y cómoda, permitiendo que el foco principal recaiga en el lenguaje gráfico. El proyecto forma parte del universo visual de BornFromSyn, donde las prendas funcionan como soportes narrativos que combinan simbología, contraste visual y estética oscura dentro del streetwear contemporáneo.",
  etiquetas: ["Streetwear", "Diseño gráfico", "Concepto", "Identidad visual"],
  portada: "/img/proyectos/bornfromsyn/FRAGMENTS-TSHIRT/Front_Render_4.png",
  galeria: [
    "/img/proyectos/bornfromsyn/FRAGMENTS-TSHIRT/Front_Render_4.png",
    "/img/proyectos/bornfromsyn/FRAGMENTS-TSHIRT/Back_Render_4.png",
    "/img/proyectos/bornfromsyn/FRAGMENTS-TSHIRT/SorryTee_Front_TShirt.png",
    "/img/proyectos/bornfromsyn/FRAGMENTS-TSHIRT/SorryTee_Back_TShirt.png",
  ],
  herramientas: ["Photoshop", "Illustrator", "Diseño gráfico textil"],
  enlaces: [
    { label: "Instagram", href: "https://instagram.com/fromsyn" }
  ]
  } 
];

  