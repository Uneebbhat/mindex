import useFormHandler from "@/hooks/useFormhandler"
import { LoginFormData } from "../../types/auth-types.types"
import { HandleOnSubmit } from "@/types/FormTypes"
import axios, { AxiosError } from "axios"
import { toast } from "sonner"
import { useRouter } from "next/navigation"
import { APIResponse } from "@/types/api-response.types"
import inputSanitization from "@/helper/inputSanitization"

const useLogin = () => {
  const router = useRouter()
  const { formData, setFormData, loading, setLoading, handleOnChange } = useFormHandler<LoginFormData>({
    email: "",
    password: ""
  })

  const handleOnSubmit = async (e: HandleOnSubmit) => {
    e.preventDefault()
    setLoading(true)

    const payload = inputSanitization(formData)

    if (!payload.email || !payload.password) {
      toast.error("All fields are required")
      return setLoading(false)
    }

    if (payload.password.length < 8) {
      toast.error("Password must be at least 8 characters long.")
      return setLoading(false)
    }

    try {
      const { data } = await axios.post<APIResponse>("/api/login", payload);

      toast.success(data.message);

      setFormData({
        email: "",
        password: ""
      });

      router.push("/workspace");
    } catch (error: unknown) {
      if (error instanceof AxiosError) {
        toast.error(error.response?.data?.error);
      } else if (error instanceof Error) {
        console.error("Login error:", error.message, error);
        toast.error(error.message || "An unexpected error occurred. Please try again.");
      } else {
        console.error("Unknown login error:", error);
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

export default useLogin