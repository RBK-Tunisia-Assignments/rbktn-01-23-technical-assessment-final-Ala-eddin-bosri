import React from "react";
import "../index.scss";



const AllRecipies = ({  data }) => {
  console.log(data);
  return (
    <div className="card-container">
      <div>
     
        {data.map((recipe, i) => (
          <div
          >
            <img src={recipe.recepie_Image} alt={recipe.recepie_Name} />
            <p>{recipe.recepie_Name}</p>
            <p>{recipe.recepie_Ingredients} </p>
            <p>{recipe.categorie} </p>
            <p>{recipe.recepie_Description} </p>
            <p>{recipe.Serves} </p>
            <p>{recipe.Cook_Time} </p>
            <p>{recipe.Prep_Time} </p>


          </div>
        ))}
      </div>
    </div>
    
  );
};

export default AllRecipies;
