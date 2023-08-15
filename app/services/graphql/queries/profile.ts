import { gql } from "@apollo/client"

export const GET_PROFILE = gql`
  query GetProfile($id: ID!) {
    profile(id: $id) {
      id
      firstName
      lastName
      email
      phone
    }
  }
`

export const GET_PROFILE_MOCK = [
  {
    request: {
      query: GET_PROFILE,
      variables: {
        id: "1",
      },
    },
    result: {
      data: {
        profile: {
          id: "1",
          firstName: "John",
          lastName: "Doe",
          email: "John.Doe@mail.com",
          phone: "1234567890",
        },
      },
    },
  },
]
