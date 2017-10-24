import getFormFields from '../get_form_fields'
import { removeBiker } from '../models/bikers'

const cancelRegistration = (e) => {
	const id = e.target.getAttribute('data-id')
  removeBiker(id)
}

export default cancelRegistration