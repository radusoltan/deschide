import React from 'react'
import ArticleForm from "./_form"
import { useGetArticleQuery } from '../../../services/Article'
import {useParams} from "react-router-dom"
import i18n from "./../../../i18n"
const ArticleEdit = ()=>{
  const lng = i18n.language
  const {article} = useParams()
  const {data,isLoading} = useGetArticleQuery({lng,article})

return <>
  <div className="row g-5">
    <div className="col">
      <div className="card">
        <div className="card-body">
          {!isLoading?<ArticleForm {...data} />:(
            <div className="spinner-border" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          )}
        </div>
      </div>
    </div>
  </div>
</>
}
export default ArticleEdit
