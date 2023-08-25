import React, { useEffect, useState } from "react"
import { TextStyle, TouchableOpacityProps, View, ViewStyle, ActivityIndicator } from "react-native"
import { colors, spacing } from "../theme"
import { Text, TextProps } from "./Text"

interface LoadingProps extends TouchableOpacityProps {
  tx?: TextProps["tx"]
  size?: "small" | "large"
  visible?: boolean
}

export function Loading(props: LoadingProps) {
  const { tx = "common.loading", size = "large", visible } = props
  const [loadingVisible, setLoadingVisible] = useState(visible)

  useEffect(() => {
    setLoadingVisible(visible)
  }, [visible])

  if (!loadingVisible) {
    return null
  }

  return (
    <View style={$centeredView}>
      <ActivityIndicator size={size} />
      {size !== "small" && <Text style={$modalText} size="sm" tx={tx} />}
    </View>
  )
}

const $centeredView: ViewStyle = {
  position: "absolute",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: colors.semitransparent,
}

const $modalText: TextStyle = {
  marginBottom: spacing.md,
  textAlign: "center",
}
