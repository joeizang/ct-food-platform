"use server";

export async function registerBeneficiary (data: FormData) {

  const formData = {
    firstName: data.get("firstname"),
    lastName: data.get("lastname"),
    middlename: data.get("middlename"),
    spousename: data.get("spousename"),
    email: data.get("email"),
    numberofChildren: data.get("numberOfchildren"),
    gender: data.get("gender"),
    employmentStatus: data.get("employmentStatus"),
    workplace: data.get("workplace"),
    identityType: data.get("identityType"),
    idnumber: data.get("idnumber"),
    dateOfBirth: data.get("dateofbirth")
  }
  console.log('has this been submitted?', formData)
  return
}