import React from "react"
import { AppNavigator } from "../../../app/navigators"
import { storiesOf } from "@storybook/react-native"

storiesOf("Navigators/AppNavigator", module).add("Default", () => <AppNavigator />)
