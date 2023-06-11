import React, { FC, useEffect, useMemo, useRef, useState } from "react"
import { observer } from "mobx-react-lite"
import { TextInput, TextStyle, View, ViewStyle } from "react-native"
import { NativeStackScreenProps } from "@react-navigation/native-stack"
import { AppStackScreenProps } from "app/navigators"
import { Button, Icon, Text, TextField, TextFieldAccessoryProps } from "app/components"
import { colors, spacing } from "../theme"
import { useSafeAreaInsetsStyle } from "../utils/useSafeAreaInsetsStyle"
import { useNavigation } from "@react-navigation/native"
import { useHeader } from "../utils/useHeader"
import { useStores } from "../models"

interface RegisterScreenProps extends NativeStackScreenProps<AppStackScreenProps<"Register">> {}

export const RegisterScreen: FC<RegisterScreenProps> = observer(function RegisterScreen(_props) {
  const $bottomContainerInsets = useSafeAreaInsetsStyle(["bottom"])
  const { navigation } = _props
  const authPasswordInput = useRef<TextInput>()
  const [authPassword, setAuthPassword] = useState("")
  const [isAuthPasswordHidden, setIsAuthPasswordHidden] = useState(true)
  const {
    authenticationStore: { authEmail, setAuthEmail, setAuthToken, validationError },
    registrationStore: { setRegistrationComplete },
  } = useStores()
  const [isSubmitted, setIsSubmitted] = useState(false)
  const error = isSubmitted ? validationError : ""

  function goBack() {
    navigation.goBack()
  }

  useHeader({
    rightTx: "common.back",
    onRightPress: goBack,
  })

  useEffect(() => {
    return () => {
      setAuthPassword("")
      setAuthEmail("")
    }
  }, [])

  const PasswordRightAccessory = useMemo(
    () =>
      function PasswordRightAccessory(props: TextFieldAccessoryProps) {
        return (
          <Icon
            icon={isAuthPasswordHidden ? "view" : "hidden"}
            color={colors.palette.neutral800}
            containerStyle={props.style}
            size={20}
            onPress={() => setIsAuthPasswordHidden(!isAuthPasswordHidden)}
          />
        )
      },
    [isAuthPasswordHidden],
  )

  function signUp() {
    setIsSubmitted(true)

    if (validationError) return

    // Make a request to your server to get an authentication token.
    // If successful, reset the fields and set the token.
    setIsSubmitted(false)
    setAuthPassword("")
    setAuthEmail("")

    // We'll mock this with a fake token.
    setAuthToken(String(Date.now()))

    setRegistrationComplete(true)
  }

  return (
    <View style={$container}>
      <View style={$topContainer}>
        <Text testID="signUp-heading" style={$signUpHeading} tx="signUp.heading" preset="heading" />
      </View>

      <View style={[$bottomContainer, $bottomContainerInsets]}>
        <View style={$inputContainer}>
          <TextField
            value={authEmail}
            onChangeText={setAuthEmail}
            containerStyle={$textField}
            autoCapitalize="none"
            autoComplete="email"
            autoCorrect={false}
            keyboardType="email-address"
            labelTx="loginScreen.emailFieldLabel"
            placeholderTx="loginScreen.emailFieldPlaceholder"
            helper={error}
            status={error ? "error" : undefined}
            onSubmitEditing={() => authPasswordInput.current?.focus()}
          />

          <TextField
            ref={authPasswordInput}
            value={authPassword}
            onChangeText={setAuthPassword}
            containerStyle={$textField}
            autoCapitalize="none"
            autoComplete="password"
            autoCorrect={false}
            secureTextEntry={isAuthPasswordHidden}
            labelTx="loginScreen.passwordFieldLabel"
            placeholderTx="loginScreen.passwordFieldPlaceholder"
            onSubmitEditing={signUp}
            RightAccessory={PasswordRightAccessory}
          />
        </View>
        <View style={$submitButtonContainer}>
          <Button testID="login-button" tx="signUp.register" style={$tapButton} preset="reversed" onPress={signUp} />
        </View>
      </View>
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
  justifyContent: "space-between",
}

const $inputContainer: ViewStyle = {
  flex: 1 / 2,
  justifyContent: "space-around",
}

const $submitButtonContainer: ViewStyle = {
  justifyContent: "flex-end",
  marginBottom: spacing.lg,
}

const $signUpHeading: TextStyle = {
  marginBottom: spacing.md,
}

const $textField: ViewStyle = {
  marginBottom: spacing.lg,
}

const $tapButton: ViewStyle = {
  marginTop: spacing.xs,
}
