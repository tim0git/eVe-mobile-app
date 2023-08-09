import App from "./app/app.tsx"
import React from "react"
import { AppRegistry } from "react-native"
import RNBootSplash from "react-native-bootsplash"

const storybookEnabled = true

function IgniteApp() {
  return <App hideSplashScreen={RNBootSplash.hide} />
}

let AppEntryPoint = IgniteApp

if (storybookEnabled) {
  AppEntryPoint = require("./.storybook").default
}
AppRegistry.registerComponent("EveMobileApp", () => AppEntryPoint)

export default App
