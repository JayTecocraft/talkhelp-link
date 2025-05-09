import Image from "next/image";
import logo from "../images/logos/talk_help_logo.jpg";
import { FreeTrialBanner } from "@/components/FreeTrial";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen text-black bg-gradient-to-b from-[#f7f5c5] to-[#f5f3b8]">
      <main className="relative flex flex-col h-full w-full max-w-2xl mx-auto items-center justify-start px-4 py-12">
        {/* Header Section */}
        <div className="flex flex-col items-center mb-8">
          <div className="relative">
            <Image
              src={logo.src}
              alt="TalkHelp Logo"
              height={200}
              width={200}
              className="rounded-full shadow-lg"
            />
            <div className="absolute inset-0 rounded-full shadow-inner ring-4 ring-white/30"></div>
          </div>
          <h1 className="text-4xl font-bold mt-6 text-center">TalkHelp</h1>
          <p className="text-gray-700 mt-2 text-center max-w-md">
            Professional support when you need someone to talk to
          </p>
        </div>

        {/* Divider */}
        <div className="w-full max-w-md h-px bg-black/10 my-6"></div>
        
        {/* Links Section */}
        <div className="w-full space-y-4">
          <h2 className="text-xl font-medium mb-4 text-gray-800">Our Support Networks</h2>
          
          <a
            rel="noopener noreferrer"
            href="https://daffodilfoundation.co.uk/"
            target="_blank"
            className="flex group items-center w-full p-5 transition-all duration-300 rounded-lg backdrop-blur-md bg-white/30 shadow-md hover:bg-white/50 hover:shadow-lg border border-white/20"
          >
            <div className="flex-1">
              <h3 className="font-semibold text-lg text-gray-800 group-hover:text-black">
                Daffodil Foundation
              </h3>
              <p className="text-sm text-gray-700 group-hover:text-black mt-1">
                Giving Hope & Support in Times of Crisis
              </p>
            </div>

            {/* Arrow icon with improved animation */}
            <div className="transition-all duration-300 group-hover:translate-x-1 text-gray-600 group-hover:text-black">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </div>
          </a>
          
          <a
            rel="noopener noreferrer"
            href="https://withme.so/talkhelp"
            target="_blank"
            className="flex group items-center w-full p-5 transition-all duration-300 rounded-lg backdrop-blur-md bg-white/30 shadow-md hover:bg-white/50 hover:shadow-lg border border-white/20"
          >
            <div className="flex-1">
              <h3 className="font-semibold text-lg text-gray-800 group-hover:text-black">
                WithMe
              </h3>
              <p className="text-sm text-gray-700 group-hover:text-black mt-1">
                Alun Jones BA (Hon) MCMA
              </p>
            </div>

            <div className="transition-all duration-300 group-hover:translate-x-1 text-gray-600 group-hover:text-black">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </div>
          </a>
        </div>
        <FreeTrialBanner/>
      </main>
    </div>
  );
}