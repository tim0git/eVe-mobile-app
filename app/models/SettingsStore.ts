import { Instance, SnapshotOut, types } from "mobx-state-tree"

export const SettingsStoreModel = types
  .model("SettingsStore")
  .props({
    locationEnabled: false,
  })
  .views((store) => ({
    get isLocationEnabled() {
      return store.locationEnabled
    },
  }))
  .actions((store) => ({
    storeLocationEnabled(value?: boolean) {
      store.locationEnabled = value
    },
    resetSettingsStore() {
      store.locationEnabled = false
    },
  }))

export interface SettingsStoreStore extends Instance<typeof SettingsStoreModel> {}
export interface SettingsStoreStoreSnapshot extends SnapshotOut<typeof SettingsStoreModel> {}
