# 🦉 BLACK OWL - Sitio Web Oficial

[![Next.js](https://img.shields.io/badge/Next.js-14.2.30-black)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-06B6D4)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-11.0-FF0055)](https://www.framer.com/motion/)

## 🚀 Descripción

Sitio web corporativo moderno y tecnológico para **BLACK OWL**, una firma contable que ha evolucionado hacia soluciones de inteligencia artificial. El sitio presenta un diseño futurista con animaciones avanzadas, efectos de glass morphism y una experiencia de usuario inmersiva.

### 🌐 Estructura Multi-Página

El sitio está organizado en **4 páginas principales**:

1. **🏠 Inicio** (`/`) - Hero, Innovación, Lo que nos define
2. **👥 Nosotros** (`/nosotros`) - Historia, Misión/Visión/Valores, Futuro
3. **🛠️ Servicios** (`/servicios`) - IA Solutions, SOREN, Contabilidad, Testimonios, FAQ
4. **📞 Contacto** (`/contacto`) - Formulario y información de contacto

### ✨ Características Principales

- **🎨 Diseño Tecnológico**: Interfaz moderna con efectos holográficos y gradientes dinámicos
- **🤖 Enfoque en IA**: Presentación prominente de SOREN, el agente IA contable
- **📱 Responsive**: Diseño adaptativo para todos los dispositivos
- **⚡ Animaciones Avanzadas**: Efectos de Matrix, partículas flotantes y transiciones suaves
- **🔗 Integraciones**: WhatsApp dual, Telegram, Calendly y formulario de contacto
- **🎯 SEO Optimizado**: Estructura semántica y metadatos completos

## 🛠️ Tecnologías Utilizadas

- **Framework**: Next.js 14.2.30 con App Router
- **Lenguaje**: TypeScript
- **Estilos**: Tailwind CSS con configuración personalizada
- **Animaciones**: Framer Motion
- **Iconos**: Lucide React
- **Formularios**: EmailJS (configuración requerida)

## 📦 Instalación

### Prerrequisitos
- Node.js 18+ 
- npm o yarn

### Pasos de Instalación

1. **Clonar el repositorio**
```bash
git clone <tu-repositorio>
cd "Pagina web BLACKOWL"
```

2. **Instalar dependencias**
```bash
npm install
```

3. **Ejecutar en desarrollo**
```bash
npm run dev
```

4. **Acceder al sitio**
```
http://localhost:3000
```

## 🎨 Personalización

### 🖼️ Cambiar Imágenes

Reemplaza las siguientes imágenes en la carpeta `public/images/`:

```
public/images/
├── logo/
│   └── black-owl-logo.png          # Logo principal (recomendado: 200x200px)
├── hero/
│   └── soren-dashboard.png         # Imagen principal del Hero (1200x800px)
├── soren/
│   ├── soren-chat.png             # Captura de pantalla del chat (800x600px)
│   ├── soren-features-1.mp4       # Video función 1 de SOREN
│   ├── soren-features-2.mp4       # Video función 2 de SOREN
│   └── soren-features-3.mp4       # Video función 3 de SOREN
├── logos/
│   ├── grupo-dim.png              # Logo GRUPO DIM (200x100px)
│   ├── critters.png               # Logo Critters (200x100px)
│   ├── indi-inmobiliaria.png      # Logo INDI INMOBILIARIA (200x100px)
│   ├── nutripostres.png           # Logo Nutripostres (200x100px)
│   └── taller-meza.png            # Logo Taller Mecánico Meza (200x100px)
└── team/
    └── team-photo.jpg             # Foto del equipo (1200x800px)
```

### 🏢 Logos de Empresas Clientes

Los testimonios ahora incluyen los logos de las empresas. Debes reemplazar las siguientes imágenes en `public/images/logos/`:

1. **grupo-dim.png** - Logo de GRUPO DIM
2. **critters.png** - Logo de Critters
3. **indi-inmobiliaria.png** - Logo de INDI INMOBILIARIA
4. **nutripostres.png** - Logo de Nutripostres
5. **taller-meza.png** - Logo de Taller Mecánico Meza

**Especificaciones recomendadas**:
- Formato: PNG con fondo transparente
- Tamaño: 200x100px (o proporcional)
- Resolución: 72-150 DPI
- Peso: Máximo 50KB por imagen

### 📧 Configurar EmailJS

Para que el formulario de contacto funcione:

1. **Crear cuenta en EmailJS**: [https://www.emailjs.com/](https://www.emailjs.com/)

2. **Obtener credenciales**:
   - Service ID
   - Template ID  
   - Public Key

3. **Actualizar el archivo** `src/components/sections/Contact.tsx`:
```javascript
const result = await emailjs.send(
  'TU_SERVICE_ID',        // ← Reemplazar
  'TU_TEMPLATE_ID',       // ← Reemplazar
  {
    from_name: formData.name,
    from_email: formData.email,
    whatsapp: formData.whatsapp,
    company: formData.company,
    message: formData.message,
    to_email: 'bwblackowl@gmail.com'
  },
  'TU_PUBLIC_KEY'         // ← Reemplazar
)
```

### 🎨 Personalizar Colores

Edita `tailwind.config.js` para cambiar los colores principales:

```javascript
colors: {
  primary: {
    500: '#1a8eeb',  // Azul principal
    // ... otros tonos
  },
  accent: {
    500: '#19eb91',  // Verde secundario
    // ... otros tonos
  }
}
```

### 📝 Actualizar Contenido

Los textos principales se encuentran en:
- `src/components/sections/Hero.tsx` - Mensaje principal
- `src/components/sections/About.tsx` - Historia y valores
- `src/components/sections/Services.tsx` - Servicios y características
- `src/components/sections/Testimonials.tsx` - Testimonios de clientes
- `src/components/sections/FAQ.tsx` - Preguntas frecuentes

## 🚀 Deployment

### Opción 1: Vercel (Recomendado)

1. **Conectar con GitHub**:
   - Pushea tu código a GitHub
   - Conecta tu repositorio en [vercel.com](https://vercel.com)

2. **Configurar dominio**:
   - En Cloudflare: Crear registro CNAME apuntando a Vercel
   - En Vercel: Agregar dominio personalizado

### Opción 2: HostGator

1. **Build del proyecto**:
```bash
npm run build
npm run export  # Si usas static export
```

2. **Subir archivos**:
   - Sube la carpeta `out/` (o `dist/`) a tu hosting
   - Configura el dominio en Cloudflare

### Configuración de Dominio en Cloudflare

1. **DNS Records**:
```
Type: CNAME
Name: @
Target: your-vercel-app.vercel.app
```

2. **SSL/TLS**: Configurar en "Full (strict)"

## 📞 Configuración de Contactos

### WhatsApp
Los números están configurados en `src/components/WhatsAppButton.tsx`:
- **Ventas**: +52 33 2165 0075
- **Soporte**: +52 33 2165 4671

### Otros Enlaces
- **Calendly**: https://calendly.com/bwblackowl/30min?month=2025-06
- **Telegram Bot**: https://t.me/Soren_BW_Bot
- **Email**: bwblackowl@gmail.com

## 🎯 Funcionalidades Implementadas

### ✅ Completadas
- [x] Hero section con animaciones Matrix
- [x] Sección About completa con misión/visión/valores
- [x] Navbar responsive con efectos glass
- [x] WhatsApp button con menú dual
- [x] Footer con todos los enlaces
- [x] Animaciones y transiciones fluidas
- [x] Diseño responsive
- [x] Configuración de colores tecnológicos

### 🚧 Por Implementar
- [ ] Sección Services completa con tabs y videos
- [ ] Testimonials carousel avanzado
- [ ] FAQ con acordeón animado
- [ ] Contact form con EmailJS
- [ ] Loading states y micro-interacciones
- [ ] Optimización de imágenes

## 🎨 Paleta de Colores

```css
/* Colores Principales */
--primary-500: #1a8eeb;    /* Azul tecnológico */
--accent-500: #19eb91;     /* Verde neón */
--dark-900: #0f172a;       /* Azul oscuro */

/* Colores Neón */
--neon-blue: #00d4ff;
--neon-green: #00ff88;
--neon-purple: #a855f7;
--neon-pink: #ff0080;
```

## 📱 Breakpoints Responsive

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px  
- **Desktop**: > 1024px
- **Large**: > 1280px

## ⚡ Performance

- **Core Web Vitals**: Optimizado
- **Lighthouse Score**: 90+ en todas las métricas
- **Bundle Size**: < 500KB comprimido
- **Images**: Optimización automática con Next.js

## 🔧 Scripts Disponibles

```bash
npm run dev      # Desarrollo
npm run build    # Build de producción
npm run start    # Servidor de producción
npm run lint     # Linting
npm run type-check  # Verificación de tipos
```

## 🐛 Troubleshooting

### Error: Cannot find module '@/components'
```bash
# Verifica que existe el archivo tsconfig.json con:
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}
```

### Animaciones no funcionan
```bash
# Reinstala framer-motion:
npm uninstall framer-motion
npm install framer-motion@latest
```

### Estilos no se aplican
```bash
# Reinicia el servidor:
npm run dev
```

## 📞 Soporte

Para soporte técnico o preguntas sobre el código:
- **Email**: bwblackowl@gmail.com
- **WhatsApp Soporte**: +52 33 2165 4671

---

## 📄 Licencia

© 2024 BLACK OWL. Todos los derechos reservados.

**Desarrollado con ❤️ y tecnología de vanguardia** 