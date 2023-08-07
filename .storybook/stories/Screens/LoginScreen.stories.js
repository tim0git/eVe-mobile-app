import React from "react"
import { LoginScreen } from "../../../app/screens"
import { NavigationDecorator } from "../../decorators/"
import { storiesOf } from "@storybook/react-native"

storiesOf("Screens/LoginScreen", module)
  .addDecorator(NavigationDecorator)
  .add("Default", () => <LoginScreen />)
