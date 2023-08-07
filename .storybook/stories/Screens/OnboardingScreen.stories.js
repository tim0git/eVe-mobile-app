import React from "react"
import { OnboardingScreen } from "../../../app/screens"
import { NavigationDecorator } from "../../decorators/"
import { storiesOf } from "@storybook/react-native"

storiesOf("Screens/OnboardingScreen", module)
  .addDecorator(NavigationDecorator)
  .add("Default", () => <OnboardingScreen />)
