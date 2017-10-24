let eventCreated = false
let event

const createEvent = () => {
	event = document.createEvent('Event')
  event.initEvent('render', true, false)
  eventCreated = true
}

export const dispatchRender = () => {
	if(!eventCreated) {
		createEvent()
	}
	window.dispatchEvent(event)
}