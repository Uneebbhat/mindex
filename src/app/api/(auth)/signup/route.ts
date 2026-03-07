import generateToken from "@/helper/generateToken";
import { hashPassword } from "@/helper/passwordHashing";
import prisma from "@/lib/prisma";
import UserSignupSchema from "@/schema/user-signup-schema.schema";
import { APIResponse } from "@/types/api-response.types";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

/**
 * Handles user registration.
 *
 * Flow:
 * 1. Validate request body using Zod schema
 * 2. Check if email already exists
 * 3. Hash password securely
 * 4. Create user in database
 * 5. Generate JWT token
 * 6. Store token in HTTP-only cookie
 *
 * @param req - Incoming Next.js request
 * @returns JSON response with account creation status
 */

export async function POST(req: NextRequest): Promise<NextResponse> {
  try {
    const cookieStore = await cookies()
    const body = await req.json()

    // Validate user data
    const validateBody = UserSignupSchema.safeParse(body)
    if (validateBody.error) {
      return NextResponse.json<APIResponse>({
        success: false,
        status: 400,
        error: validateBody.error.issues[0].message
      }, { status: 400 })
    }

    const { name, email, password } = body

    const existingUser = await prisma.user.findUnique({
      where: {
        email
      }
    })
    if (existingUser) {
      return NextResponse.json<APIResponse>({
        success: false,
        status: 409,
        error: "Email already in use"
      }, { status: 409 })
    }

    const hashedPassword = await hashPassword(password)

    const newUser = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword
      }
    })
    if (!newUser) {
      return NextResponse.json<APIResponse>({
        success: false,
        status: 500,
        error: "An error occurred"
      }, { status: 500 })
    }

    const token = await generateToken(newUser)

    // Store JWT securely in an HTTP-only cookie to prevent XSS access
    cookieStore.set("token", token, {
      httpOnly: true,
      sameSite: "strict",
      secure: true,
      path: "/",
      maxAge: 60 * 60 * 24 * 7
    })

    return NextResponse.json<APIResponse>({
      success: true,
      status: 201,
      message: "Account created successfully"
    }, { status: 201 })
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
        error: `An unknown error occurred: ${error}`
      }, { status: 500 })
    }
  }
}