import generateToken from "@/helper/generateToken";
import { comparePassword } from "@/helper/passwordHashing";
import prisma from "@/lib/prisma";
import UserLoginSchema from "@/schema/user-login-schema.schema";
import { APIResponse } from "@/types/api-response.types";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

/** 
 * Handles user login.
 * 
 * Flow:
 * 1. Validate user body using Zod schema
 * 2. Check if user exist or not
 * 3. Decrypt password to compare with original passowrd
 * 4. Check if user password is correct or not usign bcrypt
 * 5. Generate JWT token
 * 6. Store token in HTTP-only cookie
 * 
 * @param req - Incoming Next.js request
 * @returns JSON response with account login status
*/

export async function POST(req: NextRequest): Promise<NextResponse> {
  try {
    const cookieStore = await cookies()
    const body = await req.json()

    const validateBody = UserLoginSchema.safeParse(body)
    if (validateBody.error) {
      return NextResponse.json<APIResponse>({
        success: false,
        status: 400,
        error: validateBody.error.issues[0].message
      }, { status: 400 })
    }

    const { email, password } = body

    const existingUser = await prisma.user.findUnique({
      where: {
        email
      }
    })
    if (!existingUser) {
      return NextResponse.json<APIResponse>({
        success: false,
        status: 404,
        error: "User not found"
      }, { status: 404 })
    }

    const decryptPassword = await comparePassword(password, existingUser.password)
    if (!decryptPassword) {
      return NextResponse.json<APIResponse>({
        success: false,
        status: 400,
        error: "Invalid credentials"
      }, { status: 400 })
    }

    const token = await generateToken(existingUser)

    // Store JWT securely in an HTTP-only cookie to prevent XSS access
    cookieStore.set("token", token, {
      httpOnly: true,
      sameSite: "strict",
      secure: true,
      path: "/",
      maxAge: 60 * 60 * 24 * 7
    })

    return NextResponse.json<APIResponse>({
      success: false,
      status: 200,
      message: "Login successfully"
    }, { status: 200 })
  } catch (error: unknown) {
    if (error instanceof Error) {
      return NextResponse.json<APIResponse>({
        success: false,
        status: 500,
        error: `Internal Server Error: ${error.message}`
      }, { status: 500 })
    } else {
      return NextResponse.json<APIResponse>({
        success: false,
        status: 500,
        error: "An unknown error occurred"
      }, { status: 500 })
    }
  }
}