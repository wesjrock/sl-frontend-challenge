import type { PreloadedQuery } from "react-relay";
import type { usersRelayQuery } from "queries/__generated__/usersRelayQuery.graphql";

export type Props = {
  preloadedQuery: PreloadedQuery<usersRelayQuery>;
};

export default Props;