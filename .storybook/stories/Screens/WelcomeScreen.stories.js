import React from "react"
import { WelcomeScreen } from "../../../app/screens"
import { NavigationDecorator } from "../../decorators/"
import { storiesOf } from "@storybook/react-native"

storiesOf("Screens/WelcomeScreen", module)
  .addDecorator(NavigationDecorator)
  .add("Default", () => <WelcomeScreen />)
