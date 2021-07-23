import React, {Component} from 'react'
import {Link, withRouter} from 'react-router-dom'
import Auth from "../../../../api/Auth"
import i18next from "i18next";
class Index extends Component {
    constructor(props) {
        super(props)

        this.handleLogout = this.handleLogout.bind(this)
    }

    componentDidMount() {
        const checkAuth = setInterval(()=>{
            Auth.checkAuth()
            .then(r=> {})
            .catch(e=>{
                clearInterval(checkAuth)
                cookies.remove('access_token',{path:'/'})
                this.props.history.push('/login')
            })
        },20000)
    }

    handleLogout(e){
        e.preventDefault()
        Auth.logout()
            .then(r=> {
                cookies.remove('access_token',{path:'/'})
                this.props.history.push('/login')
            })
            .catch(e=>{
                cookies.remove('access_token',{path:'/'})
                if(!e.response.data.state){
                    this.props.history.push('/login')
                }
            })
    }

    render() {
        return <nav id="sidebar" className="sidebar">
            <div className="sidebar-content js-simplebar">
                <Link className="sidebar-brand" to={'/admin'}>
                    <span className="align-middle">{i18next.t('salut')}</span>
                </Link>

                <ul className="sidebar-nav">

                    <li className="sidebar-item">
                        <a href="#management" data-bs-toggle="collapse" className="sidebar-link collapsed">
                            <i className="align-middle" data-feather="sliders"/> <span
                            className="align-middle">Management</span>
                        </a>
                        <ul id="management" className="sidebar-dropdown list-unstyled collapse " data-bs-parent="#sidebar">
                            <li className="sidebar-item">
                                <Link className="sidebar-link" to={'/admin/management/users'}>Users</Link>
                            </li>
                            <li className="sidebar-item">
                                <Link className="sidebar-link" to={'/admin/management/roles'}>Roles</Link>
                            </li>
                            <li className="sidebar-item">
                                <Link className="sidebar-link" to={'/admin/management/permissions'}>Permissions</Link>
                            </li>
                        </ul>
                    </li>

                    <li className='sidebar-item'>
                        <a
                            className='sidebar-link'
                            onClick={this.handleLogout}
                        >
                            <i className="fas fa-sign-out-alt text-danger"/>
                            <span className="align-middle">Logout</span>
                        </a>
                    </li>
                </ul>

            </div>
        </nav>
    }
}

export default withRouter(Index)
