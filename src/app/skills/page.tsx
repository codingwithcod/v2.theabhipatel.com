import { Card, CardContent, CardFooter, CardTitle } from "@/components/ui/card";
import { mySkills } from "@/constants/skills";
import Image from "next/image";

const Skills = () => {
  return (
    <div className="container flex min-h-[85vh] w-full flex-col items-center pt-24 sm:px-5 md:px-10 lg:px-20">
      <h1 className="text-2xl font-semibold text-muted-foreground">
        Skills Of{" "}
        <span className="bg-gradient-to-r from-orange-600 via-orange-500 to-yellow-500 bg-clip-text text-4xl font-bold leading-none tracking-wide text-transparent">
          TheAbhiPatel
        </span>
      </h1>

      {/* ---> Skills */}
      <div className="grid w-full grid-cols-2 gap-5 py-20 sm:grid-cols-3 sm:gap-10 md:grid-cols-4 xl:grid-cols-5">
        {mySkills.map((skill) => {
          return (
            <Card
              key={skill.name}
              className="hover p-2 shadow-[0px_0px_0px_1px] duration-1000 hover:shadow-[0px_0px_20px_5px] hover:shadow-blue-600"
            >
              <CardContent className="flex items-center justify-center">
                <Image
                  src={skill.icon}
                  alt={skill.name}
                  height={100}
                  width={100}
                />
              </CardContent>
              <CardFooter className="flex justify-center p-0">
                <CardTitle className="text-center text-xl">
                  {skill.name}
                </CardTitle>
              </CardFooter>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default Skills;
