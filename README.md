# Modelo de Proyectos

## Instalación

Si estás leyendo esto en GitHub, puedes hacer clic en el botón "Usar esta plantilla" arriba para crear un nuevo repositorio desde astroship hacia tu cuenta. Luego puedes hacer un `git clone` para clonarlo en tu sistema local.

Alternativamente, puedes clonar el proyecto directamente desde este repositorio hacia tu sistema local.

### 1. Clonar el repositorio

```bash
git clone https://github.com/surjithctly/astroship.git miNombreDeProyecto
# o
git clone https://github.com/surjithctly/astroship.git .
npm install
# o
yarn install
# o (recomendado)
pnpm install
npm run dev
# o
yarn dev
# o (recomendado)
pnpm dev
npm run preview
npm run build
# o
yarn preview
yarn build
# o (recomendado)
pnpm preview
pnpm build
pnpm astro ...
pnpm astro add
pnpm astro --help
##Estructura
/
├── public/
│   └── ...
├── src/
│   ├── components/
│   │   └── ...
│   ├── layouts/
│   │   └── ...
│   └── pages/
│       └── ...
└── package.json
