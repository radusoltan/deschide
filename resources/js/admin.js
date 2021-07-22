require('./bootstrap')
require('./admin/App')
import i18next from "i18next"
import './i18n'
import "./modules/bootstrap"
import "./modules/theme"
import "./modules/feather"
import "./modules/moment"
import "./modules/sidebar"
import "./modules/flatpickr"
import "./modules/vector-maps"
i18next.changeLanguage(localStorage.getItem('lang')||'ro')
i18next.on('languageChanged',(lng)=>{
    localStorage.setItem('lang',lng)
    window.location.reload()
})
