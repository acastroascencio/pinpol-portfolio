import React, { useState, useEffect } from 'react';
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

  // Datos de ejemplo con imágenes profesionales para previsualizar el diseño
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
        { type: 'image', url: 'https://images.unsplash.com/photo-1478737270239-2f02b77fc618?q=80&w=1000', title: 'Setup Audiovisual' },
        { type: 'image', url: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=1000', title: 'Cámaras 4K' }
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
        { type: 'image', url: 'https://images.unsplash.com/photo-1527977966376-1c8408f9f108?q=80&w=1000', title: 'Gimbal de Cine' }
      ]
    }
  ];

  const filteredServices = activeTab === 'all'
    ? services
    : services.filter(s => s.category === activeTab);

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

      {/* Lightbox / Modal de Galería */}
      {selectedGallery && (
        <div className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 transition-all animate-in fade-in duration-300">
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 p-3 bg-white/10 rounded-full hover:bg-white/20 transition-all z-50 text-white"
          >
            <X className="w-6 h-6" />
          </button>

          {selectedGallery.length > 1 && (
            <>
              <button onClick={prevMedia} className="absolute left-4 p-4 hover:bg-white/10 rounded-full transition-all text-white hidden md:block">
                <ChevronLeft className="w-10 h-10" />
              </button>
              <button onClick={nextMedia} className="absolute right-4 p-4 hover:bg-white/10 rounded-full transition-all text-white hidden md:block">
                <ChevronRight className="w-10 h-10" />
              </button>
            </>
          )}

          <div className="max-w-5xl w-full h-full flex flex-col items-center justify-center">
            <div className="relative w-full h-[70vh] flex items-center justify-center">
              <img
                src={selectedGallery[currentIndex].url}
                className="max-w-full max-h-full object-contain rounded-xl shadow-2xl border border-white/10"
                alt="Vista de servicio"
              />
            </div>
            <div className="mt-6 text-center">
              <p className="text-xl font-bold text-white">{selectedGallery[currentIndex].title}</p>
              <p className="text-slate-400 text-sm mt-1">{currentIndex + 1} de {selectedGallery.length}</p>

              {/* Navegación móvil */}
              <div className="flex gap-4 mt-6 md:hidden">
                <button onClick={prevMedia} className="bg-white/10 p-3 rounded-full"><ChevronLeft /></button>
                <button onClick={nextMedia} className="bg-white/10 p-3 rounded-full"><ChevronRight /></button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Navegación */}
      <nav className="fixed top-0 w-full z-50 bg-slate-950/80 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex flex-col">
            <span className="text-2xl font-black tracking-tighter text-blue-500">PINPOL EVENTOS</span>
            <span className="text-[10px] tracking-[0.3em] uppercase text-slate-400">Lima - Producción Audiovisual</span>
          </div>
          <div className="hidden sm:flex gap-4">
            <a href="https://wa.me/51998068412" className="bg-blue-600 px-6 py-2 rounded-full font-bold hover:bg-blue-500 transition-all text-sm shadow-lg shadow-blue-600/20">
              Presupuesto Express
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-16 px-6 text-center">
        <div className="inline-block bg-blue-600/10 border border-blue-500/20 px-4 py-1 rounded-full text-blue-400 text-xs font-bold uppercase tracking-widest mb-6">
          Equipamiento de última tecnología
        </div>
        <h1 className="text-5xl md:text-7xl font-bold mb-4 tracking-tight">Portafolio <span className="text-blue-500">Interactivo</span></h1>
        <p className="text-slate-400 max-w-xl mx-auto text-lg leading-relaxed">
          Explora nuestros proyectos recientes. Haz clic en las tarjetas para ver el despliegue técnico de cada servicio.
        </p>
      </section>

      {/* Filtros */}
      <div className="flex justify-center gap-2 mb-16 px-6 overflow-x-auto pb-4 no-scrollbar">
        {['all', 'streaming', 'karaoke', 'rental', 'visuals', 'tech'].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-6 py-3 rounded-2xl text-xs font-bold uppercase tracking-wider transition-all whitespace-nowrap border ${activeTab === tab
                ? 'bg-blue-600 text-white border-blue-500 shadow-lg shadow-blue-600/30'
                : 'bg-slate-900 text-slate-500 border-white/5 hover:border-white/20'
              }`}
          >
            {tab === 'all' ? 'Ver Todo' : tab}
          </button>
        ))}
      </div>

      {/* Grid de Servicios */}
      <section className="max-w-7xl mx-auto px-6 pb-40">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              onClick={() => openLightbox(service.gallery)}
              className="group bg-slate-900 border border-white/5 rounded-[2.5rem] overflow-hidden hover:border-blue-500/50 transition-all cursor-pointer shadow-2xl relative"
            >
              {/* Thumbnail con Overlay */}
              <div className="relative h-72 overflow-hidden">
                <img
                  src={service.gallery[0].url}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                  alt={service.title}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-80 group-hover:opacity-40 transition-opacity"></div>

                {/* Botón Flotante */}
                <div className="absolute bottom-6 left-6 flex items-center gap-3 bg-white text-slate-950 px-4 py-2 rounded-full text-xs font-black uppercase shadow-xl transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all">
                  <Maximize className="w-4 h-4 text-blue-600" /> Explorar Galería
                </div>
              </div>

              <div className="p-8">
                <div className="flex items-center gap-4 mb-5">
                  <div className="p-4 bg-blue-600/10 rounded-2xl text-blue-500 group-hover:bg-blue-600 group-hover:text-white transition-all">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold group-hover:text-blue-400 transition-colors">{service.title}</h3>
                </div>
                <p className="text-slate-400 text-sm mb-8 leading-relaxed line-clamp-2">
                  {service.description}
                </p>

                {/* Características destacadas */}
                <div className="flex flex-wrap gap-2">
                  {service.features.map((f, i) => (
                    <div key={i} className="flex items-center gap-2 text-[10px] font-bold text-slate-500 bg-white/5 px-3 py-1.5 rounded-lg border border-white/5">
                      <CheckCircle className="w-3 h-3 text-blue-600" /> {f}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Botón de Contacto Flotante */}
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-40 w-full px-6 flex justify-center">
        <a
          href="https://wa.me/51998068412"
          className="flex items-center gap-4 bg-green-600 hover:bg-green-500 text-white px-10 py-5 rounded-[2rem] font-black text-lg shadow-[0_20px_50px_rgba(22,163,74,0.4)] transition-all hover:scale-105 active:scale-95 group"
        >
          <MessageCircle className="w-7 h-7 group-hover:rotate-12 transition-transform" />
          Reserva tu Fecha en WhatsApp
        </a>
      </div>
    </div>
  );
};

export default App;