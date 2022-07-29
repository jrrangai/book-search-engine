import { gql } from "@apollo/client/core";

export const QUERY_MINE = gql`
  {
    mine {
      _id
      username
      email
      savedBooks {
        bookId
        authors
        image
        description
        title
        link
      }
    }
  }
`;
