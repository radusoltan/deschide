import React from "react"
import Users from "./User/index"
import UserEdit from './User/UserEdit'
import Roles from "./Roles/index"
import RoleEdit from './Roles/RoleEdit'
import Permissions from "./Permission/index"
import PermissionEdit from './Permission/PermissionEdit'
import Categories from "./Category/index"
import CategoryArticleList from './Category/CategoryArticlesList'
import Articles from "./Article/index"
import ProtectedRoutes from "../ProtectedRoutes";
import Dashboard from "./Dashboard";
import CategoryEdit from "./Category/CategoryEdit";
import ArticleEdit from "./Article/ArticleEdit";

const AdminRoutes = ()=>{

    return <>
        <ProtectedRoutes path="/admin/management/users" component={Users}  />
        <ProtectedRoutes path="/admin/management/user/:user/edit" component={UserEdit}  />
        <ProtectedRoutes path="/admin/management/roles" component={Roles}  />
        <ProtectedRoutes path="/admin/management/role/:role" component={RoleEdit}  />
        <ProtectedRoutes path="/admin/management/permissions" component={Permissions}  />
        <ProtectedRoutes path="/admin/management/permission/:permission/edit" component={PermissionEdit}  />
        <ProtectedRoutes path="/admin/content/categories" component={Categories}  />
        <ProtectedRoutes path="/admin/content/category/:category" component={CategoryArticleList}  />
        <ProtectedRoutes path="/admin/content/category/:category/edit" component={CategoryEdit}  />
        <ProtectedRoutes path="/admin/content/articles" component={Articles}  />
        <ProtectedRoutes path="/admin/content/article/:article/edit" component={ArticleEdit}  />
        <ProtectedRoutes exact path="/admin" component={Dashboard}  />
    </>
}

export default AdminRoutes
