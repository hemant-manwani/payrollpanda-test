const getFormFields = () => {
  return [
    'input[name="full-name"]',
    'input[name="email"]',
    'input[name="city"]',
    'input[name="ride-in-groups"]:checked',
    'input[name="days-of-week"]:checked'
  ]
}

export default getFormFields