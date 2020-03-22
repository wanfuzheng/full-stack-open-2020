import { gql } from "@apollo/client";

// SERVER QUERIES
export const GET_ALL_AUTHORS = gql`
  query getAllAuthors {
    allAuthors {
      name
      born
      bookCount
      id
    }
  }
`;

export const GET_ALL_BOOKS = gql`
  query getAllBooks($author: String, $genre: String) {
    allBooks(author: $author, genre: $genre) {
      title
      author
      published
      genres
      id
    }
  }
`;

export const CREATE_BOOK = gql`
  mutation createBook(
    $title: String!
    $author: String!
    $published: Int!
    $genres: [String!]!
  ) {
    addBook(
      title: $title
      author: $author
      published: $published
      genres: $genres
    ) {
      title
      author
      published
      genres
      id
    }
  }
`;

export const EDIT_AUTHOR = gql`
  mutation editAuthor($name: String!, $setBornTo: Int!) {
    editAuthor(name: $name, setBornTo: $setBornTo) {
      name
      born
      bookCount
      id
    }
  }
`;

// CLIENT QUERIES
export const ALL_NOTIFICATIONS = gql`
  query allNotifications {
    allNotifications @client
  }
`;

export const ADD_NOTIFICATION = gql`
  mutation addNotification($message: String!, $timeout: Int, $level: String) {
    addNotification(message: $message, timeout: $timeout, level: $level) @client
  }
`;

export const REMOVE_NOTIFICATION = gql`
  mutation removeNotification($id: ID!) {
    removeNotification(id: $id) @client
  }
`;