## Context

El listado de recetas (`RecipeListPage`) muestra todas las recetas en un grid responsivo usando `useGetRecipesQuery()`. No existe filtrado ni búsqueda. El API slice (`recipesApi`) solo tiene el endpoint `getRecipes`. JSON Server expone `GET /categories` con 4 categorías disponibles.

## Goals / Non-Goals

**Goals:**
- Permitir búsqueda por texto (nombre + descripción) con filtrado client-side
- Permitir filtrado por categoría usando datos de `GET /categories`
- Combinar ambos filtros (AND lógico)
- Feedback visual: contador de resultados y estado vacío filtrado

**Non-Goals:**
- Búsqueda server-side o full-text search
- Filtro por dificultad o tiempo de preparación (futuro)
- Debounce avanzado o URL query params para persistir filtros
- Paginación de resultados

## Decisions

### 1. Filtrado client-side con `useMemo`

**Decisión**: Filtrar las recetas en el cliente usando `useMemo` sobre el array completo retornado por `useGetRecipesQuery()`.

**Alternativas consideradas**:
- Query params en JSON Server (`?q=` o `?category=`): Genera múltiples requests y cache entries en RTK Query. Con solo 10 recetas, el filtrado client-side es más eficiente y responsivo.

**Rationale**: El dataset es pequeño (10 recetas). Filtrar en el cliente evita requests adicionales, mantiene un solo cache entry, y da respuesta instantánea al usuario.

### 2. Estado de filtros con `useState` local

**Decisión**: Manejar `searchTerm` y `selectedCategory` como estado local del componente `RecipeListPage` con `useState`.

**Alternativas consideradas**:
- Redux slice para filtros: Sobreingeniería para estado que solo vive en esta página y no necesita persistencia ni compartirse.

**Rationale**: Los filtros son estado UI local de la página. No necesitan persistirse ni accederse desde otros componentes.

### 3. Componente `RecipeFilters` separado

**Decisión**: Crear un componente `RecipeFilters` que reciba los valores y setters de los filtros como props.

**Rationale**: Separa la UI de filtros de la lógica de la página. El componente es presentacional y reutilizable.

### 4. Agregar `getCategories` al API slice existente

**Decisión**: Agregar el endpoint `getCategories` directamente al `recipesApi` existente en lugar de crear un nuevo API slice.

**Rationale**: Las categorías están relacionadas al dominio de recetas. Un solo API slice mantiene la configuración centralizada y comparte el mismo `baseQuery`.

## Risks / Trade-offs

- **[Filtrado client-side no escala]** → Con 10 recetas es óptimo. Si el dataset crece a cientos, se deberá migrar a filtrado server-side. Mitigación: La lógica de filtrado está aislada en `useMemo`, fácil de reemplazar.
- **[Categorías hardcodeadas vs API]** → Dependemos de `GET /categories` para poblar el dropdown. Si el endpoint falla, el filtro de categoría no estará disponible. Mitigación: El filtro de texto sigue funcionando independientemente.
