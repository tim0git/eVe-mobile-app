import React from "react"
import { ModalWrapper } from "../../../app/components"
import { storiesOf } from "@storybook/react-native"
import { Alert } from "react-native"

const actionButton = () => {
  Alert.alert("Button Pressed")
}

const onRequestClose = () => {
  Alert.alert("Modal Closed")
}

const defaultProps = {
  tx: "Alert",
  buttonTx: "Press Me",
  descriptionTx: "You need to enable location services to use this feature.",
  onButtonPress: actionButton,
  onRequestClose: onRequestClose,
  visible: true,
}

storiesOf("Components/ModalWrapper", module)
  .add("Default", () => <ModalWrapper {...defaultProps} />)
  .add("Small", () => <ModalWrapper tx="Hello" {...defaultProps} size="small" />)
  .add("Medium", () => <ModalWrapper tx="Hello" {...defaultProps} size="medium" />)
  .add("Large", () => <ModalWrapper tx="Hello" {...defaultProps} size="large" />)
