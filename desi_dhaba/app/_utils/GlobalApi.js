const { gql, default: request } = require("graphql-request");

const MASTER_URL=process.env.NEXT_PUBLIC_BACKEND_API_URL;

const GetCategory=async()=>{
    const query =gql`
    query Categories {
        categories(first: 50) {
          id
          name
          slug
          icon {
            url
          }
        }
      }
      
    `

    const result=await request(MASTER_URL,query);
    return result;
}

export default{
    GetCategory
}