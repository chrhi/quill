import { FC } from "react";
import MaxWidthWrapper from "../MaxWidthWrapper";
import Link from "next/link";

interface footerAbdullahProps {}

const Footer: FC = ({}) => {
  return (
    <div className="w-full h-fit md:h-[350px] border-t border-gray-200 bg-white/75 backdrop-blur-lg transition-all">
      <MaxWidthWrapper className="flex w-full h-full  justify-between flex-col">
        <div className="w-full h-fit py-4  md:h-[250px]  grid gap-4 gap-y-8 grid-cols-1 md:grid-cols-6 p-8  ">
          <div className="h-full col-span-2 w-full flex flex-col gap-y-4">
            <Link
              href="/"
              className="flex  text-2xl  text-blue-500 font-bold  md:m-0 "
            >
              {/* <Image
              src={"/logo.png"}
              alt={"alpha logo"}
              width={45}
              height={45}
            /> */}
              quill.
            </Link>
          </div>
          <div className="h-full  col-span-2 md:col-span-1 w-full flex flex-col gap-y-4">
            <p className="font-semibold text-xl text-gray-900">product</p>
            <p className="text-lg ml-2 ">pricing</p>
            <p className="text-lg  ml-2">github</p>
          </div>
          <div className="h-full w-full col-span-2 md:col-span-1 flex flex-col gap-y-4">
            <p className="font-semibold text-xl text-gray-900">contact</p>
            <p className="text-lg ml-2 ">facebook</p>
            <p className="text-lg ml-2">twitter</p>
            <p className="text-lg ml-2">instagram</p>
          </div>
          <div className="h-full w-full col-span-2 md:col-span-1 flex flex-col gap-y-4">
            <p className="font-semibold text-xl text-gray-900">Leagal</p>
            <p className="text-lg ml-2">terms</p>
            <p className="text-lg ml-2">policy</p>
          </div>
          <div className="h-full w-full col-span-2 md:col-span-1 flex flex-col gap-y-4">
            <p className="font-semibold text-xl text-gray-900">Leagal</p>
            <p className="text-lg ml-2">terms</p>
            <p className="text-lg ml-2">policy</p>
          </div>
        </div>
        <div className="border-t flex items-center justify-start   w-full  h-[50px]">
          <p className="text-gray-600 text-sm text-center mx-auto">
            {" "}
            © 2023 all rights resolved to abdellah chehri
          </p>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default Footer;
