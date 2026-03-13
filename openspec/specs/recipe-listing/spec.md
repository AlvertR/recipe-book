## ADDED Requirements

### Requirement: Recipe listing page displays all recipes
The system SHALL render a `RecipeListPage` component that fetches all recipes using `useGetRecipesQuery()` and displays them in a responsive grid of cards. The page SHALL include a filter bar above the grid with text search and category filter. The grid SHALL display only recipes matching the active filters.

#### Scenario: Recipes loaded successfully
- **WHEN** the API returns recipes successfully
- **THEN** the page SHALL display the filter bar and one `RecipeCard` per matching recipe in a grid layout (1 column on mobile, 2 columns on tablet, 3 columns on desktop)

#### Scenario: Empty recipe list
- **WHEN** the API returns an empty array
- **THEN** the page SHALL display a message indicating no recipes are available

### Requirement: Recipe card displays key information
Each recipe card SHALL display the recipe's image, name, category, difficulty, and preparation time.

#### Scenario: Card content rendering
- **WHEN** a recipe card is rendered
- **THEN** it SHALL show the recipe image at the top, the recipe name as heading, a category label, a difficulty badge, and the preparation time in minutes

#### Scenario: Card image fallback
- **WHEN** the recipe image fails to load
- **THEN** the card SHALL display a placeholder or fallback visual instead of a broken image

### Requirement: Loading state feedback
The system SHALL display a visual loading indicator while recipes are being fetched.

#### Scenario: Data is loading
- **WHEN** `useGetRecipesQuery()` returns `isLoading: true`
- **THEN** the page SHALL display a loading skeleton or spinner

### Requirement: Error state feedback
The system SHALL display an error message when the recipe fetch fails.

#### Scenario: API error
- **WHEN** `useGetRecipesQuery()` returns `isError: true`
- **THEN** the page SHALL display an error message with a retry option

### Requirement: Page is rendered in App.tsx
The `App.tsx` component SHALL render `RecipeListPage` as the main content of the application.

#### Scenario: App renders listing
- **WHEN** the application loads
- **THEN** `App.tsx` SHALL render the `RecipeListPage` component
