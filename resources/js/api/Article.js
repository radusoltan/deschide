const lang = cookies.get('i18next')
const headers = {headers:{Authorization: 'Bearer '+ cookies.get('access_token')}}

const Article = {
  get: article=>axios.get(`article/${article}?lang=${lang}`,headers),
  update: (article,data)=>axios.patch(`article/{article}/update?lang=${lang}`,data,headers),
  create: data=>axios.post(`article?lang=${lang}`,data,headers),
  delete: article=>axios.delete(`article/${article}/delete`,headers)
}

export default Article
