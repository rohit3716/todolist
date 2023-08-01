import './App.css';
import React, { useState } from "react";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';
import ListCom from "./Listcomp.js";

function App() {
  const [item, setItem] = useState("");

    const [newItem, setNewItem] = useState([]);


    const itemEvent = (event) => {
        setItem(event.target.value);
    }

    const listOfItems =() => {
        setNewItem((prevValue) => {
            return [...prevValue, item];
        }); 
        setItem(" ");
    };
  return (
    <div>
      <div className="main_div">
        <div className="center_div">
            <br/>
            <h1>ToDo List</h1>
            <br/>
            <input 
                type="text"
                value={item}
                placeholder="Add an Item" 
                onChange={itemEvent} 
                required
                />
            <AddCircleIcon className="newBtn" onClick={listOfItems}>
                <AddCircleRoundedIcon/>
            </AddCircleIcon>
            <br/>
            <ol>
                 
                {newItem.map((val, index) => {
                    return <ListCom key={index} text={val} />;
                })}
            </ol>
        </div>
    </div>
    </div>
  );
}

export default App;
