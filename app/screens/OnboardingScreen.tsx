import React, { FC } from "react"
import { observer } from "mobx-react-lite"
import { TextStyle, View, ViewStyle } from "react-native"
import { NativeStackScreenProps } from "@react-navigation/native-stack"
import { AppStackScreenProps } from "app/navigators"
import { Text } from "app/components"
import { colors, spacing } from "../theme"
import { useSafeAreaInsetsStyle } from "../utils/useSafeAreaInsetsStyle"
import { useHeader } from "../utils/useHeader"
import { useStores } from "../models"
interface OnboardingScreenProps extends NativeStackScreenProps<AppStackScreenProps<"Onboarding">> {}
export const OnboardingScreen: FC<OnboardingScreenProps> = observer(function OnboardingScreen(
  _props,
) {
  const $bottomContainerInsets = useSafeAreaInsetsStyle(["bottom"])
  const { navigation } = _props
  const {
    onboardingStore: { setOnboardingComplete },
  } = useStores()
  function skip() {
    setOnboardingComplete(true)
    // @ts-ignore
    navigation.navigate("Register")
  }

  useHeader({
    rightTx: "common.skip",
    onRightPress: skip,
  })

  return (
    <View style={$container}>
      <View style={$topContainer}>
        <Text
          testID="welcome-heading"
          style={$welcomeHeading}
          tx="onboardingScreen.heading"
          preset="heading"
        />
      </View>

      <View style={[$bottomContainer, $bottomContainerInsets]} />
    </View>
  )
})

const $container: ViewStyle = {
  flex: 1,
  backgroundColor: colors.background,
}

const $topContainer: ViewStyle = {
  flexShrink: 1,
  flexGrow: 1,
  flexBasis: "10%",
  justifyContent: "center",
  paddingHorizontal: spacing.lg,
}

const $bottomContainer: ViewStyle = {
  flexShrink: 1,
  flexGrow: 0,
  flexBasis: "90%",
  backgroundColor: colors.palette.neutral100,
  borderTopLeftRadius: 16,
  borderTopRightRadius: 16,
  paddingHorizontal: spacing.lg,
  justifyContent: "space-around",
}

const $welcomeHeading: TextStyle = {
  marginBottom: spacing.xs,
}
