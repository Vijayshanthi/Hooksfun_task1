import React, { useState } from 'react';

function Statefun() {
  const [count, setCount] = useState(0);

  const counting = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h2>Counter: {count}</h2>
      <button onClick={counting}>Counting</button>
    </div>
  );
}

export default Statefun;