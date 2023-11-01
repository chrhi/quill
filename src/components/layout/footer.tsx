import { FC } from "react";
import MaxWidthWrapper from "../MaxWidthWrapper";
import Link from "next/link";

interface footerAbdullahProps {}

const Footer: FC = ({}) => {
  return (
    <div className="w-full h-[350px] bg-white/75 backdrop-blur-lg transition-all">
      <MaxWidthWrapper className="flex w-full h-full flex-col">
        <div className="w-full h-[250px]  grid grid-cols-5 p-8  grid-rows-6 ">
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
          <div className="h-full col-span-1 w-full flex flex-col gap-y-4">
            <p className="font-bold text-xl text-gray-900">product</p>
            <p className="text-lg font-semibold">pricing</p>
            <p className="text-lg font-semibold">github</p>
          </div>
          <div className="h-full w-full col-span-1 flex flex-col gap-y-4">
            <p className="font-bold text-xl text-gray-900">contact</p>
            <p className="text-lg font-semibold">facebook</p>
            <p className="text-lg font-semibold">twitter</p>
            <p className="text-lg font-semibold">instagram</p>
          </div>
          <div className="h-full w-full col-span-1 flex flex-col gap-y-4">
            <p className="font-bold text-xl text-gray-900">Leagal</p>
            <p className="text-lg font-semibold">terms</p>
            <p className="text-lg font-semibold">policy</p>
          </div>
        </div>
        <div className="border-t flex items-center justify-start   w-full mt-auto h-[50px]">
          <p className="text-black text-md text-center mx-auto font-medium">
            {" "}
            © 2023 all rights resolved to abdellah chehri
          </p>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default Footer;
