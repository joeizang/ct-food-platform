"use client";
import { Beneficiary, type Prisma } from "@prisma/client";
import React, { useState } from "react"
import toast from "react-hot-toast";
import { type ZodIssue } from "zod";
import { BeneficiarySchema } from "~/models/Beneficiary";
import { registerBeneficiary } from "~/server/serverfunctions";
import FormButton from "./formButton";

interface BeneficiaryFormProps {
  formName?: string
}

type ZodIssuesError = {
  code: string
  expected: string
  message: string
  path: string[]
  received: string
}

export default function BeneficiaryForm (props: BeneficiaryFormProps) {
  const [showError, setShowError] = useState(false)
  const [errorMessage, setErrorMessage] = useState<Array<ZodIssue>>([])

  const clientSideAction = async (formData: FormData) => {
    const formPayload = {
      firstname: formData.get("firstname") as string ?? "",
      lastname: formData.get("lastname") as string ?? "",
      middlename: formData.get("middlename") as string ?? "",
      spousename: formData.get("spousename") as string ?? "",
      profilePicture: formData.get("") as string ?? "",
      voucherId: formData.get("") as string ?? "",
      validationPicture: formData.get("") as string ?? "",
      email: formData.get("email") as string ?? "",
      numberOfChildren: formData.get("numberOfChildren") as string ?? "0",
      gender: formData.get("gender") as string ?? "",
      employmentStatus: formData.get("employmentStatus") as string ?? "",
      workplace: formData.get("workplace") as string ?? "",
      identityType: formData.get("identityType") as string ?? "",
      idnumber: formData.get("idnumber") as string ?? "",
      dateOfBirth: formData.get("dateofbirth") as string ?? ""
    }
    const errorMessage = ""
    const readyData = BeneficiarySchema.safeParse(formPayload)
    try {
      if (!readyData.success) {
        setShowError(true)
        readyData.error.issues.forEach(issue => {
          toast.error(`${issue.message}`)
        })
      } else {
        await registerBeneficiary(readyData.data as Prisma.BeneficiaryCreateInput)  
      }
    } catch (error) {
      console.log(error)
    }
  }

  const ErrorMsg = ({ error }: { error: ZodIssue}) => {
    return (
      <>
        <ul className="divide-y-4 bg-tulip-tree-600 mx-auto divide-guardsman-red-600 lg:w-1/5 mt-2 text-guardsman-red-900 rounded-md">
              <li className="flex flex-col px-4 py-2" key={error.path[0]}>
                {error.message}
              </li>
        </ul>
      </>
    )
  }

  return (
    <>
      <form action={clientSideAction} className="mt-5 md:ml-72 px-3" name={props.formName ?? ""}>
             <div className="mb-5 lg:w-2/3 lg:ml-20 items-center flex flex-row text-seance-200">
               <span className="font-bold item-center p-3 lg:w-52"><span>First Name : </span><i className="text-guardsman-red-500 font-bold">*</i></span>
               <span>
                <input className={showError ? 'w-full p-3 bg-seance-100 rounded-md active:ring-2 ring-seance-300 lg:text-2xl text-seance-950 border-guardsman-red-700' : 'w-full p-3 bg-seance-100 rounded-md active:ring-2 ring-seance-300 lg:text-2xl text-seance-950'} type="text" name="firstname" id="firstname" placeholder="First Name" />
                </span>
             </div>
             <div className="mb-5 lg:w-2/3 lg:ml-20 items-center flex flex-row text-seance-200">
               <span className="item-center p-3 font-bold w-32 lg:w-52">Other : <i className="text-guardsman-red-500 font-bold">*</i></span>
               <span>
                <input className={showError ? 'w-full p-3 bg-seance-100 rounded-md active:ring-2 ring-seance-300 lg:text-2xl text-seance-950 border-guardsman-red-700' : 'w-full p-3 bg-seance-100 rounded-md active:ring-2 ring-seance-300 lg:text-2xl text-seance-950'} type="text" name="middlename" id="middlename" placeholder="Middle Name" /></span>
             </div>
             <div className="mb-5 lg:w-2/3 lg:ml-20 items-center flex flex-row text-seance-200">
               <span className="font-bold item-center p-3 lg:w-52">Last Name : <i className="text-guardsman-red-500 font-bold">*</i></span>
               <span>
                <input className={showError ? 'w-full p-3 bg-seance-100 rounded-md active:ring-2 ring-seance-300 lg:text-2xl text-seance-950 border-guardsman-red-700' : 'w-full p-3 bg-seance-100 rounded-md active:ring-2 ring-seance-300 lg:text-2xl text-seance-950'} type="text" name="lastname" id="lastname" placeholder="Last Name" /></span>
             </div>
             <div className="mb-5 lg:w-2/3 lg:ml-20 items-center flex flex-row text-seance-200">
               <span className="font-bold item-center p-3 w-32 lg:w-52">Email : <i className="text-guardsman-red-500 font-bold">*</i></span>
               <span>
                <input className={showError ? 'w-full p-3 bg-seance-100 rounded-md active:ring-2 ring-seance-300 lg:text-2xl text-seance-950 border-guardsman-red-700' : 'w-full p-3 bg-seance-100 rounded-md active:ring-2 ring-seance-300 lg:text-2xl text-seance-950'} type="text" name="email" id="email" placeholder="example@test.com"/>
                </span>
             </div>
             <div className="mb-5 lg:w-2/3 lg:ml-20 items-center flex flex-row text-seance-200">
               <span className="font-bold item-center p-3 w-32 lg:w-52">Spouse Name :</span>
               <span>
                <input className={showError ? 'w-full p-3 bg-seance-100 rounded-md active:ring-2 ring-seance-300 lg:text-2xl text-seance-950 border-guardsman-red-700' : 'w-full p-3 bg-seance-100 rounded-md active:ring-2 ring-seance-300 lg:text-2xl text-seance-950'} type="text" name="spousename" id="spousename" placeholder="Husband or Wife's name"/>
                </span>
             </div>
             <div className="mb-5 lg:w-2/3 lg:ml-20 items-center flex flex-row text-seance-200">
               <span className="font-bold item-center p-3 w-32 lg:w-52">Birthday : <i className="text-guardsman-red-500 font-bold">*</i></span>
               <span>
                <input className={showError ? 'w-full p-3 bg-seance-100 rounded-md active:ring-2 ring-seance-300 lg:text-2xl text-seance-950 border-guardsman-red-700' : 'w-full p-3 bg-seance-100 rounded-md active:ring-2 ring-seance-300 lg:text-2xl text-seance-950'} type="date" name="dateofbirth" id="dateOfBirth" />
                </span>
             </div>
             <div className="mb-5 lg:w-2/3 lg:ml-20 items-center flex flex-row text-seance-200">
               <span className="font-bold item-center p-3 w-32 lg:w-52">Number of Children :</span>
               <span>
                <input className={showError ? 'w-full p-3 bg-seance-100 rounded-md active:ring-2 ring-seance-300 lg:text-2xl text-seance-950 border-guardsman-red-700' : 'w-full p-3 bg-seance-100 rounded-md active:ring-2 ring-seance-300 lg:text-2xl text-seance-950'} type="number" name="numberOfChildren" id="numberOfChildren" />
                </span>
             </div>
             <div className="mb-5 lg:w-2/3 lg:ml-20 items-center flex flex-row text-seance-200">
               <span className="font-bold item-center p-3 w-32 lg:w-52">Gender : <i className="text-guardsman-red-500 font-bold">*</i></span>
               <span>
                 <select className={showError ? 'w-full p-3 bg-seance-100 rounded-md active:ring-2 ring-seance-300 lg:text-2xl text-seance-950 border-guardsman-red-700' : 'w-full p-3 bg-seance-100 rounded-md active:ring-2 ring-seance-300 lg:text-2xl text-seance-950'} id="gender" name="gender">
                   <option value="none">== Please select one ==</option>
                   <option value="male">Male</option>
                   <option value="female">Female</option>
                 </select>
               </span>
             </div>
             <div className="mb-5 lg:w-2/3 lg:ml-20 items-center flex flex-row text-seance-200">
               <span className="font-bold item-center p-3 lg:w-52">Employment Status : <i className="text-guardsman-red-500 font-bold">*</i></span>
               <span>
               <select className={showError ? 'w-full p-3 bg-seance-100 rounded-md active:ring-2 ring-seance-300 lg:text-2xl text-seance-950 border-guardsman-red-700' : 'w-full p-3 bg-seance-100 rounded-md active:ring-2 ring-seance-300 lg:text-2xl text-seance-950'} id="employmentStatus" name="employmentStatus">
                   <option value="none">== Please select one ==</option>
                   <option value="employed">Employed</option>
                   <option value="selfemployed">Self-Employed</option>
                   <option value="selfemployed">UnEmployed</option>
                   <option value="retired">Retired</option>
                 </select>
               </span>
             </div>
             <div className="mb-5 lg:w-2/3 lg:ml-20 items-center flex flex-row text-seance-200">
               <span className="font-bold item-center p-3 lg:w-52">Workplace : <i className="text-guardsman-red-500 font-bold">*</i></span>
               <span>
                <input className={showError ? 'w-full p-3 bg-seance-100 rounded-md active:ring-2 ring-seance-300 lg:text-2xl text-seance-950 border-guardsman-red-700' : 'w-full p-3 bg-seance-100 rounded-md active:ring-2 ring-seance-300 lg:text-2xl text-seance-950'} type="text" name="workplace" id="workplace" placeholder="Where do you work?" /></span>
             </div>
             <div className="mb-5 lg:w-2/3 lg:ml-20 items-center flex flex-row text-seance-200">
               <span className="font-bold item-center p-3 w-32 lg:w-52">ID Type : <i className="text-guardsman-red-500 font-bold">*</i></span>
               <span>
               <select className={showError ? 'w-full p-3 bg-seance-100 rounded-md active:ring-2 ring-seance-300 lg:text-2xl text-seance-950 border-guardsman-red-700' : 'w-full p-3 bg-seance-100 rounded-md active:ring-2 ring-seance-300 lg:text-2xl text-seance-950'} id="identitytype" name="identityType">
                   <option value="none">== Please select one ==</option>
                   <option value="nin">NIN</option>
                   <option value="nin">{"Voter's Card"}</option>
                   <option value="intpass">Internationa Passport</option>
                   <option value="driverslicense">{"Driver's License"}</option>
                 </select>
               </span>
             </div>
             <div className="mb-5 lg:w-2/3 lg:ml-20 items-center flex flex-row text-seance-200">
               <span className="font-bold item-center p-3 lg:w-52">ID Number : <i className="text-guardsman-red-500 font-bold">*</i></span>
               <span>
                <input className={showError ? 'w-full p-3 bg-seance-100 rounded-md active:ring-2 ring-seance-300 lg:text-2xl text-seance-950 border-guardsman-red-700' : 'w-full p-3 bg-seance-100 rounded-md active:ring-2 ring-seance-300 lg:text-2xl text-seance-950'} type="text" name="idnumber" id="idnumber" placeholder="Authentic Id number" /></span>
             </div>
             <FormButton 
              containerStyles="mt-10"
              buttonStyles="mb-10 w-full rounded-md bg-seance-800 p-3 text-2xl font-bold text-seance-100 ring-seance-300 hover:bg-seance-900 active:ring-2 lg:ml-20 lg:w-3/5"
              buttonText="Register"
              buttonType="submit"
             />
           </form>
    </>
  )
}
