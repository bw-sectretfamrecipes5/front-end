import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { useHistory, useParams } from 'react-router-dom';
import axiosWithAuth from './utils/AxiosWithAuth';

const initialRecipe = {
  title: "",
  source: "",
  ingredients: "",
  instructions: "",
  category: "",
};

const  AddRecipe = ({props, toUpdateRecipe, updatedRecipe })=> {
    const { push } = useHistory();
    const recipeId = localStorage.getItem('id');
    const [recipe, setRecipe] = useState(initialRecipe)

    const {id} = useParams(); 

    axiosWithAuth()
    .post(`/${id}/recipe/:recipe_id`)
    .then(res=>console.log(res, 'addRecipe data working'))
    .catch(err=>console.log(err, 'recipeData failed to return'))


//     axiosWithAuth()
//     .post(`${props.userId}/recipe/`)
//     // .post(`/:id/recipe/`)
//     .then(res=>console.log(res))
//     .catch(err=>console.log(err))
// },[])



// handleSubmit =e =>{
//     e.preventDefault();
//     axiosWithAuth()
//     .post('/:id/recipe/')
//     .then(res=>{props.AddRecipe(recipe)
//     push('/')
// }
    return
    (
        <div>
            <h2>Add Recipe</h2>
            <form>
                <label>Title:</label><input placeholder='title' onChange={handleChange} type='text' name='title' value={recipe.title}></input>

                <label>Source:</label><input placeholder='source' onChange={handleChange} type='text' name='source' value={recipe.source}></input>

                <label>Ingredients:</label><input placeholder='ingredients' onChange={handleChange} type='text' name='ingredients' value={recipe.ingredients}></input>

                <label>Instructions:</label><input placeholder='instructions' onChange={handleChange} type='text' name='instructions' value={recipe.instructions}></input>

                <label>Category:</label><input placeholder='category' onChange={handleChange} type='text' name='category' value={recipe.category}></input>

                <button onSubmit ={handleSubmit} type='submit'>Add Recipe</button>
                
            </form>

        </div>


    )

    

}
export default AddRecipe;
