import React, { useState } from "react";
import axiosWithAuth from "./utils/AxiosWithAuth";
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
  const { recipes } = props;

  const { id } = useParams();

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
      .put(`/${id}/recipe/${recipeToEdit.id}`, recipeToEdit)
      .then(() => {
        setEditing(false);
        reloadPage();
      });
  };

  const deleteRecipe = (recipe) => {
    axiosWithAuth() //unsure about endpoint for mapping through data
      .delete(`/${id}/recipe/${recipe.recipe_id}`, recipe)
      .then(res => {
        console.log("recipe has been returned", res)
      reloadPage(); 
    })
    
      .catch((err) => console.log(err, "sorry, recipe could not be returned"));
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
            onClick={() => {
              deleteRecipe(recipe);
            }}
          >
            Delete
          </button>
          <button
            onClick={() => {
              editRecipe(recipe);
            }}
          >
            Edit
          </button>
        </div>
      ))}
      <div className="editForm">
        {editing && (
          <form onSubmit={saveEdit}>
            <h3 className="edit-title">Edit Recipe </h3>
            <input
              onChange={(e) =>
                setRecipeToEdit({ ...recipeToEdit, title: e.target.value })
              }
              value={recipeToEdit.title}
            />

            <input
              onChange={(e) =>
                setRecipeToEdit({ ...recipeToEdit, source: e.target.value })
              }
              value={recipeToEdit.source}
            />

            <input
              onChange={(e) =>
                setRecipeToEdit({
                  ...recipeToEdit,
                  ingredients: e.target.value,
                })
              }
              value={recipeToEdit.ingredients}
            />

            <input
              onChange={(e) =>
                setRecipeToEdit({
                  ...recipeToEdit,
                  instructions: e.target.value,
                })
              }
              value={recipeToEdit.instructions}
            />

            <input
              onChange={(e) =>
                setRecipeToEdit({
                  ...recipeToEdit,
                  category: e.target.value,
                })
              }
              value={recipeToEdit.category}
            />
            <button type="submit">save</button>
            <button onClick={() => setEditing(false)}>cancel</button>
          </form>
        )}
      </div>
    </div>
  );
};

export default RecipesList;