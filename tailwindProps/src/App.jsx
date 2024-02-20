import "./App.css";
import Card from "./components/card";

function App() {
  let myObj = {
    userName: "Arpit",
    age: 24,
  };
  let newArr = [52, 78, 95, 36];
  return (
    <>
      <h1 className="bg-green-400 text-black p-4 rounded">Tailwind Test</h1>
      <Card userName="Mitchell" someObj={myObj} someArr={newArr} />
      <Card userName="Angela" someObj={myObj} someArr={newArr} />
    </>
  );
}

export default App;
