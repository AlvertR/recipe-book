import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useGetRecipeByIdQuery } from "./api/recipesApi";

const difficultyColor: Record<string, string> = {
  Fácil: "bg-green-100 text-green-800",
  Media: "bg-yellow-100 text-yellow-800",
  Difícil: "bg-red-100 text-red-800",
};

export function RecipeDetailPage() {
  const { id } = useParams<{ id: string }>();
  const [imgError, setImgError] = useState(false);

  const {
    data: recipe,
    isLoading,
    isError,
    refetch,
  } = useGetRecipeByIdQuery(Number(id));

  if (isLoading) {
    return (
      <div className="animate-pulse space-y-6">
        <div className="h-6 w-32 bg-gray-200 rounded" />
        <div className="w-full h-80 bg-gray-200 rounded-lg" />
        <div className="h-8 w-2/3 bg-gray-200 rounded" />
        <div className="h-4 w-full bg-gray-200 rounded" />
        <div className="h-4 w-5/6 bg-gray-200 rounded" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-3">
            {Array.from({ length: 5 }).map((_, i) => (
              <div key={i} className="h-4 bg-gray-200 rounded w-3/4" />
            ))}
          </div>
          <div className="space-y-3">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="h-4 bg-gray-200 rounded" />
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="text-center py-12">
        <p className="text-red-600 text-lg mb-4">
          Error al cargar la receta. Por favor intenta de nuevo.
        </p>
        <button
          onClick={refetch}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          Reintentar
        </button>
      </div>
    );
  }

  if (!recipe) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-600 text-lg mb-4">Receta no encontrada.</p>
        <Link
          to="/"
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors inline-block"
        >
          Volver al listado
        </Link>
      </div>
    );
  }

  return (
    <div>
      <Link
        to="/"
        className="inline-flex items-center gap-1 text-blue-600 hover:text-blue-800 mb-6"
      >
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
        Volver al listado
      </Link>

      {imgError ? (
        <div className="w-full h-80 bg-gray-200 rounded-lg flex items-center justify-center text-gray-400 mb-6">
          <svg
            className="w-16 h-16"
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
          className="w-full h-80 object-cover rounded-lg mb-6"
          onError={() => setImgError(true)}
        />
      )}

      <h2 className="text-3xl font-bold text-gray-900 mb-3">{recipe.name}</h2>

      <div className="flex flex-wrap items-center gap-3 mb-6">
        <span className="px-3 py-1 text-sm font-medium rounded-full bg-blue-100 text-blue-800">
          {recipe.category}
        </span>
        <span
          className={`px-3 py-1 text-sm font-medium rounded-full ${difficultyColor[recipe.difficulty] ?? "bg-gray-100 text-gray-800"}`}
        >
          {recipe.difficulty}
        </span>
        <span className="text-sm text-gray-500">{recipe.prepTime} min</span>
      </div>

      <p className="text-gray-700 mb-8">{recipe.description}</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            Ingredientes
          </h3>
          <ul className="space-y-2">
            {recipe.ingredients.map((ingredient, index) => (
              <li key={index} className="flex items-start gap-2 text-gray-700">
                <span className="text-blue-500 mt-1">•</span>
                {ingredient}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            Preparación
          </h3>
          <ol className="space-y-3">
            {recipe.steps.map((step, index) => (
              <li key={index} className="flex gap-3 text-gray-700">
                <span className="flex-shrink-0 w-7 h-7 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-medium">
                  {index + 1}
                </span>
                <span className="pt-0.5">{step}</span>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
}
