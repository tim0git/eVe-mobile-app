import React from "react"
import { SearchScreen } from "../../../app/screens"
import { NavigationDecorator } from "../../decorators"
import { storiesOf } from "@storybook/react-native"

storiesOf("Screens/SearchScreen", module)
  .addDecorator(NavigationDecorator)
  .add("Default", () => <SearchScreen />)
