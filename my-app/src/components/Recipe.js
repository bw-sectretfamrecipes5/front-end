import React, { useState, useEffect } from "react";
import axiosWithAuth  from "./utils/AxiosWithAuth";
import { useParams } from 'react-router-dom';
import RecipesList from "./RecipesList";

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
      <RecipesList recipes={recipeList} />
    </div>
  );
};

export default Recipe;


