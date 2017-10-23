import Handlebars from 'handlebars'
import accordion from '../views/partials/_accordion.html.hbs'
import bikersList from '../views/partials/_bikers-list.html.hbs'
import breadcrumbs from '../views/partials/_breadcrumbs.html.hbs'
import header from '../views/partials/_header.html.hbs'
import mainTemplate from '../views/main.html.js'
import topLine from '../views/partials/_top-line.html.hbs'
import userRegistration from '../views/partials/_user-registration.html.hbs'

export const registerHTMLPartials = () => {
	Handlebars.registerPartial('accordion', accordion)
	Handlebars.registerPartial('bikersList', bikersList)
	Handlebars.registerPartial('breadcrumbs', breadcrumbs)
	Handlebars.registerPartial('header', header)
	Handlebars.registerPartial('topLine', topLine)
	Handlebars.registerPartial('userRegistration', userRegistration)
}

export const getTemplate = (context = {}) => {
	const template = mainTemplate()
	return Handlebars.compile(template)(context)
}