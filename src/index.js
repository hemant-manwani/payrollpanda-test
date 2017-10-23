import render from './js/render'
import { registerHTMLPartials, getTemplate } from './js/register_html_partials'

require('./css/styles.scss')

registerHTMLPartials()

const template = getTemplate()

render(template, "#app")

if (DEVELOPMENT) {
  if (module.hot) {
    module.hot.accept()
  }
}