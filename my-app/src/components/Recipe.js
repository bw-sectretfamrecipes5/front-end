import React, { useState, useEffect } from "react";
import axiosWithAuth from "./utils/AxiosWithAuth";
import { useParams } from "react-router-dom";
import RecipesList from "./RecipesList";
<<<<<<< HEAD
import AddRecipe from "./AddRecipe";
import SearchBar from "./SearchBar";
=======
import AddRecipe from './AddRecipe';
import SearchBar from './SearchBar';
>>>>>>> 793404e375dd8910432168a4cff2d2759cb854d7

const Recipe = () => {

  const [recipeList, setRecipeList] = useState([]);
  const { id } = useParams();


  useEffect(() => {
    axiosWithAuth()
      .get(`/${id}/recipe/`)
      .then((res) => {
        setRecipeList(res.data);
        console.log("recipe data returned!", res);
      })
      .catch((err) => console.log("error recipe", err));
  }, []);

  return (
    <div>
      <h1>Welcome to Secret Family Recipes!</h1>
<<<<<<< HEAD
      <SearchBar recipes={recipeList} />
      <AddRecipe />
=======
      <SearchBar recipes={recipeList} setRecipeList={setRecipeList}/>
      <AddRecipe/>
>>>>>>> 793404e375dd8910432168a4cff2d2759cb854d7
      <RecipesList recipes={recipeList} />
    </div>
  );
};

export default Recipe;
