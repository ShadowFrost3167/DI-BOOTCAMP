import { useState, ReactNode } from "react";

interface CountProps {
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number | string>>;
  children: ReactNode;
}

const Counter = ({ children, setCount }: CountProps) => {
  return (
    <>
      <h2>Trap Card</h2>

      <button onClick={() => setCount((count) => count + 1)}>+</button>
      <h2>{children}</h2>
      <button onClick={() => setCount((count) => count - 1)}>-</button>
    </>
  );
};

export default Counter;
