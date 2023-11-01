import MaxWidthWrapper from "@/components/MaxWidthWrapper";

import { ArrowRight } from "lucide-react";

import Hero from "@/components/layout/sections/Hero";
import { services } from "@/config/landing-page";
import Footer from "@/components/layout/footer";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

export default function Home() {
  return (
    <>
      <MaxWidthWrapper className=" relative flex flex-col items-center justify-center text-center">
        <section className=" relative  mt-12">
          <div className="flex  items-center gap-10 ">
            <div className="flex  w-full md:w-[50%]  p-4 md:pt-20 md:pr-20 flex-col  gap-y-4 justify-end items-start">
              <h1 className=" text-6xl md:text-7xl font-bold text-center md:text-start">
                Chat with your documents in seconds with
                <span className="text-primary"> Quill</span>
              </h1>

              <p className="mt-6 text-xl md:text-2xl text-gray-600 text-center md:text-start ">
                Powerful, Beatiful software as a service that allows you to chat
                with your documents
              </p>
              <Link
                href="/signup"
                className={cn(
                  buttonVariants({ size: "lg" }),
                  "rounded-full p-4 max-w-xs text-2xl mx-auto md:mx-0 flex items-center font-semibold h-14 my-5 "
                )}
              >
                {" "}
                start for free <ArrowRight className="ml-2 h-6 w-6" />
              </Link>

              {/* <Searchbar /> */}
            </div>

            <div className="relative  w-[0%] hidden md:block md:w-[50%]  h-full    sm:mx-auto">
              <Image
                src="/assets/start.svg"
                alt="arrow"
                width={105}
                height={105}
                className="max-xl:hidden absolute right-[15%] top-[100px] "
              />
              <Image
                src={"/assets/hero-1.png"}
                alt={"woman with laptob"}
                width={1200}
                height={1188}
                quality={100}
                priority
                className="object-contain"
              />

              <Image
                src="/assets/hand-drawn-arrow.svg"
                alt="arrow"
                width={175}
                height={175}
                className="max-xl:hidden absolute -left-[15%] bottom-[100px] z-0"
              />
              <Image
                src="/assets/start.svg"
                alt="arrow"
                width={105}
                height={105}
                className="max-xl:hidden absolute left-[10%] bottom-[80px] "
              />
            </div>
          </div>
        </section>
      </MaxWidthWrapper>

      {/* value proposition section */}
      <div>
        <div className="relative isolate">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          >
            <div
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
              className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            />
          </div>

          <div>
            <div className="mx-auto max-w-screen-xl px-6 lg:px-8">
              <div className="mt-16 flow-root sm:mt-24">
                <div className="-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4">
                  <Image
                    src="/dashboard-preview.jpg"
                    alt="product preview"
                    width={1364}
                    height={866}
                    quality={100}
                    className="rounded-md bg-white p-2 sm:p-8 md:p-20 shadow-2xl ring-1 mx-auto ring-gray-900/10"
                  />
                </div>
              </div>
            </div>
          </div>

          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          >
            <div
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
              className="relative left-[calc(50%-13rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-36rem)] sm:w-[72.1875rem]"
            />
          </div>
        </div>
      </div>

      {/* Feature section */}
      <div className="mx-auto relative  mb-32 mt-32 max-w-5xl sm:mt-56">
        <div className="mb-12 px-6 lg:px-8">
          <div className="mx-auto max-w-2xl sm:text-center">
            <h2 className="mt-2 font-bold text-4xl text-gray-900 sm:text-5xl">
              All what i have used to build this website
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              abdellah chehri has used so many thing in order to build this
              website
            </p>
          </div>

          <Image
            src="/assets/erro_down.svg"
            alt="arrow"
            width={105}
            height={105}
            className="max-xl:hidden absolute right-[0] top-[-100px] z-0"
          />
        </div>

        {/* steps */}
        <ol className="my-8 mb-12 px-6 lg:px-8 w-full h-fit min-h-[200px] grid grid-col-1 gap-4  md:grid-cols-3 ">
          {services.map((item, index) => (
            <li
              key={item.title}
              className="md:flex-1 bg-blue-500 h-[200px]  rounded-lg shadow p-4 "
            >
              <div className="flex flex-col space-y-2  border-zinc-300 py-2 pl-4  md:pb-0 md:pl-0 md:pt-4">
                <span className="text-xl text-white font-semibold">
                  {item.title}
                </span>
                <span className="mt-2 text-gray-100">{item.description}</span>
              </div>
            </li>
          ))}
        </ol>

        <div className="mb-12 px-6 lg:px-8">
          <div className="mx-auto max-w-2xl sm:text-center">
            <h2 className="mt-2 font-bold text-4xl text-gray-900 sm:text-5xl">
              With few easy steps
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              now you can learn scal and grow your business fater.
            </p>
          </div>

          <Image
            src="/assets/erro_down.svg"
            alt="arrow"
            width={105}
            height={105}
            className="max-xl:hidden absolute right-[0] top-[-100px] z-0"
          />
        </div>

        <div className="mx-auto max-w-screen-2xl px-6 lg:px-8">
          <div className="mt-16 flow-root sm:mt-24">
            <div className="-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4">
              <Image
                src="/file-upload-preview.jpg"
                alt="uploading preview"
                width={1419}
                height={732}
                quality={100}
                className="rounded-md bg-white p-2 sm:p-8 md:p-20 shadow-2xl ring-1 ring-gray-900/10"
              />
            </div>
          </div>
        </div>
      </div>
      {/* here it the footer */}
      <Footer />
    </>
  );
}
