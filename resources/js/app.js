require('./bootstrap')
require('./components/App')
import i18n from "i18next"
i18n.changeLanguage(localStorage.getItem('i18nextLng'))
