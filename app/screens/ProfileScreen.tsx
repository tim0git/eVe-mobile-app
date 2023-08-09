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
    locationStore: { isLocationEnabled, storeLocationEnabled },
  } = useStores()

  const [locationEnabled, setLocationEnabled] = useState(isLocationEnabled)
  const handleLocationToggle = () => {
    storeLocationEnabled(!locationEnabled)
    setLocationEnabled(!locationEnabled)
  }

  return (
    <Screen preset="scroll" contentContainerStyle={$container} safeAreaEdges={["top"]}>
      <Text preset="subheading" tx="profileScreen.settingsSubheading" style={$sectionTitle} />
      <Text tx="profileScreen.settingsDescription" style={$description} />
      <View style={$settingsToggleContainer}>
        <Text tx="profileScreen.locationToggle" />
        <Toggle variant="switch" value={locationEnabled} onValueChange={handleLocationToggle} />
      </View>

      <Text preset="subheading" tx="profileScreen.legalSubheading" style={$sectionTitle} />
      <Text tx="profileScreen.legalDescription" style={$description} />
      <ListItem
        tx="profileScreen.termsAndConditions"
        bottomSeparator
        rightIcon={isRTL ? "caretLeft" : "caretRight"}
        LeftComponent={
          <View style={$logoContainer}>
            <Image source={reactNativeRadioLogo} style={$logo} />
          </View>
        }
        onPress={() => openLinkInBrowser("https://reactnativeradio.com/")}
      />
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
