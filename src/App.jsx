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

  const clients = [
    { name: 'Apuesta Total', logo: '/assets/logos/logoapuestatotal.jpeg' },
    { name: 'Cenfo', logo: '/assets/logos/logocenfo.jpeg' },
    { name: 'Empleo', logo: '/assets/logos/logoempleo.jpeg' },
    { name: 'Gloria', logo: '/assets/logos/logogloria.png' },
    { name: 'Lab', logo: '/assets/logos/logolab.jpeg' },
    { name: 'Peña', logo: '/assets/logos/logopena.jpg' },
    { name: 'Prod', logo: '/assets/logos/logoprod.jpeg' },
    { name: 'SNI', logo: '/assets/logos/logosni.jpeg' },
    { name: 'Telefo', logo: '/assets/logos/logotelefo.jpeg' },
    { name: 'Turismo', logo: '/assets/logos/logoturismo.jpeg' },
  ];

  const services = [
    {
      id: 1,
      category: 'streaming',
      title: 'Streaming & Transmisión Pro',
      description: 'Transmisiones de alta fidelidad para eventos corporativos y sociales vía Zoom, YouTube y Facebook.',
      features: ['Switcher Blackmagic', 'Hollyland 4K Inalámbrico', 'Cámaras Profesionales'],
      icon: <Radio className="w-6 h-6" />,
      gallery: [
        { type: 'video', url: '/assets/streaming/streaming02.mp4', title: 'Producción en Vivo', thumbnail: '/assets/streaming/streaming02.jpeg' },
        { type: 'video', url: '/assets/streaming/streaming06.mp4', title: 'Control Técnico', thumbnail: '/assets/streaming/streaming06.jpeg' },
        { type: 'video', url: '/assets/streaming/streaming07.mp4', title: 'Switcher 4K', thumbnail: '/assets/streaming/streaming07.jpeg' },
        { type: 'image', url: '/assets/streaming/streaming12.jpeg', title: 'Setup Audiovisual' }
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
        { type: 'video', url: '/assets/streaming/karaoke08.mp4', title: 'Show de Karaoke', thumbnail: '/assets/streaming/karaoke10.jpeg' },
        { type: 'video', url: '/assets/streaming/karaoke09.mp4', title: 'Evento Karaoke', thumbnail: '/assets/streaming/karaoke10.jpeg' }
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
        { type: 'video', url: '/assets/streaming/sonido06.mp4', title: 'Sonido Line Array', thumbnail: '/assets/streaming/sonido06.jpeg' },
        { type: 'video', url: '/assets/streaming/sonido10.mp4', title: 'Mixer Digital', thumbnail: '/assets/streaming/sonido10.jpeg' }
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
        { type: 'video', url: '/assets/streaming/pantalla03.mp4', title: 'Pantallas LED', thumbnail: '/assets/streaming/pantalla03.jpeg' },
        { type: 'video', url: '/assets/streaming/pantalla04.mp4', title: 'Monitores de 60"', thumbnail: '/assets/streaming/pantalla04.jpeg' },
        { type: 'image', url: '/assets/streaming/proyeccion01.jpeg', title: 'Mapeo de Proyección' }
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
        { type: 'video', url: '/assets/streaming/drone05.mp4', title: 'Toma Aérea', thumbnail: '/assets/streaming/drone05.jpeg' }
      ]
    },
    {
      id: 6,
      category: 'lighting',
      title: 'Iluminación Escénica',
      description: 'Diseño de iluminación profesional para resaltar cada detalle de tu evento.',
      features: ['Cabezales Móviles', 'Consolas DMX', 'Ambientación LED'],
      icon: <Zap className="w-6 h-6" />,
      gallery: [
        { type: 'image', url: '/assets/streaming/luces07.jpeg', title: 'Setup de Iluminación' },
        { type: 'video', url: '/assets/streaming/luces11.mp4', title: 'Efectos Rítmicos', thumbnail: '/assets/streaming/luces07.jpeg' }
      ]
    }
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

      {/* Lightbox */}
      {selectedGallery && (
        <div className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 transition-all animate-in fade-in duration-300">
          <button onClick={closeLightbox} className="absolute top-6 right-6 p-3 bg-white/10 rounded-full text-white z-50"><X className="w-6 h-6" /></button>
          <div className="max-w-5xl w-full h-full flex flex-col items-center justify-center">
            <div className="relative w-full h-[70vh] flex items-center justify-center">
              {selectedGallery[currentIndex].type === 'video' ? (
                <video src={selectedGallery[currentIndex].url} controls autoPlay className="max-w-full max-h-full rounded-2xl shadow-2xl" />
              ) : (
                <img src={selectedGallery[currentIndex].url} className="max-w-full max-h-full object-contain rounded-2xl shadow-2xl" alt="Vista" />
              )}
            </div>
            <div className="mt-6 text-center px-4">
              <p className="text-xl font-bold text-white tracking-tight">{selectedGallery[currentIndex].title}</p>
            </div>
          </div>
        </div>
      )}

      {/* Navegación */}
      <nav className="fixed top-0 w-full z-50 bg-slate-950/95 backdrop-blur-xl border-b border-white/10 px-4 py-4 sm:py-5">
        <div className="max-w-7xl mx-auto flex flex-col items-center gap-4 sm:flex-row sm:justify-between sm:gap-0">
          <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
            <span className="text-xl sm:text-2xl font-black text-blue-500 tracking-tighter leading-tight">PINPOL EVENTOS</span>
            <span className="text-[8px] sm:text-[10px] uppercase text-slate-400 tracking-[0.2em]">Lima - Producción Audiovisual</span>
          </div>
          <div className="flex items-center gap-6">
            <a href="#clientes" className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-slate-400 hover:text-white">Clientes</a>
            <a href="https://wa.me/51998068412" className="bg-blue-600 px-5 py-2.5 rounded-full font-bold text-[10px] sm:text-sm shadow-lg shadow-blue-600/20 hover:bg-blue-500 transition-all whitespace-nowrap active:scale-95">Presupuesto Express</a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-64 sm:pt-48 pb-12 px-6 text-center flex flex-col items-center justify-center">
        <h1 className="text-4xl sm:text-7xl font-bold mb-4 tracking-tight leading-tight">Portafolio <span className="text-blue-500 text-shadow-glow">Interactivo</span></h1>
        <p className="text-slate-400 max-w-xl mx-auto text-base sm:text-lg leading-relaxed">Producción audiovisual de alto impacto para eventos corporativos.</p>
      </section>

      {/* Sección Logos */}
      <section id="clientes" className="mt-8 py-16 bg-slate-950 overflow-hidden relative">
        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-slate-950 to-transparent z-10"></div>
        <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-slate-950 to-transparent z-10"></div>
        <div className="flex items-center w-full overflow-hidden">
          <div className="animate-scroll flex items-center gap-8 px-8">
            {[...clients, ...clients, ...clients].map((client, i) => (
              <div key={i} className="flex-none w-52 md:w-64 h-32 md:h-40 flex items-center justify-center bg-white/[0.03] backdrop-blur-md border border-white/10 rounded-[2.5rem] p-6 transition-all hover:bg-white/[0.08] group">
                <img src={client.logo} alt={client.name} className="max-h-14 md:max-h-20 object-contain transition-transform group-hover:scale-110" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- FILTROS MEJORADOS: REGLA DE 3 Y FADE EFECT --- */}
      <div className="relative mt-20 mb-12 max-w-7xl mx-auto">
        {/* Degradado para que no se vea cortado a la derecha */}
        <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-slate-950 to-transparent z-10 pointer-events-none sm:hidden"></div>

        <div className="flex justify-start sm:justify-center gap-4 px-6 overflow-x-auto no-scrollbar snap-x snap-mandatory pb-6">
          {[
            { id: 'all', label: 'Todo' },
            { id: 'streaming', label: 'Streaming' },
            { id: 'karaoke', label: 'Karaoke' },
            { id: 'rental', label: 'Sonido' },
            { id: 'visuals', label: 'Pantallas' },
            { id: 'tech', label: 'Drones' },
            { id: 'lighting', label: 'Luces' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`
                snap-start flex-none
                w-[calc(33.33vw-2rem)] sm:w-auto
                min-w-[100px]
                px-6 py-3 rounded-2xl text-[11px] sm:text-xs font-bold uppercase transition-all border whitespace-nowrap 
                ${activeTab === tab.id ? 'bg-blue-600 text-white border-blue-500 shadow-lg' : 'bg-slate-900 text-slate-500 border-white/5'}
              `}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Grid de Servicios */}
      <section className="max-w-7xl mx-auto px-6 pb-44">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredServices.map((service) => (
            <div key={service.id} onClick={() => openLightbox(service.gallery)} className="group bg-slate-900 border border-white/5 rounded-[2.5rem] overflow-hidden hover:border-blue-500/50 transition-all cursor-pointer relative shadow-2xl flex flex-col">
              <div className="relative h-64 sm:h-72 overflow-hidden">
                <img
                  src={service.gallery[0].type === 'video' ? (service.gallery[0].thumbnail || '/assets/streaming/streaming02.jpeg') : service.gallery[0].url}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[2000ms]"
                  alt={service.title}
                />
                {service.gallery[0].type === 'video' && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                    <div className="bg-blue-600/90 p-5 rounded-full shadow-2xl"><Play className="w-8 h-8 text-white fill-white" /></div>
                  </div>
                )}
                <div className="absolute bottom-4 left-6 flex items-center gap-3 bg-white text-slate-950 px-5 py-2.5 rounded-full text-[10px] font-black uppercase"><Maximize className="w-3.5 h-3.5 text-blue-600" /> Explorar</div>
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-blue-600/10 rounded-xl text-blue-500">{service.icon}</div>
                  <h3 className="text-xl sm:text-2xl font-bold group-hover:text-blue-400 transition-colors leading-tight">{service.title}</h3>
                </div>
                <p className="text-slate-400 text-sm mb-6 flex-grow leading-relaxed line-clamp-3">{service.description}</p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {service.features.map((f, i) => (
                    <div key={i} className="flex items-center gap-1.5 text-[9px] font-black text-slate-500 bg-white/5 px-2.5 py-1.5 rounded-lg border border-white/5 uppercase"><CheckCircle className="w-3 h-3 text-blue-600" /> {f}</div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* WhatsApp */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 w-full px-6 flex justify-center">
        <a href="https://wa.me/51998068412" className="flex items-center gap-3 bg-green-600 hover:bg-green-500 text-white px-10 py-5 rounded-full font-black text-sm sm:text-lg shadow-2xl transition-all hover:scale-105 active:scale-95 group whitespace-nowrap"><MessageCircle className="w-6 h-6 group-hover:rotate-12 transition-transform" /> Reserva tu Fecha</a>
      </div>
    </div>
  );
};

export default App;