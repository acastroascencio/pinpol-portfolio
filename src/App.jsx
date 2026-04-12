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

  // MANTENEMOS TUS 5 SERVICIOS ORIGINALES CON SOPORTE MULTIMEDIA
  const services = [
    {
      id: 1,
      category: 'streaming',
      title: 'Streaming & Transmisión Pro',
      description: 'Transmisiones de alta fidelidad para eventos corporativos y sociales vía Zoom, YouTube y Facebook.',
      features: ['Switcher Blackmagic', 'Hollyland 4K Inalámbrico', 'Cámaras Profesionales'],
      icon: <Radio className="w-6 h-6" />,
      gallery: [
        { type: 'image', url: 'https://images.unsplash.com/photo-1594909122845-11baa439b7bf?q=80&w=1000', title: 'Control de Transmisión' },
        { type: 'video', url: 'https://www.w3schools.com/html/mov_bbb.mp4', title: 'Demo Transmisión en Vivo' },
        { type: 'image', url: 'https://images.unsplash.com/photo-1478737270239-2f02b77fc618?q=80&w=1000', title: 'Setup Audiovisual' }
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
        { type: 'image', url: 'https://images.unsplash.com/photo-1516280440614-37939bbacd81?q=80&w=1000', title: 'Noche de Karaoke' },
        { type: 'image', url: 'https://images.unsplash.com/photo-1493225255756-d9584f8606e9?q=80&w=1000', title: 'Microfonía Profesional' }
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
        { type: 'image', url: 'https://images.unsplash.com/photo-1505236858219-8359eb29e329?q=80&w=1000', title: 'Evento Corporativo' },
        { type: 'image', url: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=1000', title: 'Cabina de DJ' }
      ]
    },
    {
      id: 4,
      category: 'visuals',
      title: 'Pantallas & Proyección',
      description: 'Monitores de 60" y proyectores Epson de 5000 lúmenes para máxima claridad.',
      features: ['TV 60" con Rack', 'Proyectores Epson Pro', 'Ecrans Gigantes'],
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
      features: ['Drone Mavic 3 RC Pro', 'RS4 PRO Gimbal', 'Hollyland 4K'],
      icon: <Camera className="w-6 h-6" />,
      gallery: [
        { type: 'image', url: 'https://images.unsplash.com/photo-1508614589041-895b88991e3e?q=80&w=1000', title: 'Toma con Drone' },
        { type: 'video', url: 'https://www.w3schools.com/html/movie.mp4', title: 'Vuelo Cinematográfico' }
      ]
    }
  ];

  // 2. LOGOS DE CLIENTES RECONOCIDOS (PNG/SVG optimizados para fondo oscuro)
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

  const filteredServices = activeTab === 'all' ? services : services.filter(s => s.category === activeTab);

  const openLightbox = (gallery, index = 0) => {
    setSelectedGallery(gallery);
    setCurrentIndex(index);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedGallery(null);
    document.body.style.overflow = 'auto';
  };

  const nextMedia = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % selectedGallery.length);
  };

  const prevMedia = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev - 1 + selectedGallery.length) % selectedGallery.length);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-blue-500 selection:text-white">

      {/* Lightbox / Modal Multimedia */}
      {selectedGallery && (
        <div className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 transition-all animate-in fade-in duration-300">
          <button onClick={closeLightbox} className="absolute top-6 right-6 p-3 bg-white/10 rounded-full hover:bg-white/20 z-50 text-white">
            <X className="w-6 h-6" />
          </button>

          {selectedGallery.length > 1 && (
            <>
              <button onClick={prevMedia} className="absolute left-4 p-4 hover:bg-white/10 rounded-full text-white hidden md:block transition-all">
                <ChevronLeft className="w-10 h-10" />
              </button>
              <button onClick={nextMedia} className="absolute right-4 p-4 hover:bg-white/10 rounded-full text-white hidden md:block transition-all">
                <ChevronRight className="w-10 h-10" />
              </button>
            </>
          )}

          <div className="max-w-5xl w-full h-full flex flex-col items-center justify-center">
            <div className="relative w-full h-[70vh] flex items-center justify-center">
              {selectedGallery[currentIndex].type === 'video' ? (
                <video src={selectedGallery[currentIndex].url} controls autoPlay className="max-w-full max-h-full rounded-2xl shadow-2xl" />
              ) : (
                <img src={selectedGallery[currentIndex].url} className="max-w-full max-h-full object-contain rounded-2xl border border-white/10 shadow-2xl" alt="Vista" />
              )}
            </div>
            <div className="mt-6 text-center px-4">
              <p className="text-xl font-bold text-white tracking-tight">{selectedGallery[currentIndex].title}</p>
              <p className="text-slate-400 text-sm mt-1">{currentIndex + 1} de {selectedGallery.length}</p>
            </div>
          </div>
        </div>
      )}

      {/* Navegación (Centrado en móviles) */}
      <nav className="fixed top-0 w-full z-50 bg-slate-950/80 backdrop-blur-md border-b border-white/10 px-6 py-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2 sm:gap-0">
          <div className="flex flex-col items-center sm:items-start">
            <span className="text-2xl font-black text-blue-500 tracking-tighter">PINPOL EVENTOS</span>
            <span className="text-[10px] uppercase text-slate-400 tracking-[0.2em]">Lima - Producción Audiovisual</span>
          </div>
          <div className="flex gap-4 sm:gap-8 items-center mt-2 sm:mt-0">
            <a href="#clientes" className="text-xs font-bold uppercase tracking-widest text-slate-400 hover:text-white transition-colors">Clientes</a>
            <a href="https://wa.me/51998068412" className="bg-blue-600 px-5 py-2 rounded-full font-bold text-xs sm:text-sm shadow-lg shadow-blue-600/20 hover:bg-blue-500 transition-all whitespace-nowrap">Presupuesto Express</a>
          </div>
        </div>
      </nav>

      {/* Hero (Centrado Garantizado) */}
      <section className="pt-48 sm:pt-40 pb-16 px-6 text-center flex flex-col items-center justify-center">
        <div className="inline-block bg-blue-600/10 border border-blue-500/20 px-4 py-1 rounded-full text-blue-400 text-xs font-bold uppercase tracking-widest mb-6">
          Equipamiento de última tecnología
        </div>
        <h1 className="text-5xl md:text-7xl font-bold mb-4 tracking-tight">Portafolio <span className="text-blue-500 text-shadow-glow">Interactivo</span></h1>
        <p className="text-slate-400 max-w-xl mx-auto text-lg leading-relaxed px-2">
          Explora nuestros proyectos recientes. Haz clic en las tarjetas para ver el despliegue técnico y audiovisual de cada servicio.
        </p>
      </section>

      {/* SECCIÓN CLIENTES (REEL HORIZONTAL CORREGIDO PARA MÓVIL) */}
      <section id="clientes" className="py-12 bg-slate-900/40 border-y border-white/5 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 mb-8 text-center text-[10px] font-black uppercase tracking-[0.3em] text-blue-500/60 flex justify-center w-full">
          Marcas que confían en nuestra producción
        </div>

        {/* Contenedor del Scroll (Centrado y forzando fila) */}
        <div className="flex items-center w-full overflow-hidden relative">
          <div className="animate-scroll flex items-center gap-6 px-6"> {/* flex y items-center vitales aquí */}
            {/* Duplicamos los logos para asegurar el bucle sin cortes */}
            {[...clients, ...clients, ...clients].map((client, i) => (
              <div key={i} className="flex-none w-28 md:w-56 h-20 md:h-24 flex items-center justify-center mx-2 sm:mx-4">
                <img
                  src={client.logo}
                  alt={client.name}
                  className="max-h-8 md:max-h-12 object-contain grayscale opacity-30 hover:opacity-100 hover:grayscale-0 transition-all duration-700"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Filtros */}
      <div className="flex justify-center gap-2 my-16 px-6 overflow-x-auto no-scrollbar pb-4">
        {['all', 'streaming', 'karaoke', 'rental', 'visuals', 'tech'].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-6 py-3 rounded-2xl text-xs font-bold uppercase tracking-wider transition-all border whitespace-nowrap ${activeTab === tab ? 'bg-blue-600 text-white border-blue-500 shadow-lg shadow-blue-600/30' : 'bg-slate-900 text-slate-500 border-white/5 hover:border-white/20'}`}
          >
            {tab === 'all' ? 'Ver Todo' : tab}
          </button>
        ))}
      </div>

      {/* Grid de Servicios */}
      <section className="max-w-7xl mx-auto px-6 pb-40">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredServices.map((service) => (
            <div key={service.id} onClick={() => openLightbox(service.gallery)} className="group bg-slate-900 border border-white/5 rounded-[2.5rem] overflow-hidden hover:border-blue-500/50 transition-all cursor-pointer relative shadow-2xl flex flex-col">
              <div className="relative h-60 sm:h-72 overflow-hidden">
                <img src={service.gallery[0].type === 'video' ? 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30' : service.gallery[0].url} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[2000ms]" alt={service.title} />

                {/* Indicador de Video en el Grid */}
                {service.gallery[0].type === 'video' && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                    <div className="bg-blue-600/90 p-5 rounded-full shadow-2xl scale-90 group-hover:scale-110 transition-transform duration-500">
                      <Play className="w-8 h-8 text-white fill-white" />
                    </div>
                  </div>
                )}

                <div className="absolute bottom-6 left-6 flex items-center gap-3 bg-white text-slate-950 px-5 py-2.5 rounded-full text-[10px] font-black uppercase shadow-2xl transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <Maximize className="w-3.5 h-3.5 text-blue-600" /> Explorar Multimedia
                </div>
              </div>

              <div className="p-6 sm:p-8 flex flex-col flex-grow">
                <div className="flex items-center gap-4 mb-5">
                  <div className="p-4 bg-blue-600/10 rounded-2xl text-blue-500 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500 flex-none">{service.icon}</div>
                  <h3 className="text-xl sm:text-2xl font-bold group-hover:text-blue-400 transition-colors">{service.title}</h3>
                </div>
                <p className="text-slate-400 text-sm mb-6 flex-grow leading-relaxed line-clamp-3">{service.description}</p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {service.features.map((f, i) => (
                    <div key={i} className="flex items-center gap-1.5 text-[9px] font-black text-slate-500 bg-white/5 px-2.5 py-1.5 rounded-lg border border-white/5 uppercase tracking-tighter">
                      <CheckCircle className="w-3 h-3 text-blue-600" /> {f}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Botón WhatsApp (Optimizado para móvil) */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 w-full px-6 flex justify-center">
        <a href="https://wa.me/51998068412" className="flex items-center gap-3 bg-green-600 hover:bg-green-500 text-white px-8 sm:px-10 py-4 sm:py-5 rounded-full sm:rounded-[2.5rem] font-black text-base sm:text-lg shadow-[0_20px_50px_rgba(22,163,74,0.4)] transition-all hover:scale-105 active:scale-95 group whitespace-nowrap">
          <MessageCircle className="w-6 h-6 sm:w-7 sm:h-7 group-hover:rotate-12 transition-transform" />
          Reserva tu Fecha en WhatsApp
        </a>
      </div>
    </div>
  );
};

export default App;