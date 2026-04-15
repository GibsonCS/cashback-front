import { Button } from "@headlessui/react";
import { useForm } from "react-hook-form";
import { useState } from "react";

export default function Cashback() {
  const [showForm, setShowForm] = useState(true);
  const [data, setData] = useState<any>(null);

  interface InputForm {
    value: number;
    client_type: string;
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<InputForm>();

  const handleCashback = async (inputData: InputForm) => {
    setShowForm(false);

    console.log(inputData);

    const response = await fetch(`${import.meta.env.VITE_API_URL}/cashback`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(inputData),
    });

    const json = await response.json();

    setData(json);
  };

  return (
    <div className="bg-white">
      <div className="relative isolate overflow-hidden bg-linear-to-b from-indigo-100/20 pt-14">
        <div
          aria-hidden="true"
          className="absolute inset-y-0 right-1/2 -z-10 -mr-96 w-[200%] origin-top-right skew-x-[-30deg] bg-white shadow-xl ring-1 shadow-indigo-600/10 ring-indigo-50 sm:-mr-80 lg:-mr-96"
        />
        <div className="mx-auto max-w-7xl px-6 py-32 sm:py-40 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-x-16 lg:gap-y-8 xl:grid-cols-1 xl:grid-rows-1 xl:gap-x-8">
            <h1 className="max-w-2xl text-5xl font-semibold tracking-tight text-balance text-gray-900 sm:text-7xl lg:col-span-2 xl:col-auto">
              Calculate your cashback
            </h1>
            <div className="mt-6 max-w-xl lg:mt-0 xl:col-end-1 xl:row-start-1">
              <div className="mt-10 flex items-center gap-x-6">
                {showForm && (
                  <form onSubmit={handleSubmit(handleCashback)}>
                    <div>
                      <label
                        htmlFor="price"
                        className="block text-sm/6 font-medium text-gray-900"
                      >
                        Value
                      </label>
                      <div className="mt-2">
                        <div className="flex items-center rounded-md bg-white px-3 outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
                          <div className="shrink-0 text-base text-gray-500 select-none sm:text-sm/6">
                            R$
                          </div>
                          <input
                            id="VALUE"
                            type="number"
                            {...register("value", {
                              required: "This place cannot to be empty",
                            })}
                            placeholder="0.00"
                            aria-describedby="price-currency"
                            className="block min-w-0 grow bg-white py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
                          />
                        </div>
                        {errors.value && (
                          <span className="text-red-500">
                            {errors.value.message}
                          </span>
                        )}
                        <label
                          htmlFor="price"
                          className="block text-sm/6 font-medium text-gray-900"
                        >
                          Client type
                        </label>
                        <div className="flex items-center rounded-md bg-white px-3 outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
                          <select
                            id="CLIENT_TYPE"
                            {...register("client_type", { required: true })}
                            aria-describedby="price-currency"
                            className="block min-w-0 grow bg-white py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
                          >
                            <option value="VIP">VIP</option>
                            <option value="DEFAULT">DEFAULT</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div className="flex pt-4 justify-evenly">
                      <Button
                        type="submit"
                        className="rounded-md cursor-pointer bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                      >
                        Send
                      </Button>
                      <a
                        href="/"
                        className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-black shadow-xs focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                      >
                        Back <span aria-hidden="true"></span>
                      </a>
                    </div>
                  </form>
                )}
                {!showForm && (
                  <div className="flex w-56 ">
                    <label className="font-bold text-2xl" htmlFor="">
                      Cashback:
                    </label>
                    <span className="ml-2 mr-3 text-2xl text-emerald-600">
                      R${data && data.cashback}
                    </span>
                    <a
                      href="/cashback"
                      className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-black shadow-xs focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                      Back <span aria-hidden="true"></span>
                    </a>
                  </div>
                )}
              </div>
            </div>
            <img
              alt=""
              src="https://thumbs.dreamstime.com/b/moedas-e-seta-da-ilustra%C3%A7%C3%A3o-do-vetor-do-logotipo-do-conceito-de-cashback-89800644.jpg"
              className="mt-10 aspect-6/5 w-full max-w-lg rounded-2xl object-cover outline-1 -outline-offset-1 outline-black/5 sm:mt-16 lg:mt-0 lg:max-w-none xl:row-span-2 xl:row-end-2 xl:mt-36"
            />
          </div>
        </div>
        <div className="absolute inset-x-0 bottom-0 -z-10 h-24 bg-linear-to-t from-white sm:h-32" />
      </div>
    </div>
  );
}
