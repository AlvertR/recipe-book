## Why

La aplicación Recipe Book actualmente no tiene ninguna vista funcional para explorar recetas. Los usuarios necesitan una página principal que muestre todas las recetas disponibles de forma visual y organizada, permitiendo identificar rápidamente nombre, categoría, dificultad y tiempo de preparación.

## What Changes

- Agregar RTK Query como capa de data fetching contra `http://localhost:3001/recipes`
- Crear una API slice de recetas con endpoint `getRecipes`
- Integrar el API slice en el Redux store existente
- Crear página de listado de recetas con diseño en cards responsivo
- Cada card muestra: imagen, nombre, categoría, dificultad y tiempo de preparación
- Crear componentes compartidos reutilizables (RecipeCard, badge de dificultad)

## Capabilities

### New Capabilities

- `recipe-api`: Configuración de RTK Query API slice con endpoint para obtener listado de recetas desde JSON Server
- `recipe-listing`: Página principal que renderiza el grid de recipe cards con imagen, nombre, categoría, dificultad y tiempo de preparación

### Modified Capabilities

_(ninguna — es la primera feature funcional del proyecto)_

## Impact

- **Dependencias**: No se requieren nuevas dependencias npm (RTK Query viene incluido en `@reduxjs/toolkit`)
- **Store**: Se modifica `src/store/store.ts` para registrar el API slice reducer y middleware
- **Estructura**: Se crean archivos en `src/features/recipes/` y `src/shared/components/`
- **App.tsx**: Se actualiza para renderizar la página de listado
- **API**: Se consume `GET http://localhost:3001/recipes` (JSON Server ya configurado)
