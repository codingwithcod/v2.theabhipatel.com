import { githubIcon, linkedinIcon } from "@/assets/icons";
import { theabhipatelImage } from "@/assets/images";
import Image from "next/image";
import Link from "next/link";

const About = () => {
  return (
    <main className="container relative min-h-[90vh] py-24 sm:px-5 md:px-10 lg:px-20">
      {/* ---> Gradient blurs  */}
      <div className="absolute left-0 top-0 -z-50 h-52 w-52 rounded-full bg-gradient-to-tr from-[#14a2cd] via-[#ff00b7] to-[#ff00b7] blur-[150px]"></div>
      <div className="absolute bottom-10 right-0 -z-50 h-32 w-32 rounded-full bg-gradient-to-tr from-[#14a2cd] via-[#ff00b7] to-[#ff00b7] blur-[100px]"></div>

      {/* ---> Page content */}
      <div className="flex w-full flex-col md:flex-row">
        {/* ---> Left section */}
        <div className="flex w-full flex-col items-center gap-10 bg-blue-900/10 pb-10 md:w-[40%]">
          <div className="h-80 w-80 overflow-clip rounded-full border-2 shadow-[0px_0px_40px_10px] shadow-black duration-700 hover:shadow-blue-800">
            <Image
              src={theabhipatelImage}
              alt="the abhi patel | Abhishek Patel"
              height={200}
              width={220}
              className="h-full w-full bg-orange-400 bg-cover"
            />
          </div>
          <div>
            <span className="text-sm tracking-widest text-muted-foreground">
              &lt; A Full Stack Developer / &gt;
            </span>
            <p className="bg-gradient-to-r from-orange-600 via-orange-500 to-yellow-500 bg-clip-text text-5xl font-extrabold leading-none tracking-wide text-transparent">
              TheAbhiPatel
            </p>
          </div>
          <div className="flex items-center justify-center gap-5">
            <Link
              target="_blank"
              href={"https://linkedin.com/in/theabhipatel"}
            >
              <Image
                src={linkedinIcon}
                height={30}
                width={30}
                alt="theabhipatel linkedin"
                className="duration-500 hover:scale-125"
              />
            </Link>
            <Link
              target="_blank"
              href={"https://github.com/theabhipatel"}
            >
              <Image
                src={githubIcon}
                height={30}
                width={30}
                alt="theabhipatel linkedin"
                className="invert duration-500 hover:scale-125"
              />
            </Link>
          </div>
        </div>

        {/* ---> Right section */}
        <div className="w-full bg-blue-900/20 p-5 md:w-[60%] md:p-10">
          <div className="hidden md:block">
            <span className="text-sm tracking-widest text-muted-foreground">
              &lt; A Full Stack Developer / &gt;
            </span>
            <p className="bg-gradient-to-r from-orange-600 via-orange-500 to-yellow-500 bg-clip-text text-6xl font-extrabold leading-none tracking-wide text-transparent">
              TheAbhiPatel
            </p>
          </div>

          <article className="mt-7">
            <p className="text-3xl font-bold">
              <span className="bg-gradient-to-r from-indigo-500 via-indigo-500 to-blue-500 bg-clip-text text-transparent">
                Namaskar
              </span>{" "}
              🙏
            </p>
            <br />
            <h1 className="text-justify text-lg text-muted-foreground">
              I&apos;m{" "}
              <span className="bg-gradient-to-r from-orange-600 via-orange-500 to-yellow-500 bg-clip-text text-lg font-semibold text-transparent">
                Abhishek Patel
              </span>
              , a full stack developer with experience in building both the
              front-end and back-end of web applications.
            </h1>

            <p className="mt-3 text-justify text-muted-foreground">
              I work with React, Next.js, and React Native to create
              user-friendly and responsive interfaces, while using Node.js and
              NestJS to build strong server-side systems. My skills include
              working with JavaScript, TypeScript, and managing databases like
              MongoDB, MySQL, and PostgreSQL.
            </p>

            <p className="mt-3 text-justify text-muted-foreground">
              I enjoy creating complete solutions that are both efficient and
              scalable, whether for web or mobile applications.
            </p>
          </article>
        </div>
      </div>
    </main>
  );
};

export default About;
