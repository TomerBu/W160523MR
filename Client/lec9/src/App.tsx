import { useEffect } from "react";
import "./App.css";

function App() {
  // use effect -> fetch/axios -> update the state
  useEffect(() => {
    const demo = async () => {
      const res = await fetch("http://localhost:8080/api/v1/people");
      const json = await res.json();

      console.log(json);
    };

    demo();
  }, []);

  return (
    <>
      <h1>Hello, World</h1>
    </>
  );
}

export default App;
