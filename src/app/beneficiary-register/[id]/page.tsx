import { writeFile } from 'fs/promises';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { join } from 'path';
import React from 'react'
import ProfilePhotoUploadForm from '~/app/components/beneficiaryProfileUpload';
import { db } from '~/server/db';

export default async function UploadImage ({ params } : { params: { id: string }}) {

  async function uploadBeneficiaryProfilePhoto (uploadData: FormData) {
    "use server";
    const file = uploadData.get("profilepic") as unknown as File
    if (!file) {
      console.log("Wahala de. You upload no working oh!!")
    }
    const bytes = await file?.arrayBuffer()
    const buffer = Buffer.from(bytes)
    const path = join(`${process.cwd()}/public/images/`, 'beneficiaries/', `${params.id}-${file.name}`)
    const updated = await db.beneficiary.update({
      where: {
        id: params.id
      },
      data: {
        profilePicture: path
      }
    })
    await writeFile(path, buffer)
    redirect(`/registered-beneficiaries/${updated.id}`)
  }

  return (
    <main className="mx-2 px-2 h-screen overflow-hidden rounded-lg border bg-gradient-to-b from-[#76129b] to-[#15162c] shadow transition hover:shadow-lg">
      <ul className="mt-24 text-seance-950 rounded-md divide-seance-900 divide-y-4 lg:w-2/4 mx-auto bg-seance-50">
        <li className="px-4 py-2">The picture you upload cannot be larger than 200kb</li>
        <li className="px-4 py-2">The picture formats that are accepted are *.png and *.jpg</li>
        <li className="px-4 py-2">You application will not be considered if you do not upload a clear picture of yourself.</li>
      </ul>
      <div className="bg-seance-50 text-seance-950 w-2/4 mt-5">
        Test submission successful with ID: {params.id}
      </div>
      <ProfilePhotoUploadForm uploadBeneficiaryProfilePhoto={uploadBeneficiaryProfilePhoto} />
    </main>
  );
}