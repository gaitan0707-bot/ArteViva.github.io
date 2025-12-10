# 🎨 ArteViva - Centro Cultural de Artesanías Tradicionales de Panamá

**ArteViva** es un centro cultural dedicado a rescatar, enseñar y promover las artesanías tradicionales de Panamá. Celebramos nuestras raíces a través de talleres, exposiciones y experiencias creativas que conectan al público con la riqueza artesanal del país.

---

## 📋 Contenido del Proyecto

### Estructura de Carpetas

```
yuli/
├── index.html                 # Página principal
├── artista.html              # Perfiles de artesanos y descripciones de artesanías
├── contacto.html             # Formulario de contacto e información
├── eventos.html              # Agenda de eventos, inscripción y eventos externos
├── galeria.html              # Galería de obras
├── talleres.html             # Información sobre talleres disponibles
├── README.md                 # Este archivo
├── css/
│   ├── style.css             # Estilos principales (responsive design)
│   └── contactos.css         # Estilos específicos para página de contacto
├── js/
│   ├── main.js               # Script principal de navegación
│   ├── evento.js             # Validación y manejo del formulario de inscripción
│   ├── scripts_contactos.js  # Scripts para página de contacto

└── imagen/
    ├── logo.jpeg             # Logo de ArteViva
    ├── horarios.jpeg         # Imagen de horarios
    ├── tembleques_*.jpeg     # Imágenes de tembleques
    ├── mola_*.jfif           # Imágenes de molas
    ├── cutarra_*.jfif        # Imágenes de cutarras
    ├── indu_*.jfif           # Imágenes de indumentaria
    └── blanco_*.jpeg         # Imágenes adicionales
```

---

## 🚀 Páginas Principales

### **index.html** - Página de Inicio
- Presentación general del centro cultural ArteViva
- Sección de recomendaciones destacadas (Curso del mes, Evento destacado, Exposición activa)
- Llamados a la acción a otras secciones
- Navegación principal

### **artista.html** - Artistas y Artesanías
Perfiles de artesanos con descripciones detalladas:
- **María López** - Especialista en Tembleques
- **José Mendoza** - Artesano de Cutarras
- **Ibedis Morales** - Artesana de Mola
- **Lourdes Tejada** - Bordadora

Descripciones de cada artesanía:
- 🌸 **Tembleques** - Flores tradicionales de gala, historia y técnicas
- 👡 **Cutarras** - Calzado tradicional panameño
- 🧵 **Mola** - Arte textil de los Guna, simbolismo y proceso
- 👗 **Indumentaria Panameña** - Tipos de polleras, bordados y diseños

### **contacto.html** - Contacto
- Formulario de contacto con validación
- Información de dirección física con mapa de Google Maps integrado
- Horarios de atención con imagen
- Enlaces a redes sociales
- Opción de contacto por WhatsApp

### **eventos.html** - Eventos
- **Agenda**: Tabla de eventos próximos con fechas, tipos y lugares
- **Próximos Eventos**: Tarjetas con detalles de eventos y botones de inscripción
  - Feria Artesanal "Colores de mi Tierra"
  - Clase Maestra: Tembleques de Gala
  - Inauguración: "Raíces de Panamá"
- **Inscripción**: Formulario con validación en tiempo real
  - Campo de nombre, correo, WhatsApp, evento y comentarios
  - Mensajes de éxito/error personalizados
  - Enlace directo a WhatsApp
- **Eventos Externos**: Miniaturas con imágenes de ferias y festivales

### **galeria.html** - Galería
Exhibición de obras artesanales (estructura disponible para expansión)

### **talleres.html** - Talleres
Información sobre talleres disponibles (estructura disponible para expansión)

---

## 🎨 Características Técnicas

### **CSS (Responsive Design)**
- **Variables de color** personalizadas en `:root`
- **Grid Layout** para maquetación flexible
- **Flexbox** para alineación y centrado
- **Breakpoints responsive** para móviles, tablets y desktop
- **Animaciones suaves** en botones, tarjetas y efectos hover
- **Tipografía profesional** con Google Fonts (Poppins, Roboto)

