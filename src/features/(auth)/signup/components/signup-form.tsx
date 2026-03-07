"use client";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Eye, EyeOff } from "lucide-react";
import useTogglePassword from "@/hooks/useTogglePassword";
import Link from "next/link";
import useSignup from "../hooks/useSignup";
import { Spinner } from "@/components/ui/spinner";

export function SignupForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const { showPassword, handleTogglePassword } = useTogglePassword();
  const {
    formData,
    loading,
    handleOnChange,
    handleOnSubmit
  } = useSignup()

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader className="text-center">
          <CardTitle className="text-xl">Sign up to your account</CardTitle>
          <CardDescription>
            Enter your email below to create your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form
            onSubmit={handleOnSubmit}
          >
            <FieldGroup>
              <Field>
                <FieldLabel htmlFor="name">Full Name</FieldLabel>
                <Input
                  id="name"
                  type="text"
                  placeholder="John Doe"
                  required
                  name="name"
                  onChange={handleOnChange}
                  value={formData.name}
                />
              </Field>
              <Field>
                <FieldLabel htmlFor="email">Email</FieldLabel>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  required
                  name="email"
                  onChange={handleOnChange}
                  value={formData.email}
                />
              </Field>
              <Field>
                <Field>
                  <FieldLabel htmlFor="password">Password</FieldLabel>
                  <div className="relative">
                    <Input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      required
                      name="password"
                      onChange={handleOnChange}
                      value={formData.password}
                    />
                    {showPassword ? (
                      <EyeOff
                        className="absolute top-2 right-2 w-5 h-5 cursor-pointer"
                        onClick={handleTogglePassword}
                      />
                    ) : (
                      <Eye
                        className="absolute top-2 right-2 w-5 h-5 cursor-pointer"
                        onClick={handleTogglePassword}
                      />
                    )}
                  </div>
                </Field>
              </Field>
              <FieldDescription>
                Must be at least 8 characters long.
              </FieldDescription>
              <Field>
                <Button disabled={loading || !formData.name || !formData.email || !formData.password}>
                  {
                    loading ? <>
                      <Spinner />
                      Create Account
                    </> : "Create Account"
                  }
                </Button>
                <FieldDescription className="text-center">
                  Already have an account? <Link href="/login">Login</Link>
                </FieldDescription>
              </Field>
            </FieldGroup>
          </form>
        </CardContent>
      </Card>
      <FieldDescription className="px-6 text-center">
        By clicking continue, you agree to our{" "}
        <Link href="/terms">Terms of Service</Link> and{" "}
        <Link href="/privacy">Privacy Policy</Link>.
      </FieldDescription>
    </div>
  );
}
