import Bebidas from "@assets/img/Bebidas.webp";
import ComidaSinGluten from "@assets/img/ComidaSinGluten.webp";
import comidaVegetariana from "@assets/img/comidaVegetariana.webp";

export const HomeData = [
  {
    id: 1,
    oradores: [
      {
        id: 1,
        description:
          "Experto(a) en Desarrollo de Software y Arquitectura de Sistemas",
      },
      {
        id: 2,
        description: "Líder en Innovación Tecnológica",
      },
      {
        id: 3,
        description: "Especialista en UX/UI y Diseño de Producto",
      },
    ],
  },
  {
    id: 2,
    ubicacion: [
      {
        id: 1,
        name: "Como Llegar",
        medios: [
          {
            name: "Metro",
            icono: "",
            description: "Línea 1 - Estación Centro de Convenciones",
          },
          {
            name: "Autobus",
            icono: "",
            description: "Rutas 101, 102 y 103",
          },
          {
            name: "Taxi/Uber",
            icono: "",
            description: "Servicio disponible 24/7",
          },
        ],
      },
      {
        id: 2,
        name: "Estacionamiento",
        medios: [
          {
            name: "Estacionamiento",
            icono: "",
            description: "Estacionamiento gratuito",
          },
          {
            name: "Accesibilidad",
            icono: "",
            description: "Espacios reservados disponibles",
          },
        ],
      },
      {
        id: 3,
        name: "Hoteles Recomendados",
        medios: [
          {
            name: "Hoteles Plaza",
            icono: "",
            description: {
              p1: "Desde $150 Noche",
              p2: "a 5 minutos caminando",
            },
          },
          {
            name: "Grand Hotel",
            icono: "",
            description: {
              p1: "Desde $200 Noche",
              p2: "A 10 minutos caminando",
            },
          },
        ],
      },
    ],
  },
];

export const OradoresData = [
  {
    OradorPrincipal: {
      id: 1,
      orador: "Ponente Principal",
      cargo: "Directora de Innovación Tecnológica en TechForward",
      description:
        "Con más de 15 años de experiencia en el sector tecnológico,lidera iniciativas de transformación digital y desarrollo de soluciones innovadoras. Su charla se centrará en las últimas tendencias en automatización de procesos y el futuro de la tecnología empresarial.",
      presentation: [
        {
          horario: {
            icono: "",
            hora: "10:00 AM - Sala Principal",
          },
          lugar: {
            icono: "",
            lugar: "Auditorio Central",
          },
        },
      ],
    },
    oradores: [
      {
        id: 1,
        description:
          "Especialista en desarrollo de sistemas distribuidos y microservices. Compartirá sus experiencias en la implementación de arquitecturas escalables.",
      },
      {
        id: 2,
        description:
          "Experto(a) en transformación digital y gestión del cambio. Presentará casos de éxito en la implementación de soluciones tecnológicas.",
      },
      {
        id: 3,
        description:
          "Pionero(a) en metodologías ágiles y desarrollo de producto. Hablará sobre estrategias de innovación y gestión de equipos tecnológicos.",
      },
    ],
  },
];

