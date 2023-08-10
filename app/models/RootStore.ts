import { Instance, SnapshotOut, types } from "mobx-state-tree"
import { OnboardingStoreModel } from "./OnboardingStore"
import { RegistrationStoreModel } from "./RegistrationStore"
import { AuthenticationStoreModel } from "./AuthenticationStore"
import { SettingsStoreModel } from "./SettingsStore"
import { EpisodeStoreModel } from "./EpisodeStore"

export const RootStoreModel = types.model("RootStore").props({
  onboardingStore: types.optional(OnboardingStoreModel, {}),
  registrationStore: types.optional(RegistrationStoreModel, {}),
  authenticationStore: types.optional(AuthenticationStoreModel, {}),
  settingsStore: types.optional(SettingsStoreModel, {}),
  episodeStore: types.optional(EpisodeStoreModel, {}),
})

export interface RootStore extends Instance<typeof RootStoreModel> {}
export interface RootStoreSnapshot extends SnapshotOut<typeof RootStoreModel> {}
