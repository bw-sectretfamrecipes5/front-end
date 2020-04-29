 import React, {useState} from 'react';
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
  
     </form>
   </div>
 )
}
 
export default SearchBar; 