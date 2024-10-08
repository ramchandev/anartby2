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
  slug
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
    slug
  }
  price
  salePrice
  
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
  shotDesc
  description
  sku
  slug
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
  salePrice
  specs
    {
      name
      value
    }
      faq
    {
      question
      answer
    }
}
}`
const result = await request(MASTER_URL, query)
return result
}

const getFeaturedPro =async()=>{
  const query = gql `
   query getproducts {
  products(where: {featured: true}) {
    id
    name
    shotDesc
    description
    sku
    slug
    tag {
      id
      tagName
    }
    images {
      url
    }
      categories
  {
    name
    slug
  }
    price
    salePrice
    specs
    {
      name
      value
    }
      faq
    {
      question
      answer
    }
  }
}`
const result = await request(MASTER_URL, query)
return result
}

const querySingleCat =async(category)=>{
  const query = gql `
   query getsinglecat {
  categories(where: {slug: "`+category+`"}) {
    id
    name
    description
    catImage
    {
      url
    }
  }
  
}`
const result = await request(MASTER_URL, query)
return result
}

const querySingleproduct =async(productslug)=>{
  const query = gql `
   query getsingleproduct {
  products(where: {slug: "`+productslug+`"}) {
    id
    name
    shotDesc
    description
    sku
    slug
    tag {
      id
      tagName
    }
    images {
      url
    }
    categories {
      name
      slug
    }
    price
    salePrice
    specs
    {
      name
      value
    }
      faq
    {
      question
      answer
    }
  }
}`
const result = await request(MASTER_URL, query)
return result
}

/****Query 1: to get slides Starts */
const savecomments = async () => {
  const mutation = gql`
 mutation addreviews {
  createReview(
    data: {headline: "Nice Products", name: "ram", email: "ramchandev@gmail.com", content: "Good Product", product: {connect: {sku: "CA-VVG-003"}}, rating: 5}
  ) {
    id
  }
     publishManyReviews(to: PUBLISHED) {
    count
  }
 
}
  `;
  const result = await request(MASTER_URL, mutation);
  return result;
};
/****Query 1: to get slides Starts */


export default {
    getCategory,
    getFeaturedProducts,
    getPaintingByartist,
    getFeaturedPro,
    querySingleCat,
    querySingleproduct,
    savecomments
}