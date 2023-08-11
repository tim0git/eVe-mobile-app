import React from "react"
import { HomeNavigator } from "../../../app/navigators/HomeNavigator"
import { NavigationDecorator } from "../../decorators"
import { storiesOf } from "@storybook/react-native"
import ApolloDecorator from "../../decorators/ApolloProvider"
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
storiesOf("Navigators/HomeNavigator", module)
  .addDecorator(NavigationDecorator)
  .addDecorator(ApolloDecorator({ mocks: mocks }))
  .add("Default", () => <HomeNavigator />)
