import { z } from "zod"

export const BeneficiarySchema = z.object({
  firstname: z.string({
    required_error: "First name is mandatory!"
  }).max(50, { message: "First name cannot be longer than 50 characters" }),
  middlename: z.string().max(50, { message: "Your middle name cannot be longer than 50 characters"}).optional(),
  lastname: z.string({
    required_error: "Last name is mandatory!"
  }).max(50, { message: "Last name cannot be longer than 50 characters" }),
  email: z.string({
    required_error: "First name is mandatory!"
  }).email({
    message: "Email address invalid"
  }).max(100, { message: "Email address cannot be longer than 100 characters" }),
  spousename: z.string({
    required_error: "Your spouse's name is mandatory!"
  }).max(50, { message: "Spouse name cannot be longer than 50 characters" }),
  profilePicture: z.string().max(50, { message: "Last name cannot be longer than 1500 characters" }).optional(),
  voucherId: z.string().max(150, { message: "voucher ID has an invalid length" }).optional(),
  gender: z.string().max(10, { message: "Gender has an invalid length" }),
  employmentStatus: z.string({
    required_error: "Employment Status must be provided"
  }).max(15, { message: "Status invalid. Too long" }),
  workplace: z.string().max(100, { message: "Workplace too long" }).optional(),
  identityType: z.string({
    required_error: "Identity Type is required"
  }).max(10, { message: "Identity Type has an invalid length" }),
  idnumber: z.string({
    required_error: "Id Number is required"
  }).max(15, { message: "Identity Number is too long" }),
  dateOfBirth: z.string().date()
})