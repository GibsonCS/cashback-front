import { Button } from "@headlessui/react";
import Queries from "./Queries";
import { useState } from "react";

export default function Home() {
  const [data, setData] = useState<any>([]);
  const [showTable, setShowTable] = useState(false);

  const handleQuery = async () => {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/cashback`, {
      method: "GET",
    });

    const json = await response.json();

    setData(json);

    setShowTable(true);
  };

  const handleBack = () => {
    setShowTable(false);
  };

  return (
    <div id="home" className="bg-white">
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="relative left-[calc(50%-11rem)] aspect-1155/678 w-144.5 -translate-x-1/2 rotate-30 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-288.75"
          />
        </div>
        {!showTable && (
          <>
            <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
              <div className="text-center">
                <h1 className="text-5xl font-semibold tracking-tight text-balance text-gray-900 sm:text-7xl">
                  Cashback calculator
                </h1>
                <p className="mt-8 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8">
                  A simple tool that allows you to calculate and view cashback
                  queries.
                </p>
                <div className="mt-10 flex items-center justify-center gap-x-6">
                  <a
                    href="/cashback"
                    className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Calculate cashback
                  </a>
                  <Button
                    onClick={() => handleQuery()}
                    className="text-sm/6 font-semibold text-gray-900 cursor-pointer"
                  >
                    View queries <span aria-hidden="true"></span>
                  </Button>
                </div>
              </div>
            </div>
            <div
              aria-hidden="true"
              className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
            >
              <div
                style={{
                  clipPath:
                    "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                }}
                className="relative left-[calc(50%+3rem)] aspect-1155/678 w-144.5 -translate-x-1/2 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-288.75"
              />
            </div>
          </>
        )}
        {showTable && (
          <div className="flex-col">
            <Queries clients={data} />
            <div className=" justify-center flex">
              <Button
                onClick={() => handleBack()}
                className="rounded-md  cursor-pointer bg-white px-3.5 py-2.5 text-sm font-semibold text-black shadow-xs focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Back
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
