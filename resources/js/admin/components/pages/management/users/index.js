import React, {Component} from 'react'
import User from './../../../../../api/User'

class Index extends Component {

    componentDidMount() {
        User.all()
            .then(r=>console.log(r))
    }

    render() {
        return <h1>Users</h1>
    }
}

export default Index;
