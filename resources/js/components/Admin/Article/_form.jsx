import React from "react"
import {useForm} from "react-hook-form"
import {useUpdateArticleMutation} from '../../../services/Article'

import i18n from "./../../../i18n"
import {useAddArticleByCategoryMutation} from "../../../services/Category";
import {useParams} from "react-router-dom"
const ArticleForm = ({id,title,lead,content,is_breaking,is_alert,is_flash})=>{
  const lng = i18n.language
  const {register, handleSubmit} = useForm({
    defaultValues: {
      title,
      lead,
      content,
      is_breaking,
      is_alert,
      is_flash
    }
  })
  const [updateArticle,{
    isLoading
  }] = useUpdateArticleMutation()
  const onSubmit = (data) => updateArticle({lng,article:id,...data})
// if (isLoading){
//   return <div className="spinner-border" role="status">
//     <span className="visually-hidden">Loading...</span>
//   </div>
// }

return <form onSubmit={handleSubmit(onSubmit)}>
<div className="row">
  <div className="col-9">
    <div className="mb-3">
      <label className="form-label">Title</label>
      <input type="text" className="form-control" {...register('title',{
        required: true
      })}/>
    </div>
    <div className="mb-3">
      <label className="form-label">Lead</label>
      <textarea cols="30" rows="5" {...register('lead')} className="form-control"/>
    </div>
    <div className="mb-3">
      <label className="form-label">Content</label>
      <textarea cols="30" rows="10" className="form-control" {...register('content')}/>
    </div>
  </div>
  <div className="col-3">
    <div className="card">
      <div className="card-body">
        <div className="mb-3">
          <label className="form-label">Status:</label>
          <select className="form-select" {...register('status')}>
            <option value="N">New</option>
            <option value="S">Submitted</option>
            <option value="Y">Published</option>
          </select>
        </div>
        <div className="mb-3">
          <div className="form-check">
            <input className="form-check-input" type="checkbox" {...register('is_breaking')} />
              <label className="form-check-label" >
                BREAKING
              </label>
          </div>
        </div>
        <div className="mb-3">
          <div className="form-check">
            <input className="form-check-input" type="checkbox" {...register('is_flash')} />
              <label className="form-check-label" >
                FLASH
              </label>
          </div>
        </div>
        <div className="mb-3">
          <div className="form-check">
            <input className="form-check-input" type="checkbox" {...register('is_alert')} />
              <label className="form-check-label" htmlFor="flexCheckDefault">
                ALERT
              </label>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
<button className="btn btn-success text-white">Save</button>

</form>
}

export default ArticleForm
