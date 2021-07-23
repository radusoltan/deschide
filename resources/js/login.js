import React, {Component, } from 'react'
import {render} from "react-dom"
import './bootstrap'
import {withRouter} from 'react-router-dom'
import Auth from "./api/Auth"
import Swal from 'sweetalert2'

class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username:'',
            password:'',
            isChecked: false,
            error_message: null,
            errors: null
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handlePassword = this.handlePassword.bind(this)
        this.handleEmail = this.handleEmail.bind(this)
        this.handleLangChange = this.handleLangChange.bind(this)
        this.handleChecked = this.handleChecked.bind(this)
    }
    componentDidMount() {
        if(document.getElementsByClassName('wrapper').length > 0){
            document.getElementsByClassName('wrapper').forEach(e=>e.style.display='none')
        }
        if(cookies.get('access_token')){
            window.location.replace('/admin')
        }
    }

    handleSubmit(e){
        e.preventDefault()

        Auth.login({
            username: this.state.username,
            password: this.state.password,
        })
        .then(r=> {
            if(!this.state.isChecked){
                const options = {
                    path: '/'
                }
                cookies.set('access_token',r.data.access_token,options)
            }
            let date = new Date()
            date.setTime(date.getTime() + (r.data.expires_in))
            const options = {
                path: '/',
                expires: date
            }
            cookies.set('access_token',r.data.access_token, options)
            window.location.replace('/admin')
        })
        .catch(e=> {
            Swal.fire({
                title: e.response.data.error,
                text: e.response.data.message,
                icon: 'error'
            })
        })
    }
    handlePassword(e){
        this.setState({
            password: e.target.value
        })
    }
    handleEmail(e){
        this.setState({
            username: e.target.value
        })
    }
    handleLangChange(e){
        this.setState({
            lang: e.target.value
        })
    }
    handleChecked(){
        this.setState({isChecked:!this.state.isChecked})
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
                                                       value={this.state.username}
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
                                            <div>
                                                <label className="form-check">
                                                    <input
                                                        id="remember"
                                                        type="checkbox"
                                                        className="form-check-input"
                                                        name="remember"
                                                        onChange={this.handleChecked}
                                                    />
                                                    <span className="form-check-label">Remember</span>
                                                </label>
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
