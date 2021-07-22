import React, {Component} from 'react'
import {Link, withRouter} from 'react-router-dom'
import Auth from "../../../../api/Auth"
class Index extends Component {
    constructor(props) {
        super(props)
        this.handleLogout = this.handleLogout.bind(this)
    }

    handleLogout(e){
        e.preventDefault()
        Auth.logout()
            .then(r=> {
                localStorage.clear()
                this.props.history.push('/login')
            })
            .catch(e=>{
                localStorage.clear()
                if(!e.response.data.state){
                    this.props.history.push('/login')
                }
            })
    }

    render() {
        return <nav id="sidebar" className="sidebar">
            <div className="sidebar-content js-simplebar">
                <Link className="sidebar-brand" to={'/admin'}>
                    <span className="align-middle">AdminKit</span>
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
