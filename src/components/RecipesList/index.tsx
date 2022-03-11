import Link from "next/link"

import { RecipeCard } from "../RecipeCard"
import { Recipe } from "../../pages/recipes"
import { Country } from "../../pages/countries"

import { Recipes } from "./styles"

interface RecipesListProps {
  recipes: Recipe[]
  country?: Country
}

export function RecipesList({ recipes, country }: RecipesListProps) {
  return (
    <Recipes>
      <h2 className="title">Recipes</h2>

      <div className="recipes-cards-container">
        {recipes.map((recipe) => (
          <Link key={recipe.id} href={`/recipes/${recipe.id}`}>
            <RecipeCard
              data={recipe}
              countryOwner={country ?? recipe.countryOwner}
              userOwner={recipe.userOwner}
            />
          </Link>
        ))}
      </div>
    </Recipes>
  )
}
