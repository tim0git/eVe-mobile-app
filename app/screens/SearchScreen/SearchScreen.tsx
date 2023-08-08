import React, { FC } from "react"
import { View, ViewStyle } from "react-native"
import { TextField } from "app/components"
import { Screen } from "../../components"
import { HomeTabScreenProps } from "../../navigators/HomeNavigator"
import MapView from "react-native-maps"
import { spacing } from "../../theme"

export const SearchScreen: FC<HomeTabScreenProps<"Search">> = function SearchScreen(_props) {
  return (
    <Screen preset="fixed" contentContainerStyle={$screenContainer}>
      <View style={$mapContainer}>
        <View style={$searchContainer}>
          <TextField />
        </View>
        <MapView style={$map} />
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
