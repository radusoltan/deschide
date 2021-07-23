

const Auth = {
    login: data=>axios.post('login',data),
    checkAuth: ()=>axios.get('check-auth',{headers:{Authorization:'Bearer '+localStorage.getItem('token')}}),
    logout: ()=>axios.post('logout',{},{headers:{Authorization:'Bearer '+localStorage.getItem('token')}})
}

export default Auth
