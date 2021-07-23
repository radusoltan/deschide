

const User = {
    all: (page=1)=>axios.get('user?page='+page)
}

export default User