export const ProgramacionData = {
  programacion: [
    {
      Jueves: [
        {
          id: 1,
          name: "9:00 AM - 10:00 AM",
          banner: "Registro",
          description: "Check-in y recogida de credenciales",
        },
        {
          id: 2,
          name: "10:30 AM - 11:30 AM",
          banner: "Conferencia",
          card: [
            {
              icono: " ",
              name: "Introducción a RoomSyncConfig",
              cargo: "Director de Tecnología, TechCorp",
              description:
                "Descubre cómo RoomSyncConfig está revolucionando la gestión de espacios y configuración de salas.",
            },
          ],
        },
        {
          id: 3,
          name: "12:00 PM - 1:30 PM",
          banner: "Taller",
          card: [
            {
              icono: "",
              name: "Implementación Práctica de RoomSyncConfig",
              cargo: "Desarrollador Senior, ReactPro",
              description:
                "Aprende a implementar y configurar RoomSyncConfig en diferentes entornos empresariales.",
            },
          ],
        },
        {
          id: 4,
          name: "2:30 PM - 3:30 PM",
          banner: "Conferencia",
          card: [
            {
              icono: "",
              name: "Seguridad en RoomSyncConfig",
              cargo: "Experto en Seguridad, SecureNet",
              description:
                "Mejores prácticas de seguridad y protección de datos en la implementación de RoomSyncConfig.",
            },
          ],
        },
        {
          id: 5,
          name: "4:00 PM - 5:00 PM",
          banner: "Panel",
          card: [
            {
              icono: "",
              name: "Casos de Éxito RoomSyncConfig",
              cargo: "Diversos Sectores",
              description:
                "Sesión de networking con bebidas y aperitivos. Oportunidad para conectar con otros profesionales del sector.",
            },
          ],
        },
        {
          id: 6,
          name: "5:30 PM - 6:30 PM",
          banner: "Networking",
          card: [
            {
              name: "Cocktail de Networking",
              description:
                "Sesión de networking con bebidas y aperitivos. Oportunidad para conectar con otros profesionales del sector.",
            },
          ],
        },
      ],
      Viernes: [
        {
          id: 1,
          name: "9:00 AM - 10:00 AM",
          banner: "Conferencia",
          card: [
            {
              icono: "",
              name: "Tendencias en Tecnología de la Información",
              cargo: "Director de Innovación, ITCorp",
              description:
                "Descubre las últimas tendencias en tecnología de la información y cómo pueden beneficiar a tu negocio.",
            },
          ],
        },
        {
          id: 2,
          name: "11:00 AM - 12:00 PM",
          banner: "Taller",
          card: [
            {
              icono: "",
              name: "Desarrollo de Aplicaciones Móviles",
              cargo: "Desarrollador Senior, MobileDev",
              description:
                "Aprende a desarrollar aplicaciones móviles para Android y iOS.",
            },
          ],
        },
        {
          id: 3,
          name: "2:00 PM - 3:00 PM",
          banner: "Conferencia",
          card: [
            {
              icono: "",
              name: "Inteligencia Artificial y Machine Learning",
              cargo: "Experto en Inteligencia Artificial, AIcorp",
              description:
                "Descubre cómo la inteligencia artificial y el machine learning pueden revolucionar tu negocio.",
            },
          ],
        },
        {
          id: 4,
          name: "4:00 PM - 5:00 PM",
          banner: "Panel",
          card: [
            {
              icono: "",
              name: "Casos de Éxito en Tecnología",
              cargo: "Diversos Sectores",
              description:
                "Sesión de networking con bebidas y aperitivos. Oportunidad para conectar con otros profesionales del sector.",
            },
          ],
        },
        {
          id: 5,
          name: "5:30 PM - 6:30 PM",
          banner: "Networking",
          card: [
            {
              name: "Cocktail de Networking",
              description:
                "Sesión de networking con bebidas y aperitivos. Oportunidad para conectar con otros profesionales del sector.",
            },
          ],
        },
      ],
      Sabado: [
        {
          id: 1,
          name: "10:00 AM - 11:00 AM",
          banner: "Conferencia",
          card: [
            {
              icono: "",
              name: "Ciberseguridad y Protección de Datos",
              cargo: "Experto en Ciberseguridad, CyberCorp",
              description:
                "Descubre cómo proteger tus datos y sistemas de ciberataques.",
            },
          ],
        },
        {
          id: 2,
          name: "12:00 PM - 1:00 PM",
          banner: "Taller",
          card: [
            {
              icono: "",
              name: "Desarrollo de Aplicaciones Web",
              cargo: "Desarrollador Senior, WebDev",
              description:
                "Aprende a desarrollar aplicaciones web con las últimas tecnologías.",
            },
          ],
        },
        {
          id: 3,
          name: "2:30 PM - 3:30 PM",
          banner: "Conferencia",
          card: [
            {
              icono: "",
              name: "Tendencias en Tecnología de la Información",
              cargo: "Director de Innovación, ITCorp",
              description:
                "Descubre las últimas tendencias en tecnología de la información y cómo pueden beneficiar a tu negocio.",
            },
          ],
        },
        {
          id: 4,
          name: "4:00 PM - 5:00 PM",
          banner: "Conferencia",
          card: [
            {
              icono: "",
              name: "Marketing Digital",
              cargo: "Experto en Marketing Digital, MarketingCorp",
              description:
                "Descubre cómo el marketing digital puede ayudar a tu negocio.",
            },
          ],
        },
        {
          id: 5,
          name: "5:30 PM - 6:30 PM",
          banner: "Taller",
          card: [
            {
              icono: "",
              name: "Desarrollo de Aplicaciones Móviles",
              cargo: "Desarrollador Senior, MobileDev",
              description:
                "Aprende a desarrollar aplicaciones móviles para Android y iOS.",
            },
          ],
        },
        {
          id: 6,
          name: "7:00 PM - 8:00 PM",
          banner: "Networking",
          card: [
            {
              name: "Cena de Networking",
              description:
                "Sesión de networking con cena. Oportunidad para conectar con otros profesionales del sector.",
            },
          ],
        },
      ],
      Domingo: [
        {
          id: 1,
          name: "10:00 AM - 11:00 AM",
          banner: "Conferencia",
          card: [
            {
              icono: "",
              name: "Introducción a la Realidad Aumentada",
              cargo: "Experto en Realidad Aumentada, ARcorp",
              description:
                "Descubre cómo la realidad aumentada puede revolucionar tu negocio.",
            },
          ],
        },
        {
          id: 2,
          name: "12:00 PM - 1:00 PM",
          banner: "Taller",
          card: [
            {
              icono: "",
              name: "Desarrollo de Aplicaciones de Realidad Aumentada",
              cargo: "Desarrollador Senior, ARDev",
              description:
                "Aprende a desarrollar aplicaciones de realidad aumentada para diferentes plataformas.",
            },
          ],
        },
        {
          id: 3,
          name: "2:00 PM - 3:00 PM",
          banner: "Conferencia",
          card: [
            {
              icono: "",
              name: "Inteligencia Artificial y Machine Learning",
              cargo: "Experto en Inteligencia Artificial, AIcorp",
              description:
                "Descubre cómo la inteligencia artificial y el machine learning pueden revolucionar tu negocio.",
            },
          ],
        },
        {
          id: 4,
          name: "3:00 PM - 4:00 PM",
          banner: "Taller",
          card: [
            {
              icono: "",
              name: "Desarrollo de Aplicaciones de Inteligencia Artificial",
              cargo: "Desarrollador Senior, AIdev",
              description:
                "Aprende a desarrollar aplicaciones de inteligencia artificial para diferentes plataformas.",
            },
          ],
        },
        {
          id: 5,
          name: "4:00 PM - 5:00 PM",
          banner: "Conferencia",
          card: [
            {
              icono: "",
              name: "Ciberseguridad y Protección de Datos",
              cargo: "Experto en Ciberseguridad, CyberCorp",
              description:
                "Descubre cómo proteger tus datos y sistemas de ciberataques.",
            },
          ],
        },
        {
          id: 6,
          name: "5:00 PM - 6:00 PM",
          banner: "Networking",
          card: [
            {
              name: "Cocktail de Networking",
              description:
                "Sesión de networking con bebidas y aperitivos. Oportunidad para conectar con otros profesionales del sector.",
            },
          ],
        },
      ],
    },
  ],
};

