# Nuestra pequeña historia — 5 meses 💗

Página de aniversario estática para Luis, hecha con HTML, CSS y JavaScript. Funciona en móvil y escritorio y está preparada para GitHub Pages.

## Archivos
- `index.html`: contenido, recuerdos y carta.
- `style.css`: diseño rosa pastel y adaptación a pantallas pequeñas.
- `script.js`: abrir/cerrar carta, mensaje sorpresa y botón de música.

## Probar localmente
Abre `index.html` en el navegador. Para probar como un sitio web, también puedes ejecutar desde esta carpeta:
```bash
python -m http.server 8000
```
Luego abre `http://localhost:8000`.

## Publicar en GitHub Pages
1. Crea un repositorio en GitHub, por ejemplo `cinco-meses-luis`.
2. Sube `index.html`, `style.css`, `script.js` y este README a la raíz del repositorio.
3. Entra a **Settings → Pages**.
4. En **Build and deployment**, elige **Deploy from a branch**.
5. Selecciona la rama `main` y la carpeta `/ (root)`, y pulsa **Save**.
6. Espera a que GitHub Pages publique la web. La dirección aparecerá en esa misma sección.

## Música opcional
Por defecto, la web no incluye audio y no reproduce nada automáticamente. Para añadir música:
1. Usa un archivo de audio que tengas derecho a compartir, por ejemplo una pista propia o libre de derechos.
2. Guárdalo como `music.mp3` en la raíz del repositorio.
3. En `index.html`, busca el bloque `<audio id="backgroundMusic"...>` y descomenta estas dos líneas:
   ```html
   <source src="music.mp3" type="audio/mpeg">
   ```
4. El botón de música funcionará tras tocarlo.

## Personalizar
- Cambia los cinco textos de la sección de recuerdos en `index.html` por momentos reales de ustedes.
- Revisa la carta antes de publicar para que suene exactamente a ti.
- La tipografía de Google Fonts necesita conexión a internet; si no carga, hay fuentes alternativas.
- No añadas información privada que no quieras que sea accesible mediante un enlace público. Los sitios de GitHub Pages son públicos por defecto.
