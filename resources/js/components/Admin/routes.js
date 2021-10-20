import React from "react"
import {Route} from 'react-router-dom'
import User from "./User"
import Role from "./Role"
import Permission from "./Permission"
import Category from "./Category"
import Article from "./Article"
import ProtectedRoutes from "../ProtectedRoutes";
import Dashboard from "./Dashboard";

const AdminRoutes = ()=>{

    return <>
        <ProtectedRoutes path="/admin/management/users" component={User}  />
        <ProtectedRoutes path="/admin/management/roles" component={Role}  />
        <ProtectedRoutes path="/admin/management/permissions" component={Permission}  />
        <ProtectedRoutes path="/admin/content/categories" component={Category}  />
        <ProtectedRoutes path="/admin/content/articles" component={Article}  />
        <ProtectedRoutes exact path="/admin" component={Dashboard}  />
    </>
}

export default AdminRoutes
