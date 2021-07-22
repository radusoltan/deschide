import axios from 'axios'

const Auth = {
    login: data=>axios.post('api/login',data),
    checkAuth: ()=>axios.get('api/check-auth',{headers:{Authorization:'Bearer '+localStorage.getItem('token')}}),
    logout: ()=>axios.post('api/logout',{},{headers:{Authorization:'Bearer '+localStorage.getItem('token')}})
}

export default Auth
