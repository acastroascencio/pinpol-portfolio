import React, { useState } from 'react';
import {
  Mic2,
  Video,
  Music,
  Camera,
  Radio,
  Cast,
  Maximize,
  CheckCircle,
  MessageCircle,
  Globe,
  Smartphone,
  Zap,
  Volume2,
  Tv
} from 'lucide-react';

const App = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const services = [
    {
      id: 1,
      category: 'streaming',
      title: 'Streaming & Transmisión Pro',
      description: 'Transmisiones didácticas y profesionales vía Zoom, Facebook, YouTube e Instagram.',
      features: ['Switcher Blackmagic', 'Hollyland 4K Inalámbrico', 'Cámaras Profesionales'],
      icon: <Radio className="w-6 h-6" />
    },
    {
      id: 2,
      category: 'karaoke',
      title: 'Karaoke Profesional Premium',
      description: 'El mejor sistema de karaoke para casa y eventos corporativos con audio de alta gama.',
      features: ['Micros Sennheiser/Shure', 'Catálogo ilimitado', 'DJ con Controlador'],
      icon: <Mic2 className="w-6 h-6" />
    },
    {
      id: 3,
      category: 'rental',
      title: 'Alquiler de Sonido Line Array',
      description: 'Potencia y claridad para eventos sociales y corporativos de gran escala.',
      features: ['Mezcladoras Digitales', 'Parlantes Line Array', 'Micros de Conferencia'],
      icon: <Volume2 className="w-6 h-6" />
    },
    {
      id: 4,
      category: 'visuals',
      title: 'Pantallas & Proyección',
      description: 'Monitores de 60", proyectores de 5000 lúmenes y ecrans gigantes.',
      features: ['TV 60" con Rack', 'Proyectores Epson Pro', 'Monitores Gamer MSI/ASUS'],
      icon: <Tv className="w-6 h-6" />
    },
    {
      id: 5,
      category: 'tech',
      title: 'Tecnología de Cine & Drones',
      description: 'Tomas aéreas y estabilización de última generación para tus producciones.',
      features: ['Drone Mavic 3 RC Pro', 'RS4 PRO Gimbal', 'Grabación 4K'],
      icon: <Camera className="w-6 h-6" />
    },
    {
      id: 6,
      category: 'lighting',
      title: 'Iluminación & Efectos',
      description: 'Ambiente profesional con cabezas móviles y efectos visuales personalizados.',
      features: ['Cabezas Móviles 9R', 'Fondo Chroma Verde', 'Ecrans 3x2'],
      icon: <Zap className="w-6 h-6" />
    }
  ];

  const filteredServices = activeTab === 'all'
    ? services
    : services.filter(s => s.category === activeTab);

  const copyToClipboard = (text) => {
    const el = document.createElement('textarea');
    el.value = text;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
    alert('Número copiado al portapapeles: ' + text);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-blue-500 selection:text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-slate-950/80 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex flex-col">
            <span className="text-2xl font-black tracking-tighter text-blue-500">PINPOL EVENTOS</span>
            <span className="text-[10px] tracking-[0.3em] uppercase text-slate-400">Lima - Producción Audiovisual</span>
          </div>

          <div className="hidden md:flex gap-8 text-sm font-medium uppercase tracking-widest">
            <a href="#inicio" className="hover:text-blue-400 transition-colors">Inicio</a>
            <a href="#servicios" className="hover:text-blue-400 transition-colors">Servicios</a>
            <a href="#tech" className="hover:text-blue-400 transition-colors">Equipos</a>
            <a href="#contacto" className="bg-blue-600 px-4 py-2 rounded-full hover:bg-blue-500 transition-all">Contacto</a>
          </div>

          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <div className="w-6 h-1 bg-white mb-1"></div>
            <div className="w-6 h-1 bg-white mb-1"></div>
            <div className="w-6 h-1 bg-white"></div>
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="inicio" className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-600 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600 rounded-full blur-[150px]"></div>
        </div>

        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Elevamos tu Evento al <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Siguiente Nivel</span>
          </h1>
          <p className="text-xl text-slate-400 mb-10 max-w-2xl mx-auto">
            Producción audiovisual de vanguardia en Lima. Streaming 4K, Sonido Line Array y el mejor Karaoke Profesional a domicilio.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="https://wa.me/51998068412" className="flex items-center gap-2 bg-green-600 hover:bg-green-500 text-white px-8 py-4 rounded-2xl font-bold transition-all transform hover:scale-105">
              <MessageCircle className="w-5 h-5" /> WhatsApp Directo
            </a>
            <a href="#servicios" className="flex items-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 px-8 py-4 rounded-2xl font-bold transition-all">
              Explorar Servicios
            </a>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="servicios" className="py-20 px-6 bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div>
              <h2 className="text-3xl font-bold mb-2">Nuestras Soluciones</h2>
              <p className="text-slate-400">Todo lo que necesitas para una producción impecable.</p>
            </div>

            <div className="flex flex-wrap gap-2">
              {['all', 'streaming', 'karaoke', 'rental'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 py-2 rounded-lg text-sm font-semibold capitalize transition-all ${activeTab === tab ? 'bg-blue-600 text-white' : 'bg-slate-800 text-slate-400 hover:bg-slate-700'
                    }`}
                >
                  {tab === 'all' ? 'Ver Todo' : tab}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredServices.map((service) => (
              <div key={service.id} className="group bg-slate-800/40 border border-white/5 p-8 rounded-3xl hover:border-blue-500/50 transition-all hover:bg-slate-800/60">
                <div className="w-14 h-14 bg-blue-600/10 rounded-2xl flex items-center justify-center text-blue-500 mb-6 group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-slate-400 text-sm mb-6 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((f, i) => (
                    <li key={i} className="flex items-center gap-2 text-xs font-medium text-slate-300">
                      <CheckCircle className="w-3 h-3 text-blue-500" /> {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack / Brands */}
      <section id="tech" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-br from-blue-900/20 to-slate-900 border border-blue-500/20 rounded-[3rem] p-10 md:p-20 text-center">
            <h2 className="text-4xl font-bold mb-8">Tecnología Certificada</h2>
            <p className="text-slate-400 mb-12 max-w-2xl mx-auto">
              No escatimamos en calidad. Trabajamos con las marcas líderes de la industria audiovisual para garantizar el éxito de tu evento.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 opacity-60">
              <div className="font-black text-2xl tracking-tighter">BLACKMAGIC</div>
              <div className="font-black text-2xl tracking-tighter">SENNHEISER</div>
              <div className="font-black text-2xl tracking-tighter">EPSON PRO</div>
              <div className="font-black text-2xl tracking-tighter">MAVIC 3</div>
              <div className="font-black text-2xl tracking-tighter">SHURE</div>
              <div className="font-black text-2xl tracking-tighter">HOLLYLAND</div>
              <div className="font-black text-2xl tracking-tighter">MSI GAMER</div>
              <div className="font-black text-2xl tracking-tighter">ASUS</div>
              <div className="font-black text-2xl tracking-tighter">SONY 4K</div>
              <div className="font-black text-2xl tracking-tighter">DJI PRO</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer / Contact */}
      <footer id="contacto" className="bg-slate-950 border-t border-white/5 pt-20 pb-10 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-black text-blue-500 mb-6">PINPOL EVENTOS</h2>
              <p className="text-slate-400 mb-6 max-w-md">
                Líderes en soluciones tecnológicas para eventos en Lima. Karaoke pro, Streaming didáctico y alquiler de equipos de alta gama.
              </p>
              <div className="flex gap-4">
                <a href="https://instagram.com/pinpoleventos" className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors">
                  <Camera className="w-5 h-5" />
                </a>
                <a href="https://www.pinpoleventos.com" className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors">
                  <Globe className="w-5 h-5" />
                </a>
                <button onClick={() => copyToClipboard('998068412')} className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors">
                  <Smartphone className="w-5 h-5" />
                </button>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-6">Contacto Directo</h3>
              <ul className="space-y-4 text-slate-400">
                <li className="flex items-center gap-3">
                  <MessageCircle className="w-5 h-5 text-blue-500" />
                  998 068 412
                </li>
                <li className="flex items-center gap-3 underline">
                  info@pinpoleventos.com
                </li>
                <li className="text-sm">
                  Lima, Perú
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-6">Redes Sociales</h3>
              <ul className="space-y-4 text-slate-400">
                <li>TikTok: @pinpoleventos</li>
                <li>Instagram: @pinpoleventos</li>
                <li>Facebook: Pinpol Eventos</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/5 pt-8 text-center text-slate-500 text-sm">
            <p>&copy; {new Date().getFullYear()} Pinpol Eventos Lima. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;