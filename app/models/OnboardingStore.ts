import { Instance, SnapshotOut, types } from "mobx-state-tree"

export const OnboardingStoreModel = types
  .model("OnboardingStore")
  .props({
    onboardingComplete: false,
  })
  .views((store) => ({
    get isOnboardingComplete() {
      return store.onboardingComplete
    },
  }))
  .actions((store) => ({
    setOnboardingComplete(value?: boolean) {
      store.onboardingComplete = value
    },
    resetOnboarding() {
      store.onboardingComplete = false
    },
  }))

export interface OnboardingStoreStore extends Instance<typeof OnboardingStoreModel> {}
export interface OnboardingStoreStoreSnapshot extends SnapshotOut<typeof OnboardingStoreModel> {}
