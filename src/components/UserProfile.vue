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
          <font-awesome-icon icon="fa-solid fa-arrow-up-right-from-square" />
        </a>
      </div>
      <p class="user-profile__info__bio">{{ userData.bio }}</p>
      <div class="user-profile__info__icons">
        <div class="icon-item username">
          <font-awesome-icon icon="fa-brands fa-github" />
          <span>{{ userData.login }}</span>
        </div>
        <div class="icon-item company">
          <font-awesome-icon icon="fa-solid fa-building" />
          <span>{{ userData.company }}</span>
        </div>
        <div class="icon-item followers">
          <font-awesome-icon icon="fa-solid fa-user-group" />
          <span>{{ userData.followers }} seguidores</span>
        </div>
      </div>
    </div>
  </section>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import axios from "axios";
import { mapActions, mapState, mapStores } from "pinia";
import { useUserDataStore } from "@/stores/userData";

export interface UserDataTypes {
  avatar_url: string;
  name: string;
  bio: string;
  login: string;
  company: string;
  followers: number;
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
  computed: {
    ...mapStores(useUserDataStore),
    ...mapState(useUserDataStore, ["user"]),
  },
  methods: {
    getUserData() {
      axios
        .get("https://api.github.com/users/gustavobtflores")
        .then((res) => {
          this.userData = res.data;
        })
        .catch((err) => console.log(err));
    },
    ...mapActions(useUserDataStore, ["setUserData"]),
  },
});
</script>

<style lang="scss" scoped>
svg {
  height: 0.9em;
}

.user-profile {
  display: flex;
  background: var(--base-profile);
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0px 2px 28px 0px #00000033;
  gap: 2rem;
  flex-wrap: wrap;

  &__avatar {
    width: 9.25rem;
    height: 9.25rem;
    overflow: hidden;
    border-radius: 8px;

    @media screen and (max-width: 480px) {
      width: 100%;
      height: 100%;
    }

    &__image {
      width: 100%;
      height: 100%;
      object-fit: contain;
      display: block;
    }
  }

  &__info {
    display: flex;
    flex-direction: column;
    flex: 1;
    padding: 0.5rem 0;

    &__name {
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
      gap: 0.5rem;
      .title-large {
        color: var(--base-title);
      }

      .link {
        color: var(--brand-blue);
        display: flex;
        line-height: 1;
        gap: 0.5rem;
      }
    }

    &__bio {
      margin-top: 0.5rem;
    }

    &__icons {
      color: var(--base-label);
      margin-top: auto;
      display: flex;
      column-gap: 1.5rem;
      row-gap: 0.75rem;
      flex-wrap: wrap;
      padding-top: 1rem;

      .icon-item {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        line-height: 1;

        span {
          color: var(--base-subtitle);
        }
      }

      svg {
        fill: currentColor;
        display: block;
        line-height: 0;
      }
    }
  }
}
</style>
