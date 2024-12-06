// AddressForm.tsx

import React from "react"
import { Formik, Form } from "formik"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import addressSchema from "@/utils/validation/addressValidation"


export function AddressForm({ initialValues, onSubmit, onCancel }) {
  console.log("address for editing",initialValues);
  
  return (
    <Formik 
    initialValues={{ ...initialValues, isDefault: false }}
     validationSchema={addressSchema}
      onSubmit={onSubmit}>
      {({ values, errors, touched, handleChange, handleBlur ,isSubmitting}) => (
        <Form className="space-y-4 max-w-lg mx-auto p-4">
        <div className="grid gap-4 sm:grid-cols-2">
          {/* Full Name Field */}
          <div className="space-y-2">
            <Label htmlFor="fullname">Full Name</Label>
            <Input
              id="fullname"
              name="fullname"
              value={values.fullname}
              onChange={handleChange}
              onBlur={handleBlur}
              className="w-full"
            />
            {touched.fullname && errors.fullname && (
              <p className="text-sm text-red-500">{errors.fullname}</p>
            )}
          </div>
      
          {/* Phone Field */}
          <div className="space-y-2">
            <Label htmlFor="phone">Phone Number</Label>
            <Input
              id="phone"
              name="phone"
              value={values.phone}
              onChange={handleChange}
              onBlur={handleBlur}
              className="w-full"
            />
            {touched.phone && errors.phone && (
              <p className="text-sm text-red-500">{errors.phone}</p>
            )}
          </div>
        </div>
      
        {/* Email Field */}
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            name="email"
            type="email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            className="w-full"
          />
          {touched.email && errors.email && (
            <p className="text-sm text-red-500">{errors.email}</p>
          )}
        </div>
      
        {/* Address Fields */}
        <div className="space-y-2">
          <Label htmlFor="addressLine">Address</Label>
          <Input
            id="addressLine"
            name="addressLine"
            value={values.addressLine}
            onChange={handleChange}
            onBlur={handleBlur}
            className="w-full"
          />
          {touched.addressLine && errors.addressLine && (
            <p className="text-sm text-red-500">{errors.addressLine}</p>
          )}
        </div>
      
        <div className="grid gap-4 sm:grid-cols-3">
          <div className="space-y-2">
            <Label htmlFor="city">City</Label>
            <Input
              id="city"
              name="city"
              value={values.city}
              onChange={handleChange}
              onBlur={handleBlur}
              className="w-full"
            />
            {touched.city && errors.city && (
              <p className="text-sm text-red-500">{errors.city}</p>
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
              className="w-full"
            />
            {touched.state && errors.state && (
              <p className="text-sm text-red-500">{errors.state}</p>
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
              className="w-full"
            />
            {touched.pincode && errors.pincode && (
              <p className="text-sm text-red-500">{errors.pincode}</p>
            )}
          </div>
        </div>
      
        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-end space-y-2 sm:space-y-0 sm:space-x-2 mt-6">
          <Button type="button" variant="outline" onClick={onCancel} className="w-full sm:w-auto">
            Cancel
          </Button>
          <Button type="submit" disabled={isSubmitting} className="w-full sm:w-auto">
            Save Address
          </Button>
        </div>
      </Form>
      
   
      
      )}
    </Formik>
  )
}
