## 1. Setup y Routing

- [x] 1.1 Instalar `react-router-dom` como dependencia
- [x] 1.2 Envolver la app con `BrowserRouter` en `main.tsx`
- [x] 1.3 Configurar `Routes` y `Route` en `App.tsx` para `/` (`RecipeListPage`) y `/recipes/:id` (`RecipeDetailPage`)

## 2. API - Endpoint individual

- [x] 2.1 Agregar endpoint `getRecipeById` en `recipesApi.ts` que haga `GET /recipes/:id` y retorne `Recipe`
- [x] 2.2 Exportar el hook `useGetRecipeByIdQuery`

## 3. Recipe Detail Page

- [x] 3.1 Crear `RecipeDetailPage.tsx` en `src/features/recipes/` con el layout de detalle: imagen grande, nombre, descripción, ingredientes, pasos numerados, badges de categoría/dificultad/tiempo
- [x] 3.2 Extraer el `id` de la URL con `useParams` y llamar a `useGetRecipeByIdQuery(id)`
- [x] 3.3 Implementar estado de loading con skeleton o spinner
- [x] 3.4 Implementar estado de error con mensaje y botón de reintentar
- [x] 3.5 Implementar estado de receta no encontrada (404)
- [x] 3.6 Implementar fallback de imagen cuando falla la carga
- [x] 3.7 Agregar botón de regreso que navegue a `/`

## 4. Recipe Card - Navegación

- [x] 4.1 Envolver `RecipeCard` con `<Link to={/recipes/${recipe.id}}>` para hacer la tarjeta clickeable
