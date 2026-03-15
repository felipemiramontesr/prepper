# Guía de Estilo y Sistema de Diseño (MAPA-RD)

Este documento recopila las reglas de estilo, paleta de colores, tipografía y componentes utilizados en el proyecto **MAPA-RD**. Estas instrucciones están diseñadas para replicar la estética ("Look & Feel") en otros proyectos.

## 1. Paleta de Colores

### Fondos (Backgrounds)
*   **Fondo Principal (Body):** Gradiente Linear.
    *   Dirección: `135deg`
    *   Inicio: `#0a0e27` (Dark Navy profundo)
    *   Fin: `#1a1f3a` (Navy ligeramente más claro)
*   **Fondo de Tarjetas (Glassmorphism):**
    *   Color: `rgba(255, 255, 255, 0.03)`
    *   Sombra: `0 18px 50px rgba(0, 0, 0, 0.18)`

### Texto (Foreground)
*   **Texto Principal (Headings/Body):** `#e8e8e8` (Blanco hueso / Gris muy claro)
*   **Texto Secundario (Descripciones/Listas):** `#c5cae0` (Gris azulado claro)
*   **Texto Terciario (Notas/Microcopy):** `#6b7490` o `#a8adc7` (Gris azulado medio)
*   **Títulos de Tarjetas:** `#ffffff` (Blanco puro)

### Acentos y Elementos UI
*   **Color de Acento (Principal):** `#8a9fca` (Azul lavanda desaturado) - Usado en iconos, links, y bordes hover.
*   **Bordes de UI (General):** `#4a5578` (Azul grisáceo oscuro)
*   **Bordes de Tarjetas:** `rgba(74, 85, 120, 0.55)`

### Botones
*   **Botón Primario (Fondo):** `#5a6fa0`
*   **Botón Primario (Hover):** `#6b7fa8`
*   **Botón Secundario/Outline (Borde):** `#5a6fa0`

---

## 2. Tipografía

**Familia Tipográfica:** Stack de sistema moderno.
`font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;`

### Jerarquía y Pesos
La estética se basa en fuentes **delgadas (Light)** para títulos grandes y **medias (Medium/SemiBold)** para acentos pequeños.

*   **H1 (Título Principal):**
    *   Peso: `300` (Light)
    *   Tamaño: `1.85rem` (Móvil) / `3.0rem` (Desktop)
    *   Letter-spacing: `-0.02em`
    *   Color: `#fff`
*   **H2 (Títulos de Sección):**
    *   Peso: `500` (Medium)
    *   Tamaño: `1.1rem`
    *   Transformación: `Uppercase`
    *   Letter-spacing: `.04em`
*   **H3 (Títulos de Tarjetas):**
    *   Peso: `600` (SemiBold)
    *   Tamaño: `.95rem`
    *   Transformación: `Uppercase`
    *   Letter-spacing: `.10em` (Spacing amplio)
*   **Cuerpo / Párrafos:**
    *   Peso: `300` (Light)
    *   Tamaño: `.98rem` - `1rem`
    *   Line-height: `1.85` (Muy aireado)
*   **Etiquetas (Tags) y Botones:**
    *   Peso: `600`
    *   Transformación: `Uppercase`
    *   Letter-spacing: `.16em` (Tags) / `.08em` (Botones)

---

## 3. Componentes de UI

### Botones (.btn)
Estilo rectangular con bordes técnicos.
*   **Padding:** `1rem 1.6rem`
*   **Borde:** `1.5px solid`
*   **Transición:** `.25s ease`
*   **Hover Effect:** Glow sutil `box-shadow: 0 0 20px rgba(138, 159, 202, .18)` y cambio de color de borde a Acento (`#8a9fca`).

### Tarjetas (.card)
Estilo "Tech/Glass" sutil.
*   **Borde:** Fino y semitransparente (`1px solid rgba(74, 85, 120, .55)`).
*   **Fondo:** Casi transparente (`rgba(255, 255, 255, 0.03)`).
*   **Padding:** `1.25rem`.
*   **Layout:** Encabezado H3, KPI (dato clave), Lista de items, Acciones al final.

