## ADDED Requirements

### Requirement: Recipe detail page displays all recipe fields
The system SHALL render a `RecipeDetailPage` component at the route `/recipes/:id` that fetches the recipe using `useGetRecipeByIdQuery(id)` and displays all recipe fields: image, name, description, ingredients list, numbered steps, category, difficulty, and preparation time.

#### Scenario: Recipe loaded successfully
- **WHEN** the user navigates to `/recipes/:id` and the API returns the recipe
- **THEN** the page SHALL display the recipe image prominently, the recipe name as heading, the full description, a list of ingredients, numbered preparation steps, and badges for category, difficulty, and preparation time

#### Scenario: Recipe image fallback
- **WHEN** the recipe image fails to load
- **THEN** the page SHALL display a placeholder visual instead of a broken image

### Requirement: Recipe detail loading state
The system SHALL display a loading indicator while the recipe is being fetched.

#### Scenario: Data is loading
- **WHEN** `useGetRecipeByIdQuery(id)` returns `isLoading: true`
- **THEN** the page SHALL display a loading skeleton or spinner

### Requirement: Recipe detail error state
The system SHALL display an error message when the recipe fetch fails.

#### Scenario: API error
- **WHEN** `useGetRecipeByIdQuery(id)` returns `isError: true`
- **THEN** the page SHALL display an error message with a retry option

#### Scenario: Recipe not found
- **WHEN** the API returns a 404 for the given ID
- **THEN** the page SHALL display a "recipe not found" message

### Requirement: Back navigation to listing
The system SHALL include a back button that navigates the user to the recipe listing page.

#### Scenario: User clicks back button
- **WHEN** the user clicks the back button on the detail page
- **THEN** the system SHALL navigate to `/` (the recipe listing)

### Requirement: Client-side routing setup
The system SHALL configure React Router with `BrowserRouter` and define routes for `/` (listing) and `/recipes/:id` (detail). The shared layout (header) SHALL remain in `App.tsx` wrapping the route outlet.

#### Scenario: Direct URL access to detail
- **WHEN** the user navigates directly to `/recipes/1` via the browser address bar
- **THEN** the system SHALL render the `RecipeDetailPage` for recipe with ID 1

#### Scenario: Root route renders listing
- **WHEN** the user navigates to `/`
- **THEN** the system SHALL render the `RecipeListPage`
