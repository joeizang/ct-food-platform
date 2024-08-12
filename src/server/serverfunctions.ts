"use server";
import { Prisma } from "@prisma/client";
import { db } from "./db"
import { redirect } from "next/navigation";
import { BeneficiarySchema } from "~/models/Beneficiary";

type Beneficiary = {
  id: string
  firstname: string;
  lastname: string;
  middlename: string;
  spousename: string;
  profilePicture: string;
  voucherId: string;
  email: string;
  numberOfChildren: string;
  gender: string;
  employmentStatus: string;
  workplace: string;
  identityType: string;
  idnumber: string;
  dateOfBirth: string;
}

// this should save to the database.
// return errors to the page that has the form retaining all the data so it can be corrected.
// after this is saved in the db, the file upload of the image should happen.
export async function registerBeneficiary (data: FormData) {

  const formData = {
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

  const readyData = BeneficiarySchema.safeParse(formData)
  let newBeneficiary: Beneficiary
  
  try {
    if (!readyData.success) {
      
    } else {
      const validData = readyData.data as Prisma.BeneficiaryCreateInput
      newBeneficiary = await db.beneficiary.create({
        data: validData
      })
      redirect(`/beneficiary-register/${newBeneficiary.id}`)
    }
  } catch (error) {
    
  }
}