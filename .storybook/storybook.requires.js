/* do not change this file, it is auto generated by storybook. */

import {
  configure,
  addDecorator,
  addParameters,
  addArgsEnhancer,
  clearDecorators,
} from "@storybook/react-native";

global.STORIES = [
  {
    titlePrefix: "",
    directory: "./.storybook/stories",
    files: "**/*.stories.?(ts|tsx|js|jsx)",
    importPathMatcher:
      "^\\.[\\\\/](?:\\.storybook\\/stories(?:\\/(?!\\.)(?:(?:(?!(?:^|\\/)\\.).)*?)\\/|\\/|$)(?!\\.)(?=.)[^/]*?\\.stories\\.(?:ts|tsx|js|jsx)?)$",
  },
];

import "@storybook/addon-ondevice-controls/register";
import "@storybook/addon-ondevice-actions/register";

import { argsEnhancers } from "@storybook/addon-actions/dist/modern/preset/addArgs";

import { decorators, parameters } from "./preview";

if (decorators) {
  if (__DEV__) {
    // stops the warning from showing on every HMR
    require("react-native").LogBox.ignoreLogs([
      "`clearDecorators` is deprecated and will be removed in Storybook 7.0",
    ]);
  }
  // workaround for global decorators getting infinitely applied on HMR, see https://github.com/storybookjs/react-native/issues/185
  clearDecorators();
  decorators.forEach((decorator) => addDecorator(decorator));
}

if (parameters) {
  addParameters(parameters);
}

try {
  argsEnhancers.forEach((enhancer) => addArgsEnhancer(enhancer));
} catch {}

const getStories = () => {
  return {
    "./.storybook/stories/Components/Alert.stories.js": require("./stories/Components/Alert.stories.js"),
    "./.storybook/stories/Components/Button.stories.js": require("./stories/Components/Button.stories.js"),
    "./.storybook/stories/Navigators/AppNavigator.stories.js": require("./stories/Navigators/AppNavigator.stories.js"),
    "./.storybook/stories/Navigators/HomeNavigator.stories.js": require("./stories/Navigators/HomeNavigator.stories.js"),
    "./.storybook/stories/Screens/DebugScreen.stories.js": require("./stories/Screens/DebugScreen.stories.js"),
    "./.storybook/stories/Screens/ErrorBoundary.stories.js": require("./stories/Screens/ErrorBoundary.stories.js"),
    "./.storybook/stories/Screens/LoginScreen.stories.js": require("./stories/Screens/LoginScreen.stories.js"),
    "./.storybook/stories/Screens/OnboardingScreen.stories.js": require("./stories/Screens/OnboardingScreen.stories.js"),
    "./.storybook/stories/Screens/RegisterScreen.stories.js": require("./stories/Screens/RegisterScreen.stories.js"),
    "./.storybook/stories/Screens/Search.stories.js": require("./stories/Screens/Search.stories.js"),
    "./.storybook/stories/Screens/WelcomeScreen.stories.js": require("./stories/Screens/WelcomeScreen.stories.js"),
  };
};

configure(getStories, module, false);
