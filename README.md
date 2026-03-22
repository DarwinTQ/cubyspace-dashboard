# Cubyspace Dashboard

Dashboard moderno y responsivo para Cubyspace, una plataforma de monitoreo y análisis de datos en tiempo real.

## Descripción del Proyecto

Cubyspace Dashboard es la interfaz web principal para visualizar, analizar y gestionar datos de sensores y sistemas conectados. Proporciona una experiencia de usuario intuitiva con características avanzadas de visualización de datos.

## Requisitos

- Node.js 16+ (con npm o tu gestor de paquetes preferido)
- Git

## Instalación y Configuración

### 1. Clonar el repositorio

```sh
git clone <YOUR_GIT_URL>
cd cubyspace-dashboard
```

### 2. Instalar dependencias

```sh
npm install
# o si prefieres usar yarn
yarn install
```

### 3. Iniciar el servidor de desarrollo

```sh
npm run dev
```

El servidor estará disponible en `http://localhost:5173` (o el puerto que configure Vite).

### 4. Compilar para producción

```sh
npm run build
```

Los archivos compilados se ubicarán en la carpeta `dist/`.

## Stack Tecnológico

Este proyecto está construido con:

- **Vite** - Herramienta de construcción y servidor de desarrollo rápido
- **TypeScript** - Lenguaje tipado para mejor mantenibilidad
- **React 18** - Librería UI declarativa
- **shadcn-ui** - Componentes accesibles y personalizables
- **Tailwind CSS** - Framework CSS de utilidades
- **Recharts** - Librería para gráficos interactivos
- **Vitest** - Framework de testing moderno

## Estructura del Proyecto

```
src/
├── components/          # Componentes reutilizables
│   ├── dashboard/       # Componentes específicos del dashboard
│   ├── ui/             # Componentes UI base
│   └── NavLink.tsx     # Navegación
├── hooks/              # Custom React hooks
├── pages/              # Páginas de la aplicación
├── lib/                # Utilidades y funciones auxiliares
├── styles/             # Estilos globales
└── main.tsx            # Punto de entrada
```

## Desarrollo Local

Para trabajar localmente en el proyecto:

1. Clona el repositorio
2. Instala las dependencias con `npm install`
3. Inicia el servidor de desarrollo con `npm run dev`
4. Realiza tus cambios en los archivos fuente
5. Los cambios se recargarán automáticamente en el navegador

## Testing

Para ejecutar las pruebas unitarias:

```sh
npm run test
```

## Construcción y Deploy

### Construir la aplicación

```sh
npm run build
```

Esto generará los archivos optimizados en la carpeta `dist/`.

### Desplegar a producción

El proyecto puede desplegarse en cualquier servidor web estático o plataforma compatible (Vercel, Netlify, GitHub Pages, etc.):

1. Asegúrate de que la construcción sea exitosa con `npm run build`
2. Sube los archivos de `dist/` a tu servidor de hosting
3. Configura las rutas para redirigir a `index.html` (necesario para SPA)

## Características Principales

- 📊 **Visualización de Datos** - Gráficos interactivos en tiempo real
- 📱 **Diseño Responsivo** - Funciona perfectamente en dispositivos móviles y desktop
- ♿ **Accesibilidad** - Componentes accesibles siguiendo estándares WCAG
- 🎨 **Personalizable** - Tema y estilos adaptables
- ⚡ **Alto Rendimiento** - Optimizado con Vite y React

## Contribución

Si deseas contribuir al proyecto:

1. Crea una rama para tu feature (`git checkout -b feature/mi-feature`)
2. Realiza tus cambios y commits
3. Haz push a la rama (`git push origin feature/mi-feature`)
4. Abre un Pull Request

## Licencia

Este proyecto es parte de Cubyspace.

## Soporte

Para reportar bugs o sugerencias, por favor abre un issue en el repositorio.
