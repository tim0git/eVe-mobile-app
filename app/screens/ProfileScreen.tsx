import React, { FC } from "react"
import { TextStyle, View, ViewStyle } from "react-native"
import { Screen, Text } from "../components"
import { HomeTabScreenProps } from "../navigators/HomeNavigator"
import { spacing } from "../theme"
import { useStores } from "../models"
import { useQuery } from "@apollo/client"
import { GET_PROFILE } from "../services/graphql"

export const ProfileScreen: FC<HomeTabScreenProps<"Profile">> = function ProfileScreen(_props) {
  const {
    authenticationStore: { authEmail },
  } = useStores()

  const { loading, error, data } = useQuery(GET_PROFILE, {
    variables: { id: "1" },
  })

  if (loading) {
    console.log("loading")
  }

  if (error) {
    console.log(`Error! ${error.message}`)
  }

  if (data) {
    console.log(data)
  }

  return (
    <Screen preset="scroll" contentContainerStyle={$container} safeAreaEdges={["top"]}>
      <Text preset="heading" tx="profileScreen.settingsSubheading" style={$title} />
      <Text tx="profileScreen.settingsDescription" style={$description} />
      <View style={$settingsToggleContainer}>
        <Text tx="profileScreen.userName" />
        <Text text={authEmail} />
      </View>
    </Screen>
  )
}

const $container: ViewStyle = {
  paddingTop: spacing.sm,
  paddingHorizontal: spacing.lg,
}

const $title: TextStyle = {
  marginBottom: spacing.sm,
}

const $description: TextStyle = {
  marginBottom: spacing.lg,
}

const $settingsToggleContainer: ViewStyle = {
  flexDirection: "row",
  justifyContent: "space-between",
}
