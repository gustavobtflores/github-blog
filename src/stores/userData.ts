import type { UserDataTypes } from "@/components/UserProfile.vue";
import { defineStore } from "pinia";

export const useUserDataStore = defineStore("userData", {
  state: () => ({ userData: {} }),
  getters: {
    getUserData: (state) => state.userData,
  },
  actions: {
    setUserData(data: UserDataTypes) {
      this.userData = data;
    },
  },
});
