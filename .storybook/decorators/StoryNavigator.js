import React from "react"
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"

/**
 * Helper component to create a Dummy Stack to access {navigation} object on *.story.tsx files
 *
 * @usage add this decorator
 * ```
 * .addDecorator(NavigationDecorator)
 * ```
 */
const StoryBookStack = createNativeStackNavigator()

export const NavigationDecorator = (story) => {
  const Screen = () => story()
  return (
    <NavigationContainer independent={true}>
      <StoryBookStack.Navigator>
        <StoryBookStack.Screen
          name="MyStorybookScreen"
          component={Screen}
          options={{ header: () => null }}
        />
      </StoryBookStack.Navigator>
    </NavigationContainer>
  )
}
