const lang = cookies.get('i18next')
const headers = {headers:{Authorization: 'Bearer '+ cookies.get('access_token')}}

const Category = {
  all: ()=>axios.get('category?lang='+lang,headers),
  categoryArticles: (category,page)=>axios.get(`category/${category}/articles?lang=${lang}&page=${page}`,headers)
}

export default Category
