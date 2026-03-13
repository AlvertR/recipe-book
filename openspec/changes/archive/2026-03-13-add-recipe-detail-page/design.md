## Context

La app es una SPA en React sin enrutamiento client-side. Actualmente renderiza `RecipeListPage` directamente en `App.tsx`. Para la vista de detalle se necesita navegación entre páginas, lo que requiere introducir React Router. La API mock (JSON Server) ya soporta `GET /recipes/:id` sin cambios en `db.json`.

## Goals / Non-Goals

**Goals:**
- Introducir enrutamiento client-side con React Router
- Permitir navegar de la tarjeta del listado a la vista de detalle y viceversa
- Mostrar todos los campos de la receta en una vista dedicada
- Mantener la experiencia de SPA (sin recargas completas)

**Non-Goals:**
- Edición o eliminación de recetas
- Navegación entre recetas (anterior/siguiente)
- Compartir recetas o deep-linking con metadata SEO
- Lazy loading de rutas (innecesario con solo 2 rutas)

## Decisions

### 1. React Router v7 con `BrowserRouter`

Usar `react-router-dom` v7 con `BrowserRouter` en `main.tsx` y `Routes`/`Route` en `App.tsx`.

- **Alternativa considerada**: Rutas declarativas con `createBrowserRouter` y data loaders. Descartado porque agrega complejidad innecesaria para 2 rutas simples y la data ya se maneja con RTK Query.
- **Rationale**: Patrón JSX estándar, familiar, mínimo boilerplate. Se integra bien con el enfoque actual de RTK Query para data fetching.

### 2. Estructura de rutas

| Ruta | Componente | Descripción |
|------|-----------|-------------|
| `/` | `RecipeListPage` | Listado con búsqueda y filtros |
| `/recipes/:id` | `RecipeDetailPage` | Detalle de receta individual |

El header y layout general se mantienen en `App.tsx`, compartidos entre rutas.

### 3. Endpoint RTK Query `getRecipeById`

Agregar un nuevo endpoint `getRecipeById` al `recipesApi` existente:
- Query: `GET /recipes/:id`
- Tipo de retorno: `Recipe`
- Parámetro: `id: number`

- **Alternativa considerada**: Seleccionar del cache de `getRecipes` con `selectFromResult`. Descartado porque asume que el listado siempre se cargó primero (no funciona con acceso directo por URL).

### 4. `RecipeCard` como `<Link>`

Envolver el contenido de `RecipeCard` con `<Link to={/recipes/${recipe.id}}>` de React Router. La tarjeta completa será clickeable.

- **Alternativa considerada**: Solo el nombre como link. Descartado por UX — el usuario espera que toda la tarjeta sea clickeable.

### 5. Ubicación del componente

`RecipeDetailPage.tsx` se coloca en `src/features/recipes/` al mismo nivel que `RecipeListPage.tsx`, siguiendo la convención existente.

## Risks / Trade-offs

- **React Router como nueva dependencia** → Es la librería de routing estándar de React, ampliamente usada y mantenida. El riesgo es mínimo.
- **Acceso directo a `/recipes/:id`** → RTK Query maneja el fetch individual. Se necesita manejar estados de loading, error y receta no encontrada (404).
- **Vite dev server necesita fallback a `index.html`** → Vite ya lo hace por defecto en modo SPA, no requiere configuración adicional.
