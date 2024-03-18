import React, { useState } from "react";

export default function App() {
  const [message, setMessage] = useState("Hello World");

  function changeMessage() {
    setMessage("终会与你同行");
  }

  return (
    <div>
      <h2>App: {message}</h2>
      <button onClick={changeMessage}>修改文本</button>
    </div>
  );
}
