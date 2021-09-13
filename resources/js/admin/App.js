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
import AddRole from './components/pages/management/roles/Add'
import Role from './components/pages/management/roles/Role'
import Sidebar from './components/partials/Sidebar'
import Header from './components/partials/Header'
import Footer from './components/partials/Footer'
import AuthenticatedRoute from "./AuthenticatedRoute"
import AddUser from './components/pages/management/users/Add'
import Categories from './components/pages/content/category'
import CategoryArticles from './components/pages/content/category/articles'

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
                                <AuthenticatedRoute exact path={'/admin/management/role/add'} component={AddRole} />
                                <AuthenticatedRoute exact path={'/admin/management/role/:role'} component={Role} />
                                <AuthenticatedRoute exact path={'/admin/management/users'} component={Users} />
                                <AuthenticatedRoute exact path={'/admin/management/user/add'} component={AddUser} />
                                <AuthenticatedRoute exact path={'/admin/management/permissions'} component={Permissions} />
                                <AuthenticatedRoute exact path={'/admin/content/category'} component={Categories} />
                                <AuthenticatedRoute exact path={'/admin/content/:category/articles'} component={CategoryArticles} />
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
