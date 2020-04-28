import React, { useState, useEffect } from "react";
import axiosWithAuth  from "./utils/AxiosWithAuth";
import RecipeList from "./RecipesList";

const Recipe = (props) => {
  const [recipeList, setRecipeList] = useState([]);

  useEffect(() => {
    axiosWithAuth()
      .get(`/${props.userId}/recipe`)
      .then((res) => {
        setRecipeList(res.data);
        console.log("recipe data returned!", res);
      })
      .catch((err) => console.log("error recipe", err));
  }, []);

  return (
    <div>
      <h1>Welcome to Secret Family Recipes!</h1>
      <RecipeList recipes={recipeList} />
    </div>
  );
};

export default Recipe;
