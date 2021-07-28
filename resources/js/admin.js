import Cookies from "universal-cookie/lib";

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

const cookies = new Cookies()
i18next.changeLanguage(cookies.get('i18next'))
i18next.on('languageChanged',(lng)=>{
    window.location.reload()
})
