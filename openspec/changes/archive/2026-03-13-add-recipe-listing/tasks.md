## 1. Types & API Layer

- [x] 1.1 Create `src/features/recipes/types/recipe.ts` with the `Recipe` interface matching the JSON Server schema
- [x] 1.2 Create `src/features/recipes/api/recipesApi.ts` with RTK Query `createApi`, `fetchBaseQuery` base URL `http://localhost:3001`, and `getRecipes` endpoint (`GET /recipes`)
- [x] 1.3 Register `recipesApi` reducer and middleware in `src/store/store.ts`

## 2. Components

- [x] 2.1 Create `src/features/recipes/components/RecipeCard.tsx` that displays image, name, category badge, difficulty badge, and prep time
- [x] 2.2 Add image error fallback handling in RecipeCard (placeholder on load failure)

## 3. Recipe List Page

- [x] 3.1 Create `src/features/recipes/RecipeListPage.tsx` that uses `useGetRecipesQuery()` and renders a responsive grid of RecipeCards (1/2/3 columns)
- [x] 3.2 Add loading state with skeleton or spinner
- [x] 3.3 Add error state with error message and retry button
- [x] 3.4 Add empty state message when no recipes are returned

## 4. App Integration

- [x] 4.1 Update `App.tsx` to render `RecipeListPage` as main content
