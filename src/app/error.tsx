"use client";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Button, buttonVariants } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function Error({ reset }: { reset: () => void }) {
  return (
    <MaxWidthWrapper className="mb-12 mt-28 sm:mt-40 flex flex-col items-center justify-center text-center">
      <h1 className="max-w-4xl text-5xl font-bold md:text-6xl lg:text-7xl">
        ohh no , sorry something went wrong
      </h1>
      <p className="mt-5 max-w-prose text-zinc-700 sm:text-lg">
        please reload the page or contact the support if the issue continue you
        can open an issue on{" "}
        <Link href="githubliknk" className="text-blue-500">
          github
        </Link>{" "}
        issue if your are a devaloper
      </p>

      <div className="flex justify-center items-center gap-x-8 h-[100px] w-full ">
        <Link
          className={buttonVariants({
            size: "lg",
            className: "mt-5 bg-white/80 text-gray-900",
          })}
          href="/"
        >
          <ArrowLeft className="mr-2 h-5 w-5" />
          Go to Home
        </Link>
        <Button className="mt-5" size="lg" onClick={() => reset()}>
          {" "}
          Try again!
        </Button>
      </div>
    </MaxWidthWrapper>
  );
}
