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
      <p class="user-profile__info__bio">{{ userData.bio }}</p>
      <div class="user-profile__info__icons">
        <div class="icon-item username">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 496 512"
          >
            <path
              d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
            />
          </svg>
          <span>{{ userData.login }}</span>
        </div>
        <div class="icon-item company">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 384 512"
          >
            <path
              d="M48 0C21.5 0 0 21.5 0 48V464c0 26.5 21.5 48 48 48h96V432c0-26.5 21.5-48 48-48s48 21.5 48 48v80h96c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48H48zM64 240c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V240zm112-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H176c-8.8 0-16-7.2-16-16V240c0-8.8 7.2-16 16-16zm80 16c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H272c-8.8 0-16-7.2-16-16V240zM80 96h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16zm80 16c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H176c-8.8 0-16-7.2-16-16V112zM272 96h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H272c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16z"
            />
          </svg>
          <span>{{ userData.company }}</span>
        </div>
        <div class="icon-item followers">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 640 512"
          >
            <path
              d="M352 128c0 70.7-57.3 128-128 128s-128-57.3-128-128S153.3 0 224 0s128 57.3 128 128zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3zM609.3 512H471.4c5.4-9.4 8.6-20.3 8.6-32v-8c0-60.7-27.1-115.2-69.8-151.8c2.4-.1 4.7-.2 7.1-.2h61.4C567.8 320 640 392.2 640 481.3c0 17-13.8 30.7-30.7 30.7zM432 256c-31 0-59-12.6-79.3-32.9C372.4 196.5 384 163.6 384 128c0-26.8-6.6-52.1-18.3-74.3C384.3 40.1 407.2 32 432 32c61.9 0 112 50.1 112 112s-50.1 112-112 112z"
            />
          </svg>
          <span>{{ userData.followers }} seguidores</span>
        </div>
      </div>
    </div>
  </section>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import axios from "axios";

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
  background: var(--base-profile);
  padding: 32px;
  border-radius: 10px;
  box-shadow: 0px 2px 28px 0px #00000033;
  margin-top: -100px;
  gap: 32px;
  flex-wrap: wrap;

  &__avatar {
    width: 148px;
    height: 148px;
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
    padding: 8px 0;

    &__name {
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
      gap: 8px;
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

    &__bio {
      margin-top: 8px;
    }

    &__icons {
      color: var(--base-label);
      margin-top: auto;
      display: flex;
      column-gap: 24px;
      row-gap: 12px;
      flex-wrap: wrap;
      padding-top: 16px;

      .icon-item {
        display: flex;
        align-items: center;
        gap: 8px;
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
