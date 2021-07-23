

const User = {
    all: (page=1)=>axios.get('user?page='+page,{headers:{Authorization: 'Bearer '+ cookies.get('access_token')}})
}

export default User
