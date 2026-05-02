import { Button } from "./ui/button";

const Buttoncard = ({ link, tag, vari }) => {
  return (
    <Button variant={vari} size="lg">
      <a href={link}>{tag}</a>
    </Button>
  );
};

export default Buttoncard;
