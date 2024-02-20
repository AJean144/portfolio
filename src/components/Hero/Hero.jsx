import BentoGrid from "../BentoGrid";
import ComputersCanvas from "../Canvas/ComputerCanvas";
import SectionWrapper from "../HOCs/SectionWrapper";
import { TypewriterEffect } from "../ui/typewriter-effect";

const Hero = () => {
  const welcomeText = [
    {
      text: "Welcome",
    },
    {
      text: "to",
    },
    {
      text: "my",
    },
    {
      text: "website",
    },
    {
      text: "I'm",
      className: "text-blue-500",
    },
    {
      text: "Andell",
      className: "text-blue-500",
    },
  ];

  return (
    <>
      <BentoGrid />
      {/* <motion.div variants={textVariant()} className="h-full w-full mt-12">
        <div className="grid grid-rows-9 grid-flow-col gap-4 lg:grid-rows-4">
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
                <br /> and UI Developer
              </CardDescription>
            </CardHeader>

            <CardFooter className="w-[35%] h-[5.3%] whitespace-nowrap text-9xl text-[#ffffff09] overflow-hidden absolute top-80">
              <motion.p
                className="font-bold w-[100%]"
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
              <Button className="w-36 h-12 bg-secondary-500 hover:bg-secondary-600">
                Contact
              </Button>
              <Button
                variant="outline"
                className="w-36 h-12 text-secondary-900 border-secondary-600 bg-secondary-300 hover:bg-secondary-700"
              >
                My work
              </Button>
            </div>
          </div>
          <div className="flex justify-center border-none shadow-xl py-8 rounded-lg bg-secondary-600 row-span-4 col-span-6">
            <ComputersCanvas />
          </div>
        </div>
      </motion.div> */}
    </>
  );
};

export default SectionWrapper(Hero, "home");
