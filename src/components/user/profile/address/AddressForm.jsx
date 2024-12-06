// import React, { useState } from "react";
// import { Formik, Form } from "formik";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";
// import addressSchema from "@/utils/validation/addressValidation";
// import toast, { Toaster } from "react-hot-toast";

// export function AddressForm({ initialValues, onSubmit, onCancel }) {
//   console.log("address for editing", initialValues);
//   const[error,setError]=useState('')
//   function handleSubmit(values, { setSubmitting }) {
//     // const firstErrorField = document.querySelector(".text-red-500");
//     // if (firstErrorField) {
//     //   firstErrorField.scrollIntoView({ behavior: "smooth", block: "center" });
//     // } else {
//     //   onSubmit(values);
//     // }
//     // setSubmitting(false);
//     const errorsArray = Object.keys(errors).map((key) => errors[key]);
//     if (errorsArray.length > 0) {
//       toast.error(errorsArray[0]); // Show the first error
//       setError(errorsArray[0])
//       setSubmitting(false);
//       return;
//     }
//     onSubmit(values);
//   }
//   return (
//     <>
//       <Toaster />
//       <Formik
//         initialValues={{ ...initialValues, isDefault: false }}
//         validationSchema={addressSchema}
//         onSubmit={handleSubmit}
//       >
//         {({
//           values,
//           errors,
//           touched,
//           handleChange,
//           handleBlur,
//           isSubmitting,
//         }) => (
//           <Form className="space-y-4">
//             <div className="grid gap-4 md:grid-cols-2">
//               <div className="space-y-2">
//                 <Label htmlFor="fullname">Full Name</Label>
//                 <Input
//                   id="fullname"
//                   name="fullname"
//                   value={values.fullname}
//                   onChange={handleChange}
//                   onBlur={handleBlur}
//                 />
//                 {touched.fullname && errors.fullname && (
//                   <p className="text-sm text-red-500">{errors.fullname}</p>
//                 )}
//               </div>
//               <div className="space-y-2">
//                 <Label htmlFor="phone">Phone Number</Label>
//                 <Input
//                   id="phone"
//                   name="phone"
//                   value={values.phone}
//                   onChange={handleChange}
//                   onBlur={handleBlur}
//                 />
//                 {touched.phone && errors.phone && (
//                   <p className="text-sm text-red-500">{errors.phone}</p>
//                 )}
//               </div>
//             </div>

//             <div className="space-y-2">
//               <Label htmlFor="email">Email</Label>
//               <Input
//                 id="email"
//                 name="email"
//                 type="email"
//                 value={values.email}
//                 onChange={handleChange}
//                 onBlur={handleBlur}
//               />
//               {touched.email && errors.email && (
//                 <p className="text-sm text-red-500">{errors.email}</p>
//               )}
//             </div>

//             <div className="space-y-2">
//               <Label htmlFor="addressLine">Address</Label>
//               <Input
//                 id="addressLine"
//                 name="addressLine"
//                 value={values.addressLine}
//                 onChange={handleChange}
//                 onBlur={handleBlur}
//               />
//               {touched.addressLine && errors.addressLine && (
//                 <p className="text-sm text-red-500">{errors.addressLine}</p>
//               )}
//             </div>

//             <div className="grid gap-4 md:grid-cols-3">
//               <div className="space-y-2">
//                 <Label htmlFor="city">City</Label>
//                 <Input
//                   id="city"
//                   name="city"
//                   value={values.city}
//                   onChange={handleChange}
//                   onBlur={handleBlur}
//                 />
//                 {touched.city && errors.city && (
//                   <p className="text-sm text-red-500">{errors.city}</p>
//                 )}
//               </div>
//               <div className="space-y-2">
//                 <Label htmlFor="state">State</Label>
//                 <Input
//                   id="state"
//                   name="state"
//                   value={values.state}
//                   onChange={handleChange}
//                   onBlur={handleBlur}
//                 />
//                 {touched.state && errors.state && (
//                   <p className="text-sm text-red-500">{errors.state}</p>
//                 )}
//               </div>
//               <div className="space-y-2">
//                 <Label htmlFor="pincode">Pincode</Label>
//                 <Input
//                   id="pincode"
//                   name="pincode"
//                   value={values.pincode}
//                   onChange={handleChange}
//                   onBlur={handleBlur}
//                 />
//                 {touched.pincode && errors.pincode && (
//                   <p className="text-sm text-red-500">{errors.pincode}</p>
//                 )}
//               </div>
//             </div>

//             <div className="space-y-2">
//               <Label htmlFor="landmark">Landmark (Optional)</Label>
//               <Input
//                 id="landmark"
//                 name="landmark"
//                 value={values.landmark}
//                 onChange={handleChange}
//                 onBlur={handleBlur}
//               />
//             </div>

//             <div className="grid gap-4 md:grid-cols-2">
//               <div className="space-y-2">
//                 <Label>Address Type</Label>
//                 <Select
//                   name="addressType"
//                   value={values.addressType}
//                   onValueChange={(value) =>
//                     handleChange({
//                       target: { name: "addressType", value },
//                     })
//                   }
//                 >
//                   <SelectTrigger>
//                     <SelectValue placeholder="Select address type" />
//                   </SelectTrigger>
//                   <SelectContent>
//                     <SelectItem value="Home">Home</SelectItem>
//                     <SelectItem value="Work">Work</SelectItem>
//                   </SelectContent>
//                 </Select>
//                 {touched.addressType && errors.addressType && (
//                 <p className="text-sm text-red-500">{errors.addressType}</p>
//               )}
//               </div>
//               <div className="flex items-center space-x-2">
//                 <input
//                   type="checkbox"
//                   id="isDefault"
//                   name="isDefault"
//                   checked={values.isDefault}
//                   onChange={handleChange}
//                   className="h-4 w-4 rounded border-gray-300"
//                 />
//                 <Label htmlFor="isDefault">Set as default address</Label>
//               </div>
              
