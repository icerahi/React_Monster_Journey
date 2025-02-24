import { useEffect, useState } from "react";
import Add from "./components/Add";
import Footer from "./components/Footer";
import Greet from "./components/Greet";
import Header from "./components/Header";
import MainComponent from "./components/MainComponent";
import { createPortal } from "react-dom";
import Switcher from "./components/Switcher";

const App = () => {
  const [count, setCount] = useState(0);
  const [random, setRandom] = useState(null);
  const [friend, setFriend] = useState(["imran", "hasan"]);
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const getRandom = () => {
    setRandom(Math.round(Math.random() * count));
  };

  const [inputValue, setInputValue] = useState("");
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(inputValue).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  const [data, setData] = useState([]);
  useEffect(() => {
    async function getData() {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      const data = await res.json();
      if (data && data.length) setData(data);
    }
    getData();
  }, []);

  return (
    <div>
      <Header />
      <MainComponent data={data} />
      <Footer />
      <h1>{count}</h1>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <label htmlFor="input">name</label>
      <input type="text" id="input" />
      {2 + 2}
      <p>List of my firends {["alex", " john", " emmanual", " Imran"]}</p>
      <h1>Random number:{random} </h1>
      <button onClick={getRandom}>Get Random</button>

      <hr />
      <input type="text" onChange={(e) => setInputValue(e.target.value)} />
      <button onClick={handleCopy}>Copy</button>
      <Switcher />
      <PopUpContent copied={copied} />
    </div>
  );
};
export default App;

const PopUpContent = ({ copied }) => {
  return createPortal(
    <section>
      {copied && (
        <div style={{ position: "absolute", bottom: "3rem" }}>
          copied to clipboard
        </div>
      )}
    </section>,
    document.querySelector("#popup-content")
  );
};
