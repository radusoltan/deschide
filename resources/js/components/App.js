import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import {store} from "../store"
import ProtectedRoutes from "./ProtectedRoutes"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom"
import Site from "./Site/MainPage"
import Admin from "./Admin/MainPage"
import Login from "./Login"
function App() {

    return <Provider store={store}>

        <Router>
            <ul>
                <li>
                    <Link to="/" >Site</Link>
                </li>
                <li><Link to="/admin" >Admin</Link></li>
                <li><Link to="/login" >Login</Link></li>
            </ul>
            <Switch>
                <Route exact path="/" component={Site} />
                <Route path="/login" component={Login} />
                <ProtectedRoutes path="/admin" component={Admin}/>
            </Switch>
        </Router>
    </Provider>
}

export default App;

if (document.getElementById('site')) {
    render(<App />, document.getElementById('site'));
}
