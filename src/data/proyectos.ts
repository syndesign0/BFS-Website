export type CategoriaProyecto = 'tresde' | 'ropa'

export type Proyecto = {
  slug: string
  categoria: CategoriaProyecto
  titulo: string
  ano?: string
  resumen: string
  descripcion: string
  etiquetas: string []
  portada: string
  galeria: string[]
  herramientas?: string[]
  enlaces?: { label: string; href: string}[]
}

export const proyectos: Proyecto[] = [
  {
    slug: 'detour-trailer',
    categoria: 'tresde',
    titulo: 'Detour — Tráiler 3D',
    ano: '2025',
    resumen: 'Animación 3D con estilo sencillo basado en iluminación.',
    descripcion: 'Proyecto de animación 3D centrado en iluminación, ritmo y storytelling del producto. Incluye tablero, tren y elementos tipo personaje.',
    etiquetas: ['Maya', 'Iluminación', 'Animación'],
    portada: '/public/img/proyectos/detour/portada.jpg',
    galeria: [
      '/public/img/proyectos/detour/1.jpg',
      '/public/img/proyectos/detour/2.jpg',
      '/public/img/proyectos/detour/3.jpg',
    ],
    herramientas: ['Maya', 'Rizom UV', 'Unreal Engine 5', 'Photoshop']
  },
  {
    slug: 'bornfromsyn-denim',
    categoria: 'ropa',
    titulo: 'BornFromSyn - MUD Denim',
    ano: '2025',
    resumen: 'Denim conceptual con narrativa y detalles por cremalleras.',
    descripcion: 'Concepto streetwear con elementos de protesta y storytelling. Cremalleras que revelan texturas de humo.',
    etiquetas: ['Concepto', 'Diseño', 'Branding'],
    portada: '/public/img/proyectos/bornfromsyn/MudJeans_1 (1).jpg',
    galeria: [
      '/public/img/proyectos/bornfromsyn/MudJeans_1 (1).jpg',
      '/public/img/proyectos/bornfromsyn/MudJeans_2 (1).jpg',
      '/public/img/proyectos/bornfromsyn/MudJeans_3 (1).jpg',
      '/public/img/proyectos/bornfromsyn/Front.png',
      '/public/img/proyectos/bornfromsyn/Front Open.png',
      '/public/img/proyectos/bornfromsyn/Back.png'
    ],
    enlaces: [{ label: 'Instagram', href: 'https://instagram.com/fromsyn' }],
  }
]