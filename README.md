# RIUM web (Next.js 15 · TypeScript · Tailwind)

```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm start
```

## Dónde poner el contenido definitivo
- `data/navigation.ts` menú y accesos de inicio · `data/pages.ts` introducciones de cada página
- `data/services.ts` servicios · `data/items.ts` Lab, Academia, Proyectos
- `data/articles.ts` artículos del blog (bloques `h2`/`p`, portada opcional)
- `data/site.ts` contacto del pie de página · `app/page.tsx` textos de inicio
- Imágenes en `public/images`; logotipo en `public/logo` (sustituir el texto "RIUM" en `components/layout/Header.tsx`)
- Colores del manual de marca en `tailwind.config.ts` (`mute` es un gris más oscuro que #888B8C para cumplir contraste)
# rium
