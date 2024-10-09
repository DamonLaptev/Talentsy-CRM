import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 className="text-2xl leading-[36px] tracking[-0.02em]">
        Активные клиенты
      </h1>
    </>
  );
}

export default App;
