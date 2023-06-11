import { Instance, SnapshotOut, types } from "mobx-state-tree"

export const RegistrationStoreModel = types
  .model("RegistrationStore")
  .props({
    registrationComplete: false,
  })
  .views((store) => ({
    get isRegistrationComplete() {
      return store.registrationComplete
    },
  }))
  .actions((store) => ({
    setRegistrationComplete(value?: boolean) {
      store.registrationComplete = value
    },
    resetRegistration() {
      store.registrationComplete = false
    },
  }))

export interface RegistrationStoreStore extends Instance<typeof RegistrationStoreModel> {}
export interface RegistrationStoreStoreSnapshot
  extends SnapshotOut<typeof RegistrationStoreModel> {}
