import { ReactNode } from "react";

interface SectionProps {
  content?: string;
  children: ReactNode;
}

//React.FC used before version 18 of typescript. common to see in older programs.
const Section = ({
  children,
  content = "brownies are teasty",
}: SectionProps) => {
  return (
    <>
      <section>{content}</section>
      <div>{children}</div>
    </>
  );
};

export default Section;
