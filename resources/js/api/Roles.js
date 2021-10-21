const headers = {headers:{Authorization: 'Bearer '+ cookies.get('access_token')}}
const Role = {
  all: (page=1)=>axios.get(`role?page=${page}`,headers),
  get: role=>axios.get(`role/${role}`,headers),
  add: data => axios.post('role',data,headers),
  update: (role,data)=>axios.patch(`role/${role}/update`,data,headers),
  delete: role=>axios.post(`role/${role}/delete`,{headers:{Authorization: 'Bearer '+ cookies.get('access_token')}})
}

export default Role
