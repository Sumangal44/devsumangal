import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const ProjectCard = ({ title, description, image, link }) => {
  return (
    <Card className="flex flex-col overflow-hidden">
      <CardHeader className="p-0">
        <img src={image} alt={title} className="w-full h-48 object-cover" />
      </CardHeader>
      <CardContent className="flex-grow p-4">
        <CardTitle className="text-xl mb-2">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button asChild className="w-full">
          <a href={link}>View Project</a>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
