import React, {Component, } from 'react'
import {render} from "react-dom"
import './bootstrap'
import {withRouter} from 'react-router-dom'
import Auth from "./api/Auth"

class Login extends Component {
    constructor(props) {
        super(props)

        this.state = {
            email:'',
            password:'',
            error_message: null,
            errors: null
        }

        this.handleSubmit = this.handleSubmit.bind(this)
        this.handlePassword = this.handlePassword.bind(this)
        this.handleEmail = this.handleEmail.bind(this)
        this.handleLangChange = this.handleLangChange.bind(this)
    }
    componentDidMount() {
        if(localStorage.getItem('token')){
            window.location.replace('/admin')
        }
    }

    handleSubmit(e){
        e.preventDefault()
        Auth.login({
            email: this.state.email,
            password: this.state.password,
            lang: 'ro'
        }).then(r=> {
            localStorage.setItem('token',r.data.token)
            setTimeout(()=>{
                window.location.replace('/admin')
            },500)
        })
    }
    handlePassword(e){
        this.setState({
            password: e.target.value
        })
    }
    handleEmail(e){
        this.setState({
            email: e.target.value
        })
    }
    handleLangChange(e){
        this.setState({
            lang: e.target.value
        })
        localStorage.setItem('lang',e.target.value)
    }
    render() {
        return <main className="d-flex w-100">
            <div className="container d-flex flex-column">
                <div className="row vh-100">
                    <div className="col-sm-10 col-md-8 col-lg-6 mx-auto d-table h-100">
                        <div className="d-table-cell align-middle">
                            <div className="text-center mt-4">
                                <h1 className="h2">Welcome back, Charles</h1>
                                <p className="lead">
                                    Sign in to your account to continue
                                </p>
                            </div>

                            <div className="card">
                                <div className="card-body">
                                    <div className="m-sm-4">
                                        <div className="text-center">
                                            <img src="img/avatars/avatar.jpg" alt="Charles Hall"
                                                 className="img-fluid rounded-circle" width="132" height="132"/>
                                        </div>
                                        <form
                                            onSubmit={this.handleSubmit}
                                        >
                                            <div className="mb-3">
                                                <label className="form-label">Email</label>
                                                <input className="form-control form-control-lg"
                                                       type="email"
                                                       name="email"
                                                       placeholder="Enter your email"
                                                       onChange={this.handleEmail}
                                                       value={this.state.email}
                                                />

                                            </div>
                                            <div className="mb-3">
                                                <label className="form-label">Password</label>
                                                <input className="form-control form-control-lg"
                                                       type="password"
                                                       name="password"
                                                       placeholder="Enter your password"
                                                       onChange={this.handlePassword}
                                                       value={this.state.value}
                                                />
                                            </div>
                                            <div className="mb-3">
                                                <select name="lang" className="form-control" onChange={this.handleLangChange} value={this.state.lang}>
                                                    <option value={null}>Select language</option>
                                                    <option value="ro">Romanian</option>
                                                    <option value="ru">Russian</option>
                                                    <option value="gb">English</option>
                                                </select>
                                            </div>
                                            <div className="text-center mt-3">
                                                <button type="submit" className="btn btn-lg btn-primary">Sign in</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </main>
    }
}

export default withRouter(Login)

if (document.getElementById('login')){
    render(<Login/>, document.getElementById('login'))
}
