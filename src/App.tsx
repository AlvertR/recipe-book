import { Routes, Route } from "react-router-dom";
import { RecipeListPage } from "./features/recipes/RecipeListPage";
import { RecipeDetailPage } from "./features/recipes/RecipeDetailPage";

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <h1 className="text-2xl font-bold text-gray-900">Recipe Book</h1>
        </div>
      </header>
      <main className="max-w-7xl mx-auto px-4 py-8">
        <Routes>
          <Route path="/" element={<RecipeListPage />} />
          <Route path="/recipes/:id" element={<RecipeDetailPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
