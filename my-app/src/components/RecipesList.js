import React, { useState } from "react";
import { axiosWithAuth } from "./utils/AxiosWithAuth";

const initialRecipe = {
  title: "",
  source: "",
  ingredients: "",
  instructions: "",
  category: "",
};

export const RecipesList = (props) => {
  const [editing, setEditing] = useState(false);
  const [recipeToEdit, setRecipeToEdit] = useState(initialRecipe);
  const [addRecipe, setAddRecipe] = useState(initialRecipe);
  const { recipes } = props;
  const reloadPage = () => {
    window.location.reload();
  };
  const editRecipe = (recipe) => {
    setEditing(true);
    setRecipeToEdit(recipe);
  };
  const saveEdit = (e) => {
    e.preventDefault();
    axiosWithAuth()
      .put(`/recipe/${recipeToEdit.id}`, recipeToEdit)
      .then(() => {
        setEditing(false);
        reloadPage();
      });
  };
  const deleteRecipe = (recipe) => {
    axiosWithAuth() //unsure about endpoint for mapping through data
      .delete(`/${props.userId}/recipe/${recipe.recipe_id}`)
      .then((res) => console.log("recipe has been returned", res))
      .catch((err) => console.log(err, "sorry, recipe could not be returned"));
  };

  const addRecipe = {};

  return (
    <div>
      {recipes.map((recipe) => (
        <div key={recipe.id}>
          <h3>{recipe.title}</h3>
          <p>{recipe.category}</p>
          <p>{recipe.ingredients}</p>
          <p>{recipe.instructions}</p>
          <p>{recipe.source}</p>

          <button
            onClick={(e) => {
              deleteRecipe(recipe);
            }}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};
