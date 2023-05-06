import React, { useState } from "react";
import axios from "axios";

const Add = () => {
  const [users_user_Id] = useState(1);

  const [Serves, setServes] = useState(0);
  const [Cook_Time, setCook_Time] = useState(0);
  const [Prep_Time, setPrep_Time] = useState(0);
  const [recepie_Name, setRecepie_Name] = useState("");
  const [recepie_Description, setRecepie_Description] = useState("");
  const [recepie_Ingredients, setRecepie_Ingredients] = useState("");
  const [categorie, setcategorie] = useState("");
  const [recepie_Image, setRecepie_Image] = useState("");

  const handleclick = (item) => {
    axios.post("http://localhost:4000/recipe", item);
  };
  return (
    <div>
      <div>
        <label>Name:</label>
        <input
          type="text"
          placeholder="Name"
          onChange={(e) => setRecepie_Name(e.target.value)}
        />
      </div>
      <div>
        <label>Cook_Time:</label>
        <input
          type="number"
          placeholder="Cook Time"
          onChange={(e) => setCook_Time(e.target.value)}
        />
      </div>
      <div>
        <label>Prep_Time:</label>
        <input
          type="number"
          placeholder="Prep Time"
          onChange={(e) => setPrep_Time(e.target.value)}
        />
      </div>
      <div>
        <label>Serves:</label>
        <input
          type="number"
          placeholder="serves"
          onChange={(e) => setServes(e.target.value)}
        />
      </div>
      <div>
        <label>categorie:</label>
        <input
          type="text"
          placeholder="categorie"
          onChange={(e) => setcategorie(e.target.value)}
        />
      </div>
      <div>
        <label>Description:</label>
        <input
          type="text"
          placeholder="Description"
          onChange={(e) => setRecepie_Description(e.target.value)}
        />
      </div>
      <div>
        <label>Ingredients:</label>
        <input
          placeholder="Ingredients"
          onChange={(e) => setRecepie_Ingredients(e.target.value)}
        />
      </div>

      <div>
        <label>Image:</label>
        <input
          type="text"
          placeholder="Image url"
          onChange={(e) => setRecepie_Image(e.target.value)}
        />
      </div>
      <button
        onClick={() =>
          handleclick({
            Cook_Time,
            Prep_Time,
            recepie_Name,
            Serves,
            categorie,
            recepie_Image,
            recepie_Description,
            recepie_Ingredients,
            users_user_Id,
          })
        }
      >
        Create Recepie
      </button>
    </div>
  );
};
export default Add;
