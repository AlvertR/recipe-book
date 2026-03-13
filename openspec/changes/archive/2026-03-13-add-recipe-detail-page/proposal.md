## Why

La aplicación actualmente muestra recetas en un listado con tarjetas resumidas, pero no permite ver los detalles completos de una receta. Los usuarios necesitan acceder a la información completa — ingredientes, pasos de preparación, descripción — para poder cocinar la receta. Sin una vista de detalle, la app es solo un catálogo visual sin utilidad práctica.

## What Changes

- Instalar y configurar React Router para navegación client-side
- Agregar endpoint RTK Query para obtener una receta individual (`GET /recipes/:id`)
- Crear página de detalle de receta mostrando: imagen grande, nombre, descripción, ingredientes, pasos numerados, categoría, dificultad y tiempo de preparación
- Hacer las tarjetas del listado clickeables para navegar al detalle
- Incluir botón de regreso al listado en la vista de detalle

## Capabilities

### New Capabilities
- `recipe-detail`: Página de detalle de receta individual con vista completa de todos los campos y navegación desde/hacia el listado

### Modified Capabilities
- `recipe-api`: Agregar endpoint `getRecipeById` para obtener una receta por ID
- `recipe-listing`: Las tarjetas del listado deben ser clickeables y navegar a `/recipes/:id`

## Impact

- **Dependencias**: Se agrega `react-router-dom` como nueva dependencia
- **Rutas**: Se introduce enrutamiento client-side (`/` para listado, `/recipes/:id` para detalle)
- **API**: Nuevo endpoint RTK Query (`GET /recipes/:id`). JSON Server ya soporta este endpoint sin cambios en `db.json`
- **Componentes afectados**: `App.tsx` (wrapping con Router), `RecipeCard.tsx` (agregar Link)
- **Nuevos componentes**: `RecipeDetailPage.tsx`
