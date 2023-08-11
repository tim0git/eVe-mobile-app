import React, { Fragment } from "react"
import { MockedProvider } from "@apollo/client/testing"

export default function initializeApollo({ mocks }) {
  function StorybookProvider({ children }) {
    return (
      <MockedProvider mocks={mocks} addTypename={false}>
        <Fragment>{children}</Fragment>
      </MockedProvider>
    )
  }

  return (story) => {
    return <StorybookProvider>{story()}</StorybookProvider>
  }
}
