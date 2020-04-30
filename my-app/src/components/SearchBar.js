 import React, {useState, useEffect} from 'react';
 import axiosWithAuth from './utils/AxiosWithAuth';
 

 
 
 const SearchBar = (props)=>{
    
     // const [title, setTitle] = useState('');
     const {recipes} = props;
     const [searchTerm, setSearchTerm] = useState('');
     const [unfilteredRecipes, setUnfitleredRecipes] = useState(recipes);
     
     const changeHandler = e =>{
         e.persist(); 
         setSearchTerm(e.target.value)
     }

     const handleSubmit = e=>{
         e.preventDefault();
         return unfilteredRecipes.filter(recipe=>{
               if(searchTerm===""){
                   return recipe
               }
               else if (recipe.title.includes(searchTerm) || recipe.category.includes(searchTerm)){
                   return recipe
               }
     }

    // useEffect(()=>{
    //     return unfilteredRecipes.filter(recipe=>{
    //    if(searchTerm===""){
    //        return recipe
    //    }
    //    else if (recipe.title.includes(searchTerm))
    // },[searchTerm])


 
// const changeHandler = e =>{
//   const searchTerm = e.target.value
//   setSearchTerm(searchTerm);
// }



 return(
   <div className="searchBar">
     <form>
     <input
      onChange ={changeHandler}
      type="text"
      placeholder="search"
      value ={searchTerm}
      />
        <button onClick={()=>{

        }}>Search</button>
     </form>
   </div>
 )
}
 
export default SearchBar; 