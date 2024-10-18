import { useEffect, useState } from "react";

function FirstEffect() {
  const [count, setCount] = useState(0);

  /*useEffect(() => {
    console.log("Component rendered");
  });*/

  /* useEffect(() => {
    console.log("Component mounted");
  }, []); */

  useEffect(() => {
    console.log(`Count is changing ${count}`);
  }, [count]);

  return (
    <div>
      <p>Count : {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default FirstEffect;
