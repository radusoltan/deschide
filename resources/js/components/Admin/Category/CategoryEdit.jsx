import React from 'react'
import {Link} from "react-router-dom";

const CategoryEdit = ()=>{

    return <>
        <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
                <li className="breadcrumb-item"><Link to="/admin">Home</Link></li>
                <li className="breadcrumb-item"><Link to="#">Content</Link></li>
                <li className="breadcrumb-item active" aria-current="page">Category () Edit</li>
            </ol>
        </nav>
        <div className="row g-5">
            <div className="col">
                <div className="card">

                </div>
            </div>
        </div>
    </>
}

export default CategoryEdit
