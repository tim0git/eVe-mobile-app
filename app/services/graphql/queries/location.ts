import { gql } from "@apollo/client"
import { GraphQLError } from "graphql"

export const GET_LOCATIONS = gql`
  query GetLocations {
    locations {
      id
      uuid
      addressInfo {
        id
        title
        latitude
        longitude
      }
      description
    }
  }
`

export const GET_LOCATIONS_MOCK_SUCCESS = [
  {
    request: {
      query: GET_LOCATIONS,
    },

    result: {
      data: {
        locations: [
          {
            id: 110321,
            uuid: "4756B6F1-8F80-493C-8199-A859E938DE9D",
            addressInfo: {
              id: 110667,
              title: "APPLE",
              latitude: 37.3312206,
              longitude: -122.0292278,
            },
            description: "Two 7kW chargers",
          },
          {
            id: 110320,
            uuid: "82C00CBD-DD60-4113-9454-64809C38EE2E",
            addressInfo: {
              id: 110666,
              title: "APPLE",
              latitude: 37.329897,
              longitude: -122.033235,
            },
            description: "Two 7kW chargers",
          },
          {
            id: 123763,
            uuid: "8180BBB0-8FB1-4A94-BB1F-639672ACCFAD",
            addressInfo: {
              id: 124109,
              title: "APPLE",
              latitude: 37.329897,
              longitude: -122.033235,
            },
            description: "Two 7kW chargers",
          },
          {
            id: 222774,
            uuid: "B85B0125-9E4A-4284-9962-2E4D8D5F9E32",
            addressInfo: {
              id: 223157,
              title: "Vital",
              latitude: 37.332248,
              longitude: -122.036511,
            },
            description: "Three 7kW chargers",
          },
          {
            id: 96606,
            uuid: "D6911002-F5C8-4B64-9B27-21A7AEDF8555",
            addressInfo: {
              id: 96952,
              title: "The Markham",
              latitude: 37.33754,
              longitude: -122.038164,
            },
            description: "Three 7kW chargers",
          },
          {
            id: 123767,
            uuid: "192974AA-3469-4093-9B0A-2CB89232E329",
            addressInfo: {
              id: 124113,
              title: "The Markham",
              latitude: 37.33754,
              longitude: -122.038164,
            },
            description: "Three 7kW chargers",
          },
          {
            id: 140662,
            uuid: "3F3588F2-920F-47C6-906A-3964AECEDF2B",
            addressInfo: {
              id: 141014,
              title: "ESSEX",
              latitude: 37.3331249,
              longitude: -122.0216699,
            },
            description: "Two 7kW chargers",
          },
          {
            id: 170168,
            uuid: "6C4FE344-1FC1-4DD0-B3A9-79F271E1A913",
            addressInfo: {
              id: 170527,
              title: "Cupertino, Ca - Stevens Creek Boulevard Supercharger",
              latitude: 37.324798,
              longitude: -122.036974,
            },
            description: "Eight 120kW chargers",
          },
        ],
      },
    },
  },
]

export const GET_LOCATIONS_MOCK_NETWORK_ERROR = [
  {
    request: {
      query: GET_LOCATIONS,
    },

    error: new Error("A Network Error Occurred"),
  },
]

export const GET_LOCATIONS_MOCK_GRAPHQL_ERROR = [
  {
    request: {
      query: GET_LOCATIONS,
    },
    result: {
      errors: [new GraphQLError("A GraphQL Error Occurred")],
    },
  },
]

export const GET_LOCATIONS_MOCK_LOADING = [
  {
    // Use `delay` parameter to increase loading time
    delay: 1e21,
    request: {
      query: GET_LOCATIONS,
    },
    result: {
      data: {},
    },
  },
]

export const GET_LOCATIONS_MOCK_SUCCESS_NODATA = [
  {
    request: {
      query: GET_LOCATIONS,
    },

    result: {
      data: {
        locations: [],
      },
    },
  },
]
