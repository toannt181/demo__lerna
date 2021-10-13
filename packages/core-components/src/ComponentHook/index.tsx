import React, { useState, useEffect } from "react";

const ComponentHook = () => {
  const [count, setCount] = useState(0);
  const [loading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      throw new Error('Error source map')
    }, 2000);
  }, [count]);

  const handleClick = () => {
    setCount((count) => count + 1);
  };

  return (
    <div>
      <h1>Component Hook2</h1>
      <div>Count: {count}</div>
      <p>{loading ? "Loading..." : "Clean"}</p>
      <button onClick={handleClick}>Fetch</button>
    </div>
  );
};

export default ComponentHook;
