'use client'
import React from 'react'
import Image from 'next/image'
import { Beneficiary } from '@prisma/client'
import FormButton from './formButton'

export type BeneficiaryProfileProps = {
  beneficiary?: Beneficiary
  id: string
  uploadAvatarProfilePhoto: (uploadData: FormData) => Promise<void>
}

export default function BeneficiaryProfile (props: BeneficiaryProfileProps) {

  const getPathSegment = () => {
    return props.beneficiary?.profilePicture.split("images") ?? []
  }

  return (
    <>
      {props.beneficiary ? props.beneficiary.profilePicture.length > 0 ? (
        <Image
        width={800}
        height={800}
        src={props.beneficiary?.profilePicture.length > 0 ? `/images${getPathSegment()[1]}` : '/images/avatar-shadow.webp'}
        alt="image"
        className="mx-auto lg:h-48 lg:w-48 w-32 h-32 rounded-full lg:border-8 border-4 border-seance-500 mb-0"
      ></Image>
      ) : <form action={props.uploadAvatarProfilePhoto}>
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
    </form> : <Image
        width={800}
        height={800}
        src={'/images/avatar-shadow.webp'}
        alt="image"
        className="mx-auto lg:h-48 lg:w-48 w-32 h-32 rounded-full lg:border-8 border-4 border-seance-500 mb-0"
      ></Image>}
    </>
  )
}