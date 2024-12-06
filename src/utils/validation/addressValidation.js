// import * as Yup from "yup"

// const addressSchema = Yup.object().shape({
//     fullname: Yup.string().required("Full name is required"),
//     phone: Yup.string().matches(/^[0-9]{10}$/, "Phone number must be 10 digits").required("Phone number is required"),
//     email: Yup.string().email("Invalid email address").required("Email is required"),
//     addressLine: Yup.string().required("Address is required"),
//     city: Yup.string().required("City is required"),
//     state: Yup.string().required("State is required"),
//     landmark: Yup.string(),
//     pincode: Yup.string().matches(/^[0-9]{6}$/, "Pincode must be 6 digits").required("Pincode is required"),
//     addressType: Yup.string().oneOf(["Home", "Work"], "Invalid address type").required("Address type is required"),
//     isDefault: Yup.boolean(),
//   })

//   export default addressSchema
import * as Yup from "yup";

const addressSchema = Yup.object().shape({
    fullname: Yup.string()
        .matches(/^[a-zA-Z\s]+$/, "Full name must only contain letters and spaces")
        .required("Full name is required"),
    phone: Yup.string()
        .matches(/^[6-9][0-9]{9}$/, "Phone number must be 10 digits and start with 6-9")
        .required("Phone number is required"),
    email: Yup.string()
        .matches(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, "Invalid email format")
        .required("Email is required"),
    addressLine: Yup.string()
        .min(10, "Address line must be at least 10 characters long")
        .required("Address is required"),
    city: Yup.string()
        .matches(/^[a-zA-Z\s]+$/, "City name must only contain letters and spaces")
        .required("City is required"),
    state: Yup.string()
        .matches(/^[a-zA-Z\s]+$/, "State name must only contain letters and spaces")
        .required("State is required"),
    landmark: Yup.string()
        .min(3, "Landmark must be at least 3 characters long"),
    pincode: Yup.string()
        .matches(/^[1-9][0-9]{5}$/, "Pincode must be 6 digits and cannot start with 0")
        .required("Pincode is required"),
    addressType: Yup.string()
        .oneOf(["Home", "Work"], "Invalid address type")
        .required("Address type is required"),
    isDefault: Yup.boolean()
        .default(false),
});

export default addressSchema;
