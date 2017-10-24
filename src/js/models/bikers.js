import { bikers } from '../data'
import { dispatchRender } from '../events'

let bikersList = bikers

export const addBiker = (formFields) => {
  const user = {}
  user['city'] = formFields['city'].value
  user['days_of_week'] = formFields['days-of-week'].value
  user['email'] = formFields['email'].value
  user['full_name'] = formFields['full-name'].value
  user['id'] = bikers.map((biker) => biker.id).sort().length + 1
  user['ride_in_groups'] = formFields['ride-in-groups'].value
  user['registration'] = new Date()
  bikersList.push(user)
  dispatchRender()
  return bikersList
}

export const removeBiker = (id) => {
	bikersList = bikersList.filter( (biker) => biker.id != id )
  dispatchRender()
  return bikersList
}

export const getBikers = () => {
  return bikersList
}
