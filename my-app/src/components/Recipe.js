import React, { useState, useEffect } from "react";
import axiosWithAuth  from "./utils/AxiosWithAuth";
import { useParams } from 'react-router-dom';
import RecipesList from "./RecipesList";
import AddRecipe from './AddRecipe';

const Recipe = () => {

  const [recipeList, setRecipeList] = useState([]);
  const { id } = useParams(); 
  // const [title, setTitle] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [unfilteredRecipes, setUnfitleredRecipes] = useState(recipeList);
  
 

  const filterPosts =() =>{
    return unfilteredRecipes.filter(recipe=>{
      if(searchTerm=== '' ){
        return axiosWithAuth()
        .get(`/${id}/recipe/title?title=${searchTerm}`)
      }
    if(recipe.title.includes(searchTerm) || recipe.category.includes(searchTerm))
    {
      return recipe
    }
  })
}

const changeHandler = e =>{
  const searchTerm = e.target.value
  setSearchTerm(searchTerm);
}

const SearchBar = ()=>{


  return(
    <div className="searchBar">
      <form>
      <input
       onChange ={changeHandler}
       type="text"
       placeholder="search"
       value ={searchTerm}
       />
   
      </form>
    </div>
  )
}
  



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
      <SearchBar/>
      <AddRecipe/>
      <RecipesList recipes={recipeList} />
    </div>
  );
};

export default Recipe;


