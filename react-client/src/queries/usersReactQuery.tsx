import gql from "graphql-tag";

const GET_USERS_REACT_QUERY = gql`
  query {
    users {
      id
      name
      email
      phone
      password
      avatar
    }
  }
`;

export default GET_USERS_REACT_QUERY;