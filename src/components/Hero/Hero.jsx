import { SectionWrapper } from "../HOCs";
import { motion } from "framer-motion";
import { textVariant, sliderVariants } from "../../utils/motion";
import { Button } from "@/components/ui/button";
import Carousel from "@/components/Carousel";
import ComputersCanvas from "../Canvas/ComputerCanvas";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const Hero = () => {
  return (
    <motion.div variants={textVariant()} className="h-full w-full mt-12">
      <div className="grid grid-rows-4 grid-flow-col gap-4">
        <Card className="border-none shadow-xl py-8 rounded-lg row-span-3 col-span-2 p-4 bg-foreground">
          <CardHeader>
            <CardTitle
              className="text-4xl italic capitalize drop-shadow-md
            bg-clip-text text-secondary-400"
            >
              Andell Jean-Jacques
            </CardTitle>
            <CardDescription className="flex text-wrap text-5xl text-secondary-900 font-bold drop-shadow-md">
              Software Engineer
              <br /> and UX/UI Developer
            </CardDescription>
          </CardHeader>

          <CardFooter className="w-[35%] h-[5.3%] whitespace-nowrap text-9xl text-[#ffffff09] overflow-scroll absolute top-80">
            <motion.p
              className="font-bold w-[98%]"
              variants={sliderVariants}
              initial="initial"
              animate="animate"
            >
              Engineer Designer Creator Thinker
            </motion.p>
          </CardFooter>
        </Card>
        <div className="border-none shadow-xl py-6 px-4 rounded-lg col-span-2 bg-secondary-300">
          <div className="flex gap-4">
            <Button className="w-32 h-12 bg-secondary-500 hover:bg-secondary-600">
              Contact
            </Button>
            <Button
              variant="outline"
              className="w-32 h-12 text-secondary-900 border-secondary-700 hover:bg-secondary-700"
            >
              My work
            </Button>
          </div>
        </div>
        <div className="flex justify-center border-none shadow-xl py-8 rounded-lg bg-secondary-600 row-span-4 col-span-6">
          <ComputersCanvas />
        </div>
      </div>
    </motion.div>
  );
};

export default SectionWrapper(Hero, "home", "bg-background");
