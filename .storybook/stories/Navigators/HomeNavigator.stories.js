import React from "react"
import { HomeNavigator } from "../../../app/navigators/HomeNavigator"
import { NavigationDecorator } from "../../decorators"
import { storiesOf } from "@storybook/react-native"
import ApolloDecorator from "../../decorators/ApolloProvider"
import { GET_LOCATIONS, GET_LOCATIONS_MOCK } from "../../../app/services/graphql/queries/location"

storiesOf("Navigators/HomeNavigator", module)
  .addDecorator(NavigationDecorator)
  .addDecorator(ApolloDecorator({ mocks: GET_LOCATIONS_MOCK }))
  .add("Default", () => <HomeNavigator />)
