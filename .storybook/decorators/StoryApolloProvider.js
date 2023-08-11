import React from "react"
import { MockedProvider } from "@apollo/client/testing"

export default function ApolloDecorator({ mocks }) {
  return (story) => {
    return (
      <MockedProvider mocks={mocks} addTypename={false}>
        {story()}
      </MockedProvider>
    )
  }
}
