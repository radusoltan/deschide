import React from 'react'
import {Link, useParams} from "react-router-dom";
import {useGetCategoryArticlesQuery} from "../../../services/Category"
import i18n from "i18next";

const CategoryArticlesList = ()=>{
    const {category} = useParams()
    const lng = i18n.language
    console.log(category)
    const {data, error, isLoading} = useGetCategoryArticlesQuery({lng, category})
    // console.log(data)
    // console.log(isLoading)

    return <>
        <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
                <li className="breadcrumb-item"><Link to="/admin">Home</Link></li>
                <li className="breadcrumb-item">Content</li>
                <li className="breadcrumb-item active" aria-current="page">Category () Articles List</li>
            </ol>
        </nav>
        <div className="row g-5">
            <div className="card">
                <table className="table">
                    <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Title</th>
                        <th scope="col">Sattus</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>1</td>
                        <td>Article Title</td>
                        <td>Article Status</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Article Title</td>
                        <td>Article Status</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Article Title</td>
                        <td>Article Status</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </>
}

export default CategoryArticlesList
