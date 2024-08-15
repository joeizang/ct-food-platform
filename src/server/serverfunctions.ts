"use server";
import { type Prisma } from "@prisma/client";
import { db } from "./db"
import { redirect } from "next/navigation";
import { BeneficiarySchema } from "~/models/Beneficiary";
import { SafeParseReturnType } from "zod";
import { join } from "path";
import { writeFile } from "fs/promises";

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
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function registerBeneficiary (validData: unknown) {
  const readyData = BeneficiarySchema.safeParse(validData)
  let newBeneficiary
    try {
      if (!readyData.success) {
        let errorMessage = ""
        readyData.error.issues.forEach((x) => {
          errorMessage = `${errorMessage} ${x.path[0]} : ${x.message}`
        })
        return readyData.error.issues
      } else {
        newBeneficiary = await db.beneficiary.create({
          data: (readyData.data as Prisma.BeneficiaryCreateInput)
        })   
      }
    } catch (error) {
      console.log('There was an error ', (error as Error).message)
    }
    redirect(`/beneficiary-register/${newBeneficiary?.id}`)
}

//d225b41d-c9b0-4d63-a0bb-39b8969e2ea7