## ADDED Requirements

### Requirement: RTK Query API slice for recipes
The system SHALL provide an RTK Query API slice (`recipesApi`) configured with `fetchBaseQuery` pointing to `http://localhost:3001`. The slice SHALL export a `useGetRecipesQuery` hook that fetches all recipes from `GET /recipes`.

#### Scenario: Successful fetch of all recipes
- **WHEN** a component calls `useGetRecipesQuery()`
- **THEN** the hook SHALL return an array of `Recipe` objects with fields: `id`, `name`, `description`, `ingredients`, `steps`, `category`, `difficulty`, `prepTime`, `imageUrl`

#### Scenario: API is unavailable
- **WHEN** the API at `http://localhost:3001/recipes` is unreachable
- **THEN** the hook SHALL return `isError: true` with error details

#### Scenario: Loading state
- **WHEN** the request is in-flight
- **THEN** the hook SHALL return `isLoading: true`

### Requirement: API slice integration with Redux store
The system SHALL register the `recipesApi` reducer and middleware in the existing Redux store at `src/store/store.ts`.

#### Scenario: Store includes API slice
- **WHEN** the application starts
- **THEN** the Redux store SHALL include the `recipesApi` reducer under `[recipesApi.reducerPath]` and the API middleware SHALL be appended to the default middleware chain

### Requirement: Recipe type definition
The system SHALL define a TypeScript `Recipe` interface that matches the JSON Server data schema with all fields typed.

#### Scenario: Type matches API response
- **WHEN** the API returns a recipe object
- **THEN** the object SHALL conform to the `Recipe` interface: `id: number`, `name: string`, `description: string`, `ingredients: string[]`, `steps: string[]`, `category: string`, `difficulty: string`, `prepTime: number`, `imageUrl: string`
