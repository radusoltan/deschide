import React, {useEffect} from "react"
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import {authUser, userSelector, clearState} from '../slices/AuthSlice'
import {toast} from "react-hot-toast";
const Login = ()=>{
    // const em = ''
    const dispatch = useDispatch()
    const history = useHistory()

    const { isFetching, isSuccess, isError, errorMessage, authErrors, isAuthenticated } = useSelector(
        userSelector
    )
    const onSubmit = data => dispatch(authUser(data))

    useEffect(()=>{
        dispatch(clearState())
    },[])

    useEffect(()=>{
        if (isError){
            toast.error(errorMessage)
        }
        if (localStorage.getItem('token')){
            history.push('/admin',{from: history.location.pathname})
        }else {
            history.push('/login',{from: history.location.pathname})
        }
    },[isError, isSuccess, isAuthenticated])

    const {
        register,
        handleSubmit,
    } = useForm()

    return <div className="container-fluid">
        <div className="col-6 offset-3">
            <div className="card">
                <div className="card-body">
                    <form id="login-form" onSubmit={handleSubmit(onSubmit)} className="row g-3 needs-validation" noValidate>
                        <div className="mb-3">
                            <label className="form-label">Email:</label>
                            <input type="email" {...register("email")} className="form-control" />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Password</label>
                            <input type="password" {...register("password")} className="form-control" />
                        </div>
                        <button className="btn btn-primary text-white" type="submit">Login</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
}
export default Login
