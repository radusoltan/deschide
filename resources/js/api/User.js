const headers = {headers:{Authorization: 'Bearer '+ cookies.get('access_token')}}

const User = {
    all: (page=1)=>axios.get(`user?page=${page}`),
    get: user => axios.get(`user/${user}`,headers),
    add: data => axios.post('user/add',data,headers),
    update: (user,data) => axios.patch(`user/${user}/update`, data,headers),
    delete: user => axios.delete(`user/${user}/delete`,headers)
}

export default User
