import React, { useState } from "react";
import  axiosWithAuth  from "./utils/AxiosWithAuth";
import { useParams } from "react-router-dom";

const initialRecipe = {
  title: "",
  source: "",
  ingredients: "",
  instructions: "",
  category: "",
};

 const RecipesList = (props) => {
  const [editing, setEditing] = useState(false);
  const [recipeToEdit, setRecipeToEdit] = useState(initialRecipe);
  const [addRecipe, setAddRecipe] = useState(initialRecipe);

  const {id} = useParams(); 

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
    axiosWithAuth() 
      .delete(`/${id}/recipe/${recipe.id}`, recipe)
      .then((res) => console.log("recipe has been removed", res))
      .catch((err) => console.log(err, "sorry, recipe could not be removed"));
  };

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

export default RecipesList; 