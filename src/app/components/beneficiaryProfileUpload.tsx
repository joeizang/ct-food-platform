/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React from "react"
import FormButton from "./formButton"
import toast from "react-hot-toast"

type ProfilePhotoUploadFormProps = {
  uploadFormHeading: string
  uploadBeneficiaryPhoto: (data: FormData, id: string) => Promise<void>
  id: string
  toastError?: string
  inputName: string
  formWarningText: string | JSX.Element
}

export default function ProfilePhotoUploadForm (props: ProfilePhotoUploadFormProps) {

  const clientSideAction = async (data: FormData) => {
    const file = data.get(props.inputName) as unknown as File
    if (!file) {
      toast.error(props.toastError ?? 'You must upload a clear picture of yourself or risk invalidation!')
      return
    }
    if (file.size > 200000) {
      toast.error('The file you have uploaded is larger than the required file size. Please reduce the size of the file!')
      return
    }
    if (!file.name.includes('png') && !file.name.includes('jpeg') && !file.name.includes('jpg') && !file.name.includes('webp')) {
      toast.error('You have uploaded an unsupported image type!')
      return
    }

    try {
      await props.uploadBeneficiaryPhoto(data, props.id)
    } catch (error) {
      console.log('Caught the server error', (error as any).message)
    }
  }

  return (
    <>
    <ul className="mt-24 text-seance-950 rounded-md divide-seance-900 divide-y-4 lg:w-2/4 mx-auto bg-seance-50">
        <li className="px-4 py-2 lg:text-2xl">The picture you upload cannot be larger than 200kb</li>
        <li className="px-4 py-2 lg:text-2xl">The picture formats that are accepted are *.png and *.jpg</li>
        <li className="px-4 py-2 text-guardsman-red-600 lg:text-2xl">{props.formWarningText}</li>
      </ul>
    <div className="lg:mt-32 mt-16 border p-8 lg:w-9/12 mx-auto rounded-md shadow-lg flex flex-col justify-center">
        <h1 className="mb-10 flex justify-center text-2xl md:text-3xl text-seance-100 font-bold tracking-tight">
          {props.uploadFormHeading}
        </h1>
        <form action={clientSideAction}>
          <div className="mb-5 flex flex-row gap-4 md:ml-20 items-center justify-center">
            <span className="item-center font-bold text-seance-100">
              Profile Image:
            </span>
            <span>
              <input
                className="lg:w-5/6 w-40 rounded-md bg-seance-100 p-3 text-2xl text-seance-950 ring-seance-300 active:ring-2"
                type="file"
                name={props.inputName}
                id={props.inputName}
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
    </>
  )
}