### **JavaScript**
- **Validación de formularios** en tiempo real
- **Manejo de eventos** para inscripción a eventos
- **Navegación responsiva** con menú burger para móviles
- **Prellenado automático** de campos desde botones de evento

### **Accesibilidad**
- Etiquetas `<label>` asociadas a inputs
- Atributos `aria-label` en enlaces sociales
- Estructura HTML semántica
- Contraste adecuado de colores

## 🎯 Paleta de Colores

```css
--primary-color:    #3a0ca3   /* Morado/Azul oscuro */
--secondary-color:  #4361ee   /* Azul vivo */
--accent-color:     #4cc9f0   /* Cian/Turquesa */
--light-color:      #f4f4f9   /* Gris claro */
--dark-color:       #1b263b   /* Azul muy oscuro */
--danger-color:     #f72585   /* Rojo/Magenta */
--success-color:    #48bfe3   /* Verde cian */
```

---

## 📝 Formularios

### **Contacto (contacto.html)**
- Nombre, Correo, Mensaje
- Validación de campos requeridos
- Enlace a WhatsApp opcional

### **Inscripción a Eventos (eventos.html)**
- Nombre, Correo, WhatsApp, Evento, Comentarios
- Validación de email
- Mensaje de confirmación personalizado
- Prellenado automático desde botones de eventos

---

## 🔗 Enlaces de Navegación

| Página | URL |
|--------|-----|
| Inicio | `index.html` |
| Artistas | `artista.html` |
| Contacto | `contacto.html` |
| Eventos | `eventos.html` |
| Galería | `galeria.html` |
| Talleres | `talleres.html` |

---

## 🖼️ Imágenes Utilizadas

La carpeta `imagen/` contiene:
- **Logo**: `logo.jpeg`
- **Tembleques**: `temblesques_*.jpeg`, `TEMBLEQUE_1.jpg`, `tembleques_*.jpeg`
- **Molas**: `Mola_*.jfif`, `mola_*.jpg`
- **Cutarras**: `cutarra_*.jfif`, `cutarras_*.jfif`, `cutarras.jpeg`
- **Indumentaria**: `indu_*.jfif`, `indumentaria_*.jfif`
- **Otros**: `blanco_*.jpeg`, `horarios.jpeg`

---

## 📲 Características Móvil

- **Menú burger responsivo** para pantallas < 768px
- **Grid adaptable** que se reorganiza en dispositivos pequeños
- **Fuentes escalables** y tamaños ajustados
- **Touch-friendly** - Botones y enlaces con suficiente espacio

---

## ✨ Próximas Mejoras Sugeridas

- [ ] Integrar envío de formularios a email o base de datos
- [ ] Añadir sistema de pago para talleres y eventos
- [ ] Galería con lightbox para zoom de imágenes
- [ ] Blog de noticias o artículos
- [ ] Sistema de reservas en línea
- [ ] Multi-idioma (ES/EN)
- [ ] SEO optimizado para motores de búsqueda

---

## 👨‍💻 Tecnologías Usadas

- **HTML5** - Estructura semántica
- **CSS3** - Estilos responsive y animaciones
- **JavaScript Vanilla** - Sin dependencias externas
- **Google Fonts** - Tipografía profesional
- **Font Awesome** - Iconos sociales
- **Google Maps Embed** - Mapa interactivo

---

## 📞 Contacto

Para consultas sobre ArteViva:
- 📧 Correo: (formulario en contacto.html)
- 📱 WhatsApp: Disponible en contacto.html
- 📍 Ubicación: Panamá (consulta en contacto.html)

---

## 📄 Licencia

Proyecto educativo y cultural. Uso personal permitido.

---

**Última actualización**: 3 de diciembre de 2025  
**Versión**: 1.0

