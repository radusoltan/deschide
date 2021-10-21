import axios from "axios";

const headers = {headers:{Authorization: 'Bearer '+ cookies.get('access_token')}}
const Permissions = {
  allPaginated: (page=1)=>axios.get(`permission?page=${page}`,headers),
  get: permission=>axios.get(`'permission/${permission}`,headers),
  add: data=> axios.post('permission',data,headers),
  update: (permission, data)=>axios.post(`permission/${permission}`,data,headers),
  delete: permission=>axios.post(`permission/${permission}/delete`,{},headers),
  all: ()=>axios.get('permission/all',headers),
  getAllByRole: role=>axios.get(`permission/by-role/${role}`,headers)
}

export default Permissions
