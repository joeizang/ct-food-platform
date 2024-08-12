"use client";
import { Beneficiary } from "@prisma/client";
import React from "react"

interface BeneficiaryFormProps {
  registerBeneficiary: (data : FormData) => Promise<void>
}

export default function BeneficiaryForm (props: BeneficiaryFormProps) {
  return (
    <>
      <form action={props.registerBeneficiary} className="mt-5 md:ml-72 px-3">
             <div className="mb-5 lg:w-2/3 lg:ml-20 items-center flex flex-row text-seance-200">
               <span className="font-bold item-center p-3 lg:w-52"><span>First Name : </span><i className="text-guardsman-red-500 font-bold">*</i></span>
               <span>
                <input className="w-full p-3 bg-seance-100 rounded-md active:ring-2 ring-seance-300 lg:text-2xl text-seance-950" type="text" name="firstname" id="firstname" placeholder="First Name" />
                </span>
             </div>
             <div className="mb-5 lg:w-2/3 lg:ml-20 items-center flex flex-row text-seance-200">
               <span className="item-center p-3 font-bold w-32 lg:w-52">Other : <i className="text-guardsman-red-500 font-bold">*</i></span>
               <span>
                <input className="w-full p-3 bg-seance-100 rounded-md active:ring-2 ring-seance-300 lg:text-2xl text-seance-950" type="text" name="middlename" id="middlename" placeholder="Middle Name" /></span>
             </div>
             <div className="mb-5 lg:w-2/3 lg:ml-20 items-center flex flex-row text-seance-200">
               <span className="font-bold item-center p-3 lg:w-52">Last Name : <i className="text-guardsman-red-500 font-bold">*</i></span>
               <span>
                <input className="w-full p-3 bg-seance-100 rounded-md active:ring-2 ring-seance-300 lg:text-2xl text-seance-950" type="text" name="lastname" id="lastname" placeholder="Last Name" /></span>
             </div>
             <div className="mb-5 lg:w-2/3 lg:ml-20 items-center flex flex-row text-seance-200">
               <span className="font-bold item-center p-3 w-32 lg:w-52">Email : <i className="text-guardsman-red-500 font-bold">*</i></span>
               <span>
                <input className="w-full p-3 bg-seance-100 rounded-md active:ring-2 ring-seance-300 lg:text-2xl text-seance-950" type="text" name="email" id="email" placeholder="example@test.com"/>
                </span>
             </div>
             <div className="mb-5 lg:w-2/3 lg:ml-20 items-center flex flex-row text-seance-200">
               <span className="font-bold item-center p-3 w-32 lg:w-52">Spouse Name : <i className="text-guardsman-red-500 font-bold">*</i></span>
               <span>
                <input className="w-full p-3 bg-seance-100 rounded-md active:ring-2 ring-seance-300 lg:text-2xl text-seance-950" type="text" name="spousename" id="spousename" placeholder="Husband or Wife's name"/>
                </span>
             </div>
             <div className="mb-5 lg:w-2/3 lg:ml-20 items-center flex flex-row text-seance-200">
               <span className="font-bold item-center p-3 w-32 lg:w-52">Birthday : <i className="text-guardsman-red-500 font-bold">*</i></span>
               <span>
                <input className="w-full p-3 bg-seance-100 rounded-md active:ring-2 ring-seance-300 lg:text-2xl text-seance-950" type="date" name="dateofbirth" id="dateOfBirth" />
                </span>
             </div>
             <div className="mb-5 lg:w-2/3 lg:ml-20 items-center flex flex-row text-seance-200">
               <span className="font-bold item-center p-3 w-32 lg:w-52">Number of Children :</span>
               <span>
                <input className="w-full p-3 bg-seance-100 rounded-md active:ring-2 ring-seance-300 lg:text-2xl text-seance-950" type="number" name="numberOfChildren" id="numberOfChildren" />
                </span>
             </div>
             <div className="mb-5 lg:w-2/3 lg:ml-20 items-center flex flex-row text-seance-200">
               <span className="font-bold item-center p-3 w-32 lg:w-52">Gender : <i className="text-guardsman-red-500 font-bold">*</i></span>
               <span>
                 <select className="w-full p-3 bg-seance-100 rounded-md active:ring-2 ring-seance-300 lg:text-2xl text-seance-950" id="gender" name="gender">
                   <option value="none">== Please select one ==</option>
                   <option value="male">Male</option>
                   <option value="female">Female</option>
                 </select>
               </span>
             </div>
             <div className="mb-5 lg:w-2/3 lg:ml-20 items-center flex flex-row text-seance-200">
               <span className="font-bold item-center p-3 lg:w-52">Employed? : <i className="text-guardsman-red-500 font-bold">*</i></span>
               <span>
               <select className="w-full p-3 bg-seance-100 rounded-md active:ring-2 ring-seance-300 lg:text-2xl text-seance-950" id="employmentStatus" name="employmentStatus">
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
                <input className="w-full p-3 bg-seance-100 rounded-md active:ring-2 ring-seance-300 lg:text-2xl text-seance-950" type="text" name="workplace" id="workplace" placeholder="Where do you work?" /></span>
             </div>
             <div className="mb-5 lg:w-2/3 lg:ml-20 items-center flex flex-row text-seance-200">
               <span className="font-bold item-center p-3 w-32 lg:w-52">ID Type : <i className="text-guardsman-red-500 font-bold">*</i></span>
               <span>
               <select className="w-full p-3 bg-seance-100 rounded-md active:ring-2 ring-seance-300 lg:text-2xl text-seance-950" id="identitytype" name="identityType">
                   <option value="none">== Please select one ==</option>
                   <option value="nin">NIN</option>
                   <option value="intpass">Internationa Passport</option>
                   <option value="driverslicense">{"Driver's License"}</option>
                 </select>
               </span>
             </div>
             <div className="mb-5 lg:w-2/3 lg:ml-20 items-center flex flex-row text-seance-200">
               <span className="font-bold item-center p-3 lg:w-52">ID Number : <i className="text-guardsman-red-500 font-bold">*</i></span>
               <span>
                <input className="w-full p-3 bg-seance-100 rounded-md active:ring-2 ring-seance-300 lg:text-2xl text-seance-950" type="text" name="idnumber" id="idnumber" placeholder="Authentic Id number" /></span>
             </div>
             <div className="mt-10">
                 <button className="p-3 lg:w-3/5 w-full lg:ml-20 mb-10 bg-seance-800 hover:bg-seance-900 rounded-md active:ring-2 ring-seance-300 text-2xl text-seance-100 font-bold" type="submit" value="Register">
                   Register
                 </button>
             </div>
           </form>
    </>
  )
}