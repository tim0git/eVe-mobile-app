import React from "react"
import { SearchScreen } from "../../../app/screens"
import { NavigationDecorator } from "../../decorators"
import { storiesOf } from "@storybook/react-native"
import ApolloDecorator from "../../decorators/ApolloProvider"
import { GET_LOCATIONS_MOCK } from "../../../app/services/graphql"

storiesOf("Screens/SearchScreen", module)
  .addDecorator(NavigationDecorator)
  .addDecorator(ApolloDecorator({ mocks: GET_LOCATIONS_MOCK }))
  .add("Default", () => <SearchScreen />)
