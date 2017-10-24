import getFormFields from '../get_form_fields'
import { addBiker } from '../models/bikers'
import { validateField } from '../validation'

const submitForm = () => {
  const formValues = {}
  const validFields = getFormFields().forEach(( value, index ) => {
    const field = document.querySelectorAll(value)
    const name = field[0].name
    const fieldValue = field.length == 1 ?
                         field[0].value
                       :
                         Array.prototype.map.call(field, (v) => v.value)
    formValues[name] = {
      value: fieldValue,
      valid: validateField(name, fieldValue)
    }
  })
  const isFalse = Object.values(formValues).filter((value) => !value.valid ).length
  if (!isFalse){
    addBiker(formValues)
  } else {
    document.getElementById('error').innerHTML = 'Form is invalid, try again'
  }
}

export default submitForm