"use client";
import React from "react";
import FormButton from "./formButton";

export default function ProfilePhotoUploadForm ({ uploadBeneficiaryProfilePhoto }: { uploadBeneficiaryProfilePhoto: (uploadData: FormData) => Promise<void>}) {

  return (
    <div className="mt-32 border p-8 lg:w-9/12 mx-auto rounded-md shadow-lg flex flex-col justify-center">
        <h1 className="mb-10 flex justify-center text-2xl md:text-3xl text-seance-100 font-bold tracking-tight">
          Upload a Passport-Sized Picture of Yourself
        </h1>
        <form action={uploadBeneficiaryProfilePhoto}>
          <div className="mb-5 flex flex-row gap-4 md:ml-20 items-center justify-center">
            <span className="item-center font-bold text-seance-100">
              Profile Image:
            </span>
            <span>
              <input
                className="lg:w-5/6 w-40 rounded-md bg-seance-100 p-3 text-2xl text-seance-950 ring-seance-300 active:ring-2"
                type="file"
                name="profilepic"
                id="profilepic"
              />
            </span>
          </div>
          <FormButton
            containerStyles="mt-5 flex justify-center"
            buttonStyles="bg-seance-800 hover:bg-seance-900 md:w-9/12 w-full rounded-md p-3 text-xl font-bold text-seance-50"
            buttonText="Upload Image"
            buttonType="submit"
          />
        </form>
      </div>
  )
}