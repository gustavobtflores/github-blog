<template>
  <header-component />
  <router-view />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import HeaderComponent from "./Header.vue";

export default defineComponent({
  name: "BaseLayout",
  components: {
    HeaderComponent,
  },
});
</script>
