import React, {Component, Fragment} from 'react'
import {render} from "react-dom"

class App extends Component {
    componentDidMount(){
        console.log(document.querySelector('meta[name="csrf-token"]').content)
    }
    render() {
        return <Fragment>
            <a id="navbarDropdown" className="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                {/* {{ Auth::user()->name }} */}
            </a>

            <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="#"
                    onClick={(e)=>{
                        e.preventDefault()
                        document.getElementById('logout-form').submit();
                    }}>
                    Logout
                </a>

                <form id="logout-form" action="/logout" method="POST" className="d-none">
                    <input type="hidden" value={document.querySelector('meta[name="csrf-token"]').content}/>
                </form>
            </div>
            <h1>SITE</h1>
        </Fragment>
        
    }
}

export default App
if(document.getElementById('site')){
    render(<App />, document.getElementById('site'))
}
