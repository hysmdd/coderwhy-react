import React, { memo, useEffect, useState } from "react";

const App = memo(() => {
  const [counter, setCounter] = useState(339);

  useEffect(() => {
    document.title = counter;
  });

  return (
    <div>
      <h2>Counter: {counter}</h2>
      <button onClick={(e) => setCounter(counter + 1)}>+1</button>
    </div>
  );
});

export default App;
