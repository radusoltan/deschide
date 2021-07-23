import React, {Component} from 'react'
import i18next from "i18next"
import Cookies from "universal-cookie/lib"
class Index extends Component {
    constructor(props) {
        super(props)
        const cookies = new Cookies()
        this.state = {
            lang: cookies.get('i18next')
        }

        this.handleLangClick = this.handleLangClick.bind(this)
    }
    handleLangClick(e){
        e.preventDefault()
        i18next.changeLanguage(e.target.dataset.lang)
        this.setState({
            lang: e.target.dataset.lang
        })
    }
    render() {

        return <nav className="navbar navbar-expand navbar-light navbar-bg">
            <a className="sidebar-toggle js-sidebar-toggle">
                <i className="hamburger align-self-center"/>
            </a>
            <div className="navbar-collapse collapse">
                <ul className="navbar-nav navbar-align">
                    <li className="nav-item dropdown">
                        <a className="nav-flag dropdown-toggle" href="#" id="languageDropdown"
                           data-bs-toggle="dropdown">
                            <span className={`flag-icon flag-icon-${this.state.lang}`}/>
                        </a>
                        <div className="dropdown-menu dropdown-menu-end" aria-labelledby="languageDropdown">
                            <a className="dropdown-item" href="#">
                                <span
                                    className="align-middle"
                                    onClick={this.handleLangClick}
                                    data-lang="gb"
                                >
                                    <span className={`flag-icon flag-icon-gb`}/>
                                    English</span>
                            </a>
                            <a className="dropdown-item" href="#">
                                <span
                                    className="align-middle"
                                    onClick={this.handleLangClick}
                                    data-lang="ru"
                                >
                                    <span className={`flag-icon flag-icon-ru`}/>
                                    Russian</span>
                            </a>
                            <a className="dropdown-item" href="#">
                                <span
                                    className="align-middle"
                                    onClick={this.handleLangClick}
                                    data-lang="ro"
                                >
                                    <span className={`flag-icon flag-icon-ro`}/>
                                    Romanian</span>
                            </a>
                        </div>
                    </li>
                </ul>
            </div>
        </nav>
    }
}

export default Index
