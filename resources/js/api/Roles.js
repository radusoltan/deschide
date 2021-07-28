const Role = {
  all: (page=1)=>axios.get('role?page='+page,{headers:{Authorization: 'Bearer '+ cookies.get('access_token')}})
}

export default Role
