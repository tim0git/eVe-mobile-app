import React from "react"
import { HomeNavigator } from "../../../app/navigators/HomeNavigator"
import { NavigationDecorator } from "../../decorators"
import { storiesOf } from "@storybook/react-native"

storiesOf("Navigators/HomeNavigator", module)
  .addDecorator(NavigationDecorator)
  .add("Default", () => <HomeNavigator />)
