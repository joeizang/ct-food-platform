import React from "react";
import Image from "next/image";

type BeneficiaryDetailsProps = {
  id: string
}

export default async function BeneficiaryDetails ({ params } : { params: { id: string }}) {
  const temp = '/public/uploads/pix/modified_logo.png-d1d662ef-2cc3-44b6-ba70-f06af91d184f'
  const imagePath = temp.split("-")[0]
  console.log(imagePath)
  return (
    <main className="mx-2 px-2 h-screen overflow-hidden rounded-lg border bg-gradient-to-b from-[#76129b] to-[#15162c] shadow transition hover:shadow-lg">
      <div className="mx-4 h-screen rounded-lg flex flex-row mt-24">
        <div className="flex flex-col w-2/6">
          <Image width={500} height={498} src={imagePath ?? ""} alt="image" className="w-48 h-48 border-8 border-tulip-tree-500 rounded-full"></Image>
        </div>
        <div className="flex-grow flex flex-col">
          <div className="w-full flex flex-row gap-3 font-semibold mb-10">
            <span>Jackson</span> <span>M.</span> <span>Wade</span>
          </div>
          <button className="bg-seance-800 w-3/6">
            <span className="text-seance-50">Download Voucher</span>
          </button>
        </div>
      </div>
    </main>
  )
}