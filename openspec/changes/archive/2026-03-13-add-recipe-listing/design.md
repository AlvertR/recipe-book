## Context

El proyecto Recipe Book tiene la estructura base configurada: React 19 + TypeScript, Vite, Redux Toolkit (store vacío), y Tailwind CSS v4. JSON Server sirve `db.json` en el puerto 3001 con endpoints `GET /recipes` y `GET /categories`. Actualmente `App.tsx` solo muestra un heading placeholder sin funcionalidad.

## Goals / Non-Goals

**Goals:**
- Establecer el patrón de data fetching con RTK Query que se reutilizará en toda la app
- Mostrar todas las recetas en un grid responsivo de cards
- Proveer feedback visual durante la carga y en caso de error

**Non-Goals:**
- Filtrado, búsqueda o paginación de recetas (features futuras)
- Detalle individual de receta (requiere routing, fuera de alcance)
- CRUD de recetas (se abordará en otro change)
- Routing con React Router (no necesario para una sola vista)

## Decisions

### 1. RTK Query como capa de API

**Decisión**: Usar `createApi` de RTK Query con `fetchBaseQuery` apuntando a `http://localhost:3001`.

**Alternativas consideradas**:
- `fetch` manual + `createAsyncThunk`: Más código boilerplate, sin cache automático ni invalidación.
- React Query (TanStack): Excelente opción pero agrega dependencia externa; RTK Query ya viene incluido en `@reduxjs/toolkit`.

**Rationale**: RTK Query está incluido en el toolkit existente, ofrece cache, deduplicación de requests, y estados de loading/error automáticos. Se alinea con la arquitectura Redux ya establecida.

### 2. Estructura de archivos por feature

**Decisión**: Colocar el API slice y componentes de recetas en `src/features/recipes/`.

```
src/features/recipes/
├── api/
│   └── recipesApi.ts       # RTK Query API slice
├── components/
│   └── RecipeCard.tsx       # Card individual de receta
├── types/
│   └── recipe.ts            # Interfaz Recipe
└── RecipeListPage.tsx       # Página contenedora del listado
```

**Rationale**: Sigue la convención feature-based del proyecto (`src/features/`). Coloca todo lo relacionado a recetas junto, facilitando la navegación y futuros cambios.

### 3. Grid responsivo con Tailwind CSS

**Decisión**: Usar CSS Grid via utilidades de Tailwind con breakpoints responsivos (1 col mobile, 2 cols tablet, 3 cols desktop).

**Rationale**: Tailwind v4 ya está configurado. Grid nativo es más apropiado que flexbox para layouts de cards uniformes.

### 4. Estados de loading y error inline

**Decisión**: Manejar los estados `isLoading`, `isError` y `data` del hook `useGetRecipesQuery()` directamente en `RecipeListPage` con componentes inline (skeleton/spinner y mensaje de error).

**Rationale**: Para esta primera vista, componentes inline son suficientes. Se pueden extraer a `shared/components/` cuando se repitan en otras features.

## Risks / Trade-offs

- **[baseUrl hardcodeada]** → Se usa `http://localhost:3001` directamente. Mitigación: Suficiente para desarrollo con JSON Server; se puede migrar a variable de entorno cuando haya un backend real.
- **[Sin paginación]** → Con 10 recetas no hay problema, pero no escala. Mitigación: Se abordará en un change futuro si el dataset crece.
- **[Imágenes placeholder]** → Las URLs de `db.json` apuntan a `placehold.co`. Mitigación: Aceptable para MVP; se reemplazarán con imágenes reales.
