import React from "react"
import { DebugScreen } from "../../../app/screens"
import { NavigationDecorator } from "../../decorators"
import { storiesOf } from "@storybook/react-native"

storiesOf("Screens/DebugScreen", module)
  .addDecorator(NavigationDecorator)
  .add("Default", () => <DebugScreen />)
