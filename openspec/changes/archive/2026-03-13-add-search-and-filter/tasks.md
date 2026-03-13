## 1. Types & API Layer

- [x] 1.1 Create `Category` interface in `src/features/recipes/types/category.ts` with `id: number` and `name: string`
- [x] 1.2 Add `getCategories` endpoint to `recipesApi` slice (`GET /categories`) and export `useGetCategoriesQuery`

## 2. Filter Components

- [x] 2.1 Create `src/features/recipes/components/RecipeFilters.tsx` with text search input and category dropdown (receives values/setters as props)
- [x] 2.2 Populate category dropdown from `useGetCategoriesQuery()` with "Todas las categorías" default option

## 3. Filter Logic in RecipeListPage

- [x] 3.1 Add `searchTerm` and `selectedCategory` state to `RecipeListPage`
- [x] 3.2 Implement `useMemo` filtering: case-insensitive text match on name/description AND category match
- [x] 3.3 Add results counter ("X recetas encontradas" / "1 receta encontrada")
- [x] 3.4 Add filtered empty state ("No se encontraron recetas con los filtros aplicados")
- [x] 3.5 Integrate `RecipeFilters` component above the recipe grid
