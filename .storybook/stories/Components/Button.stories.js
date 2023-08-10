import React from "react"
import { Button } from "../../../app/components"
import { NavigationDecorator } from "../../decorators"
import { storiesOf } from "@storybook/react-native"

storiesOf("Components/Button", module).add("Default", () => <Button />)
