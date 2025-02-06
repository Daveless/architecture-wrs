export const SITE_CONFIG = {
  name: 'WRS Arquitectura',
  slogan: 'Diseñamos Espacios, Construimos Sueños',
  description: 'Proyectos arquitectónicos innovadores y funcionales a la medida de tus necesidades.',
  contact: {
    phone: '+123456789',
    email: 'contacto@wrs-arquitectura.com',
    whatsapp: '+593993272165',
    address: 'Tu dirección aquí',
    schedule: 'Lun - Vie: 9:00 - 18:00'
  }
};

export const SERVICES = [
  {
    id: 'architectural-design',
    title: 'Diseño Arquitectónico',
    description: 'Creamos espacios únicos que combinan estética, funcionalidad y sostenibilidad.',
    features: ['Planos arquitectónicos', 'Renderizados 3D', 'Diseño personalizado'],
    duration: 'Según proyecto'
  },
  {
    id: 'renovation',
    title: 'Remodelaciones',
    description: 'Transformamos espacios existentes en ambientes modernos y funcionales.',
    features: ['Actualización de espacios', 'Optimización funcional', 'Diseño interior'],
    duration: 'Según alcance'
  },
  {
    id: 'construction',
    title: 'Construcción',
    description: 'Materializamos tus proyectos con los más altos estándares de calidad.',
    features: ['Gestión de obra', 'Control de calidad', 'Supervisión técnica'],
    duration: 'Según proyecto'
  },
  {
    id: 'consulting',
    title: 'Consultoría',
    description: 'Asesoramiento experto para optimizar tus proyectos arquitectónicos.',
    features: ['Estudios de viabilidad', 'Gestión de permisos', 'Asesoría técnica'],
    duration: 'A convenir'
  }
];

export const TESTIMONIALS = [
  {
    id: 1,
    name: 'Ana García',
    text: 'WRS transformó nuestra visión en una realidad arquitectónica excepcional. Su atención al detalle y profesionalismo son incomparables.',
    rating: 5,
    service: 'Diseño Arquitectónico'
  },
  {
    id: 2,
    name: 'Carlos Rodríguez',
    text: 'La remodelación de nuestras oficinas superó todas las expectativas. Un equipo verdaderamente comprometido con la excelencia.',
    rating: 5,
    service: 'Remodelaciones'
  },
  {
    id: 3,
    name: 'María Sánchez',
    text: 'Su enfoque en la sostenibilidad y la innovación hizo que nuestro proyecto fuera único. Altamente recomendados.',
    rating: 5,
    service: 'Construcción'
  }
];

export const BOOKING_SERVICES = SERVICES.map(service => ({
  value: service.id,
  label: service.title
}));