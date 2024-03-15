import { memo, useState } from "react";

function CounterHook(props) {
  //   const arr = useState(339);
  const [counter, setCounter] = useState(339);
  return (
    <div>
      <h2>Counter: {counter}</h2>
      <button onClick={(e) => setCounter(counter + 1)}>+1</button>
      <button onClick={(e) => setCounter(counter - 1)}>-1</button>
    </div>
  );
}

export default memo(CounterHook);
