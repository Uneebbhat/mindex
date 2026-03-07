import useFormHandler from "@/hooks/useFormhandler"
import { SignupFormData } from "../../types/auth-types.types"
import { HandleOnSubmit } from "@/types/FormTypes"
import axios, { AxiosError } from "axios"
import { toast } from "sonner"
import { APIResponse } from "@/types/api-response.types"
import { useRouter } from "next/navigation"
import inputSanitization from "@/helper/inputSanitization"

const useSignup = () => {
  const router = useRouter()
  const { formData, setFormData, loading, setLoading, handleOnChange } = useFormHandler<SignupFormData>({
    name: "",
    email: "",
    password: ""
  })


  const handleOnSubmit = async (e: HandleOnSubmit) => {
    e.preventDefault()
    setLoading(true)

    const payload = inputSanitization(formData)

    if (!payload.name || !payload.email || !payload.password) {
      toast.error("All fields are required")
      setLoading(false)
      return
    }

    if (payload.name.length < 3) {
      toast.error("Name must be at least 3 characters long.")
      setLoading(false)
      return
    }

    if (payload.password.length < 8) {
      toast.error("Password must be at least 8 characters long.")
      setLoading(false)
      return
    }

    try {
      const { data } = await axios.post<APIResponse>("/api/signup", payload);

      toast.success(data.message);

      setFormData({
        name: "",
        email: "",
        password: ""
      });

      router.push("/workspace");
    } catch (error: unknown) {
      if (error instanceof AxiosError) {
        toast.error(error.response?.data?.error);
      } else if (error instanceof Error) {
        console.error("Signup error:", error.message, error);
        toast.error(error.message || "An unexpected error occurred. Please try again.");
      } else {
        console.error("Unknown signup error:", error);
        toast.error("An unexpected error occurred. Please try again.");
      }
    } finally {
      setLoading(false)
    }
  }

  return {
    formData,
    loading,
    handleOnChange,
    handleOnSubmit
  }
}

export default useSignup