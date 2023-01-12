import { gql } from "@apollo/client";

export const CREATE_USER = gql`
  mutation createUser(
    $name: String!
    $email: String!
    $contact: String!
    $age: Int!
  ) {
    createUser(name: $name, email: $email, contact: $contact, age: $age)
  }
`;
