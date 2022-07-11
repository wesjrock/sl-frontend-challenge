import graphql from "babel-plugin-relay/macro";

const GET_USERS_RELAY_QUERY = graphql`
  query usersRelayQuery {
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

export default GET_USERS_RELAY_QUERY;