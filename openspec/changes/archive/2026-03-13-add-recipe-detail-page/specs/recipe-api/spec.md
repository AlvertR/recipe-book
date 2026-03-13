## ADDED Requirements

### Requirement: Individual recipe endpoint
The `recipesApi` slice SHALL include a `getRecipeById` endpoint that fetches a single recipe from `GET /recipes/:id`. The slice SHALL export a `useGetRecipeByIdQuery` hook.

#### Scenario: Successful fetch of a single recipe
- **WHEN** a component calls `useGetRecipeByIdQuery(id)`
- **THEN** the hook SHALL return a single `Recipe` object matching the given ID

#### Scenario: Recipe not found
- **WHEN** a component calls `useGetRecipeByIdQuery(id)` with a non-existent ID
- **THEN** the hook SHALL return `isError: true` with error details

#### Scenario: Loading state
- **WHEN** the request for a single recipe is in-flight
- **THEN** the hook SHALL return `isLoading: true`
