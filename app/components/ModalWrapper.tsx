import React, { useState } from "react"
import { TextStyle, TouchableOpacityProps, View, Pressable, Modal, ViewStyle } from "react-native"
import { colors, spacing } from "../theme"
import { Text, TextProps } from "./Text"
import { Button } from "./Button"

interface ModalProps extends TouchableOpacityProps {
  tx?: TextProps["tx"]
  buttonTx?: TextProps["text"]
  size: "small" | "medium" | "large"
  actionButtonOnPress?: () => void
  onRequestClose?: () => void
  visible?: boolean
}

export function ModalWrapper(props: ModalProps) {
  const {
    tx,
    buttonTx,
    size = "medium",
    actionButtonOnPress,
    onRequestClose,
    visible = false,
  } = props
  const [modalVisible, setModalVisible] = useState(visible)

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={onRequestClose}
    >
      <Pressable
        style={$centeredView}
        onPress={() => {
          setModalVisible(!modalVisible)
        }}
      >
        <View style={[$modalView, $modalViewSize[`${size}`]]}>
          <Text style={$modalText} text={tx} preset="bold" />
          <Button
            style={$buttonAction}
            onPress={actionButtonOnPress}
            text={buttonTx}
            preset="reversed"
          />
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
}

const $modalViewSize = {
  small: {
    padding: spacing.xl,
  },
  medium: {
    padding: spacing.xxl,
  },
  large: {
    padding: spacing.xxxl,
  },
}

const $buttonAction: ViewStyle = {
  borderRadius: 20,
  padding: 10,
  elevation: 2,
}

const $modalText: TextStyle = {
  marginBottom: spacing.md,
  textAlign: "center",
}
