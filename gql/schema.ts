export const typeDefs = `#graphql
type Character{
    id:ID!
    name:String!
    status:String!
    species:String!
    type:String!
    gender:String!
    #origin:origin!
    #location:location!
    image:String!
    #episode:array!
    url:String!
    created:String!


}
type  Query {

   character(id: ID!): Character

   

}

`;
