import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";
import axiosWithAuth from "./utils/AxiosWithAuth";

const initialRecipe = {
  id: "",
  title: "",
  source: "",
  ingredients: "",
  instructions: "",
  category: "",
};

const AddRecipe = (props) => {
  const { push } = useHistory();
  //   const recipeId = localStorage.getItem("id");
  const [addedRecipe, setAddedRecipe] = useState(initialRecipe);

  const { id } = useParams();

  const handleChange = (e) => {
    e.preventDefault();
    setAddedRecipe({ ...addedRecipe, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axiosWithAuth()
      .post(`/1/recipe/`)
      //     .then(res=>{props.AddRecipe(recipe)
      .then((res) => {
        console.log(res, "added recipe data working");
        setAddedRecipe(res.data.data);
        push(`/1/recipe/`);
      })
      .catch((err) => console.log(err, "recipeData failed to return"));
  };

  return (
    <div>
      <h2>Add Recipe</h2>
      <form>
        <label>Title:</label>
        <input
          placeholder="title"
          onChange={handleChange}
          type="text"
          name="title"
          value={addedRecipe.title}
        ></input>

        <label>Source:</label>
        <input
          placeholder="source"
          onChange={handleChange}
          type="text"
          name="source"
          value={addedRecipe.source}
        ></input>

        <label>Ingredients:</label>
        <input
          placeholder="ingredients"
          onChange={handleChange}
          type="text"
          name="ingredients"
          value={addedRecipe.ingredients}
        ></input>

        <label>Instructions:</label>
        <input
          placeholder="instructions"
          onChange={handleChange}
          type="text"
          name="instructions"
          value={addedRecipe.instructions}
        ></input>

        <label>Category:</label>
        <input
          placeholder="category"
          onChange={handleChange}
          type="text"
          name="category"
          value={addedRecipe.category}
        ></input>

        <button onSubmit={handleSubmit} type="submit">
          Add Recipe
        </button>
      </form>
    </div>
  );
};
export default AddRecipe;
