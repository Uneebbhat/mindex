import z from "zod"

const UserSignupSchema = z.object({
  name: z
    .string()
    .min(3, { message: "Name must be at least 3 characters long." })
    .max(50, { message: "Name must be at most 50 characters long." }),
  email: z
    .string()
    .min(5, { message: "Email is required." })
    .max(100, { message: "Email must be at most 100 characters long." })
    .email({ message: "Please enter a valid email address." }),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters long." })
    .max(100, { message: "Password must be at most 100 characters long." })
})

export default UserSignupSchema