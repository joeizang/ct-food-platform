import React from 'react'

export default async function UploadImage () {
  return (
    <main>
      <div>
        <form action="">
        <div className="mb-5 items-center flex flex-row">
              <span className="font-bold item-center p-3 w-48">Profile Picture : <i className="text-guardsman-red-500 font-bold">*</i></span><span><input className="w-full p-3 bg-seance-100 rounded-md active:ring-2 ring-seance-300 text-2xl text-seance-950" type="file" name="spousename" id="spousename" /></span>
            </div>
        </form>
      </div>
    </main>
  )
}