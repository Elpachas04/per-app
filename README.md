# 📘 PER App – Práctica para el examen oficial de Patrón de Embarcaciones de Recreo

Esta aplicación web permite estudiar y practicar el temario oficial del examen PER (Patrón de Embarcaciones de Recreo), simulando tanto el modo *repaso* como el *modo examen*.

---

## 🧭 Funcionalidades principales

- ✅ Modo Repaso: corrige al instante al seleccionar una opción  
- ✅ Modo Examen: muestra el botón "Corregir examen" al final  
- ✅ Navegación estructurada por tema y subtema (ej. "Luces")  
- ✅ Preguntas aleatorias y resumen teórico incluido  
- ✅ Botón "Volver" inteligente que respeta el árbol de navegación  
- ✅ Agrupación visual por tipo de luz (diurna, nocturna, todas)  
- ✅ Botón flotante "⬇ Ir al final"  
- ✅ Diseño responsive básico y limpio  

---

## 📂 Estructura del proyecto

```
per-app/
├── index.html               # Página inicial
├── temario.html             # Lista de temas
├── subtema.html             # Selección de subtemas (ej: luces)
├── tema.html                # Vista de preguntas por tema/subtema
├── preguntas.html           # Vista alternativa de preguntas
├── style.css                # Estilos globales
├── config.js                # Configuración global de modo y URL
├── app.js                   # Carga dinámica de preguntas y lógica principal
│
├── logic/                   # Lógica modular de la aplicación
│   ├── index.js
│   ├── temario.js
│   ├── subtema.js
│   ├── navigation.js
│   ├── backButton.js
│   ├── render.js
│   ├── events.js
│   ├── helpers.js
│   └── utils.js
│
├── data/                    # Preguntas en formato JSON por tema
│   ├── nomenclatura.json
│   ├── seguridad.json
│   ├── balizamiento.json
│   ├── ripa.json
│   ├── amarre_fondeo.json
│   ├── legislacion.json
│   ├── maniobra.json
│   ├── meteorologia.json
│   ├── navegacion.json
│   ├── carta.json
│   ├── emergencias.json
│   └── luces.json
```

---

## ▶️ Uso

Puedes abrir directamente `index.html` en un navegador moderno para empezar a usar la aplicación de forma offline.

---

## 📦 Desarrollo

Puedes editar y mejorar esta app fácilmente. Todos los módulos JavaScript están en `logic/`, y las preguntas están en `data/` en formato JSON.

---

## 📌 Pendiente / Mejora futura

- Mejora visual de `index.html` y `temario.html`  
- Posible integración con backend para guardar progreso  
- Compatibilidad total en móviles pequeños  
- Implementar cronómetro en modo examen  
- Sonido o feedback visual adicional para respuestas correctas/incorrectas  

---

## ✅ Créditos

Desarrollado por Antony Pachas – 2025  
App educativa sin ánimo de lucro, orientada a facilitar el estudio del PER en España.

---
