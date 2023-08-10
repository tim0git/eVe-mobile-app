const en = {
  common: {
    skip: "Skip",
    ok: "OK!",
    cancel: "Cancel",
    back: "Back",
    logOut: "Log Out",
    reset: "Reset",
  },
  welcomeScreen: {
    heading: "Welcome",
    eVeSlogan: "Electric Vehicle Experience",
    postscript: "We have a few more things to show you before you get started. Let's take a look!",
    letsGo: "Let's go!",
  },
  onboardingScreen: {
    heading: "Onboarding",
  },
  homeNavigator: {
    searchTab: "Search",
    favouriteListTab: "Favourites",
    profileTab: "Profile",
    settingsTab: "Settings",
    debugTab: "Debug",
  },
  registerScreen: {
    heading: "Sign Up",
    register: "Sign Up!",
  },
  errorScreen: {
    title: "Something went wrong!",
    friendlySubtitle:
      "This is the screen that your users will see in production when an error is thrown. You'll want to customize this message (located in `app/i18n/en.ts`) and probably the layout as well (`app/screens/ErrorScreen`). If you want to remove this entirely, check `app/app.tsx` for the <ErrorBoundary> component.",
    reset: "RESET APP",
    traceTitle: "Error from %{name} stack", // @demo remove-current-line
  },
  loginScreen: {
    signIn: "Sign In",
    enterDetails: "Enter your email address and password to sign in.",
    emailFieldLabel: "Email",
    passwordFieldLabel: "Password",
    emailFieldPlaceholder: "Enter your email address",
    passwordFieldPlaceholder: "Enter a strong and secure password",
    tapToSignIn: "Sign in!",
    hint: "Hint: you can use any email address and your favorite password :)",
  },
  searchScreen: {
    searchBarHelperText: "Search",
    locationDisabledErrorTitle: "Alert",
    locationDisabledErrorDescription: "You need to enable location services to use this feature.",
    locationDisabledErrorButton: "Go to Settings",
  },
  profileScreen: {
    settingsSubheading: "Profile",
    settingsDescription: "Profile description",
    userName: "User Name:",
  },
  settingsScreen: {
    settingsSubheading: "Settings",
    settingsDescription: "Settings description",
    locationToggle: "Location",
    legalSubheading: "Legal",
    legalDescription: "Legal description",
    termsAndConditions: "Terms and Conditions",
  },
  debugScreen: {
    howTo: "HOW TO",
    title: "Debug",
    tagLine:
      "Congratulations, you've got a very advanced React Native app template here.  Take advantage of this boilerplate!",
    reactotron: "Send to Reactotron",
    reportBugs: "Report Bugs",
    demoList: "Demo List",
    favourites: "Demo Podcast List",
    androidReactotronHint:
      "If this doesn't work, ensure the Reactotron desktop app is running, run adb reverse tcp:9090 tcp:9090 from your terminal, and reload the app.",
    iosReactotronHint:
      "If this doesn't work, ensure the Reactotron desktop app is running and reload app.",
    macosReactotronHint:
      "If this doesn't work, ensure the Reactotron desktop app is running and reload app.",
    webReactotronHint:
      "If this doesn't work, ensure the Reactotron desktop app is running and reload app.",
    windowsReactotronHint:
      "If this doesn't work, ensure the Reactotron desktop app is running and reload app.",
  },
  favouriteScreen: {
    title: "Favourites",
    onlyFavorites: "Only Show Favorites",
    favoriteButton: "Favorite",
    unfavoriteButton: "Unfavorite",
    accessibility: {
      cardHint:
        "Double tap to listen to the episode. Double tap and hold to {{action}} this episode.",
      switch: "Switch on to only show favorites",
      favoriteAction: "Toggle Favorite",
      favoriteIcon: "Episode not favorited",
      unfavoriteIcon: "Episode favorited",
      publishLabel: "Published {{date}}",
      durationLabel: "Duration: {{hours}} hours {{minutes}} minutes {{seconds}} seconds",
    },
    noFavoritesEmptyState: {
      heading: "This looks a bit empty",
      content:
        "No favorites have been added yet. Tap the heart on an episode to add it to your favorites!",
    },
  },
  errors: {
    invalidEmail: "Invalid email address.",
  },
  emptyStateComponent: {
    generic: {
      heading: "So empty... so sad",
      content: "No data found yet. Try clicking the button to refresh or reload the app.",
      button: "Let's try this again",
    },
  },
}

export default en
export type Translations = typeof en
