/* eslint-disable @typescript-eslint/ban-ts-comment */
import { uploadBeneficiaryProfilePhoto } from '~/server/serverfunctions';
import ProfilePhotoUploadForm from '../../../../app/components/beneficiaryProfileUpload';
import React from 'react'
import { redirect } from 'next/navigation';
import { db } from '~/server/db';

export default async function ProfilePicture (props : { params: { id: string } }) {
  const beneficiary = await db.beneficiary.findFirst({
    where: {
      id: props.params.id
    }
  })
  if (beneficiary === null || props.params.id === '') {
    redirect('/beneficiary-register')
  }
  return (
    <main className="mx-2 px-2 h-screen overflow-hidden rounded-lg border bg-gradient-to-b from-[#76129b] to-[#15162c] shadow transition hover:shadow-lg">

      <ProfilePhotoUploadForm
        uploadBeneficiaryPhoto={uploadBeneficiaryProfilePhoto}
        id={props.params.id}
        uploadFormHeading="Upload a Passport Picture"
        inputName="profilepic"
        formWarningText={<>You registration will <b>NOT</b> be considered as valid if you do not upload a clear Passport Snapshot of Yourself</>}
      />
    </main>
  )
}