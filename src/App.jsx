import React, { useState } from 'react';
import {
  Mic2, Video, Music, Camera, Radio, Cast,
  Maximize, CheckCircle, MessageCircle,
  Globe, Smartphone, Zap, Volume2, Tv,
  X, ChevronLeft, ChevronRight, Play
} from 'lucide-react';

const App = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [selectedGallery, setSelectedGallery] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  // MANTENEMOS TUS 5 SERVICIOS ORIGINALES
  const services = [
    {
      id: 1,
      category: 'streaming',
      title: 'Streaming & Transmisión Pro',
      description: 'Transmisiones de alta fidelidad para eventos corporativos y sociales.',
      features: ['Switcher Blackmagic', 'Hollyland 4K Inalámbrico', 'Cámaras Profesionales'],
      icon: <Radio className="w-6 h-6" />,
      gallery: [
        { type: 'image', url: 'https://images.unsplash.com/photo-1594909122845-11baa439b7bf?q=80&w=1000', title: 'Control de Transmisión' },
        { type: 'video', url: 'https://www.w3schools.com/html/mov_bbb.mp4', title: 'Demo Transmisión en Vivo' }
      ]
    },
    {
      id: 2,
      category: 'karaoke',
      title: 'Karaoke Profesional Premium',
      description: 'Equipos de sonido de alta gama y DJ para convertir tu casa en un escenario real.',
      features: ['Micros Sennheiser/Shure', 'Catálogo Infinito', 'Iluminación Rítmica'],
      icon: <Mic2 className="w-6 h-6" />,
      gallery: [
        { type: 'image', url: 'https://images.unsplash.com/photo-1516280440614-37939bbacd81?q=80&w=1000', title: 'Noche de Karaoke' }
      ]
    },
    {
      id: 3,
      category: 'rental',
      title: 'Sonido Line Array & DJ',
      description: 'Sistemas de audio profesionales para grandes audiencias y eventos sociales.',
      features: ['Mezcladoras Digitales', 'Parlantes Line Array', 'DJ especializado'],
      icon: <Volume2 className="w-6 h-6" />,
      gallery: [
        { type: 'image', url: 'https://images.unsplash.com/photo-1505236858219-8359eb29e329?q=80&w=1000', title: 'Evento Corporativo' }
      ]
    },
    {
      id: 4,
      category: 'visuals',
      title: 'Pantallas & Proyección',
      description: 'Monitores de 60" y proyectores Epson de 5000 lúmenes para máxima claridad.',
      features: ['TV 60" con Rack', 'Proyectores Epson Pro'],
      icon: <Tv className="w-6 h-6" />,
      gallery: [
        { type: 'image', url: 'https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?q=80&w=1000', title: 'Proyección en Vivo' }
      ]
    },
    {
      id: 5,
      category: 'tech',
      title: 'Drones & Tecnología 4K',
      description: 'Tomas aéreas con Mavic 3 y estabilización RS4 PRO para grabaciones de cine.',
      features: ['Drone Mavic 3 RC Pro', 'RS4 PRO Gimbal'],
      icon: <Camera className="w-6 h-6" />,
      gallery: [
        { type: 'image', url: 'https://images.unsplash.com/photo-1508614589041-895b88991e3e?q=80&w=1000', title: 'Toma con Drone' }
      ]
    }
  ];

  const clients = [
    { name: 'Nike', logo: 'https://cdn.simpleicons.org/nike/white' },
    { name: 'Samsung', logo: 'https://cdn.simpleicons.org/samsung/white' },
    { name: 'Sony', logo: 'https://cdn.simpleicons.org/sony/white' },
    { name: 'Coca-Cola', logo: 'https://cdn.simpleicons.org/cocacola/white' },
    { name: 'Apple', logo: 'https://cdn.simpleicons.org/apple/white' },
    { name: 'Microsoft', logo: 'https://cdn.simpleicons.org/microsoft/white' },
    { name: 'Disney', logo: 'https://cdn.simpleicons.org/disney/white' },
    { name: 'Adidas', logo: 'https://cdn.simpleicons.org/adidas/white' },
  ];

  const openLightbox = (gallery, index = 0) => {
    setSelectedGallery(gallery);
    setCurrentIndex(index);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedGallery(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-blue-500 selection:text-white">

      {/* --- NAVEGACIÓN REDISEÑADA PARA S23 ULTRA --- */}
      <nav className="fixed top-0 w-full z-[60] bg-slate-950/95 backdrop-blur-xl border-b border-white/10 shadow-2xl">
        <div className="max-w-7xl mx-auto px-4 py-3 sm:py-5">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">

            {/* Branding con tamaños fijos para evitar saltos */}
            <div className="flex flex-col items-center sm:items-start group cursor-default">
              <span className="text-xl sm:text-2xl font-black text-blue-500 tracking-tighter leading-none mb-1">
                PINPOL EVENTOS
              </span>
              <span className="text-[7px] sm:text-[10px] uppercase text-slate-500 tracking-[0.3em] font-medium">
                LIMA - PRODUCCIÓN AUDIOVISUAL
              </span>
            </div>

            {/* Links de Acción con espaciado controlado */}
            <div className="flex items-center justify-center gap-4 sm:gap-8 w-full sm:w-auto border-t border-white/5 pt-3 sm:pt-0 sm:border-t-0">
              <a href="#clientes" className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-slate-400 hover:text-white transition-all">
                Clientes
              </a>
              <a
                href="https://wa.me/51998068412"
                className="bg-blue-600 hover:bg-blue-500 text-white px-5 py-2 rounded-full font-black text-[10px] sm:text-sm shadow-[0_0_20px_rgba(37,99,235,0.3)] transition-all active:scale-95 whitespace-nowrap"
              >
                Presupuesto Express
              </a>
            </div>

          </div>
        </div>
      </nav>

      {/* Hero: Ajustamos el padding para que no se pegue al nav de dos filas */}
      <section className="pt-48 sm:pt-56 pb-16 px-6 text-center">
        <div className="inline-block bg-blue-500/10 border border-blue-500/20 px-3 py-1 rounded-full text-blue-400 text-[9px] sm:text-xs font-bold uppercase tracking-widest mb-6">
          Tecnología Audiovisual de Vanguardia
        </div>
        <h1 className="text-4xl sm:text-7xl font-bold mb-6 tracking-tight leading-[1.1]">
          Portafolio <span className="text-blue-500 text-shadow-glow">Interactivo</span>
        </h1>
        <p className="text-slate-400 max-w-2xl mx-auto text-sm sm:text-lg leading-relaxed px-4 opacity-80">
          Explora nuestros proyectos recientes. Haz clic en las tarjetas para ver el despliegue técnico de cada servicio.
        </p>
      </section>

      {/* Sección Clientes (Se mantiene el Reel Horizontal) */}
      <section id="clientes" className="py-14 bg-slate-900/30 border-y border-white/5 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 mb-10 text-center text-[9px] font-black uppercase tracking-[0.4em] text-blue-500/50">
          Marcas que confían en nosotros
        </div>
        <div className="flex items-center w-full overflow-hidden">
          <div className="animate-scroll flex items-center">
            {[...clients, ...clients, ...clients].map((client, i) => (
              <div key={i} className="flex-none w-32 sm:w-60 h-16 sm:h-24 flex items-center justify-center mx-4 sm:mx-8">
                <img
                  src={client.logo}
                  alt={client.name}
                  className="max-h-6 sm:max-h-10 object-contain grayscale opacity-30 hover:opacity-100 hover:grayscale-0 transition-all duration-700"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Grid de Servicios (Optimizado para móviles) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-20 pb-40">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
          {services.map((service) => (
            <div key={service.id} onClick={() => openLightbox(service.gallery)} className="group bg-slate-900/50 border border-white/5 rounded-[2rem] sm:rounded-[3rem] overflow-hidden hover:border-blue-500/40 transition-all cursor-pointer relative flex flex-col backdrop-blur-sm">
              <div className="relative h-60 sm:h-80 overflow-hidden">
                <img src={service.gallery[0].type === 'video' ? 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30' : service.gallery[0].url} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[2000ms]" alt={service.title} />
                {service.gallery[0].type === 'video' && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                    <div className="bg-blue-600 p-4 sm:p-6 rounded-full shadow-2xl scale-90 group-hover:scale-110 transition-transform duration-500">
                      <Play className="w-6 h-6 sm:w-10 sm:h-10 text-white fill-white" />
                    </div>
                  </div>
                )}
              </div>
              <div className="p-6 sm:p-10 flex flex-col flex-grow">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 sm:p-4 bg-blue-600/10 rounded-xl sm:rounded-2xl text-blue-500 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500">{service.icon}</div>
                  <h3 className="text-xl sm:text-2xl font-bold tracking-tight">{service.title}</h3>
                </div>
                <p className="text-slate-400 text-xs sm:text-sm mb-8 flex-grow leading-relaxed line-clamp-3">{service.description}</p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {service.features.map((f, i) => (
                    <div key={i} className="flex items-center gap-1.5 text-[8px] sm:text-[9px] font-bold text-slate-500 bg-white/5 px-3 py-1.5 rounded-lg border border-white/5 uppercase tracking-tighter">
                      <CheckCircle className="w-3 h-3 text-blue-600" /> {f}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Lightbox / Modal (Mismo funcionamiento) */}
      {selectedGallery && (
        <div className="fixed inset-0 z-[100] bg-black/98 backdrop-blur-2xl flex items-center justify-center p-4">
          <button onClick={closeLightbox} className="absolute top-6 right-6 p-4 bg-white/10 rounded-full text-white z-50"><X /></button>
          <div className="max-w-5xl w-full h-[80vh] flex flex-col items-center justify-center">
            {selectedGallery[currentIndex].type === 'video' ? (
              <video src={selectedGallery[currentIndex].url} controls autoPlay className="max-w-full max-h-full rounded-2xl" />
            ) : (
              <img src={selectedGallery[currentIndex].url} className="max-w-full max-h-full object-contain rounded-2xl" alt="Vista" />
            )}
            <p className="mt-8 text-lg font-bold text-white">{selectedGallery[currentIndex].title}</p>
          </div>
        </div>
      )}

      {/* Botón WhatsApp Fijo */}
      <div className="fixed bottom-8 left-0 w-full z-50 flex justify-center px-6">
        <a href="https://wa.me/51998068412" className="flex items-center gap-4 bg-green-600 hover:bg-green-500 text-white px-10 py-5 rounded-full font-black text-sm sm:text-lg shadow-[0_20px_50px_rgba(22,163,74,0.5)] transition-all hover:scale-105 active:scale-95 group">
          <MessageCircle className="w-6 h-6 sm:w-8 sm:h-8 group-hover:rotate-12 transition-transform" />
          Reserva tu Fecha
        </a>
      </div>
    </div>
  );
};

export default App;