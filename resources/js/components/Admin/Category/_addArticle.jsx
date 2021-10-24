import React from "react"
import {useParams} from "react-router-dom"
import ArticleForm from "../Article/_form";

const AddCategoryArticle = ()=>{
  const {category} = useParams()
  console.log(category)
return <>
  <div className="row">
    <div className="col">
      <div className="card">
        <div className="card-body">
          <ArticleForm />
        </div>
      </div>
    </div>
  </div>
</>
}
export default AddCategoryArticle
