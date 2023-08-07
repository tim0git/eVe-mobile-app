import React from "react"
import { ErrorBoundary } from "../../../app/screens"
import { NavigationDecorator } from "../../decorators"
import { storiesOf } from "@storybook/react-native"

storiesOf("Screens/ErrorBoundary", module)
  .addDecorator(NavigationDecorator)
  .add("Default", () => <ErrorBoundary />)
