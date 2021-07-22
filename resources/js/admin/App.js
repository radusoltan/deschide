import React, {Component, Fragment} from 'react'
import {render} from "react-dom"
import {BrowserRouter, Switch, Route} from "react-router-dom"
import Dashboard from './components/pages/Dashboard'
import Login from "../login"
import Sidebar from './components/partials/Sidebar'
import Header from './components/partials/Header'
import Footer from './components/partials/Footer'
import AuthenticatedRoute from "./AuthenticatedRoute"
class App extends Component {

    render() {
        return <BrowserRouter>
            <Switch>
                <Fragment>
                <Route exact path={'/login'} component={Login} />
                <div className="wrapper">
                    <Sidebar />
                    <div className="main">
                        <Header />
                        <main className="content">
                            <div className="container-fluid p-o">
                                <AuthenticatedRoute exact path={'/admin'} component={Dashboard} />
                            </div>
                        </main>
                        <Footer />
                    </div>
                </div>
                </Fragment>
            </Switch>
        </BrowserRouter>
    }
}

export default App
if (document.getElementById('admin')){
    render(<App/>, document.getElementById('admin'))
}
