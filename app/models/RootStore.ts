import { Instance, SnapshotOut, types } from "mobx-state-tree"
import { OnboardingStoreModel } from "./OnboardingStore"
import { RegistrationStoreModel } from "./RegistrationStore"
import { AuthenticationStoreModel } from "./AuthenticationStore"
import { LocationStoreModel } from "./LocationStore"
import { EpisodeStoreModel } from "./EpisodeStore"

/**
 * A RootStore model.
 */
export const RootStoreModel = types.model("RootStore").props({
  onboardingStore: types.optional(OnboardingStoreModel, {}),
  registrationStore: types.optional(RegistrationStoreModel, {}),
  authenticationStore: types.optional(AuthenticationStoreModel, {}),
  locationStore: types.optional(LocationStoreModel, {}),
  episodeStore: types.optional(EpisodeStoreModel, {}), // @demo remove-current-line
})

/**
 * The RootStore instance.
 */
export interface RootStore extends Instance<typeof RootStoreModel> {}
/**
 * The data of a RootStore.
 */
export interface RootStoreSnapshot extends SnapshotOut<typeof RootStoreModel> {}
