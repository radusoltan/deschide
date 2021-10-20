import React, {Fragment, useEffect} from "react"
import {NavLink, useHistory} from "react-router-dom"
import AccessControl from "../AccessControl"
import AdminRoutes from "./routes"

import {useGetLoggedUserQuery} from '../../services/User'
import { useSelector, useDispatch } from 'react-redux'
import {userSelector, logoutUser} from "../../slices/AuthSlice"

const MainPage = ()=>{
    const dispatch = useDispatch()
    const history = useHistory()
    const {authErrors, errorMessage, isAuthenticated, isError,isFetching, isSuccess} = useSelector(userSelector)
    const {data,error, isLoading} = useGetLoggedUserQuery()

    console.log(data)
    console.log(error)
    console.log(isLoading)

    const permissions = isLoading ? [] : data.permissions

    const handleLogout = (e)=>{
        e.preventDefault()
        dispatch(logoutUser(''))
    }

    return <Fragment>
        <div className="container-fluid">
            {isLoading ? (
            <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>) : (<nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <NavLink className="navbar-brand" to="/admin">Home</NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <AccessControl
                                    userPermissions={permissions}
                                    allowedPermissions={["user-list"]}
                                    renderNoAccess={()=><h1>No access</h1>}
                                >
                                <NavLink to="/admin/management/users" className="nav-link" >Users</NavLink>
                                </AccessControl>
                            </li>
                            <li className="nav-item">
                                <AccessControl
                                    userPermissions={permissions}
                                    allowedPermissions={["role-list"]}
                                    renderNoAccess={()=> {
                                        return <h1>No access</h1>
                                    }}
                                >
                                <NavLink to="/admin/management/roles" className="nav-link" >Roles</NavLink>
                                </AccessControl>
                            </li>
                            <li className="nav-item">
                                <AccessControl
                                    userPermissions={permissions}
                                    allowedPermissions={["permission-list"]}
                                    renderNoAccess={()=><h1>No access</h1>}
                                >
                                <NavLink to="/admin/management/permissions" className="nav-link" >Permissions</NavLink>
                                </AccessControl>
                            </li>
                            <li className="nav-item">
                                <AccessControl
                                    userPermissions={permissions}
                                    allowedPermissions={['category-list']}
                                >
                                <NavLink to="/admin/content/categories" className="nav-link" >Categories</NavLink>
                                </AccessControl>
                            </li>
                            <li className="nav-item">
                                <AccessControl
                                    userPermissions={permissions}
                                    allowedPermissions={['article-list']}
                                >
                                <NavLink to="/admin/content/articles" className="nav-link" >Articles</NavLink>
                                </AccessControl>
                            </li>
                            <li className="nav-item">
                                <a href="#" onClick={handleLogout} className="nav-link">Logout</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>)}
            <div className="row">
                <AdminRoutes />
            </div>
        </div>
    </Fragment>
}
export default MainPage
