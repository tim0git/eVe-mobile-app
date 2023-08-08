import { Instance, SnapshotOut, types } from "mobx-state-tree"

export const LocationStoreModel = types
  .model("LocationStore")
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
    resetLocationStore() {
      store.locationEnabled = false
    },
  }))

export interface LocationStoreStore extends Instance<typeof LocationStoreModel> {}
export interface LocationStoreStoreSnapshot extends SnapshotOut<typeof LocationStoreModel> {}
