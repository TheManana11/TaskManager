import { z } from "zod";

export const signupSchema = z.object({
    fullName: z.string().trim().min(1, { message: "Full name is required" }).min(3, { message: "Full name must be at least 3 characters long" }),
    email: z.string().trim().email({ message: "Invalid email address" }).min(1, { message: "Email is required" }),
    password: z.string().trim().min(1, { message: "Password is required" }).min(8, { message: "Password must be at least 8 characters long" }).regex(/[A-Z]/, { message: "Password must contain at least one uppercase letter" }).regex(/[a-z]/, { message: "Password must contain at least one lowercase letter" }).regex(/[0-9]/, { message: "Password must contain at least one number" }).regex(/[^A-Za-z0-9]/, { message: "Password must contain at least one special character" }),
    confirmPassword: z.string().trim().min(1, { message: "Confirm password is required" }),
}).refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
});

export type SignupFormValues = z.infer<typeof signupSchema>;