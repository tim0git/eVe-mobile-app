import React from "react"
import { Alert } from "../../../app/components"
import { storiesOf } from "@storybook/react-native"

const actionButton = () => {
  console.log("Action pressed")
}

const onRequestClose = () => {
  console.log("Request Closed")
}

const defaultProps = {
  tx: "searchScreen.locationDisabledErrorTitle",
  descriptionTx: "searchScreen.locationDisabledErrorDescription",
  buttonTx: "searchScreen.locationDisabledErrorButton",
  onButtonPress: actionButton,
  onRequestClose: onRequestClose,
  visible: true,
}

storiesOf("Components/Alert", module)
  .add("Default", () => <Alert {...defaultProps} />)
  .add("Small", () => <Alert tx="Hello" {...defaultProps} size="small" />)
  .add("Medium", () => <Alert tx="Hello" {...defaultProps} size="medium" />)
  .add("Large", () => <Alert tx="Hello" {...defaultProps} size="large" />)
