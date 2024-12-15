import React from "react";
import { Button } from "./ui/button";

interface ButtonProps {
  link: string;
  tag: string;
  vari: string; 
}

const Buttoncard: React.FC<ButtonProps> = ({ link,tag, vari }) => {
  return (
    <Button variant={vari} size={"lg"}>
      <a href={link}>{tag}</a>
    </Button>
  );
};

export default Buttoncard;
