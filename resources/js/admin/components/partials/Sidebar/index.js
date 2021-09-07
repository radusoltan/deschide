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

                    <li
                      className={
                        this.props.location.pathname === '/admin/management/users'
                        || '/admin/management/roles'
                        || '/admin/management/permissions'
                          ?'sidebar-item active'
                          :'sidebar-item '}
                    >
                        <a href="#management" data-bs-toggle="collapse" className="sidebar-link collapsed">
                            <i className="align-middle" data-feather="sliders"/> <span
                            className="align-middle">{i18next.t('menu.management.head')}</span>
                        </a>
                        <ul id="management"
                            // className="sidebar-dropdown list-unstyled collapse show"
                            className={this.props.location.pathname === '/admin/management/users'
                            || '/admin/management/roles'
                            || '/admin/management/permissions'
                              ?"sidebar-dropdown list-unstyled collapse show"
                              :"sidebar-dropdown list-unstyled collapse"}
                            data-bs-parent="#sidebar">
                            <li
                              className={
                                this.props.location.pathname === '/admin/management/users'
                                  ?"sidebar-item active"
                                  :"sidebar-item"}
                            >
                                <Link className="sidebar-link" to={'/admin/management/users'}>{i18next.t('menu.management.users')}</Link>
                            </li>
                            <li
                              className={
                                this.props.location.pathname === '/admin/management/roles'
                                  ?"sidebar-item active"
                                  :"sidebar-item"}
                            >
                                <Link className="sidebar-link" to={'/admin/management/roles'}>{i18next.t('menu.management.roles')}</Link>
                            </li>
                            <li
                              className={
                                this.props.location.pathname === '/admin/management/permissions'
                                  ?"sidebar-item active"
                                  :"sidebar-item"}
                            >
                                <Link className="sidebar-link" to={'/admin/management/permissions'}>{i18next.t('menu.management.permissions')}</Link>
                            </li>
                        </ul>
                    </li>
                    <li className="sidebar-item">
                      <Link className="sidebar-link" to={'/admin/content/category'}>
                        <i className="fas fa-list"/>
                        <span className="align-middle">Categories</span>
                      </Link>
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
