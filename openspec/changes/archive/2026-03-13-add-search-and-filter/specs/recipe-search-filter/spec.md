## ADDED Requirements

### Requirement: Text search filters recipes by name and description
The system SHALL provide a text input that filters the displayed recipes. The search SHALL match against recipe `name` and `description` fields using case-insensitive substring matching.

#### Scenario: User types a search term
- **WHEN** the user types "chilaquiles" in the search input
- **THEN** only recipes whose name or description contain "chilaquiles" (case-insensitive) SHALL be displayed

#### Scenario: Search term cleared
- **WHEN** the user clears the search input
- **THEN** all recipes SHALL be displayed (subject to category filter)

### Requirement: Category filter restricts recipes by category
The system SHALL provide a dropdown populated from `GET /categories` that filters recipes by their `category` field. The dropdown SHALL include an "all categories" option as the default.

#### Scenario: User selects a category
- **WHEN** the user selects "Desayuno" from the category dropdown
- **THEN** only recipes with `category === "Desayuno"` SHALL be displayed

#### Scenario: User selects all categories
- **WHEN** the user selects the "all categories" default option
- **THEN** no category filtering SHALL be applied

### Requirement: Filters combine with AND logic
The text search and category filter SHALL combine using AND logic. A recipe MUST match both the search term and the selected category to be displayed.

#### Scenario: Combined filtering
- **WHEN** the user types "queso" in the search input AND selects "Snack" as category
- **THEN** only recipes that contain "queso" in name or description AND have category "Snack" SHALL be displayed

### Requirement: Results counter displays match count
The system SHALL display a counter showing the number of recipes matching the current filters, formatted as "X recetas encontradas".

#### Scenario: Counter reflects filtered results
- **WHEN** 3 recipes match the current filters
- **THEN** the page SHALL display "3 recetas encontradas"

#### Scenario: Counter with singular form
- **WHEN** 1 recipe matches the current filters
- **THEN** the page SHALL display "1 receta encontrada"

### Requirement: Filtered empty state
When filters produce no results, the system SHALL display a specific empty state message distinct from the "no recipes available" state.

#### Scenario: No results from filters
- **WHEN** the combination of search term and category filter yields zero results
- **THEN** the page SHALL display a message indicating no recipes match the current filters
