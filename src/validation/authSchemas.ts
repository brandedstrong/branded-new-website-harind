import * as Yup from "yup";

export const loginSchema = Yup.object({
    email: Yup.string().email("Enter a valid email").required("Email is required"),
    password: Yup.string()
        .min(8, "Password must be at least 8 characters")
        .required("Password is required"),
    rememberMe: Yup.boolean().optional(),
});

export type LoginFormValues = Yup.InferType<typeof loginSchema>;

export const signupSchema = Yup.object({
    name: Yup.string().min(2, "Name is too short").max(100, "Name is too long").required("Name is required"),
    email: Yup.string().email("Enter a valid email").required("Email is required"),
    password: Yup.string().min(8, "Password must be at least 8 characters").required("Password is required"),
    timezone: Yup.string().required("Timezone is required"),
    acceptTerms: Yup.boolean().oneOf([true], "You must accept the terms").required("You must accept the terms"),
});

export type SignupFormValues = Yup.InferType<typeof signupSchema>;

export const forgotPasswordSchema = Yup.object({
    email: Yup.string().email("Enter a valid email").required("Email is required"),
});

export type ForgotPasswordFormValues = Yup.InferType<typeof forgotPasswordSchema>;

export const resetPasswordSchema = Yup.object({
    password: Yup.string().min(8, "Password must be at least 8 characters").required("Password is required"),
    confirmPassword: Yup.string()
        .oneOf([Yup.ref("password")], "Passwords must match")
        .required("Confirm password is required"),
});

export type ResetPasswordFormValues = Yup.InferType<typeof resetPasswordSchema>;

export const contactUsSchema = Yup.object({
    fullName: Yup.string().min(2, "Name is too short").max(100, "Name is too long").required("Full name is required"),
    email: Yup.string().email("Enter a valid email").required("Email is required"),
    subject: Yup.string().min(3, "Subject is too short").max(150, "Subject is too long").required("Subject is required"),
    message: Yup.string().min(10, "Message should be at least 10 characters").max(2000, "Message is too long").required("Message is required"),
});

export type ContactUsFormValues = Yup.InferType<typeof contactUsSchema>;

export const otpVerificationSchema = Yup.object({
    otp: Yup.string()
        .length(6, "OTP must be exactly 6 digits")
        .matches(/^\d{6}$/, "OTP must contain only numbers")
        .required("OTP is required"),
});

export type OtpVerificationFormValues = Yup.InferType<typeof otpVerificationSchema>;


