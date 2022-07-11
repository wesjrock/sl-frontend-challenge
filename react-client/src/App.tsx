import React from "react";
import "./styles/App.css";

import {
  Avatar,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";

import { useGQLQuery } from "./hooks/useGQLQuery";
import UserProps from "./interfaces/UserProps";
import GET_USERS_REACT_QUERY from "./queries/usersReactQuery";
import GET_USERS_RELAY_QUERY from "./queries/usersRelayQuery";

import RelayEnvironment from "./relay/RelayEnvironment";
import {
  RelayEnvironmentProvider,
  loadQuery,
  usePreloadedQuery,
} from "react-relay/hooks";

import type { usersRelayQuery } from "./queries/__generated__/usersRelayQuery.graphql";
import type { PreloadedQuery } from "react-relay";

const { Suspense } = React;

export type Props = {
  preloadedQuery: PreloadedQuery<usersRelayQuery>;
};

const preloadedQuery = loadQuery(RelayEnvironment, GET_USERS_RELAY_QUERY, {
  /* query variables */
});

const App = (props: Props) => {
  // Fetching data and using Relay
  const dataRelay = usePreloadedQuery(GET_USERS_RELAY_QUERY, props.preloadedQuery);

  // Fetching data and using React-Query
  const { data, isLoading, error } = useGQLQuery(
    "users",
    GET_USERS_REACT_QUERY
  );
  console.log(data);

  if (isLoading) console.log("Loading ...");
  if (error) console.log("Error: " + error);

  return (
    <div className="userClass">
      {dataRelay.users.map((user: UserProps) => (
        <List
          key={user.id}
          sx={{
            width: "100%",
            maxWidth: 360,
            bgcolor: "background.paper",
            boxShadow: 1,
            borderRadius: 1,
            ":hover": {
              boxShadow: 6,
              bgcolor: "#EEEEEE",
            },
          }}
        >
          <ListItem>
            <ListItemAvatar>
              <Avatar alt={user.name} src={user.avatar} />
            </ListItemAvatar>

            <ListItemText
              primary={user.name}
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                    display="flex"
                  >
                    <span>email: {user.email}</span>
                    <span>phone: {user.phone}</span>
                  </Typography>
                </React.Fragment>
              }
            />
          </ListItem>
        </List>
      ))}
    </div>
  );
};

const AppRoot = () => {
  return (
    <RelayEnvironmentProvider environment={RelayEnvironment}>
      <Suspense fallback={"Loading..."}>
        <App preloadedQuery={preloadedQuery} />
      </Suspense>
    </RelayEnvironmentProvider>
  );
};

export default AppRoot;
