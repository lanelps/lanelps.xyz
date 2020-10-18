import { useState, useEffect } from 'react'

const useFormValidation = (initialState, validate, sendForm) => {
  const [values, setValues] = useState(initialState)
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  useEffect(() => {
    if (isSubmitting) {
      const noErrors = Object.keys(errors).length === 0
      if (noErrors) {
        console.log("No Form Errors")
        sendForm(values, setValues, initialState)
        setIsSubmitting(false)
      } else {
        console.log("Form Errors")
        setIsSubmitting(false)
      }
    }
  }, [errors])

  const handleInputChange = ({ target: { name, value } }) => {
    setValues({ ...values, [name]: value })
  }

  const handleBlur = () => {
    const validationErrors = validate(values)
    setErrors(validationErrors)
  }

  const formSubmit = (event) => {
    event.preventDefault()
    setIsSubmitting(true)
    const validationErrors = validate(values)
    setErrors(validationErrors)
  }

  return { formSubmit, handleInputChange, handleBlur, values, errors, isSubmitting }

}

export default useFormValidation