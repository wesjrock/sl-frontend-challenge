import gql from "graphql-tag";
import { useGQLQuery } from "./useGQLQuery";

const GET_USERS = gql`
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

const App = () => {
  const { data, isLoading, error } = useGQLQuery("users", GET_USERS);
  console.log(data);

  if (isLoading) {
    return <div>Loading ...</div>;
  }
  if (error) {
    return <div>An error has occurred: {error}</div>;
  }

  return (
    <div>
      {data.users.map((user: any) => (
        <div key={user.id}>{user.name}</div>
      ))}
    </div>
  );
};

export default App;
