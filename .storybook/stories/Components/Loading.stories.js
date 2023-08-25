import React from "react"
import { Loading } from "../../../app/components"
import { storiesOf } from "@storybook/react-native"

const defaultProps = {
  tx: "common.loading",
  visible: true,
}

storiesOf("Components/Loading", module)
  .add("Default", () => <Loading {...defaultProps} />)
  .add("Small", () => <Loading {...defaultProps} size="small" />)
  .add("Large", () => <Loading {...defaultProps} size="large" />)