export const LocationData = [
  {
    ubicacion: [
      {
        id: 1,
        name: "Dirección",
        description: "Yumbo, Valle del Cauca, Colombia",
      },
      {
        id: 2,
        name: "Horario",
        description: "Lunes a Domingo",
        description1: "8:00 AM - 10:00 PM",
      },
      {
        id: 3,
        name: "Contacto",
        description: "+57 2 123 4567 info@centrovalle.co",
      },
    ],
    transporte: [
      {
        id: 1,
        name: "Metro",
        description: "Línea MIO: Estación Universidades (5 min caminando)",
        description1: "Línea MIO: Estación Terminal (8 min caminando)",
      },
      {
        id: 2,
        name: "Autobús",
        description: "Rutas: T31, A17, P24Parada: Centro Valle del Pacífico",
      },
      {
        id: 3,
        name: "Estacionamiento",
        description:
          "Estacionamiento disponible 24/7Tarifa: $5.000 COP por hora",
      },
    ],
    horario: [
      {
        id: 1,
        name: "Check-in y registro",
        description: "Lobby Principal",
      },
      {
        id: 2,
        name: "Ceremonia de apertura",
        description: "Salón Principal",
      },
      {
        id: 3,
        name: "Comida",
        description: "Área de Restaurantes",
      },
      {
        id: 4,
        name: "Cierre del evento",
        description: "Salón Principal",
      },
    ],
    hoteles: [
      {
        id: 1,
        name: "Hotel Yumbo Real",
        description: "A 5 minutos caminando",
        valor: "$250.000 COP/noche",
      },
      {
        id: 2,
        name: "Hotel Valle del Cauca",
        description: "A 8 minutos caminando",
        valor: "$200.000 COP/noche",
      },
      {
        id: 3,
        name: "Hotel Imbanaco",
        description: "A 10 minutos caminando",
        valor: "$220.000 COP/noche",
      },
    ],
  },
];

