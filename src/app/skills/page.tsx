import { Card, CardContent, CardFooter, CardTitle } from "@/components/ui/card";
import { mySkills } from "@/constants/skills";

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
      <div className="mt-5 grid w-full grid-cols-2 gap-5 md:grid-cols-4 lg:grid-cols-5">
        {mySkills.map((skill) => {
          return (
            <Card
              key={skill.name}
              className="p-2"
            >
              <CardContent className="flex items-center justify-center">
                {skill?.icon}
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
