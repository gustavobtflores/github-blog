<template>
  <section class="post-wrapper">
    <div class="post-info">
      <div class="post-info__header">
        <router-link to="/" class="link">
          <font-awesome-icon icon="fa-solid fa-chevron-left" />
          VOLTAR
        </router-link>
        <a :href="post.html_url" class="link">
          VER NO GITHUB
          <font-awesome-icon icon="fa-solid fa-arrow-up-right-from-square" />
        </a>
      </div>
      <strong class="title-large">{{ post.title }}</strong>
      <div class="post-info__icons">
        <div class="post-info__icons-author">
          <font-awesome-icon icon="fa-brands fa-github" />
          {{ post.user.login }}
        </div>
        <div class="post-info__icons-date">
          <font-awesome-icon icon="fa-solid fa-calendar-day" />
          {{ formatDistance(post.created_at) }}
        </div>
        <div class="post-info__icons-comments" v-if="post.comments">
          <font-awesome-icon icon="fa-solid fa-comment" />
          <span>{{ post.comments }} {{ commentsText }}</span>
        </div>
      </div>
    </div>
    <div class="post-content">
      <div v-html="markdownToHtml(post.body)"></div>
    </div>
  </section>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import axios from "axios";
import { formatDistanceToNow } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import { marked } from "marked";
import hljs from "highlight.js";

interface PostType {
  html_url: string;
  title: string;
  user: {
    login: string;
  };
  created_at: string;
  comments: number;
  body: string;
}

export default defineComponent({
  name: "PostView",
  data() {
    return {
      post: {} as PostType,
      error: null,
    };
  },
  created() {
    this.fetchIssue();
  },
  computed: {
    commentsText() {
      return this.post.comments > 1 ? "comentários" : "comentário";
    },
  },

  methods: {
    fetchIssue() {
      const storedData = localStorage.getItem(
        `@GithubBlog:Post:${this.$route.params.id}`
      );

      if (storedData) {
        this.post = JSON.parse(storedData);
      } else {
        axios
          .get(
            `https://api.github.com/repos/gustavobtflores/github-blog/issues/${this.$route.params.id}`
          )
          .then((res) => {
            this.post = res.data;
            localStorage.setItem(
              `@GithubBlog:Post:${this.$route.params.id}`,
              JSON.stringify(res.data)
            );
          })
          .catch((err) => {
            this.error = err.response;
          });
      }
    },
    formatDistance(date: string) {
      return formatDistanceToNow(new Date(date), {
        addSuffix: true,
        locale: ptBR,
      });
    },
    markdownToHtml(markdown: string) {
      marked.setOptions({
        highlight: function (code) {
          return hljs.highlightAuto(code).value;
        },
      });

      return marked(markdown);
    },
  },
});
</script>

<style lang="scss" scoped>
svg {
  height: 0.9em;
}
.post-wrapper {
  max-width: calc(54rem + 2rem); //width + padding
  margin: 0 auto;
  padding: 0 1rem;

  .post-info {
    padding: 2rem;
    background-color: var(--base-profile);
    border-radius: 10px;
    box-shadow: 0px 2px 28px 0px #00000033;

    > strong {
      margin-top: 20px;
      display: block;
    }

    &__icons {
      display: flex;
      align-items: center;
      margin-top: 1rem;
      gap: 2rem;

      &-author,
      &-date,
      &-comments {
        display: flex;
        align-items: center;
        gap: 0.5rem;
      }
    }

    &__header {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  }

  .post-content {
    padding: 40px;
  }
}

a svg {
  fill: currentColor;
}
</style>
