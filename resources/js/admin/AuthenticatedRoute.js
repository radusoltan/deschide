import React, { Component } from 'react'
import { Route, Redirect, withRouter} from 'react-router-dom'

const AuthenticatedRoute = ({component: Component, ...rest}) =>(
    <Route {...rest} render={props => cookies.get('access_token')? (
        <Component {...props}/>
    ):(
        <Redirect to={{pathname: "/login", state: {from: props.location}}} {...props}/>
    )
    } />
);

export default withRouter(AuthenticatedRoute)
