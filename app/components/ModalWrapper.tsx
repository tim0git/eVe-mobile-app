import React, { useState } from "react"
import { TextStyle, TouchableOpacityProps, View, Pressable, Modal, ViewStyle } from "react-native"
import { colors, spacing } from "../theme"
import { Text, TextProps } from "./Text"
import { Button } from "./Button"

interface ModalProps extends TouchableOpacityProps {
  tx?: TextProps["text"]
  buttonTx?: TextProps["text"]
  descriptionTx?: TextProps["text"]
  size?: "small" | "medium" | "large"
  onButtonPress?: () => void
  visible?: boolean
}

export function ModalWrapper(props: ModalProps) {
  const { tx, buttonTx, descriptionTx, size = "medium", onButtonPress, visible = false } = props
  const [modalVisible, setModalVisible] = useState(visible)

  return (
    <Modal animationType="slide" transparent={true} visible={modalVisible}>
      <Pressable
        style={$centeredView}
        onPress={() => {
          setModalVisible(!modalVisible)
        }}
      >
        <View style={[$modalView, $modalViewSize[`${size}`]]}>
          <Text style={$modalText} text={tx} preset="bold" size="sm" />
          {descriptionTx && (
            <Text text={descriptionTx} preset="formHelper" style={$modalText} size="xxs" />
          )}
          <Button style={$buttonAction} onPress={onButtonPress} text={buttonTx} preset="reversed" />
        </View>
      </Pressable>
    </Modal>
  )
}

const $centeredView: ViewStyle = {
  flex: 1,
  justifyContent: "center",
  alignItems: "center",
}

const $modalView: ViewStyle = {
  backgroundColor: colors.background,
  borderRadius: 20,
  alignItems: "center",
  shadowColor: "#000",
  shadowOffset: {
    width: 0,
    height: 2,
  },
  shadowOpacity: 0.25,
  shadowRadius: 4,
  elevation: 5,
  maxWidth: "60%",
  maxHeight: "40%",
}

const $modalViewSize = {
  small: {
    padding: spacing.md,
  },
  medium: {
    padding: spacing.lg,
  },
  large: {
    padding: spacing.xl,
  },
}

const $buttonAction: ViewStyle = {
  borderRadius: 20,
  padding: 10,
  marginTop: spacing.sm,
  elevation: 2,
}

const $modalText: TextStyle = {
  marginBottom: spacing.md,
  textAlign: "center",
}
