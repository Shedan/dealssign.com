import Vue from 'vue'
// the component
import FontAwesomeIcon from '@fortawesome/vue-fontawesome'
// the library
import fontawesome from '@fortawesome/fontawesome'



// asociate it to the library, if you need to add more you can separate them by a comma
fontawesome.library.add(brands)
Vue.component(FontAwesomeIcon.name, FontAwesomeIcon)