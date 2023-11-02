import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { buttonVariants } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { FC } from "react";

const NotFound: FC = ({}) => {
  return (
    <MaxWidthWrapper className="mb-12 mt-28 sm:mt-40 flex flex-col items-center justify-center text-center">
      <h1 className="max-w-4xl text-7xl font-bold md:text-6xl lg:text-7xl">
        404.
      </h1>
      <p className="mt-5 max-w-prose text-zinc-700 text-2xl ">
        opss seems like this page doest exists or has been removed
      </p>

      <Link
        className={buttonVariants({
          size: "lg",
          className: "mt-5",
        })}
        href="/"
      >
        <ArrowLeft className="mr-2 h-5 w-5" />
        Go to Home
      </Link>
    </MaxWidthWrapper>
  );
};

export default NotFound;
