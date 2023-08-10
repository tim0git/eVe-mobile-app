import React, { FC, useState } from "react"
import { Image, ImageStyle, TextStyle, View, ViewStyle } from "react-native"
import { ListItem, Screen, Text, Toggle } from "../components"
import { HomeTabScreenProps } from "../navigators/HomeNavigator"
import { spacing } from "../theme"
import { openLinkInBrowser } from "../utils/openLinkInBrowser"
import { isRTL } from "../i18n"
import { useStores } from "../models"

const reactNativeRadioLogo = require("../../assets/images/rnr-logo.png")

export const ProfileScreen: FC<HomeTabScreenProps<"Profile">> = function ProfileScreen(_props) {
  const {
    authenticationStore: { authEmail },
  } = useStores()

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

const $sectionTitle: TextStyle = {
  marginTop: spacing.xxl,
}

const $logoContainer: ViewStyle = {
  marginEnd: spacing.md,
  flexDirection: "row",
  flexWrap: "wrap",
  alignContent: "center",
}

const $logo: ImageStyle = {
  height: 38,
  width: 38,
}

const $settingsToggleContainer: ViewStyle = {
  flexDirection: "row",
  justifyContent: "space-between",
}
