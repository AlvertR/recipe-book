## ADDED Requirements

### Requirement: Categories endpoint
The `recipesApi` slice SHALL include a `getCategories` endpoint that fetches all categories from `GET /categories`. The slice SHALL export a `useGetCategoriesQuery` hook.

#### Scenario: Successful fetch of categories
- **WHEN** a component calls `useGetCategoriesQuery()`
- **THEN** the hook SHALL return an array of `Category` objects with fields: `id: number`, `name: string`

### Requirement: Category type definition
The system SHALL define a TypeScript `Category` interface with `id: number` and `name: string`.

#### Scenario: Type matches API response
- **WHEN** the API returns a category object
- **THEN** the object SHALL conform to the `Category` interface
