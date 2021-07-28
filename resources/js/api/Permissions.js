const headers = {headers:{Authorization: 'Bearer '+ cookies.get('access_token')}}
const Permissions = {
  all: (page=1)=>axios.get(`permissions?page=${page}`,headers),
  get: permission=>axios.get(`'permission/${permission}`,headers),
  add: data=> axios.post('permission',data,headers),
  update: (permission, data)=>axios.post(`permission/${permission}`,data,headers),
  delete: permission=>axios.post(`permission/${permission}/delete`,{},headers)
}

export default Permissions
