import { registerBeneficiary } from "~/server/serverfunctions";
import Image from "next/image";
import BeneficiaryForm from "../components/beneficiaryRegistrationForm";

export default function BeneficiaryRegister () {
  return (
    // <main className="flex flex-col sm:container-fluid sm:p-5 mx-auto bg-gradient-to-b from-[#76129b] to-[#15162c]">
    //   <div className="flex flex-col items-center justify-center gap-12 px-4 py-16">
    //     <h1 className="text-5xl font-bold mt-5 tracking-tight text-seance-200">Beneficiary Registration</h1>
    //     <div className="md:w-3/6 px-5 bg-white border border-seance-900 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700">
    //       <form action={registerBeneficiary} className="mt-5">
    //         <div className="mb-5 items-center flex flex-row text-seance-200">
    //           <span className="font-bold item-center p-3 w-52">First Name : <i className="text-guardsman-red-500 font-bold">*</i></span><span><input className="w-full p-3 bg-seance-100 rounded-md active:ring-2 ring-seance-300 text-2xl text-seance-950" type="text" name="firstname" id="firstname" /></span>
    //         </div>
    //         <div className="mb-5 items-center flex flex-row text-seance-200">
    //           <span className="item-center p-3 font-bold w-52">Middle Name : <i className="text-guardsman-red-500 font-bold">*</i></span><span><input className="w-full p-3 bg-seance-100 rounded-md active:ring-2 ring-seance-300 text-2xl text-seance-950" type="text" name="middlename" id="middlename" /></span>
    //         </div>
    //         <div className="mb-5 items-center flex flex-row text-seance-200">
    //           <span className="font-bold item-center p-3 w-52">Last Name : <i className="text-guardsman-red-500 font-bold">*</i></span><span><input className="w-full p-3 bg-seance-100 rounded-md active:ring-2 ring-seance-300 text-2xl text-seance-950" type="text" name="lastname" id="lastname" /></span>
    //         </div>
    //         <div className="mb-5 items-center flex flex-row text-seance-200">
    //           <span className="font-bold item-center p-3 w-52">Email Address : <i className="text-guardsman-red-500 font-bold">*</i></span><span><input className="w-full p-3 bg-seance-100 rounded-md active:ring-2 ring-seance-300 text-2xl text-seance-950" type="text" name="email" id="email" /></span>
    //         </div>
    //         <div className="mb-5 items-center flex flex-row text-seance-200">
    //           <span className="font-bold item-center p-3 w-52">Spouse Name : <i className="text-guardsman-red-500 font-bold">*</i></span><span><input className="w-full p-3 bg-seance-100 rounded-md active:ring-2 ring-seance-300 text-2xl text-seance-950" type="text" name="spousename" id="spousename" /></span>
    //         </div>
    //         <div className="mb-5 items-center flex flex-row text-seance-200">
    //           <span className="font-bold item-center p-3 w-52">Date Of Birth : <i className="text-guardsman-red-500 font-bold">*</i></span><span><input className="w-full p-3 bg-seance-100 rounded-md active:ring-2 ring-seance-300 text-2xl text-seance-950" type="date" name="dateofbirth" id="dateOfBirth" /></span>
    //         </div>
    //         <div className="mb-5 items-center flex flex-row text-seance-200">
    //           <span className="font-bold item-center p-3 w-52">Number of Children :</span><span><input className="w-full p-3 bg-seance-100 rounded-md active:ring-2 ring-seance-300 text-2xl text-seance-950" type="number" name="numberOfChildren" id="numberOfChildren" /></span>
    //         </div>
    //         <div className="mb-5 items-center flex flex-row text-seance-200">
    //           <span className="font-bold item-center p-3 w-52">Gender : <i className="text-guardsman-red-500 font-bold">*</i></span>
    //           <span>
    //             <select className="w-full p-3 bg-seance-100 rounded-md active:ring-2 ring-seance-300 text-2xl text-seance-950" id="gender" name="gender">
    //               <option value="none">== Please select one ==</option>
    //               <option value="male">Male</option>
    //               <option value="female">Female</option>
    //             </select>
    //           </span>
    //         </div>
    //         <div className="mb-5 items-center flex flex-row text-seance-200">
    //           <span className="font-bold item-center p-3 w-52">Employed? : <i className="text-guardsman-red-500 font-bold">*</i></span>
    //           <span>
    //           <select className="w-full p-3 bg-seance-100 rounded-md active:ring-2 ring-seance-300 text-2xl text-seance-950" id="employmentStatus" name="employmentStatus">
    //               <option value="none">== Please select one ==</option>
    //               <option value="employed">Employed</option>
    //               <option value="selfemployed">Self-Employed</option>
    //               <option value="retired">Retired</option>
    //             </select>
    //           </span>
    //         </div>
    //         <div className="mb-5 items-center flex flex-row text-seance-200">
    //           <span className="font-bold item-center p-3 w-52">Workplace : <i className="text-guardsman-red-500 font-bold">*</i></span><span><input className="w-full p-3 bg-seance-100 rounded-md active:ring-2 ring-seance-300 text-2xl text-seance-950" type="text" name="workplace" id="workplace" placeholder="Where do you work?" /></span>
    //         </div>
    //         <div className="mb-5 items-center flex flex-row text-seance-200">
    //           <span className="font-bold item-center p-3 w-52">Identity Type : <i className="text-guardsman-red-500 font-bold">*</i></span>
    //           <span>
    //           <select className="w-full p-3 bg-seance-100 rounded-md active:ring-2 ring-seance-300 text-2xl text-seance-950" id="identitytype" name="identityType">
    //               <option value="none">== Please select one ==</option>
    //               <option value="nin">NIN</option>
    //               <option value="intpass">Internationa Passport</option>
    //               <option value="driverslicense">{"Driver's License"}</option>
    //             </select>
    //           </span>
    //         </div>
    //         <div className="mb-5 items-center flex flex-row text-seance-200">
    //           <span className="font-bold item-center p-3 w-52">ID Number : <i className="text-guardsman-red-500 font-bold">*</i></span><span><input className="w-full p-3 bg-seance-100 rounded-md active:ring-2 ring-seance-300 text-2xl text-seance-950" type="text" name="idnumber" id="idnumber" placeholder="Authentic Id number" /></span>
    //         </div>
    //         <div className="mt-10">
    //           <span className="w-full">
    //             <button className="p-3 w-full mb-5 bg-seance-800 hover:bg-seance-900 rounded-md active:ring-2 ring-seance-300 text-2xl text-seance-100 font-bold" type="submit" value="Register">
    //               Register
    //             </button>
    //           </span>
    //         </div>
    //       </form>
    //     </div>
    //   </div>
    // </main>
    <article className="overflow-hidden rounded-lg shadow transition hover:shadow-lg mx-2 border bg-gradient-to-b from-[#76129b] to-[#15162c]">
      <Image
        alt=""
        src="/images/fillingaform.webp"
        className="h-56 w-full object-cover object-center"
        width={1024}
        height={500}
      />

       <BeneficiaryForm registerBeneficiary={registerBeneficiary} />
    </article>
  );
}