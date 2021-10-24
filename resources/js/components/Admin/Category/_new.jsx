import React, {useEffect} from "react"
import {useDispatch} from "react-redux"
import CategoryForm from "./_form";

const CategoryNew = ()=>{
  const dispatch = useDispatch()

return (
<>
  <div className="row g-5">
    <div className="col">
      <div className="card">
        <div className="card-header">
          <h3 className="card-title">New Category</h3>
        </div>
        <div className="card-body">
          <CategoryForm preloadedValues={{
            response: {
              id: '',
              name: '',
              in_menu: false
            },
            edit: false
          }} />
        </div>
      </div>
    </div>
  </div>
</>
)
}
export default CategoryNew
