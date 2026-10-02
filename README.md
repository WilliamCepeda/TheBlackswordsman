# The Blackswordsman — Portfolio

Portfolio personal de Willian Santiago Cepeda Orduz, desarrollado con Angular y presentado como una experiencia editorial inspirada en un libro. El proyecto reúne experiencia profesional, proyectos académicos, competencias técnicas y datos de contacto en una interfaz responsive.

## Qué incluye

- Portada tipo hero con navegación hacia el contenido.
- Páginas de presentación, experiencia, proyectos, competencias y contacto.
- Navegación por menú, footer, teclado y swipe horizontal en dispositivos táctiles.
- Rutas lazy con componentes standalone de Angular.
- Traducciones completas en español e inglés.
- Diseño responsive con una composición de libro editorial, tarjetas de competencias y páginas de detalle de proyectos.
- Perfil de contacto con fotografía, correo, LinkedIn y GitHub.

## Contenido del portfolio

La sección de proyectos incluye experiencias profesionales y académicas documentadas en páginas de introducción, reto, contribución, stack técnico y resultado:

- Monitorización industrial con PLC, Azure Event Bus, Node.js, TypeScript, Angular y WebSockets.
- Gemelo digital de una instalación KNX con backend Node.js, frontend Angular y aplicación local Electron.
- UR Chess, integración entre software de ajedrez y brazos robóticos Universal Robots.
- RPG 2D y shooter 3D desarrollados con Unity.
- YAYA, aplicación de recetas con React Native y backend Java.

La sección de competencias está basada en el portafolio profesional del CV e incluye lenguajes, frameworks, bases de datos, mensajería e IoT, cloud, integración, sistemas, idiomas y metodología.

## Tecnologías principales

- Angular 22, TypeScript y SCSS.
- Angular Router con carga diferida.
- `@ngx-translate/core` y `@ngx-translate/http-loader`.
- RxJS y servicios standalone.
- Node.js, Fastify, WebSockets, Electron, MongoDB, Azure y Unity como parte del contenido profesional y académico mostrado.

## Requisitos

- Node.js `22.22.3+` — también compatible con Node 24.15+ o 26+.
- npm incluido con Node.js.

## Puesta en marcha

```bash
npm install
npm start
```

La aplicación estará disponible en `http://localhost:4200`.

## Comandos

```bash
npm start        # Servidor de desarrollo
npm run build    # Build optimizada en dist/
npm test         # Tests unitarios
```

## Estructura del proyecto

```text
src/
├── assets/
│   ├── img/                  # Fotografía de perfil
│   └── languages/            # Diccionarios JSON por idioma
│       ├── en/translation.json
│       └── es/translation.json
└── app/
    ├── core/                 # Modelos y servicios singleton
    ├── data/                 # Contenido tipado de experiencia y proyectos
    ├── features/             # Páginas cargadas de forma diferida
    │   ├── about/
    │   ├── contact/
    │   ├── cover/
    │   ├── experience/
    │   ├── projects/
    │   └── skills/
    ├── layout/               # Shell, header, navegación, contenido y footer
    └── shared/               # Componentes reutilizables

public/
└── assets/
    ├── images/               # Imágenes visuales de la interfaz
    └── svg/                  # Recursos SVG decorativos
```

## Internacionalización

`ngx-translate` carga los diccionarios desde:

```text
src/assets/languages/{language}/translation.json
```

Los idiomas disponibles son `es` y `en`. El idioma seleccionado se guarda en `localStorage` y también se sincroniza con el atributo `lang` del documento.

Para modificar textos, edita los archivos JSON de ambos idiomas y conserva las mismas claves en cada diccionario.

## Recursos visuales y licencias

- Las imágenes externas utilizadas en `public/assets/images` proceden de [Pixabay](https://pixabay.com/). Son recursos de uso gratuito según la [Pixabay Content License](https://pixabay.com/service/license-summary/); cualquier sustitución o nuevo recurso debe respetar las condiciones de su licencia.
- Los iconos y elementos vectoriales de `public/assets/svg` proceden de [SVG Repo](https://www.svgrepo.com/). SVG Repo reúne recursos con licencias distintas, por lo que se debe revisar la licencia individual de cada SVG antes de redistribuirlo.
- La fotografía `src/assets/img/me.jpeg` es un recurso personal proporcionado para este portfolio y no forma parte de Pixabay ni de SVG Repo.

## Personalización

1. Actualiza los textos traducibles en `src/assets/languages/es/translation.json` y `en/translation.json`.
2. Modifica los proyectos y la experiencia en `src/app/data`.
3. Sustituye `src/assets/img/me.jpeg` si necesitas cambiar la fotografía de perfil.
4. Actualiza los enlaces y el correo en `src/app/features/contact/contact.component.html`.
5. Añade o reemplaza recursos visuales en `public/assets` respetando sus licencias.

## Despliegue

La aplicación genera un build estático mediante Angular y puede desplegarse en servicios como Vercel, Cloudflare Pages o Netlify. No necesita un backend para funcionar como portfolio.
