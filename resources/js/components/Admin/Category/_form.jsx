import React, {useEffect} from 'react'
import { useForm } from "react-hook-form"
import {useHistory} from "react-router-dom";
import {useAddCategoryMutation, useUpdateCategoryMutation} from "../../../services/Category"
import i18n from "i18next";


const CategoryForm = ({preloadedValues})=>{
  const isEdit = preloadedValues.edit
  const lng = i18n.language
  const [updateCategory,
    {
      error: updateError,
      data: updateData,
      isLoading: updateLoading,
      isSuccess: updateIsSuccess,
      isError: updateIsError
    }] = useUpdateCategoryMutation()
  const [addCategory,
    {
      error: addError,
      data: addData,
      isLoading: addIsLoading,
      isSuccess: addIsSuccess,
      isError: addIsError
    }] = useAddCategoryMutation()

  const {id,name, in_menu} = preloadedValues.edit?
    preloadedValues.response:
    {id:'',name:'', in_menu:false}
  const history = useHistory()
  const {register, handleSubmit, reset, setError } = useForm({
    defaultValues: {
      name,
      in_menu
    }
  })

  useEffect(() => {
    if (preloadedValues){
      reset({
        name,
        in_menu
      })
    }
    if (updateIsSuccess || addIsSuccess){
      history.push('/admin/content/categories',{from: history.location.pathname})
    }
    if (updateIsError){
      console.log(updateError)
    }
    if (addIsError){
      console.log(addError)
    }
  }, [
    preloadedValues,
    updateIsSuccess,
    addIsSuccess,
    updateIsError,
    addIsError,
  ])

  const onSubmit = async data => {
    if(isEdit){
      updateCategory({lng,id,...data})
    } else {
      addCategory({lng,...data})
    }
  }

  return (
  <form onSubmit={handleSubmit(onSubmit)} >
    <div className="mb-3">
      <label className="form-label" >Name</label>
        <input
          type="text"
          className="form-control"
          {...register('name',{
            required: true,
          })}
          aria-describedby="validationName"
        />
    </div>
    <div className="mb-3">
      <div className="form-check">
        <input
          className="form-check-input"
          type="checkbox"
          id="flexCheckDefault"
          {...register('in_menu',{})} />
          <label className="form-check-label" htmlFor="flexCheckDefault">
              In menu
          </label>
      </div>
    </div>
    {/*<button type="submit" className="btn btn-success">Save</button>*/}
    <input type="submit" value={'Save'} className="btn btn-sm btn-success text-white"/>
  </form>
)
}

export default CategoryForm
