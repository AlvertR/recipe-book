## Why

El listado de recetas actual muestra todas las recetas sin posibilidad de filtrar. A medida que el catálogo crezca, los usuarios necesitan encontrar recetas rápidamente por texto (nombre/descripción) y por categoría, mejorando la experiencia de descubrimiento.

## What Changes

- Agregar un campo de búsqueda por texto que filtre recetas por nombre y descripción (case-insensitive)
- Agregar un dropdown de filtro por categoría, poblado desde `GET /categories`
- Ambos filtros funcionan en combinación (AND lógico)
- Mostrar un contador de resultados ("X recetas encontradas")
- Mostrar estado vacío cuando los filtros no producen resultados
- Agregar endpoint `getCategories` al API slice existente

## Capabilities

### New Capabilities

- `recipe-search-filter`: Búsqueda por texto y filtro por categoría en el listado de recetas, con contador de resultados y estado vacío filtrado

### Modified Capabilities

- `recipe-api`: Se agrega endpoint `getCategories` (`GET /categories`) y tipo `Category`
- `recipe-listing`: La página ahora incluye barra de filtros y muestra resultados filtrados en lugar de todos

## Impact

- **API**: Se agrega `getCategories` al `recipesApi` slice existente — nuevo endpoint, no breaking
- **Tipos**: Se agrega interfaz `Category` en `src/features/recipes/types/`
- **Componentes**: Se modifica `RecipeListPage` para integrar filtros; se crean nuevos componentes de búsqueda y filtro
- **Store**: Sin cambios estructurales — el nuevo endpoint se registra automáticamente en el mismo API slice
