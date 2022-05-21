export type IngredientMeal = {
    ingredient: string|Ingredient;
    measure: string;
};

export type Ingredient = {
    id: string;
    name: string;
    type?: string;
    image: string;
    thumbnail: string;
}

export type Source = {
    url: string;
    host: string;
}

export type Meal = {
    id: string
    title: string
    category: Category
    area: string
    instructions: string[]
    ingredients?: IngredientMeal[]
    image: string
    thumbnail: string
    tags: string
    youtube: string
    source?: Source
} 

export type Category = {
    id?: string
    name: string
    thumbnail?: string
    description?: string
}

export type Area = {
    name: string
    thumbnail?: string
}

export type Filter = Pick<Meal, "id"|"title"|"thumbnail">;
export type FilterType = "category";
