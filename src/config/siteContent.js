export const siteContent = {
  meta: {
    title: 'Carta de aniversario',
  },
  transitions: {
    intro: {
      target: 'letter',
      message: 'Abriendo carta...',
      durationMs: 2800,
    },
    letter: {
      target: 'gift',
      message: 'Abriendo regalo...',
      durationMs: 2600,
    },
    gift: {
      target: 'gallery',
      message: 'Cargando galeria...',
      durationMs: 2400,
    },
  },
  screens: {
    intro: {
      eyebrow: 'Aniversario',
      title: 'Una carta para abrir con calma',
      description:
        'Base funcional y editable para que despues reemplaces fondos, espaciados, tipografias, colores y textos finales segun tu diseno de Figma.',
      helper:
        'Esta portada esta pensada para que mantengas el gesto principal en mobile: un CTA grande, claro y comodo.',
      buttonLabel: 'Abrir carta',
      background: 'images/backgrounds/lavender-field.png',
    },
    letter: {
      eyebrow: 'Carta',
      title: 'Tu carta principal',
      intro:
        'Esta seccion aloja el cuerpo de la carta. Los parrafos estan centralizados aca para que luego puedas cambiar el contenido sin tocar el layout.',
      paragraphs: [
        'Placeholder para el comienzo de la carta. Aca podras pegar tu version final respetando la jerarquia visual de tu diseno.',
        'El bloque esta preparado para texto largo en mobile, con scroll natural, ancho comodo de lectura y boton final separado del contenido.',
        'Tambien podes dividir la carta en varios parrafos, sumar una firma o ajustar el espaciado desde estilos sin cambiar la logica de la app.',
      ],
      signature: 'Con amor, Tu nombre',
      buttonLabel: 'Abrir regalo',
      background: 'images/backgrounds/letter-placeholder.svg',
    },
    gift: {
      eyebrow: 'Regalo',
      title: 'Tu seccion de regalo',
      description:
        'Este bloque funciona como segunda parada de la experiencia. Puede alojar un texto corto, una dedicatoria, una sorpresa visual o el contenido que despues definas en Figma.',
      notes: [
        'El layout mantiene un ancho controlado para leer bien en celular.',
        'El CTA final queda al final de la seccion y reutiliza el mismo componente de boton.',
        'Todo el contenido visible se edita desde este archivo.',
      ],
      buttonLabel: 'Ver galeria',
      background: 'images/backgrounds/gift-placeholder.svg',
    },
    gallery: {
      eyebrow: 'Galeria',
      title: 'Recuerdos y fotos',
      description:
        'La galeria usa un grid responsive y scroll vertical fluido. Solo tenes que reemplazar las rutas de abajo por tus fotos reales dentro de public/images/gallery.',
      background: 'images/backgrounds/gallery-placeholder.svg',
      images: [
        { src: 'images/gallery/photo-01.svg', alt: 'Placeholder de galeria 01', label: 'Foto 01' },
        { src: 'images/gallery/photo-02.svg', alt: 'Placeholder de galeria 02', label: 'Foto 02' },
        { src: 'images/gallery/photo-03.svg', alt: 'Placeholder de galeria 03', label: 'Foto 03' },
        { src: 'images/gallery/photo-04.svg', alt: 'Placeholder de galeria 04', label: 'Foto 04' },
        { src: 'images/gallery/photo-05.svg', alt: 'Placeholder de galeria 05', label: 'Foto 05' },
        { src: 'images/gallery/photo-06.svg', alt: 'Placeholder de galeria 06', label: 'Foto 06' },
        { src: 'images/gallery/photo-07.svg', alt: 'Placeholder de galeria 07', label: 'Foto 07' },
        { src: 'images/gallery/photo-08.svg', alt: 'Placeholder de galeria 08', label: 'Foto 08' },
      ],
    },
  },
}
