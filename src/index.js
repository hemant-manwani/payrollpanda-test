require('./css/styles.scss')

import actions from './js/actions'
import render from './js/render'
import { registerHTMLPartials, getTemplate, registerHTMLHelpers } from './js/register_html_partials'
import { getBikers } from './js/models/bikers'


const startApp = () => {

	registerHTMLPartials()
	registerHTMLHelpers()
}

const renderApp = () => {
	const data = { bikers: getBikers() }
	const template = getTemplate(data)
	render(template, "#app", actions)
}

startApp()
renderApp()

window.addEventListener('render', (event) => {
	renderApp()
})

if (DEVELOPMENT) {
  if (module.hot) {
    module.hot.accept()
  }
}