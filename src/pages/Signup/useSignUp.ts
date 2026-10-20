import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signupSchema, type SignupFormValues } from '../../schemas/signupSchema';

const useSignUp = () => {
    const navigate = useNavigate();
    
      const {
      register,
      handleSubmit,
      formState: { errors },
      reset,
    } = useForm<SignupFormValues>({
      resolver: zodResolver(signupSchema),
      mode: "onTouched",
    });
    
    const onSubmit = (data: SignupFormValues) => {
      console.log("Signup data:", data);
      reset();
      navigate("/dashboard");
    };
    

    return{
        register,
        handleSubmit,
        errors,
        onSubmit
    }
}

export default useSignUp;