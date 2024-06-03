import { ReactNode } from "react";

interface HitList<T> {
  item: T[];
}

// export default function Schindler <T>({ item }: HitList</T>){
const Schindler = <T,>({ item }: HitList<T>) => {
  return (
    <>
      <ul>
        {item.map((item, i) => {
          return <li key={i}>{item as ReactNode}</li>;
        })}
      </ul>
    </>
  );
};

export default Schindler;