### Listas (.list)
*   **Bullets:** Personalizados usando `::before` con contenido `"•"` y color de acento `#8a9fca`.
*   **Item:** Padding left `1.1rem` para espacio del bullet.

### Iconos
*   Estilo: SVG de línea (Stroke).
*   Stroke-width: `1.5` o `2`.
*   Color: `#cfd6ea` (Gris claro) o `#8a9fca` (Acento).

---

## 4. Layout y Espaciado

*   **Contenedor Principal:** `max-width: 980px`.
*   **Alineación:** Centrada para `hero` y `footer`, Izquierda para contenido de tarjetas.
*   **Grid:**
    *   Mobile: 1 columna.
    *   Tablet/Desktop: 2 columnas (`grid-template-columns: 1fr 1fr` o `repeat(12, 1fr)` con spans).
*   **Separadores:** Líneas finas horizontales (`height: 1px`, `background-color: #4a5578`) para dividir secciones.

---

## 5. Implementación CSS Sugerida (Variables)

---

## 5. Implementación CSS Base (Variables del Sistema)

Para garantizar la escalabilidad y consistencia, todos los colores deben consumirse a través de variables CSS. Esto permite crear "temas" o variantes (como el modo Prepper) simplemente cambiando estas variables en un contenedor o archivo CSS sobreescrito.

```css
/* ==========================================================================
   TEMA BASE (MAPA-RD Ciberseguridad)
   ========================================================================== */
:root {
    /* --- Paleta de Fondos (Ambiente) --- */
    --bg-dark-start: #0a0e27; /* Dark Navy profundo (Inicio del gradiente) */
    --bg-dark-end: #1a1f3a;   /* Navy más claro (Fin del gradiente) */
    
    /* --- Paleta de Texto --- */
    --text-primary: #e8e8e8;  /* Blanco hueso para alta legibilidad en oscuro */
    --text-secondary: #c5cae0;/* Gris azulado para descripciones */
    --text-tertiary: #6b7490; /* Gris apagado para notas al pie o microcopy */
    
    /* --- Colores de Marca y Acento (La "Personalidad") --- */
    --accent: #8a9fca;        /* Azul lavanda desaturado (Links, hover, iconos clave) */
    --logo-neon: #00f3ff;     /* Cyan brillante (Exclusivo para el escudo principal) */
    
    /* --- Elementos de Interfaz (UI) --- */
    --border-ui: #4a5578;     /* Azul grisáceo para separadores y contornos */
    --btn-primary: #5a6fa0;   /* Fondo principal de botones de acción */
    --btn-hover: #6b7fa8;     /* Efecto hover suave para botones */
    
    /* --- Espaciado Tipográfico --- */
    --font-spacing-wide: .10em;  /* Para H3 y pequeños encabezados */
    --font-spacing-wider: .16em; /* Para Etiquetas (Tags) y elementos de máxima jerarquía visual pequeña */
}

/* Aplicación global del tema base */
body {
    background: linear-gradient(135deg, var(--bg-dark-start) 0%, var(--bg-dark-end) 100%);
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
    color: var(--text-primary);
    margin: 0;
    min-height: 100vh;
}
```

---

## 6. Variante: "Modo Prepper" (Supervivencia Tecnológica)

Para expandir la interfaz MAPA-RD al ecosistema Prepper sin perder la identidad visual (Tech/Tactical HUD), mantenemos intacta la estructura (fondos, tipografías y glassmorphism) y **únicamente sobreescribimos los colores de acento**.

Esta estrategia asegura que el usuario sienta que está en el mismo sistema, pero con un "modo de misión" diferente (terreno, supervivencia, alerta).

### Colores de Acento Prepper

