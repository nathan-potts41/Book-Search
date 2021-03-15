import gql from 'graphql-tag';

export const QUERY_ME = gql`
{
    me {
        _id
        username
        email
        bookCount
        savedBooks {
            author
            bookId
            description
            title
            image
            link
        }
    }
}
`;