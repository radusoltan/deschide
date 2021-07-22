import React, {Component} from 'react'
import {withRouter} from 'react-router-dom'
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
                <a className="sidebar-brand" href="index.html">
                    <span className="align-middle">AdminKit</span>
                </a>

                <ul className="sidebar-nav">
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
