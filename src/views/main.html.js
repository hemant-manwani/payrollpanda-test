const mainTemplate = () => {
	return(
		` {{> header }}
	  	{{> breadcrumbs }}
	  	{{> topLine }}
	  	{{> accordion }}
	  	{{> userRegistration}}
	  	{{> bikersList }}
		`
	)
}

export default mainTemplate