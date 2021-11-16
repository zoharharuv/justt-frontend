import { useState } from "react"

export const useForm = (initialFields) => {

  const [fields, setFields] = useState(initialFields)

  const handleChange = ({ target }, customer = null) => {
    let field = target.name
    let value = target.type === 'number' ? +target.value : target.value
    setFields(prevFields => ({ ...prevFields, [field]: value }))
  }

  return [
    fields,
    handleChange,
    setFields
  ]
}