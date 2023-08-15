import React from "react"
import { ProfileScreen } from "../../../app/screens"
import { NavigationDecorator } from "../../decorators"
import { storiesOf } from "@storybook/react-native"
import ApolloDecorator from "../../decorators/ApolloProvider"
import { GET_PROFILE_MOCK } from "../../../app/services/graphql"

storiesOf("Screens/ProfileScreen", module)
  .addDecorator(NavigationDecorator)
  .addDecorator(ApolloDecorator({ mocks: GET_PROFILE_MOCK }))
  .add("Default", () => <ProfileScreen />)
