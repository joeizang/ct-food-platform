"use server";
import { Prisma } from "@prisma/client";
import { db } from "./db"
import { redirect } from "next/navigation";

export async function registerBeneficiary (data: FormData) {

  const formData: Prisma.BeneficiaryCreateInput = {
    firstname: data.get("firstname") as string ?? "",
    lastname: data.get("lastname") as string ?? "",
    middlename: data.get("middlename") as string ?? "",
    spousename: data.get("spousename") as string ?? "",
    profilePicture: data.get("") as string ?? "",
    voucherId: data.get("") as string ?? "",
    email: data.get("email") as string ?? "",
    numberOfChildren: data.get("numberOfChildren") as string ?? "",
    gender: data.get("gender") as string ?? "",
    employmentStatus: data.get("employmentStatus") as string ?? "",
    workplace: data.get("workplace") as string ?? "",
    identityType: data.get("identityType") as string ?? "",
    idnumber: data.get("idnumber") as string ?? "",
    dateOfBirth: data.get("dateofbirth") as string ?? ""
}
  console.log('has this been submitted?', formData)
  const tempVal = formData.numberOfChildren + 0
  
  const newBeneficiary = await db.beneficiary.create({
    data: { ...formData, numberOfChildren: tempVal }
  })
  console.log('was this successfully put in the db?', newBeneficiary)
  redirect(`/beneficiary-register/${newBeneficiary.id}`)
}