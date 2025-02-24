import { useEffect } from "react";
import { useState } from "react";
import useFetch from "./hooks/useFetch";

const App = () => {
  const data = useFetch("https://jsonplaceholder.typicode.com/posts/");
  return (
    <div>{data && data.map((item) => <p key={item.id}>{item.title}</p>)}</div>
  );
};
export default App;
