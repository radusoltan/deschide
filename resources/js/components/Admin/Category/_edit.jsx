import React,{useEffect} from 'react'
import CategoryForm from "./_form"
import {useGetCategoryQuery} from "../../../services/Category"
import i18n from "i18next"
import {useParams} from "react-router-dom";

const CategoryEdit = ()=>{
  const lng = i18n.language
  const {category} = useParams()
  const {data, isLoading, isSuccess} = useGetCategoryQuery({lng,category})
  const {id,name, in_menu} = !isLoading?data:''

return (
  <>
    <div className="row g-5">
      <div className="col">
        <div className="card">
          <div className="card-body">
            <h1>Edit Category</h1>
            <CategoryForm preloadedValues={{
              response: {
                id,
                name,
                in_menu
              },
              edit: true
            }} />
          </div>
        </div>
      </div>
    </div>
  </>
)}

export default CategoryEdit