*   **Tema Principal:** Verde Táctico (Foliage/Olive) y Verde Fósforo (Night Vision). Hemos optado por un **Verde Radar/Visión Nocturna**.
*   **Por qué funciona:** El verde brillante contra el fondo Dark Navy evoca instantáneamente los sistemas de radar marítimo, gafas de visión nocturna y terminales tácticas militares. Es el color universal de la supervivencia y la naturaleza, pero con un brillo tecnológico que mantiene la estética HUD del sistema MAPA-RD.

### Implementación CSS (Sobreescritura)

Para activar el modo Prepper, simplemente añade esta clase al `<body>` o cárgala en una hoja de estilos específica para el subdominio:

```css
/* ==========================================================================
   TEMA PREPPER (Sobreescritura de variables base)
   ========================================================================== */
.theme-prepper {
    /* Mantenemos los fondos oscuros originales para conservar la identidad familiar */
    
    /* --- Nuevos Acentos "Táctico/Supervivencia" --- */
    --accent: #10b981;        /* Verde Esmeralda Táctico (Reemplaza al Lavanda) */
    --logo-neon: #00ff66;     /* Verde Fósforo/Visión Nocturna para el escudo (Reemplaza al Cyan) */
    
    /* --- Elementos UI adaptados al nuevo acento --- */
    --border-ui: #2e4a3d;     /* Un borde en tono "Olive/Earthy Green" profundo y desaturado */
    --btn-primary: #1f5c3a;   /* Botón primario en verde bosque táctico */
    --btn-hover: #2f8253;     /* Hover que ilumina el botón sutilmente */
}

/* Ejemplo de uso en botones para que respiren la variable */
.btn {
    background-color: transparent;
    border: 1.5px solid var(--btn-primary);
    color: var(--text-primary);
    transition: all 0.25s ease;
}

.btn:hover {
    border-color: var(--accent);
    /* El glow ahora tomará el color verde radar en el modo prepper */
    box-shadow: 0 0 20px rgba(16, 185, 129, 0.18); 
}
```

---

## 7. Logotipo (Escudo + MAPARD)

El logotipo principal del sistema está compuesto por un icono de escudo seguido del texto "MAPARD", alineados horizontalmente y centrados verticalmente. Su diseño utiliza clases utilitarias para asegurar la responsividad.

### Icono Escudo (Shield)
*   **Librería sugerida:** Lucide React (`<Shield />`) o SVG equivalente de línea vectorial.
*   **Color:** `#00f3ff` (Cyan brillante / Neón).
*   **Tamaños:**
    *   Móvil: `24px` (`w-6 h-6`).
    *   Tablet/Desktop: `32px` (`w-8 h-8`).

### Texto "MAPARD"
*   **Familia Tipográfica:** Stack de sistema moderno (hereda del marco general).
*   **Peso (Font Weight):** `900` (`Black`).
*   **Color:** `#ffffff` (Blanco puro).
*   **Transformación:** Mayúsculas / Uppercase (implícito en el texto).
*   **Espaciado de letras (Letter-spacing):** `0.1em` (`tracking-widest`).
*   **Tamaños:**
    *   Móvil: `1.25rem` / `20px` (`text-xl`).
    *   Tablet/Desktop: `1.5rem` / `24px` (`text-2xl`).

### Layout y Espaciado (Contenedor flex)
*   **Alineación:** Horizontal y centrada verticalmente (`flex items-center`).
*   **Separación estructural (Gap entre escudo y texto):** 
    *   Móvil: `8px` (`gap-2`).
    *   Tablet/Desktop: `12px` (`gap-3`).

### Líneas Horizontales (Separadores del Header/Footer)
El logotipo suele presentarse dentro del Header superior, el cual lleva una línea sutil inferior que delimita el espacio y le da el toque "Tech/HUD", al igual que el Footer.
*   **Color de la línea:** Blanco con 10% de opacidad (`border-white/10` o `rgba(255, 255, 255, 0.1)`).
*   **Grosor:** `1px` (`border-b` para el header, `border-t` para el footer).
*   **Ubicación:** Todo el ancho del contenedor abarcando el padding del logotipo.


