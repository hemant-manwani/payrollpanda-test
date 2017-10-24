export const validateField = (field, value) => {
  switch(field) {
    case 'full-name': {
      return value.length > 0
    }

    case 'email': {
      const regex = /[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}/igm
      return !(value == '' || !regex.test(value))
    }

    case 'city': {
      return true
    }

    case 'ride-in-groups': {
      return value.length > 0
    }

    case 'days-of-week': {
      return value.length > 0
    }

    default: {
      break
    }
  }
}
