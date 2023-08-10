import React, { FC, useState, useEffect } from "react"
import { View, ViewStyle } from "react-native"
import { TextField, ModalWrapper } from "app/components"
import { Screen } from "../components"
import { HomeTabScreenProps } from "../navigators/HomeNavigator"
import MapView from "react-native-maps"
import { spacing, colors } from "../theme"
import * as Location from "expo-location"
import * as Linking from "expo-linking"

export const SearchScreen: FC<HomeTabScreenProps<"Search">> = function SearchScreen(_props) {
  const [location, setLocation] = useState(null)
  const [errorMsg, setErrorMsg] = useState(null)
  const [isModalVisible, setIsModalVisible] = useState(false)

  const handleLinkToSettings = async () => {
    await Linking.openSettings()
    setErrorMsg(null)
  }

  useEffect(() => {
    ;(async () => {
      const { status } = await Location.requestForegroundPermissionsAsync()

      if (status !== "granted") {
        setErrorMsg("permissionsDenied")
        setIsModalVisible(true)
        return
      }

      const location = await Location.getCurrentPositionAsync({})
      setLocation(location)
    })()
  }, [isModalVisible])

  console.log("location", location)
  console.log("errorMsg", errorMsg)
  console.log("isModalVisible", isModalVisible)

  return (
    <Screen preset="fixed" contentContainerStyle={$screenContainer} safeAreaEdges={["top"]}>
      <View style={$mapContainer}>
        <View style={$searchContainer}>
          <TextField placeholderTx={"searchScreen.searchBarHelperText"} />
        </View>
        <MapView
          style={$map}
          region={{
            latitude: location?.coords.latitude,
            longitude: location?.coords.longitude,
            latitudeDelta: 0.003,
            longitudeDelta: 0.005,
          }}
        />
        <ModalWrapper
          tx="searchScreen.locationDisabledErrorTitle"
          descriptionTx="searchScreen.locationDisabledErrorDescription"
          buttonTx="searchScreen.locationDisabledErrorButton"
          onButtonPress={handleLinkToSettings}
          visible={isModalVisible}
        />
      </View>
    </Screen>
  )
}

const $screenContainer: ViewStyle = {
  flex: 1,
}

const $searchContainer: ViewStyle = {
  position: "absolute",
  top: spacing.sm,
  left: spacing.sm,
  zIndex: 1,
  right: spacing.sm,
}

const $mapContainer: ViewStyle = {
  flex: 1,
}

const $map: ViewStyle = {
  flex: 1,
}

const $errorContainer: ViewStyle = {
  position: "absolute",
  alignItems: "center",
  justifyContent: "space-around",
  padding: spacing.sm,
  bottom: spacing.xl,
  left: spacing.sm,
  right: spacing.sm,
  top: spacing.xl,
  zIndex: 1,
  backgroundColor: colors.background,
}

const $errorButtonsContainer: ViewStyle = {
  flexDirection: "column-reverse",
  justifyContent: "space-around",
}

const $dismissErrorButton: ViewStyle = {
  paddingHorizontal: spacing.xxl,
}
