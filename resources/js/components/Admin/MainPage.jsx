import React, {Fragment} from "react"
import {NavLink} from "react-router-dom"
import AccessControl from "../AccessControl"
import AdminRoutes from "./routes"
import {useTranslation} from "react-i18next"
import {useGetLoggedUserQuery} from '../../services/User'
import { useDispatch } from 'react-redux'
import { logoutUser} from "../../slices/AuthSlice"
import i18n from "./../../i18n"
const MainPage = ()=>{
    const dispatch = useDispatch()
    const {data,isLoading} = useGetLoggedUserQuery()
    const {t}=useTranslation()

    const permissions = isLoading ? [] : data.permissions
    const changeLanguage = e => {
        i18n.changeLanguage(e.target.value)
    }
    const handleLogout = (e)=>{
        e.preventDefault()
        dispatch(logoutUser(''))
    }

    return <Fragment>
        <div className="container-fluid">
            <header className="d-flex align-items-center pb-3 mb-3 border-bottom">
            {isLoading ? (
                <div className="spinner-border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>) : (<nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <NavLink className="navbar-brand" to="/admin">{t('home')}</NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <AccessControl
                                userPermissions={permissions}
                                allowedPermissions={["user-list"]}
                                renderNoAccess={()=><h1>No access</h1>}
                            >
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                                       data-bs-toggle="dropdown" aria-expanded="false">
                                        {t('managementHead')}
                                    </a>
                                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <li>
                                            <NavLink to="/admin/management/users" className="dropdown-item" >{t('menuUsers')}</NavLink>
                                        </li>
                                        <li><NavLink to="/admin/management/roles" className="dropdown-item">{t('menuRoles')}</NavLink></li>
                                        <li><NavLink to="/admin/management/permissions" className="dropdown-item" >{t('menuPermissions')}</NavLink></li>
                                    </ul>
                                </li>
                            </AccessControl>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                                   data-bs-toggle="dropdown" aria-expanded="false">
                                    {t('contentHead')}
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><NavLink to="/admin/content/categories" className="dropdown-item" >{t('menuCategories')}</NavLink></li>
                                    <li><NavLink to="/admin/content/articles" className="dropdown-item" >{t('menuArticles')}</NavLink></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a href="#" onClick={handleLogout} className="nav-link">Logout</a>
                            </li>

                        </ul>
                        <select name="language" id="language" onChange={changeLanguage}>
                            <option value="ro">Ro</option>
                            <option value="ru">Ru</option>
                            <option value="en">En</option>
                        </select>
                    </div>
                </div>
            </nav>)}
            </header>
            <main>
                <AdminRoutes />
            </main>
            <footer className="pt-5 my-5 text-muted border-top">
                Created by the Bootstrap team &middot; &copy; 2021
            </footer>
        </div>
    </Fragment>
}
export default MainPage
