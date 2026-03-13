import { useState } from "react";
import type { Recipe } from "../types/recipe";

const difficultyColor: Record<string, string> = {
  Fácil: "bg-green-100 text-green-800",
  Media: "bg-yellow-100 text-yellow-800",
  Difícil: "bg-red-100 text-red-800",
};

export function RecipeCard({ recipe }: { recipe: Recipe }) {
  const [imgError, setImgError] = useState(false);

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      {imgError ? (
        <div className="w-full h-48 bg-gray-200 flex items-center justify-center text-gray-400">
          <svg
            className="w-12 h-12"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
        </div>
      ) : (
        <img
          src={recipe.imageUrl}
          alt={recipe.name}
          className="w-full h-48 object-cover"
          onError={() => setImgError(true)}
        />
      )}

      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900 mb-2">
          {recipe.name}
        </h3>

        <div className="flex flex-wrap items-center gap-2">
          <span className="px-2 py-1 text-xs font-medium rounded-full bg-blue-100 text-blue-800">
            {recipe.category}
          </span>
          <span
            className={`px-2 py-1 text-xs font-medium rounded-full ${difficultyColor[recipe.difficulty] ?? "bg-gray-100 text-gray-800"}`}
          >
            {recipe.difficulty}
          </span>
          <span className="ml-auto text-sm text-gray-500">
            {recipe.prepTime} min
          </span>
        </div>
      </div>
    </div>
  );
}
