import React from "react"
import { RegisterScreen } from "../../../app/screens"
import { NavigationDecorator } from "../../decorators/"
import { storiesOf } from "@storybook/react-native"

storiesOf("Screens/RegisterScreen", module)
  .addDecorator(NavigationDecorator)
  .add("Default", () => <RegisterScreen />)
