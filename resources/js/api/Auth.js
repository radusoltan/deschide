const headers = {headers:{Authorization:'Bearer '+ cookies.get('access_token')}}

const Auth = {
    login: data=>axios.post('login',data),
    checkAuth: ()=>axios.get('check-auth',headers),
    logout: ()=>axios.post('logout',{},headers)
}

export default Auth