//             </div>

//             <div className="flex justify-end space-x-2">
//               <Button type="button" variant="outline" onClick={onCancel}>
//                 Cancel
//               </Button>
              
//               <Button type="submit" disabled={isSubmitting}>
//                 Save Address
//               </Button>
//               {error && (
//                 <p className="text-sm text-red-500">{error}</p>
//               )}
//             </div>
//           </Form>
//         )}
//       </Formik>
//     </>
//   );
// }
import React, { useState } from "react";
import { Formik, Form } from "formik";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import addressSchema from "@/utils/validation/addressValidation";
import toast, { Toaster } from "react-hot-toast";

export function AddressForm({ initialValues, onSubmit, onCancel }) {
  return (
    <>
      <Toaster />
      <Formik
        initialValues={{ ...initialValues, isDefault: false }}
        validationSchema={addressSchema}
        onSubmit={(values, { setSubmitting, setErrors }) => {
          try {
            addressSchema.validateSync(values, { abortEarly: false });
            onSubmit(values);
          } catch (err) {
            if (err.inner) {
              const errors = err.inner.reduce((acc, error) => {
                acc[error.path] = error.message;
                return acc;
              }, {});
              
              // Display first error as toast
              const firstErrorMessage = Object.values(errors)[0];
              toast.error(firstErrorMessage);
              
              // Set form errors
              setErrors(errors);
            }
            setSubmitting(false);
          }
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          isSubmitting,
          setFieldValue,
        }) => (
          <Form className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="fullname">Full Name</Label>
                <Input
                  id="fullname"
                  name="fullname"
                  value={values.fullname}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={touched.fullname && errors.fullname ? "border-red-500" : ""}
                />
                {touched.fullname && errors.fullname && (
                  <p className="text-sm text-red-500 mt-1">{errors.fullname}</p>
                )}
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input
                  id="phone"
                  name="phone"
                  value={values.phone}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={touched.phone && errors.phone ? "border-red-500" : ""}
                />
                {touched.phone && errors.phone && (
                  <p className="text-sm text-red-500 mt-1">{errors.phone}</p>
                )}
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                className={touched.email && errors.email ? "border-red-500" : ""}
              />
              {touched.email && errors.email && (
                <p className="text-sm text-red-500 mt-1">{errors.email}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="addressLine">Address</Label>
              <Input
                id="addressLine"
                name="addressLine"
                value={values.addressLine}
                onChange={handleChange}
                onBlur={handleBlur}
                className={touched.addressLine && errors.addressLine ? "border-red-500" : ""}
              />
              {touched.addressLine && errors.addressLine && (
                <p className="text-sm text-red-500 mt-1">{errors.addressLine}</p>
              )}
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              <div className="space-y-2">
                <Label htmlFor="city">City</Label>
                <Input
                  id="city"
                  name="city"
                  value={values.city}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={touched.city && errors.city ? "border-red-500" : ""}
                />
                {touched.city && errors.city && (
                  <p className="text-sm text-red-500 mt-1">{errors.city}</p>
                )}
              </div>
              <div className="space-y-2">
                <Label htmlFor="state">State</Label>
                <Input
                  id="state"
                  name="state"
                  value={values.state}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={touched.state && errors.state ? "border-red-500" : ""}
                />
                {touched.state && errors.state && (
                  <p className="text-sm text-red-500 mt-1">{errors.state}</p>
                )}
              </div>
              <div className="space-y-2">
                <Label htmlFor="pincode">Pincode</Label>
                <Input
                  id="pincode"
                  name="pincode"
                  value={values.pincode}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={touched.pincode && errors.pincode ? "border-red-500" : ""}
                />
                {touched.pincode && errors.pincode && (
                  <p className="text-sm text-red-500 mt-1">{errors.pincode}</p>
                )}
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="landmark">Landmark (Optional)</Label>
              <Input
                id="landmark"
                name="landmark"
                value={values.landmark}
                onChange={handleChange}
                onBlur={handleBlur}
                className={touched.landmark && errors.landmark ? "border-red-500" : ""}
              />
              {touched.landmark && errors.landmark && (
                <p className="text-sm text-red-500 mt-1">{errors.landmark}</p>
              )}
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <Label>Address Type</Label>
                <Select
                  name="addressType"
                  value={values.addressType}
                  onValueChange={(value) => {
                    setFieldValue("addressType", value);
                  }}
                >
                  <SelectTrigger 
                    className={
                      touched.addressType && errors.addressType 
                        ? "border-red-500" 
                        : ""
                    }
                  >
                    <SelectValue placeholder="Select address type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Home">Home</SelectItem>
                    <SelectItem value="Work">Work</SelectItem>
                  </SelectContent>
                </Select>
                {touched.addressType && errors.addressType && (
                  <p className="text-sm text-red-500 mt-1">{errors.addressType}</p>
                )}
              </div>
              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="isDefault"
                  name="isDefault"
                  checked={values.isDefault}
                  onChange={handleChange}
                  className="h-4 w-4 rounded border-gray-300"
                />
                <Label htmlFor="isDefault">Set as default address</Label>
              </div>
            </div>

            <div className="flex justify-end space-x-2">
              <Button type="button" variant="outline" onClick={onCancel}>
                Cancel
              </Button>
              <Button type="submit" disabled={isSubmitting}>
                Save Address
              </Button>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
}