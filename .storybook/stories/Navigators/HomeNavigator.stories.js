import React from "react"
import { HomeNavigator } from "../../../app/navigators/HomeNavigator"
import { NavigationDecorator } from "../../decorators"
import { storiesOf } from "@storybook/react-native"
import ApolloDecorator from "../../decorators/ApolloProvider"
import { GET_LOCATIONS_MOCK_SUCCESS } from "../../../app/services/graphql"

storiesOf("Navigators/HomeNavigator", module)
  .addDecorator(NavigationDecorator)
  .addDecorator(ApolloDecorator({ mocks: GET_LOCATIONS_MOCK_SUCCESS }))
  .add("Default", () => <HomeNavigator />)
