import React from "react"
import {Link, NavLink} from "react-router-dom";

const Navigation = ()=>{

    return <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
            <Link className="navbar-brand" href="#">Home</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"/>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <NavLink className="nav-link" aria-current="page" to="/admin/management/users">Users</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/admin/management/roles" aria-current="page">Roles</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/admin/management/permissions" aria-current="page">Permissions</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/admin/content/categories" aria-current="page">Categories</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/admin/content/articles" aria-current="page">Articles</NavLink>
                    </li>

                </ul>
                <form className="d-flex">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">Search</button>
                </form>
            </div>
        </div>
    </nav>
}

export default Navigation
