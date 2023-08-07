// This is the first file that ReactNative will run when it starts up.
// If you use Expo (`yarn expo:start`), the entry point is ./App.js instead.
// Both do essentially the same thing.

import App from "./app/app.tsx"
import React from "react"
import { AppRegistry } from "react-native"
import RNBootSplash from "react-native-bootsplash"

const storybookEnabled = false

function IgniteApp() {
  return <App hideSplashScreen={RNBootSplash.hide} />
}

let AppEntryPoint = IgniteApp

if (storybookEnabled) {
  AppEntryPoint = require("./.storybook").default
}
AppRegistry.registerComponent("EveMobileApp", () => AppEntryPoint)

export default App
