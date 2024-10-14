import Link from "next/link";

const Home = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between py-24 sm:px-5 md:px-10 lg:px-20">
      <div className="before:bg-gradient-radial after:bg-gradient-conic relative z-[-1] flex h-[24rem] place-items-center before:absolute before:h-[300px] before:w-full before:-translate-x-1/2 before:rounded-full before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full after:translate-x-1/3 after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 sm:before:w-[480px] sm:after:w-[240px] before:lg:h-[360px]">
        <div className="flex flex-col items-center gap-2">
          <p className="text-sm tracking-widest">
            &lt; A Full Stack Developer / &gt;
          </p>
          <h1 className="bg-gradient-to-r from-orange-600 via-orange-500 to-yellow-500 bg-clip-text text-5xl font-extrabold leading-none tracking-wide text-transparent sm:text-6xl">
            The Abhi Patel
          </h1>
          <p className="mt-5 text-3xl tracking-widest">
            Turning{" "}
            <span className="bg-gradient-to-r from-blue-500 to-indigo-500 bg-clip-text font-bold text-transparent">
              Concepts
            </span>{" "}
            into Functional <br />{" "}
            <span className="bg-gradient-to-r from-blue-500 via-indigo-400 to-indigo-600 bg-clip-text font-bold text-transparent">
              Web Experiences
            </span>{" "}
            from{" "}
            <span className="bg-gradient-to-r from-blue-500 via-blue-400 to-green-400 bg-clip-text font-bold text-transparent">
              Front to Back
            </span>
          </p>
        </div>
      </div>

      <div className="hidden w-full justify-center gap-5 md:flex">
        <Link href={"/skills"}>
          <div className="flex h-20 items-center justify-center rounded-md border bg-muted/40 px-5 hover:bg-muted">
            <p className="text-2xl font-semibold tracking-wider">Skills </p>
          </div>
        </Link>
        <Link href={"/projects"}>
          <div className="flex h-20 items-center justify-center rounded-md border bg-muted/40 px-5 hover:bg-muted">
            <p className="text-2xl font-semibold tracking-wider">Projects </p>
          </div>
        </Link>
        <Link href={"/skills"}>
          <div className="flex h-20 items-center justify-center rounded-md border bg-muted/40 px-5 hover:bg-muted">
            <p className="text-2xl font-semibold tracking-wider">Services </p>
          </div>
        </Link>
        <Link href={"/about"}>
          <div className="flex h-20 items-center justify-center rounded-md border bg-muted/40 px-5 hover:bg-muted">
            <p className="text-2xl font-semibold tracking-wider">About Me </p>
          </div>
        </Link>
      </div>

      {/* <div className="mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-4 lg:text-left">
        <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-2xl font-semibold">
            Docs{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            Find in-depth information about Next.js features and API.
          </p>
        </a>

        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-2xl font-semibold">
            Learn{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            Learn about Next.js in an interactive course with&nbsp;quizzes!
          </p>
        </a>

        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-2xl font-semibold">
            Templates{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            Explore starter templates for Next.js.
          </p>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-2xl font-semibold">
            Deploy{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-balance text-sm opacity-50">
            Instantly deploy your Next.js site to a shareable URL with Vercel.
          </p>
        </a>
      </div> */}
    </main>
  );
};

export default Home;
