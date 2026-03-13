## MODIFIED Requirements

### Requirement: Recipe listing page displays all recipes
The system SHALL render a `RecipeListPage` component that fetches all recipes using `useGetRecipesQuery()` and displays them in a responsive grid of cards. The page SHALL include a filter bar above the grid with text search and category filter. The grid SHALL display only recipes matching the active filters.

#### Scenario: Recipes loaded successfully
- **WHEN** the API returns recipes successfully
- **THEN** the page SHALL display the filter bar and one `RecipeCard` per matching recipe in a grid layout (1 column on mobile, 2 columns on tablet, 3 columns on desktop)

#### Scenario: Empty recipe list
- **WHEN** the API returns an empty array
- **THEN** the page SHALL display a message indicating no recipes are available

## MODIFIED Requirements

### Requirement: Page is rendered in App.tsx
The `App.tsx` component SHALL render `RecipeListPage` as the main content of the application.

#### Scenario: App renders listing
- **WHEN** the application loads
- **THEN** `App.tsx` SHALL render the `RecipeListPage` component
