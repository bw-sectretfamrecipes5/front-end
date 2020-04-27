import React from 'react';
import {axiosWithAuth} from './utils/AxiosWithAuth';

export const RecipesList = props=>{
    return(
        <div>
            {props.recipes.map(recipe=>(
                <div key ={recipe.id}>
                    <h3>{recipe.title}</h3>
                    <p>{recipe.category}</p>
                    <p>{recipe.ingredients}</p>
                    <p>{recipe.instructions}</p>
                    <p>{recipe.source}</p>

                    <button onClick ={e=>{
                        deleteRecipe(recipe)
                    }}>Delete</button>

                    </div>
            ))}
        </div>
    )
}

const deleteRecipe  = pie =>{
    axiosWithAuth()              //unsure about endpoint for mapping through data
    .delete(`/recipe/$:id}`)
    .then(res=>console.log("recipe has been returned",res))
    .catch(err=>console.log(err, 'sorry, recipe could not be returned'))
}

const editRecipe =({})