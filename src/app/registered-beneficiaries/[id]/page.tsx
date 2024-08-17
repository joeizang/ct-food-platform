import React from "react";
import Image from "next/image";
import Link from "next/link";
import { readFile } from "fs/promises";
import { db } from "~/server/db";
import { redirect } from "next/navigation";
import { split } from "postcss/lib/list";

type BeneficiaryDetailsProps = {
  id: string
}

export default async function BeneficiaryDetails ({ params } : { params: { id: string }}) {
  const beneficiary = await db.beneficiary.findFirst({
    where: {
      id : params.id
    }
  })
  console.log(beneficiary)
  const splitpath = beneficiary?.profilePicture.split("images")
  console.log(splitpath)
  if (!beneficiary) {
    redirect("/beneficiary-register")
  }
  return (
    <main className="mx-2 h-screen overflow-hidden rounded-lg border bg-gradient-to-b from-[#76129b] to-[#15162c] px-2 shadow transition hover:shadow-lg">
      <div className="mx-4 mt-24 flex h-screen flex-col lg:flex-row rounded-lg">
        <div className="lg:mr-10 flex  mb-8 flex-row lg:justify-normal justify-end gap-10 lg:h-3/6 lg:w-2/6 lg:flex-col lg:border-r-2 lg:border-b-0">
          <Image
            width={800}
            height={800}
            src={`/images${splitpath?.[1]}`}
            alt="image"
            className="mx-auto lg:h-48 lg:w-48 w-32 h-32 rounded-full lg:border-8 border-4 border-tulip-tree-500 mb-6"
          ></Image>
          <div className="lg:mb-10 flex w-full flex-row font-semibold">
            <span className="lg:text-3xl lg:m-3 tracking-tight lg:ml-20">{beneficiary?.firstname.toUpperCase()}</span>{" "}
            <span className="lg:text-3xl lg:m-3 tracking-tight ml-1">{beneficiary?.middlename.toUpperCase()}</span>{" "}
            <span className="lg:text-3xl lg:m-3 tracking-tight ml-1">{beneficiary?.lastname.toUpperCase()}</span>
          </div>
        </div>
        <div className="flex flex-grow flex-col">
          <button
            className={`btn flex lg:px-5 lg:w-3/6 justify-center rounded-md border-2 p-5 bg-seance-800 ${beneficiary.voucherId.length < 1 ?"disabled:border-guardsman-red-500" : "hover:bg-seance-900 hover:ring-seance-400  border-seance-400"}`}
            disabled={beneficiary?.voucherId.length === 0}
          >
            <span className="font-semibold text-seance-50 text-2xl">
              Download Voucher
            </span>
          </button>
          <div className="mt-20 lg:px-0">
              <span className="px-0">
                <label className="inline-flex cursor-pointer items-center">
                  <input type="checkbox" value="" className="peer sr-only" />
                  <div className="bg-seance-100 peer-focus:ring-seance-100 dark:peer-focus:ring-seance-100 dark:bg-seance-600 peer-checked:after:border-seance-50 after:bg-seance-50 after:border-seance-300 dark:border-seance-600 peer-checked:bg-tulip-tree-600 peer relative h-6 w-11 rounded-full after:absolute after:start-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:border after:transition-all after:content-[''] peer-checked:after:translate-x-full peer-focus:outline-none peer-focus:ring-4 rtl:peer-checked:after:-translate-x-full"></div>
                  <span className="text-seance-100 dark:text-gray-300 ms-3 text-md font-semibold">
                    Registration Complete
                  </span>
                </label>
              </span>
              <div>
                <p className="mt-12 text-xl lg:text-2xl text-seance-50">If you have been assigned a voucher, it will appear here:</p>
                <div className="border-2 rounded-md border-seance-100 w-4/6 mt-3 h-2/6 p-3">
                  it will appear here
                </div>
              </div>
          </div>
        </div>
      </div>
    </main>
  );
}