import { BottomTabScreenProps, createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { CompositeScreenProps } from "@react-navigation/native"
import React from "react"
import { TextStyle, ViewStyle } from "react-native"
import { useSafeAreaInsets } from "react-native-safe-area-context"
import { Icon } from "../components"
import { translate } from "../i18n"
import {
  ProfileScreen,
  SearchScreen,
  DebugScreen,
  FavouritesScreen,
  SettingsScreen,
} from "../screens"
import { colors, spacing, typography } from "../theme"
import { AppStackParamList, AppStackScreenProps } from "./AppNavigator"

export type HomeTabParamList = {
  Profile: undefined
  Search: undefined
  Debug: undefined
  Favourites: undefined
  Settings: undefined
}

/**
 * Helper for automatically generating navigation prop types for each route.
 *
 * More info: https://reactnavigation.org/docs/typescript/#organizing-types
 */
export type HomeTabScreenProps<T extends keyof HomeTabParamList> = CompositeScreenProps<
  BottomTabScreenProps<HomeTabParamList, T>,
  AppStackScreenProps<keyof AppStackParamList>
>

const Tab = createBottomTabNavigator<HomeTabParamList>()

export function HomeNavigator() {
  const { bottom } = useSafeAreaInsets()

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarStyle: [$tabBar, { height: bottom + 70 }],
        tabBarActiveTintColor: colors.text,
        tabBarInactiveTintColor: colors.text,
        tabBarLabelStyle: $tabBarLabel,
        tabBarItemStyle: $tabBarItem,
      }}
    >
      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          tabBarLabel: translate("homeNavigator.searchTab"),
          tabBarIcon: ({ focused }) => <Icon icon="pin" color={focused && colors.tint} size={30} />,
        }}
      />

      <Tab.Screen
        name="Favourites"
        component={FavouritesScreen}
        options={{
          tabBarAccessibilityLabel: translate("homeNavigator.favouriteListTab"),
          tabBarLabel: translate("homeNavigator.favouriteListTab"),
          tabBarIcon: ({ focused }) => (
            <Icon icon="heart" color={focused && colors.tint} size={30} />
          ),
        }}
      />

      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarLabel: translate("homeNavigator.profileTab"),
          tabBarIcon: ({ focused }) => (
            <Icon icon="community" color={focused && colors.tint} size={30} />
          ),
        }}
      />

      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          tabBarLabel: translate("homeNavigator.settingsTab"),
          tabBarIcon: ({ focused }) => (
            <Icon icon="settings" color={focused && colors.tint} size={30} />
          ),
        }}
      />

      <Tab.Screen
        name="Debug"
        component={DebugScreen}
        options={{
          tabBarLabel: translate("homeNavigator.debugTab"),
          tabBarIcon: ({ focused }) => (
            <Icon icon="debug" color={focused && colors.tint} size={30} />
          ),
        }}
      />
    </Tab.Navigator>
  )
}

const $tabBar: ViewStyle = {
  backgroundColor: colors.background,
  borderTopColor: colors.transparent,
}

const $tabBarItem: ViewStyle = {
  paddingTop: spacing.md,
}

const $tabBarLabel: TextStyle = {
  fontSize: 12,
  fontFamily: typography.primary.medium,
  lineHeight: 16,
  flex: 1,
}
