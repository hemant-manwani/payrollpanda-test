import Handlebars from 'handlebars'
import accordion from '../views/partials/_accordion.html.hbs'
import bikersList from '../views/partials/_bikers-list.html.hbs'
import bikerRow from '../views/partials/_biker-row.html.hbs'
import breadcrumbs from '../views/partials/_breadcrumbs.html.hbs'
import header from '../views/partials/_header.html.hbs'
import mainTemplate from '../views/main.html.js'
import topLine from '../views/partials/_top-line.html.hbs'
import userRegistration from '../views/partials/_user-registration.html.hbs'

export const registerHTMLPartials = () => {
	Handlebars.registerPartial('accordion', accordion)
	Handlebars.registerPartial('bikersList', bikersList)
	Handlebars.registerPartial('bikerRow', bikerRow)
	Handlebars.registerPartial('breadcrumbs', breadcrumbs)
	Handlebars.registerPartial('header', header)
	Handlebars.registerPartial('topLine', topLine)
	Handlebars.registerPartial('userRegistration', userRegistration)
}

export const registerHTMLHelpers = () => {
	Handlebars.registerHelper('daysOfWeek', (daysOfWeek) => {
		let numberOfDays = daysOfWeek.length
		let days = {
			'1': 'Sun',
			'2': 'Mon',
			'3': 'Tue',
			'4': 'Wed',
			'5': 'Thu',
			'6': 'Fri',
			'7': 'Sat'
		}
	  if (numberOfDays == 7) {
	  	return 'Every day'
	  }
	  if (numberOfDays == 2 && (daysOfWeek.indexOf('1') != -1) && (daysOfWeek.indexOf('7') != -1)) {
	  	return 'Weekends'
	  }
	  if (numberOfDays == 5 && (daysOfWeek.indexOf('1') == -1) && (daysOfWeek.indexOf('7') == -1)) {
	  	return 'Week days'
	  }
	  return daysOfWeek.map((day) => ` ${days[day]}`)
	})

	Handlebars.registerHelper('registrationDate', (date) => {
		const registrationDate = new Date(date)
		let hours = registrationDate.getHours()
	  let minutes = registrationDate.getMinutes()
	  const ampm = hours >= 12 ? 'PM' : 'AM'
	  hours = hours % 12
	  hours = hours ? hours : 12
	  minutes = minutes < 10 ? `0${minutes}` : minutes
	  const strTime = `${hours}:${minutes} ${ampm}`
	  return new Handlebars.SafeString(`${registrationDate.getMonth()+1}/${registrationDate.getDate()}/${registrationDate.getFullYear()}<span>${strTime}</span>`)
	})
}

export const getTemplate = (context = {}) => {
	const template = mainTemplate()
	return Handlebars.compile(template)(context)
}