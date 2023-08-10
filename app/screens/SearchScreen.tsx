import React, { FC, useState, useEffect } from "react"
import { View, ViewStyle } from "react-native"
import { TextField, ModalWrapper, Icon, TextFieldAccessoryProps } from "app/components"
import { Screen } from "../components"
import { HomeTabScreenProps } from "../navigators/HomeNavigator"
import MapView from "react-native-maps"
import { spacing, colors } from "../theme"
import * as Location from "expo-location"
import * as Linking from "expo-linking"

export const SearchScreen: FC<HomeTabScreenProps<"Search">> = function SearchScreen(_props) {
  const [location, setLocation] = useState(null)
  const [permissionDenied, setPermissionDenied] = useState(false)

  const handleLinkToSettings = async () => {
    await Linking.openSettings()
    setPermissionDenied(null)
  }

  useEffect(() => {
    ;(async () => {
      const { status } = await Location.requestForegroundPermissionsAsync()

      if (status !== "granted") {
        setPermissionDenied(true)
        return
      }

      const location = await Location.getCurrentPositionAsync({})
      setLocation(location)
    })()
  }, [permissionDenied])

  const SearchLeftAccessory = (props: TextFieldAccessoryProps) => {
    return (
      <Icon
        icon={"search"}
        color={colors.palette.neutral800}
        containerStyle={props.style}
        size={20}
      />
    )
  }

  return (
    <Screen preset="fixed" contentContainerStyle={$screenContainer} safeAreaEdges={["top"]}>
      <View style={$mapContainer}>
        <View style={$searchContainer}>
          <TextField
            placeholderTx="searchScreen.searchBarHelperText"
            LeftAccessory={SearchLeftAccessory}
          />
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
          visible={!!permissionDenied}
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
