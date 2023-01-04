<template>
  <header-component />
  <main>
    <user-profile />
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import HeaderComponent from "@/components/Header.vue";
import UserProfile from "@/components/UserProfile.vue";

export default defineComponent({
  name: "HomeView",
  components: {
    HeaderComponent,
    UserProfile,
  },
});
</script>

<style lang="scss" scoped>
main {
  max-width: calc(864px + 32px);
  margin: 0 auto;
  padding: 0 16px;
}
</style>
