import React from "react"
import { SearchScreen } from "../../../app/screens"
import { NavigationDecorator } from "../../decorators"
import { storiesOf } from "@storybook/react-native"
import ApolloDecorator from "../../decorators/StoryApolloProvider"
import { GET_LOCATIONS } from "../../../app/services/graphql/queries/location"

const mocks = [
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

storiesOf("Screens/SearchScreen", module)
  .addDecorator(NavigationDecorator)
  .addDecorator(ApolloDecorator({ mocks: mocks }))
  .add("Default", () => <SearchScreen />)
