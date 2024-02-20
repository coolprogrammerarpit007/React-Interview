import { useState } from "react";

function App() {
  const [color, setColor] = useState("olive");
  return (
    <>
      <div
        className="w-full h-screen duration-200"
        style={{ backgroundColor: color }}
      ></div>

      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button
            onClick={() => setColor("red")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ background: "red" }}
          >
            Red
          </button>
          <button
            onClick={() => setColor("yellow")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ background: "yellow" }}
          >
            Yellow
          </button>
          <button
            onClick={() => setColor("green")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ background: "green" }}
          >
            Green
          </button>
          <button
            onClick={() => setColor("gold")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ background: "gold" }}
          >
            Gold
          </button>
          <button
            onClick={() => setColor("pink")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ background: "pink" }}
          >
            Pink
          </button>
          <button
            onClick={() => setColor("olive")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ background: "olive" }}
          >
            Olive
          </button>
          <button
            onClick={() => setColor("silver")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ background: "silver" }}
          >
            Silver
          </button>
          <button
            onClick={() => setColor("gray")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ background: "gray" }}
          >
            Gray
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
