import React from "react"
import { FavouritesScreen } from "../../../app/screens"
import { NavigationDecorator } from "../../decorators"
import { storiesOf } from "@storybook/react-native"

storiesOf("Screens/FavouritesScreen", module)
  .addDecorator(NavigationDecorator)
  .add("Default", () => <FavouritesScreen />)
