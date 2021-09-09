import { useEffect, useState } from "react";
import "./App.css";
import Characters from "./components/Characters";

function App() {
  const [charList, setCharList] = useState([]);

  const random = (max) => {
    return Math.floor(Math.random() * max);
  };

  useEffect(() => {
    fetch("https://hp-api.herokuapp.com/api/characters/students")
      .then((response) => response.json())
      .then((response) => setCharList(response))
      .catch((err) => console.log(err));
  }, []);
  const handleClick = () => {
    setCharList([...charList]);
  };
  return (
    <div className="App">
      <Characters className="divChar" characters={charList} random={random} />
      <div id="divBotao">
        <button className="button" onClick={() => handleClick()}>
          Random!
        </button>
      </div>
    </div>
  );
}

export default App;
