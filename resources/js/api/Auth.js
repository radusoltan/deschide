

const Auth = {
    login: data=>axios.post('login',data),
    checkAuth: ()=>axios.get('check-auth',{headers:{Authorization:'Bearer '+ cookies.get('access_token')}}),
    logout: ()=>axios.post('logout',{},{headers:{Authorization:'Bearer '+ cookies.get('access_token')}})
}

export default Auth
