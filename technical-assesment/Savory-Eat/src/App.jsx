//the default user to update and delete is {user_Id:1,username:'testuser',email:'test@test.com',password:'password}
import "./App.css";
import Home from "./components/Home.jsx";
import AllRecipies from "./components/AllRecipies.jsx"
import { useEffect, useState } from "react";
import Add from "./components/Add.jsx";

import axios from "axios";

function App() {
const [view,setView]=useState('Home')
const [data, setData] = useState([]);
  const [one, setOne] = useState(data[0]);

  useEffect(() => {
    axios.get("http://localhost:4000/recipe").then((res) => {
      setData(res.data);
    });
  }, []);


  let changeView = (view) => {
    setView(view);
  };
  return (
    <div className="App">
      <nav className="nav">
        <div
          className="nav-item is-active"
          active-color="orange"
          onClick={() => setView("Home")}
        >
          Home
        </div>

        <div
          className="nav-item"
          active-color="green"
          onClick={() => setView("AllRecipies")}
        >
          All Recipies
        </div>
        <div
          className="nav-item"
          active-color="red"
          onClick={() => setView("AddRecipe")}
        >
          Addrecepie
        </div>
        <div className="nav-item" active-color="red">
          <input type="text"  />
          <button  >search</button> 
        </div>
        <span className="nav-indicator"></span>
      </nav>
      {view === "Home" && <Home changeView={changeView}/>}
      {view === "AllRecipies" && <AllRecipies  changeView={changeView}  data={data}/>}
      { view === "AddRecipe" && <Add one={one} />}
      
      <div></div>
    </div>
  );
}

export default App;
