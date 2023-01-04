<template>
  <section class="user-profile">
    <div class="user-profile__avatar">
      <img class="user-profile__avatar__image" :src="userData.avatar_url" />
    </div>
    <div class="user-profile__info">
      <div class="user-profile__info__name">
        <strong class="title-large">{{ userData.name }}</strong>
        <a href="" target="_blank" class="link">
          GITHUB
          <ph-arrow-square-out :size="14" weight="fill" />
        </a>
      </div>
    </div>
  </section>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import axios from "axios";

interface UserDataTypes {
  avatar_url: string;
  name: string;
}

export default defineComponent({
  name: "UserProfile",
  data() {
    return {
      userData: {} as UserDataTypes,
    };
  },
  mounted() {
    this.getUserData();
  },
  methods: {
    getUserData() {
      var storedData = localStorage.getItem("@GithubBlog:UserData");

      if (storedData) {
        this.userData = JSON.parse(storedData);
      } else {
        axios
          .get("https://api.github.com/users/gustavobtflores")
          .then((res) => {
            this.userData = res.data;
            localStorage.setItem("@GithubBlog:UserData", JSON.stringify(res.data));
          })
          .catch((err) => console.log(err));
      }
    },
  },
});
</script>

<style lang="scss" scoped>
.user-profile {
  display: flex;
  align-items: center;
  background: var(--base-profile);
  padding: 32px;
  border-radius: 10px;
  box-shadow: 0px 2px 28px 0px #00000033;
  margin-top: -100px;
  gap: 32px;

  &__avatar {
    width: 148px;
    height: 148px;
    overflow: hidden;
    border-radius: 8px;

    &__image {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }

  &__info {
    display: flex;
    flex: 1;

    &__name {
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex: 1;
      .title-large {
        color: var(--base-title);
      }

      .link {
        color: var(--brand-blue);
        display: flex;
        align-items: flex-end;
        line-height: 1;
        gap: 8px;
      }
    }
  }
}
</style>
