/* eslint-disable @typescript-eslint/ban-ts-comment */
import { writeFile } from 'fs/promises';
import { redirect } from 'next/navigation';
import { join } from 'path';
import React from 'react'
import ProfilePhotoUploadForm from '~/app/components/beneficiaryProfileUpload';
import { db } from '~/server/db';

export default async function UploadImage ({ params } : { params: { id: string }}) {
  let beneficiaryId = ''
  let beneficiaryIDType = ''
  const beneficiary = await db.beneficiary.findFirst({
    where: {
      id: params.id
    }
  })

  //@ts-ignore
  beneficiaryId = beneficiary?.idnumber
  //@ts-ignore
  beneficiaryIDType = beneficiary?.identityType
  async function uploadBeneficiaryValidationPhoto (data: FormData, id: string) {
    "use server"

    const file = data.get("validationpic") as unknown as File
    const bytes = await file.arrayBuffer()
    const buffer = Buffer.from(bytes)
    const path = join(`${process.cwd()}/public/images/`, 'beneficiaries/', `${params.id}-validation-${file.name}`)

    const updated = await db.beneficiary.update({
      where: {
        id: id
      },
      data: {
        validationPicture: path
      }
    })

    await writeFile(path, buffer)
    console.log('successfully uploaded!', updated)
    redirect(`/beneficiary-register/${updated.id}/profilepicture`)
  }

  return (
    <main className="mx-2 px-2 h-screen overflow-hidden rounded-lg border bg-gradient-to-b from-[#76129b] to-[#15162c] shadow transition hover:shadow-lg">

      <ProfilePhotoUploadForm
        uploadBeneficiaryPhoto={uploadBeneficiaryValidationPhoto}
        inputName="validationpic"
        id={params.id}
        uploadFormHeading="Upload a Picture of yourself holding your ID"
        formWarningText={<>You registration will <b>NOT</b> be considered as valid if you do not upload a clear snapshot of Yourself holding your <b>{beneficiaryIDType.toLocaleUpperCase()}</b> ID with number <b>{beneficiaryId}</b></>}
      />
    </main>
  );
}