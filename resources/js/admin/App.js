import React, {Component, Fragment} from 'react'
import {render} from "react-dom"
import {BrowserRouter, Switch, Route} from "react-router-dom"
import {Provider} from "react-redux"
import store from './../store/store'
import Dashboard from './components/pages/Dashboard'
import Login from "../login"
import Users from './components/pages/management/users'
import Permissions from './components/pages/management/permissions'
import Roles from './components/pages/management/roles'
import Sidebar from './components/partials/Sidebar'
import Header from './components/partials/Header'
import Footer from './components/partials/Footer'
import AuthenticatedRoute from "./AuthenticatedRoute"

class App extends Component {
    render() {
        return <Provider store={store}>
        <BrowserRouter>
            <Switch>
                <Fragment>
                <Route exact path={'/login'} component={()=><Login/>} />
                <div className="wrapper">
                    <Sidebar />
                    <div className="main">
                        <Header />
                        <main className="content">
                            <div className="container-fluid p-o">
                                <AuthenticatedRoute exact path={'/admin'} component={Dashboard} />
                                <AuthenticatedRoute exact path={'/admin/management/roles'} component={Roles} />
                                <AuthenticatedRoute exact path={'/admin/management/users'} component={Users} />
                                <AuthenticatedRoute exact path={'/admin/management/permissions'} component={Permissions} />
                            </div>
                        </main>
                        <Footer />
                    </div>
                </div>
                </Fragment>
            </Switch>
        </BrowserRouter>
        </Provider>
    }
}

export default App
if (document.getElementById('admin')){
    render(<App/>, document.getElementById('admin'))
}
