import React from 'react'

export default async function UploadImage ({ params } : { params: { id: string }}) {
  return (
    <main className="mx-2 px-2 h-screen overflow-hidden rounded-lg border bg-gradient-to-b from-[#76129b] to-[#15162c] shadow transition hover:shadow-lg">
      <ul className="mt-24 text-seance-950 rounded-md divide-seance-900 divide-y-4 lg:w-2/4 mx-auto bg-seance-50">
        <li className="px-4 py-2">The picture you upload cannot be larger than 200kb</li>
        <li className="px-4 py-2">The picture formats that are accepted are *.png and *.jpg</li>
        <li className="px-4 py-2">You application will not be considered if you do not upload a clear picture of yourself.</li>
      </ul>
      <div className="bg-seance-50 text-seance-950 w-full">
        Test submission successful with ID: {params.id}
      </div>
      <div className="mt-32 border p-8 lg:w-9/12 mx-auto rounded-md shadow-lg flex flex-col justify-center">
        <h1 className="mb-10 flex justify-center text-2xl md:text-3xl text-seance-100 font-bold tracking-tight">
          Upload a Passport-Sized Picture of Yourself
        </h1>
        <form action="">
          <div className="mb-5 flex flex-row gap-4 md:ml-20 items-center justify-center">
            <span className="item-center font-bold text-seance-100">
              Profile Image:
            </span>
            <span>
              <input
                className="lg:w-5/6 w-40 rounded-md bg-seance-100 p-3 text-2xl text-seance-950 ring-seance-300 active:ring-2"
                type="file"
                name="spousename"
                id="spousename"
              />
            </span>
          </div>
          <div className="mt-5 flex justify-center">
            <button className="bg-seance-800 hover:bg-seance-900 md:w-9/12 w-full rounded-md p-3 text-xl font-bold text-seance-50">
              Upload Image
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}