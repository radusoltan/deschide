import React,{useEffect} from "react"
import {useDispatch, useSelector} from 'react-redux'
import {
  useGetCategoriesQuery,
  useDeleteCategoryMutation,
  useAddCategoryMutation,
  useUpdateCategoryMutation
} from '../../../services/Category'
import i18n from "i18next"
import {Link} from "react-router-dom"

const Category = ()=>{
  const lng = i18n.language
  const {data, error, isLoading} = useGetCategoriesQuery(i18n.language)
  const dispatch = useDispatch()
  const [deleteCategory,
    {
      isError: deleteIsError,
      isLoading: deleteLoading,
      isSuccess: deleteIsSuccess,
      error: deleteError
    }] = useDeleteCategoryMutation()

  const handleDelete = async id => await deleteCategory({lng, id}).unwrap()
  return <>
    <nav aria-label="breadcrumb">
      <ol className="breadcrumb">
        <li className="breadcrumb-item"><Link to="/admin">Home</Link></li>
        <li className="breadcrumb-item"><Link to="#">Content</Link></li>
        <li className="breadcrumb-item active" aria-current="page">Categories</li>
      </ol>
    </nav>
    {isLoading?(
      <div className="spinner-border" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    ):(<div className="row g-5">
        <div className="col-6">
          <div className="card">
            <div className="card-body">
              <div className="card-header d-flex justify-content-between align-items-center">
                <h1>Categories</h1>
                  <Link to={"/admin/content/category"} className="btn btn-sm btn-primary" >New</Link>
              </div>

              <ul className="list-group list-group-flush">
              {isLoading ? (
                <div className="spinner-border" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
              ) : (
                data.map(({id, name}) => (<li className="list-group-item" key={id}>
                  <Link to={`/admin/content/category/${id}`} className="me-3">{name}</Link>
                  <Link to={`/admin/content/category/${id}/edit`} className="me-3">
                    <i className="fas fa-edit"/>
                  </Link>
                  <a href="#" className="me-3" onClick={()=>{handleDelete(id)}}>delete</a>
                </li>))
              )}
              </ul>
            </div>
          </div>
        </div>
      </div>)}
    </>
}

export default Category
