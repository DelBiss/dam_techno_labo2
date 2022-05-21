


export const IngredientMeasure = ["strIngredient", "strMeasure"] as const;
export const IngredientNo = ["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20"] as const

type TIngredientMeasure = {[Property in typeof IngredientMeasure[number]]:string} 
type TIngredientNo = typeof IngredientNo[number] 
type IngredientList = `${keyof TIngredientMeasure}${TIngredientNo}`;


export type MealsResponse = {
    meals: MealResponse[]
}

export type MealResponse = {
    idMeal: string
    strMeal: string
    strDrinkAlternate: any
    strCategory: string
    strArea: string
    strInstructions: string
    strMealThumb: string
    strTags: string
    strYoutube: string
    strSource: string|null
} & {[Property in IngredientList]: string}

export type CategoriesResponse = {
    categories: CategoryResponse[]
}

export type CategoryResponse = {
    idCategory: string
    strCategory: string
    strCategoryThumb: string
    strCategoryDescription: string
}

export type FiltersResponse = {
    meals: FilterResponse[]
}
export type FilterResponse = {
    strMeal: string
    strMealThumb: string
    idMeal: string
}