const MASTER_URL = 'https://ap-south-1.cdn.hygraph.com/content/' + process.env.NEXT_PUBLIC_MASTER_URL_KEY + '/master'

import { gql, request } from 'graphql-request'

const getCategory = async() => {
    const query = gql `
    query getcat{
  categories
  {
    id
    name
    slug
    description
    catImage
    {
      url
    }
  }
}
  `
    const result = await request(MASTER_URL, query)
    return result
}

const getFeaturedProducts = async() => {
    const query = gql `
    query getproducts{
 products{
  id
  name
  description
  sku
  tag{
    tagName
  }
  images
  {
    url
  }
  categories
  {
    name
  }
  price
  
}
}
  `
    const result = await request(MASTER_URL, query)
    return result
}

const getPaintingByartist = async(category) => {
  const query = gql `
  query getproductsq{
 products (where: {categories_every:{slug:"`+category+`"}}){
  id
  name
  description
  sku
  tag{
    id
    tagName
  }
  images
  {
    url
  }
  categories
  {
    name
    slug
  }
  price
  
}
}`
const result = await request(MASTER_URL, query)
return result
}
export default {
    getCategory,
    getFeaturedProducts,
    getPaintingByartist
}