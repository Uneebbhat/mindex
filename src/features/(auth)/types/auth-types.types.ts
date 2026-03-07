export type SignupFormData = {
  name: string;
  email: string;
  password: string;
}

export type LoginFormData = Omit<SignupFormData, "name">