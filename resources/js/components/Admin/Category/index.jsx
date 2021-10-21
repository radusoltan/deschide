import React from "react"
import {useDispatch} from 'react-redux'
import {useGetAllCategoriesQuery} from '../../../services/Category'
import i18n from "i18next"
import {Link} from "react-router-dom"

const Category = ()=>{

    const dispatch = useDispatch()

    const {data, error, isLoading} = useGetAllCategoriesQuery(i18n.language)
    i18n.on('languageChanged', (lng)=>{
        console.log('changed', lng)
    })
    // console.log(data)
    // console.log(error)
    // console.log(isLoading)

    const handleEdit = (category)=>{
        console.log(category)
    }

    return <>
        <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
                <li className="breadcrumb-item"><Link to="/admin">Home</Link></li>
                <li className="breadcrumb-item"><Link to="#">Content</Link></li>
                <li className="breadcrumb-item active" aria-current="page">Categories</li>
            </ol>
        </nav>
        <div className="row g-5">
            <div className="col-6">
                <div className="card">
                    <div className="card-body">
                        <ul className="list-group list-group-flush">
                            {isLoading ? (
                                <div className="spinner-border" role="status">
                                    <span className="visually-hidden">Loading...</span>
                                </div>
                            ) : (
                                data.map(({id,name})=>(<li className="list-group-item" key={id}>
                                    <Link to={`/admin/content/category/${id}/articles`}>{name}</Link>
                                    <a href="#" onClick={handleEdit(id)}>
                                        <i className="fas fa-edit"/>
                                    </a>
                                </li>))
                            )}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default Category
