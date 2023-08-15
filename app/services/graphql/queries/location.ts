import { gql } from "@apollo/client"

export const GET_LOCATIONS = gql`
  query GetLocations {
    locations {
      id
    }
  }
`

export const GET_LOCATIONS_MOCK = [
  {
    request: {
      query: GET_LOCATIONS,
    },

    result: {
      data: {
        locations: [
          { id: "loc-1" },
          { id: "loc-2" },
          { id: "loc-3" },
          { id: "loc-4" },
          { id: "loc-5" },
          { id: "loc-6" },
          { id: "loc-7" },
          { id: "loc-8" },
          { id: "loc-9" },
          { id: "loc-10" },
        ],
      },
    },
  },
]