export const feeding = [
  {
    id: 1,
    comida: [
      {
        id: 1,
        name: "Bebidas sin Alcohol",
        description:
          "Refrescantes opciones de jugos naturales, smoothies y bebidas especiales.",
        icono: Bebidas,
      },
      {
        id: 2,
        name: "Opciones Vegetarianas",
        description:
          "Deliciosos platos preparados con ingredientes frescos y saludables.",
        icono: comidaVegetariana,
      },
      {
        id: 3,
        name: "Sin Gluten",
        description:
          "Alternativas especialmente preparadas para dietas sin gluten.",
        icono: ComidaSinGluten,
      },
    ],
    horario: [
      {
        id: 1,
        name: "Desayuno",
        description: "7:00 AM - 10:30 AM",
      },
      {
        id: 2,
        name: "Almuerzo",
        description: "12:00 PM - 3:00 PM",
      },
      {
        id: 3,
        name: "Cena",
        description: "7:00 PM - 10:00 PM",
      },
      {
        id: 4,
        name: "Bar",
        description: "4:00 PM - 12:00 AM",
      },
    ],
  },
];

export const PoliticasYPrivacidad = [
  {
    id: 1,
    compromiso: [
      {
        id: 1,
        name: "Respeto Mutuo",
        description:
          "Escuchar y respetar activamente todas las voces en el espacio, valorando la diversidad de opiniones y experiencias.",
        icono: "icono1",
      },
      {
        id: 2,
        name: "Cuidado del Espacio",
        description:
          "Mantener y cuidar el entorno, dejando el lugar igual o mejor de como lo encontramos.",
        icono: "",
      },
    ],
    comportamiento: [
      {
        id: 1,
        description: "Acoso verbal o escrito de cualquier tipo",
        icono: "",
      },
      {
        id: 2,
        description:
          "Discriminación basada en género, orientación sexual, raza, religión o discapacidad",
        icono: "",
      },
      {
        id: 3,
        description: "Comportamiento intimidante o amenazante",
        icono: "",
      },
      {
        id: 4,
        description: "Fotografía o grabación sin consentimiento",
        icono: "",
      },
    ],
    politica: [
      {
        id: 1,
        name: "Medidas Inmediatas",
        description: "Medidas Inmediatas",
        icono: "",
      },
      {
        id: 2,
        name: "Prohibición Futura",
        description:
          "Veto permanente para participar en futuros eventos de roomBeat según la gravedad del incidente.",
        icono: "",
      },
      {
        id: 3,
        name: "Documentación",
        description:
          "Registro detallado de incidentes para seguimiento y prevención de casos futuros.",
        icono: "",
      },
      {
        id: 4,
        name: "Mediación",
        description:
          "Proceso de mediación disponible para resolver conflictos menores entre participantes.",
        icono: "",
      },{
        id: 5,
        name: "Acciones Legales",
        description: "En casos que lo ameriten, se tomarán acciones legales y se cooperará con las autoridades correspondientes.",
        icono: ""
      },
      {
       id: 6,
       name: "Comunicación",
       description: "Información transparente sobre las medidas tomadas, respetando la privacidad de los involucrados.",
      icono: ""
      }
    ],
    procedimiento: [
      {
        id: 1,
        name: "Reportar un Incidente",
        description:
          "Si experimentas o presencias comportamiento inapropiado, por favor contacta inmediatamente a un miembro del equipo organizador.",
        icono: "",
      },
      {
        id: 2,
        name: "Respuesta Inmediata",
        description:
          "Nuestro equipo investigará y responderá a todas las quejas de manera rápida y confidencial.",
        icono: "",
      },
    ],
    contacto: [
      {
        id: 1,
        name: "Teléfono",
        description: "+57 310 582 1966",
        icono: "",
      },
      {
        id: 2,
        name: "Email",
        description: "conducta@roombeat.co",
        icono: "",
      },
    ],
  },
];
