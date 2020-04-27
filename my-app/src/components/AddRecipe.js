import React, { useState, useEffect } from 'react'
import axios from 'axios'

const initialRecipe = {

    title:'',
    source:'',
    ingredients:'',
    instructions:'',
    category:''

}

function AddRecipe(props) {

    const [recipe, setRecipe] = useState(initialRecipe)


    return(

        <div>


            <h2>Add Recipe</h2>
            <form onSubmit={handleSubmit}>

                <label>Title:</label><input placeholder='title' onChange={handleChange} type='text' name='title' value={recipe.title}></input>

                <label>Source:</label><input placeholder='source' onChange={handleChange} type='text' name='source' value={recipe.source}></input>

                <label>Ingredients:</label><input placeholder='ingredients' onChange={handleChange} type='text' name='ingredients' value={recipe.ingredients}></input>

                <label>Instructions:</label><input placeholder='instructions' onChange={handleChange} type='text' name='instructions' value={recipe.instructions}></input>

                <label>Category:</label><input placeholder='category' onChange={handleChange} type='text' name='category' value={recipe.category}></input>

                <button type='submit'>Add Recipe</button>
                

            </form>


        </div>


    )



}
export default AddRecipe

