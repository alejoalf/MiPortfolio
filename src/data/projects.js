import celulares1 from '../assets/celulares1.png';
import angus from '../assets/angus.png';
import horus from '../assets/horus.png';
import detector from '../assets/detector.png';
import ia from '../assets/ia.png';

export const projects = [
  {
    slug: 'rio-cuarto-celulares',
    title: 'Rio cuarto celulares',
    description: 'Aplicación de comercio electrónico con carrito, pasarela de pago y panel de administración.',
    longDescription: 'Ecommerce completo para un negocio de celulares, con checkout, control de stock en tiempo real y panel de gestión.',
    image: celulares1,
    tags: ['React', 'Node.js', 'PostgreSQL'],
    tech: ['React', 'Node.js', 'PostgreSQL', 'Stripe', 'Bootstrap'],
    highlights: [
      'Checkout con pasarela de pago y control de stock en vivo.',
      'Panel de administración para productos, órdenes y usuarios.',
      'Despliegue serverless con CI sencillo.'
    ],
    frontcode: 'https://github.com/alejoalf/frontriocuartocelulares',
    backcode: 'https://github.com/alejoalf/frontriocuartocelulares',
    demo: 'https://riocuartocelulares.vercel.app/'
  },
  {
    slug: 'angus-bar',
    title: 'Angus bar',
    description: 'Sistema web para pedidos en bar con sincronización en tiempo real.',
    longDescription: 'Pedidos en vivo por mesa y estado usando Supabase Realtime, con gestión de productos y disponibilidad.',
    image: angus,
    tags: ['React', 'Supabase'],
    tech: ['React', 'Supabase', 'Realtime', 'Role-based auth'],
    highlights: [
      'Pedidos en vivo por mesa y estado, sincronizados en Supabase Realtime.',
      'Gestión de productos y disponibilidad editable por staff.',
      'UI optimizada para tablets y barra.'
    ],
    frontcode: 'https://github.com/alejoalf/Sistema-bar',
    demo: 'https://sistema-bar-vert.vercel.app/'
  },
  {
    slug: 'horustech',
    title: 'HorusTech',
    description: 'Sitio de la organización dedicada a desarrollar páginas web y sistemas para empresas.',
    longDescription: 'Landing con propuesta de valor clara, servicios, casos y CTA directo a contacto.',
    image: horus,
    tags: ['React', 'Branding'],
    tech: ['React', 'Vite', 'Lead capture', 'Landing page'],
    highlights: [
      'Presentación clara de servicios de desarrollo web y sistemas.',
      'Sección de casos y propuesta de valor orientada a empresas.',
      'CTA directa a contacto para nuevas colaboraciones.'
    ],
    demo: 'https://horus-tech.vercel.app/'
  },
  {
    slug: 'hand-gesture-controller',
    title: 'Hand Gesture Controller',
    description: 'Control de interfaz sin contacto mediante vision artificial y gestos.',
    longDescription: 'Detecta coordenadas de la mano en tiempo real para mapear gestos a acciones del sistema o navegador.',
    image: detector,
    tags: ['Python', 'OpenCV'],
    tech: ['Python', 'OpenCV', 'MediaPipe', 'Computer vision'],
    highlights: [
      'Deteccion de mano y tracking de puntos clave en tiempo real.',
      'Mapeo de gestos a acciones del sistema o navegador.',
      'Interfaz sin contacto para accesibilidad y control rapido.'
    ],
    github: 'https://github.com/alejoalf/control_gestos'
  },
  {
    slug: 'asistente-voz-ia',
    title: 'Asistente de Voz Inteligente con Memoria Persistente',
    description: 'Asistente virtual de escritorio con voz y memoria de largo plazo.',
    longDescription: 'Conversaciones naturales por voz con contexto persistente usando SQLite y modelos de lenguaje.',
    image: ia,
    tags: ['LLMs', 'SQLite', 'Voice'],
    tech: ['Gemini 1.5', 'Llama 3', 'SQLite', 'TTS/STT', 'Gestion de latencia'],
    highlights: [
      'Conversacion por voz con contexto persistente entre sesiones.',
      'Memoria de largo plazo para preferencias y proyectos del usuario.',
      'Optimizacion de latencia y manejo de errores de API.'
    ],
    github: 'https://github.com/alejoalf/Asistente-Con-IA'
  }
];

export const getProjectBySlug = slug => projects.find(p => p.slug === slug);
