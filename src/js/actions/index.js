import cancelRegistration from './cancel_registration'
import submitForm from './submit_form'
export default {

	beforeRender() {
		if(document.getElementById('submit')){
			document.getElementById('submit').removeEventListener('click', submitForm)
		}
		if(document.getElementsByClassName('remove')){
			for(let i = 0; i<document.getElementsByClassName('remove').length; i++) {
				document.getElementsByClassName('remove')[i]
								.removeEventListener('click', cancelRegistration)
			}
		}
	},
	
	afterRender(){
		document.getElementById('submit').addEventListener('click', submitForm)
		if(document.getElementsByClassName('remove')){
			for(let i = 0; i<document.getElementsByClassName('remove').length; i++) {
				document.getElementsByClassName('remove')[i]
								.addEventListener('click', cancelRegistration)
			}
		}
		const acc = document.getElementsByClassName('accordion-head');
    for (let i = 0; i < acc.length; i++) {
      acc[i].onclick = function() {
        this.classList.toggle('active')
        var panel = this.nextElementSibling
        if (panel.style.maxHeight){
          panel.style.maxHeight = null
        } else {
          panel.style.maxHeight = `${panel.scrollHeight}px`
        } 
      }
    }
	}
}
