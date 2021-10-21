import React, { Component } from 'react'
import { Route, Redirect} from 'react-router-dom'

const AuthenticatedRoute = ({component: Component, ...rest}) =>(
    <Route {...rest} render={props => localStorage.getItem('token')? (
        <Component {...props}/>
    ):(
        <Redirect to={{pathname: "/login", state: {from: props.location}}} {...props}/>
    )
    } />
);

export default AuthenticatedRoute
