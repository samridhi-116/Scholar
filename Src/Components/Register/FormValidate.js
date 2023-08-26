import * as Yup from "yup";

export const FormValidation = Yup.object(
    {
        // name:Yup.string().min(2).max(25).required("Please enter your name"),
        email : Yup.string().email('Invalid email address').required("Please enter your email"),
        password: Yup.string().min(8, 'Password must be at least 8 characters').max(12, 'Password must be at most 12 characters').required('Please enter a password'),
        // user_type:Yup.string().required("Please select user type"),
    }
)