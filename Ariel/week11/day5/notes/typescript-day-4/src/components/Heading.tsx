//import React, { ReactElement } from "react";

interface HeadingProps {
  title: string;
}

//specify react element returning here ↓ or at line 1

// const Heading = ({ title }: HeadingProps): React.ReactElement => {
//   return (
//     <>
//       <h1>{title}</h1>
//     </>
//   );
// };
// export default Heading;

const Heading = ({ title }: HeadingProps) => {
  return (
    <>
      <h1>{title}</h1>
    </>
  );
};
export default Heading;
