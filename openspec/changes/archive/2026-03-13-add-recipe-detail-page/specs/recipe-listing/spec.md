## MODIFIED Requirements

### Requirement: Recipe card displays key information
Each recipe card SHALL display the recipe's image, name, category, difficulty, and preparation time. The entire card SHALL be wrapped in a `<Link>` to `/recipes/:id`, making it fully clickable to navigate to the recipe detail page.

#### Scenario: Card content rendering
- **WHEN** a recipe card is rendered
- **THEN** it SHALL show the recipe image at the top, the recipe name as heading, a category label, a difficulty badge, and the preparation time in minutes

#### Scenario: Card image fallback
- **WHEN** the recipe image fails to load
- **THEN** the card SHALL display a placeholder or fallback visual instead of a broken image

#### Scenario: Card navigates to detail
- **WHEN** the user clicks anywhere on a recipe card
- **THEN** the system SHALL navigate to `/recipes/:id` where `:id` is the recipe's ID

### Requirement: Page is rendered in App.tsx
The `App.tsx` component SHALL render `RecipeListPage` at the `/` route using React Router instead of rendering it directly.

#### Scenario: App renders listing at root route
- **WHEN** the user navigates to `/`
- **THEN** `App.tsx` SHALL render the `RecipeListPage` component via React Router
