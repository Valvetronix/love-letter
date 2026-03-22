# Love Letter

Base estatica en React + Vite para una web romantica de aniversario con flujo interno de pantallas, loader reutilizable y galeria responsive.

## Estructura

```text
.
|-- .github/workflows/deploy.yml
|-- public/images/
|   |-- backgrounds/
|   `-- gallery/
|-- src/
|   |-- components/
|   |-- config/
|   |-- hooks/
|   |-- lib/
|   `-- styles/
|-- Figma/                # referencia original, no participa del build
|-- index.html
|-- package.json
`-- vite.config.js
```

## Logica de pantallas

La app usa una sola pagina y dos estados internos:

- `currentScreen`: `intro`, `letter`, `gift`, `gallery`
- `loadingState`: activa el loader reutilizable antes de avanzar

Cada boton principal dispara una transicion con mensaje y duracion configurables desde [`src/config/siteContent.js`](/f:/Projects/love-letter/src/config/siteContent.js).

## Editar contenido

- Textos, labels y tiempos del loader: [`src/config/siteContent.js`](/f:/Projects/love-letter/src/config/siteContent.js)
- Fondos: `public/images/backgrounds/`
- Fotos de la galeria: `public/images/gallery/`
- Estilos globales y variables: [`src/styles/index.css`](/f:/Projects/love-letter/src/styles/index.css) y [`src/styles/variables.css`](/f:/Projects/love-letter/src/styles/variables.css)

## Correr en local

```bash
npm install
npm run dev
```

La app quedara disponible en la URL que muestre Vite, normalmente `http://localhost:5173`.

## Build

```bash
npm run build
```

El resultado se genera en `dist/`.

Si queres revisar el build localmente:

```bash
npm run preview
```

## Deploy en GitHub Pages

1. Subi este proyecto a un repositorio en GitHub.
2. En GitHub entra a `Settings > Pages`.
3. En `Build and deployment`, elegi `GitHub Actions`.
4. Hace push a la rama `main`.
5. GitHub ejecutara el workflow [`deploy.yml`](/f:/Projects/love-letter/.github/workflows/deploy.yml) y publicara `dist/` gratis en GitHub Pages.

## Nota sobre assets y rutas

El proyecto usa `base: './'` en [`vite.config.js`](/f:/Projects/love-letter/vite.config.js), asi que los assets del build funcionan correctamente tanto en local como en GitHub Pages sin routing multipagina.
