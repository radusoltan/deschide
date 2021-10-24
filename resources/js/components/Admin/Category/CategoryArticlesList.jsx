import React from 'react'
import {Link, useParams} from "react-router-dom"
import {useGetCategoryArticlesQuery} from '../../../services/Category'
import i18n from "i18next"
import Pagination from "react-js-pagination"

const CategoryArticlesList = ()=>{
  const {category} = useParams()
  const lng = i18n.language
  const {data, isLoading: getCatIsLoad} = useGetCategoryArticlesQuery({lng,category,page:1})
    console.log(data)
    console.log(getCatIsLoad)
    // console.log(isLoading)

return (
<>
  <nav aria-label="breadcrumb">
    <ol className="breadcrumb">
      <li className="breadcrumb-item"><Link to="/admin">Home</Link></li>
      <li className="breadcrumb-item">Content</li>
      <li className="breadcrumb-item active" aria-current="page">Category () Articles List</li>
    </ol>
  </nav>
  <div className="row g-5">
    <div className="col">
      <div className="card">
        <div className="card-header d-flex justify-content-between align-items-center">
          <h1>Categories</h1>
          <Link to={`/admin/content/category/${category}/add-article`} className="btn btn-sm btn-primary" >New Article</Link>
        </div>
        <div className="card-body">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Title</th>
                <th scope="col">Satus</th>
              </tr>
            </thead>
            <tbody>
            {!getCatIsLoad?data.data.map(({id,title,status})=><tr key={id}>
              <td>{id}</td>
              <td>
                <Link to={`/admin/content/article/${id}/edit`} >{title}</Link>
              </td>
              <td>{status}</td>
            </tr>):('...Loading')}
            </tbody>
          </table>
          {!getCatIsLoad?<Pagination
            activePage={data.current_page}
            itemsCountPerPage={data.per_page}
            totalItemsCount={data.total}
            pageRangeDisplayed={5}
            onChange={(page,{lng,category})=>useGetCategoryArticlesQuery({lng,category,page})}
            itemClass="page-item"
            linkClass="page-link"
          />:('...loading')}
        </div>
      </div>
    </div>
  </div>
</>
)}

export default CategoryArticlesList
