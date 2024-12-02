import Altavoz from "../assets/icons/altavoz.svg";
import AnaValencia from "../assets/img/Ana Valencia.webp";
import BarraAnalitica from "../assets/icons/barraAnalisis.svg";
import Bateria from "../assets/icons/bateria.svg";
import Bombillo from "../assets/img/bombillo.webp";
import Burbuja from "../assets/img/burbuja.webp";
import Camara from "../assets/img/camara.webp";
import CarlosMendoza from "../assets/img/Carlos Mendoza.webp";
import CasaControl from "../assets/icons/casa.svg";
import Control from "../assets/img/control.webp";
import Disco from "../assets/icons/disco.svg";
import Escudo from "../assets/icons/escudo.svg";
import Flechas from "../assets/icons/flechas.svg";
import MariaRodriguez from "../assets/img/Maria Rodriguez.webp";
import Microfono from "../assets/icons/microfono.svg";
import Phone from "../assets/icons/phone.svg";
import Rayo from "../assets/icons/rayo.svg";
import Wifi from "../assets/icons/wifi.svg";
import Bocina from "../assets/img/Bocina.webp"
import House from "../assets/img/House.webp"
import PhoneApp from "../assets/img/PhoneApp.webp"

export const CaracteristicaHome = [
  {
    titulo: "Control Total",
    description:
      "Controla todos los dispositivos de tu hogar desde una única aplicación intuitiva.",
    icon: CasaControl,
  },
  {
    titulo: "Análisis Inteligente",
    description:
      "Obtén información detallada sobre el consumo y optimiza tus recursos.",
    icon: BarraAnalitica,
  },
  {
    titulo: "Seguridad Avanzada",
    description:
      "Protección las 24 horas con alertas instantáneas y monitoreo en tiempo real.",
    icon: Escudo,
  },
];

export const CaracteristicaPage = [
  {
    titulo: "Sonido de Alta Fidelidad",
    description:
      "Experimenta un audio cristalino con graves profundos y agudos precisos gracias a nuestros controladores de alta calidad y tecnología de procesamiento de señal digital avanzada.",
    icon: Altavoz,
  },
  {
    titulo: "Conectividad Inteligente",
    description:
      "Conecta fácilmente con todos tus dispositivos mediante Bluetooth 5.0, WiFi, y compatibilidad con AirPlay y Chromecast.",
    icon: Wifi,
  },
  {
    titulo: "Diseño Compacto y Elegante",
    description:
      "Un diseño minimalista que se integra perfectamente en cualquier espacio, fabricado con materiales premium y acabados de alta calidad. ",
    icon: Disco,
  },
  {
    titulo: "Control por Voz y App",
    description:
      "Control total mediante comandos de voz o nuestra intuitiva aplicación móvil, compatible con los principales asistentes virtuales. ",
    icon: Microfono,
  },
];

export const TestimonioHome = [
  {
    name: "María García",
    profesion: "Propietaria de casa",
    description:
      "'Roombeat ha transformado completamente la forma en que interactúo con mi hogar. La automatización es increíble.'",
    imagen: MariaRodriguez,
  },
  {
    name: "Carlos Rodríguez",
    profesion: "Arquitecto",
    description:
      "'La integración de todos los dispositivos es perfecta. El ahorro energético ha sido notable desde que instalé Roombeat.'",
    imagen: CarlosMendoza,
  },
  {
    name: "Ana Martínez",
    profesion: "Empresaria",
    description:
      "'La seguridad y tranquilidad que me brinda el sistema de monitoreo es invaluable. Totalmente recomendado.'",
    imagen: AnaValencia,
  },
];

export const TestimonioLanding = [
  {
    name: "María Rodriguez",
    profession: "Propietaria de Casa",
    description:
      "Roombeat ha transformado completamente la forma en que interactúo con mi hogar. La automatización es perfecta y el ahorro de energía es notable.",
    imagen: MariaRodriguez,
  },

  {
    name: "Carlos Mendoza",
    profession: "Arquitecto",
    description:
      "La integración con otros dispositivos es impecable. Como profesional del diseño, aprecio la interfaz intuitiva y el control preciso.",
    imagen: CarlosMendoza,
  },
  {
    name: "Ana Valencia",
    profession: "Empresaria",
    description:
      "La seguridad y tranquilidad que Roombeat proporciona no tiene precio. Puedo monitorear mi casa desde cualquier lugar.",
    imagen: AnaValencia,
  },
];

export const CtaImagen = [
  {
    imagen: Bombillo,
  },
  {
    imagen: Burbuja,
  },
  {
    imagen: Camara,
  },
  {
    imagen: Control,
  },
];

export const BeneficioCaracteristica = [
  {
    name: "Sonido adaptativo",
    description:
      "Se ajusta automáticamente según la acústica de tu habitación para una experiencia óptima.",
    icon: CasaControl,
  },
  {
    name: "Actualizaciones automáticas",
    description:
      "Mejoras continuas y nuevas funcionalidades a través de actualizaciones de software. ",
    icon: Flechas,
  },
  {
    name: "Eficiencia energética",
    description:
      "Bajo consumo de energía y modo de espera inteligente para mayor sostenibilidad.",
    icon: Bateria,
  },
  {
    name: "Privacidad garantizada",
    description:
      "Encriptación de datos y controles de privacidad avanzados para tu tranquilidad.",
    icon: Escudo,
  },
];

export const BeneficioLanding = [
  {
    name: "Seguridad Avanzada",
    description:
      "Protección 24/7 con tecnología de encriptación de última generación y monitoreo en tiempo real.",
    icon: Escudo,
  },
  {
    name: "Eficiencia Energética",
    description:
      "Optimiza el consumo de energía y reduce tus facturas mensuales hasta un 30%. ",
    icon: Rayo,
  },
  {
    name: "Control Total",
    description:
      "Controla todos los dispositivos de tu hogar desde una única aplicación intuitiva. ",
    icon: Phone,
  },
];

export const Acciones = [
  {
    titulo: "Integración perfecta",
    subTitulo: "En cualquier espacio",
    imagen: House,
  },
  {
    titulo: "Diseño premium",
    subTitulo: "Acabados de alta calidad",
    imagen: Bocina,
  },
  {
    titulo: "Control intuitivo",
    subTitulo: "Control intuitivo",
    imagen: PhoneApp,
  },
];

export const Pqr = [
  {
    pregunta: "¿Qué dispositivos son compatibles con Roombeat? ",
    respuesta:
      "Roombeat es compatible con la mayoría de los dispositivos inteligentes populares, incluyendo termostatos, luces, cerraduras y cámaras de seguridad de principales marcas. ",
  },
  {
    pregunta: "¿Necesito conocimientos técnicos para instalar Roombeat? ",
    respuesta:
      "No, Roombeat está diseñado para ser fácil de instalar y configurar. Además, ofrecemos soporte técnico gratuito durante la instalación.  ",
  },
  {
    pregunta: "¿Cuál es la política de privacidad de Roombeat? ",
    respuesta:
      "Tu privacidad es nuestra prioridad. Todos los datos están encriptados y nunca compartimos información personal con terceros. ",
  },
];
