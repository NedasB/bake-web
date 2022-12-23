import RecipeList from "./RecipeList";
import useFetch from "./useFetch";


const AllRecipes = () => {
  const {error, isPending, data: recipes } = useFetch('https://run.mocky.io/v3/93c86fef-846a-45c8-8420-4afe7f55edda/recipes')

  return (
    <div className="AllRecipes">
      { error && <div>{ error }</div> }     
      { isPending && <div>Loading...</div> }   
      { recipes && <RecipeList recipes={recipes} /> }     
    </div>
  );
}
 
export default AllRecipes;





  

  
      
      
      




