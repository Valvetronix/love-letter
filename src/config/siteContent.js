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
      background: 'images/backgrounds/lavender-field.png',
      title: 'Feliz Aniversario <3',
      buttonLabel: '~*~ ABRIR CARTA ~*~',
      topAscii: [
        '        .:*~*:._.:*~*:._.:*~*:.',
        '    .:*~  * <3 * <3 *  ~*:.',
        '.:*~*:._.:*~*:._.:*~*:._.:*~*:.',
      ],
      middleAscii: [
        '    <3<3<3  *  <3<3<3  *  <3<3<3',
        '  *  .:*~*:.  *  .:*~*:.  *',
        '    <3<3<3  *  <3<3<3  *  <3<3<3',
      ],
      bottomAscii: [
        '.:*~*:._.:*~*:._.:*~*:._.:*~*:.',
        '    * <3 * <3 * <3 * <3 *',
        '.:*~*:._.:*~*:._.:*~*:._.:*~*:.',
      ],
    },
    letter: {
      background: 'images/backgrounds/lavender-field.png',
      title: '.:*~*:. Mi Carta Para Ti .:*~*:.',
      intro: 'Querida persona especial,',
      paragraphs: [
        'Hoy quiero decirte lo mucho que significas para mi. Cada dia a tu lado es un regalo lleno de momentos hermosos que atesoro en mi corazon.',
        'Eres esa persona que hace que los dias ordinarios se conviertan en extraordinarios. Gracias por tu bondad, tu carino y por todos los recuerdos compartidos.',
        'Este espacio queda listo para que reemplaces el texto con tu carta final respetando el layout original de Figma.',
      ],
      signature: 'Con todo mi carino,<br />Tu nombre <3',
      buttonLabel: '*** ABRIR REGALO ***',
      topAscii: [
        '*~*~*  <3  *~*~*  <3  *~*~*',
        '  .:*~*:. .:*~*:. .:*~*:.',
        '*~*~*  <3  *~*~*  <3  *~*~*',
      ],
      dividerAscii: '<3<3<3 * <3<3<3 * <3<3<3 * <3<3<3',
      bottomAscii: [
        '*~*~*  <3  *~*~*  <3  *~*~*',
        '  .:*~*:. .:*~*:. .:*~*:.',
      ],
    },
    gift: {
      title: '*** TU REGALO ***',
      heading: '>>> He preparado algo muy especial para ti <<<',
      description:
        'Esta seccion conserva el look intenso y retro del diseno original. Queda lista para que reemplaces textos, detalles y contenido final.',
      notes: [
        '*** Una coleccion de momentos hermosos *** que he guardado con carino.',
        'Cada imagen puede representar algo especial: flores, paisajes, recuerdos o cualquier sorpresa que quieras mostrar despues.',
        '~ Las mejores cosas de la vida no son cosas, son momentos compartidos y recuerdos que duran para siempre ~',
      ],
      buttonLabel: '.:*~*:. VER GALERIA .:*~*:.',
      topAscii: [
        '=======================================',
        '  * <3 * <3 REGALO ESPECIAL <3 * <3 *',
        '=======================================',
      ],
      dividerAscii: '<3 * <3 * <3 * <3 * <3 * <3 * <3 * <3',
      bottomAscii: [
        '=======================================',
        '  *~*~*  <3  *~*~*  <3  *~*~*',
        '=======================================',
      ],
    },
    gallery: {
      background: 'images/backgrounds/lavender-field.png',
      title: '.:*~*:. GALERIA .:*~*:.',
      description:
        '<3 * Una coleccion de belleza natural * <3\n*** que quiero compartir contigo ***',
      topAscii: [
        '==========================================================',
        '  *~*~*  <3  GALERIA DE MOMENTOS  <3  *~*~*',
        '==========================================================',
      ],
      bottomAscii: [
        '<3<3<3<3<3<3<3<3<3<3<3<3<3<3<3<3<3<3<3<3<3',
        '*  Espero que hayas disfrutado este pequeno detalle  *',
        '<3<3<3<3<3<3<3<3<3<3<3<3<3<3<3<3<3<3<3<3<3',
      ],
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
