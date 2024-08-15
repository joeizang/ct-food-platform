import { z } from "zod"

export const BeneficiarySchema = z.object({
  firstname: z.string({
    required_error: "First name is mandatory!"
  }).trim().min(1, {
    message: "First name cannot be 1 character"
  }).max(50, { message: "First name cannot be longer than 50 characters" }),
  middlename: z.string().max(50, { message: "Your middle name cannot be longer than 50 characters"}).optional(),
  lastname: z.string({
    required_error: "Last name is mandatory!"
  }).trim().min(1, {
    message: "Last name cannot be 1 character"
  }).max(50, { message: "Last name cannot be longer than 50 characters" }),
  email: z.string({
    required_error: "First name is mandatory!"
  }).email({
    message: "Email address invalid"
  }).trim().min(1, {
    message: "email address is too short."
  }).max(100, { message: "Email address cannot be longer than 100 characters" }),
  spousename: z.string().trim().max(50, { message: "Spouse name cannot be longer than 50 characters" }).optional(),
  profilePicture: z.string().max(1500, { message: "Last name cannot be longer than 1500 characters" }).optional(),
  numberOfChildren: z.string().optional(),
  voucherId: z.string().max(150, { message: "voucher ID has an invalid length" }).optional(),
  gender: z.string({ required_error: "Gender cannot be un-selected" }).max(10, { message: "Gender has an invalid length" }),
  employmentStatus: z.string({
    required_error: "Employment Status must be provided"
  }).trim().min(1, {
    message: "Employment Status cannot be 1 character short"
  }).max(15, { message: "Status invalid. Too long" }),
  workplace: z.string().max(100, { message: "Workplace too long" }).optional(),
  identityType: z.string({
    required_error: "Identity Type is required"
  }).trim().min(1).max(10, { message: "Identity Type has an invalid length" }),
  idnumber: z.string({
    required_error: "Id Number is required"
  }).trim().min(1, {
    message: "Identity Number is too short."
  }).max(15, { message: "Identity Number is too long" }),
  dateOfBirth: z.string().date()
})