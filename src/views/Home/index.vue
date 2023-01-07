<template>
  <main>
    <user-profile />
    <articles-cards />
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import UserProfile from "@/components/UserProfile.vue";
import ArticlesCards from "@/components/ArticlesCards.vue";

export default defineComponent({
  name: "HomeView",
  components: {
    UserProfile,
    ArticlesCards,
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
