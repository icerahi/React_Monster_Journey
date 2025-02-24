import { useEffect, useState } from "react";

export default function Windowtracker() {
  const [show, setShow] = useState(true);
  const [innerWidth, setInnerWidth] = useState(window.innerWidth);
  const handleToggle = () => {
    setShow(!show);
  };

  useEffect(() => {
    function resize() {
      console.log("resize added");

      setInnerWidth(window.innerWidth);
    }
    window.addEventListener("resize", resize);

    return () => {
      console.log("event removed");

      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <main>
      <button onClick={handleToggle}>Toggle Window Tracker</button>

      <h1>window sizse is :{innerWidth}</h1>
    </main>
  );
}
