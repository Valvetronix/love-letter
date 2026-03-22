import { useState, useEffect } from 'react';
import { Inicio } from './components/Inicio';
import { Loading } from './components/Loading';
import { Carta } from './components/Carta';
import { Regalo } from './components/Regalo';
import { Galeria } from './components/Galeria';

type Section = 'inicio' | 'loading1' | 'carta' | 'loading2' | 'regalo' | 'loading3' | 'galeria';

export default function App() {
  const [currentSection, setCurrentSection] = useState<Section>('inicio');

  useEffect(() => {
    // Duración de las pantallas de carga (entre 2.5 y 4 segundos)
    const loadingDuration = 3000;

    if (currentSection === 'loading1') {
      const timer = setTimeout(() => {
        setCurrentSection('carta');
      }, loadingDuration);
      return () => clearTimeout(timer);
    }

    if (currentSection === 'loading2') {
      const timer = setTimeout(() => {
        setCurrentSection('regalo');
      }, loadingDuration);
      return () => clearTimeout(timer);
    }

    if (currentSection === 'loading3') {
      const timer = setTimeout(() => {
        setCurrentSection('galeria');
      }, loadingDuration);
      return () => clearTimeout(timer);
    }
  }, [currentSection]);

  const handleOpenCarta = () => {
    setCurrentSection('loading1');
  };

  const handleOpenRegalo = () => {
    setCurrentSection('loading2');
  };

  const handleVerGaleria = () => {
    setCurrentSection('loading3');
  };

  return (
    <div className="size-full">
      {currentSection === 'inicio' && <Inicio onOpenCarta={handleOpenCarta} />}
      {currentSection === 'loading1' && <Loading message="abriendo…" />}
      {currentSection === 'carta' && <Carta onOpenRegalo={handleOpenRegalo} />}
      {currentSection === 'loading2' && <Loading message="preparando…" />}
      {currentSection === 'regalo' && <Regalo onVerGaleria={handleVerGaleria} />}
      {currentSection === 'loading3' && <Loading message="cargando galería…" />}
      {currentSection === 'galeria' && <Galeria />}
    </div>
  );
}
