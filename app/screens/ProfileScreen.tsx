import React, { FC } from "react"
import { Image, ImageStyle, TextStyle, View, ViewStyle } from "react-native"
import { ListItem, Screen, Text } from "../components"
import { HomeTabScreenProps } from "../navigators/HomeNavigator"
import { spacing } from "../theme"
import { openLinkInBrowser } from "../utils/openLinkInBrowser"
import { isRTL } from "../i18n"

const chainReactLogo = require("../../assets/images/cr-logo.png")
const reactNativeLiveLogo = require("../../assets/images/rnl-logo.png")
const reactNativeRadioLogo = require("../../assets/images/rnr-logo.png")
const reactNativeNewsletterLogo = require("../../assets/images/rnn-logo.png")

export const ProfileScreen: FC<HomeTabScreenProps<"Profile">> = function ProfileScreen(_props) {
  return (
    <Screen preset="scroll" contentContainerStyle={$container} safeAreaEdges={["top"]}>
      <Text preset="heading" tx="profileScreen.title" style={$title} />
      <Text tx="profileScreen.tagLine" style={$tagline} />

      <Text preset="subheading" tx="profileScreen.joinUsOnSlackTitle" />
      <Text tx="profileScreen.joinUsOnSlack" style={$description} />
      <ListItem
        tx="profileScreen.joinSlackLink"
        leftIcon="slack"
        rightIcon={isRTL ? "caretLeft" : "caretRight"}
        onPress={() => openLinkInBrowser("https://community.infinite.red/")}
      />
      <Text
        preset="subheading"
        tx="profileScreen.makeIgniteEvenBetterTitle"
        style={$sectionTitle}
      />
      <Text tx="profileScreen.makeIgniteEvenBetter" style={$description} />
      <ListItem
        tx="profileScreen.contributeToIgniteLink"
        leftIcon="github"
        rightIcon={isRTL ? "caretLeft" : "caretRight"}
        onPress={() => openLinkInBrowser("https://github.com/infinitered/ignite")}
      />

      <Text
        preset="subheading"
        tx="profileScreen.theLatestInReactNativeTitle"
        style={$sectionTitle}
      />
      <Text tx="profileScreen.theLatestInReactNative" style={$description} />
      <ListItem
        tx="profileScreen.reactNativeRadioLink"
        bottomSeparator
        rightIcon={isRTL ? "caretLeft" : "caretRight"}
        LeftComponent={
          <View style={$logoContainer}>
            <Image source={reactNativeRadioLogo} style={$logo} />
          </View>
        }
        onPress={() => openLinkInBrowser("https://reactnativeradio.com/")}
      />
      <ListItem
        tx="profileScreen.reactNativeNewsletterLink"
        bottomSeparator
        rightIcon={isRTL ? "caretLeft" : "caretRight"}
        LeftComponent={
          <View style={$logoContainer}>
            <Image source={reactNativeNewsletterLogo} style={$logo} />
          </View>
        }
        onPress={() => openLinkInBrowser("https://reactnativenewsletter.com/")}
      />
      <ListItem
        tx="profileScreen.reactNativeLiveLink"
        bottomSeparator
        rightIcon={isRTL ? "caretLeft" : "caretRight"}
        LeftComponent={
          <View style={$logoContainer}>
            <Image source={reactNativeLiveLogo} style={$logo} />
          </View>
        }
        onPress={() => openLinkInBrowser("https://rn.live/")}
      />
      <ListItem
        tx="profileScreen.chainReactConferenceLink"
        rightIcon={isRTL ? "caretLeft" : "caretRight"}
        LeftComponent={
          <View style={$logoContainer}>
            <Image source={chainReactLogo} style={$logo} />
          </View>
        }
        onPress={() => openLinkInBrowser("https://cr.infinite.red/")}
      />
      <Text preset="subheading" tx="profileScreen.hireUsTitle" style={$sectionTitle} />
      <Text tx="profileScreen.hireUs" style={$description} />
      <ListItem
        tx="profileScreen.hireUsLink"
        leftIcon="clap"
        rightIcon={isRTL ? "caretLeft" : "caretRight"}
        onPress={() => openLinkInBrowser("https://infinite.red/contact")}
      />
    </Screen>
  )
}

const $container: ViewStyle = {
  paddingTop: spacing.lg + spacing.xl,
  paddingHorizontal: spacing.lg,
}

const $title: TextStyle = {
  marginBottom: spacing.sm,
}

const $tagline: TextStyle = {
  marginBottom: spacing.xxl,
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
