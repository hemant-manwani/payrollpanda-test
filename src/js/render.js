const render = (template, selector, options) => {
	if (options.beforeRender)
		options.beforeRender()
  
  const node = document.querySelector(selector)
  if (!node) return
  node.innerHTML = template
	if (options.afterRender)
		options.afterRender()
}

export default render
