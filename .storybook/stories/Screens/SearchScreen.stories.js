import React from "react"
import { SearchScreen } from "../../../app/screens"
import { NavigationDecorator } from "../../decorators"
import { storiesOf } from "@storybook/react-native"
import ApolloDecorator from "../../decorators/ApolloProvider"
import {
  GET_LOCATIONS_MOCK_GRAPHQL_ERROR,
  GET_LOCATIONS_MOCK_LOADING,
  GET_LOCATIONS_MOCK_NETWORK_ERROR,
  GET_LOCATIONS_MOCK_SUCCESS,
  GET_LOCATIONS_MOCK_SUCCESS_NODATA,
} from "../../../app/services/graphql"

storiesOf("Screens/SearchScreen", module)
  .addDecorator(NavigationDecorator)
  .addDecorator(ApolloDecorator({ mocks: GET_LOCATIONS_MOCK_SUCCESS }))
  .add("SuccessData", () => <SearchScreen />)

storiesOf("Screens/SearchScreen", module)
  .addDecorator(NavigationDecorator)
  .addDecorator(ApolloDecorator({ mocks: GET_LOCATIONS_MOCK_NETWORK_ERROR }))
  .add("NetworkError", () => <SearchScreen />)

storiesOf("Screens/SearchScreen", module)
  .addDecorator(NavigationDecorator)
  .addDecorator(ApolloDecorator({ mocks: GET_LOCATIONS_MOCK_GRAPHQL_ERROR }))
  .add("GraphQLError", () => <SearchScreen />)

storiesOf("Screens/SearchScreen", module)
  .addDecorator(NavigationDecorator)
  .addDecorator(ApolloDecorator({ mocks: GET_LOCATIONS_MOCK_LOADING }))
  .add("Loading", () => <SearchScreen />)

storiesOf("Screens/SearchScreen", module)
  .addDecorator(NavigationDecorator)
  .addDecorator(ApolloDecorator({ mocks: GET_LOCATIONS_MOCK_SUCCESS_NODATA }))
  .add("SuccessNoData", () => <SearchScreen />)
