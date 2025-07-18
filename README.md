# 📘 PER App – Práctica para el examen oficial de Patrón de Embarcaciones de Recreo

Esta aplicación web permite estudiar y practicar el temario oficial del examen PER (Patrón de Embarcaciones de Recreo), simulando tanto el modo *repaso* como el *modo examen*.

---

## 🧭 Funcionalidades

- ✅ Modo Repaso: corrige al instante al seleccionar una opción
- ✅ Modo Examen: muestra el botón "Corregir examen" al final
- ✅ Navegación estructurada por tema y subtema (como "Luces")
- ✅ Preguntas aleatorias y resumen teórico incluido
- ✅ Botón "Volver" inteligente que respeta el árbol de navegación
- ✅ Diseño responsive básico y limpio

---

## 📂 Estructura de carpetas

```
per-app/
│
├── index.html               # Página inicial
├── temario.html             # Lista de temas
├── subtema.html             # Selección de subtemas (ej: luces)
├── tema.html                # Vista de preguntas por tema/subtema
├── preguntas.html           # Vista alternativa de preguntas
│
├── style.css                # Estilo global
│
├── data/                    # Preguntas en formato JSON
│   ├── luces.json
│   └── nomenclatura.json
│
└── logic/                   # JavaScript modular
    ├── backButton.js
    ├── navigation.js
    ├── temario.js
    ├── subtema.js
    ├── render.js
    └── events.js
```

---

## 📦 Cómo usar

1. Abre `index.html` con Live Server o en tu navegador local.
2. Selecciona un modo (repaso o examen).
3. Elige un tema → subtema → empieza a practicar.
4. En modo examen, puedes corregir al final.
5. Usa el botón "Volver" para navegar entre pantallas.

---

## 📁 Requisitos

- No requiere backend
- Funciona 100% en navegador moderno (Chrome, Firefox, Edge)
- Puedes alojarla en GitHub Pages, Netlify o localmente

---

## 📌 Temas incluidos

- Luces: diurnas, nocturnas, todas
- Nomenclatura (y más temas próximamente)

---

## 🚧 En desarrollo

- Mejora visual del estilo general
- Nuevos temas (balizamiento, RIPA, seguridad, etc.)
- Animaciones suaves entre pantallas
- Exportar resultados

---

## 📚 Créditos

Creado como herramienta de estudio personal para el examen PER Barcelona 2025.  
Si te ha sido útil, ¡compártela con tus compañeros de curso! 😊