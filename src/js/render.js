const render = (template, selector) => {
  const node = document.querySelector(selector)
  if (!node) return
  node.innerHTML = template
}

export default render
