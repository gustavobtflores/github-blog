<template>
  <section>
    <form @submit.prevent>
      <header>
        <label for="">Publicações</label>
        <span>{{ issues.length }} {{}}</span>
      </header>
      <input
        type="text"
        placeholder="Buscar conteúdo"
        @keyup.enter="searchIssues"
        @blur="searchIssues"
      />
    </form>
    <div class="articles">
      <ul class="articles__list">
        <router-link v-for="issue in issues" :key="issue.id" :to="'post/' + issue.number">
          <li class="articles__list-item">
            <div class="articles__list-item__info">
              <strong class="title-large">{{ issue.title }}</strong>
              <span>{{ formatDistance(issue.updated_at) }}</span>
            </div>
            <p class="line-clamp" v-html="markdownToHtml(issue.body)"></p>
          </li>
        </router-link>
      </ul>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import axios from "axios";
import { marked } from "marked";
import { formatDistanceToNow } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";

interface IssueType {
  id: number;
  title: string;
  body: string;
  number: number;
  updated_at: string;
}

export default defineComponent({
  name: "ArticlesCards",
  data() {
    return {
      issues: [] as IssueType[],
    };
  },
  mounted() {
    this.getIssues();
  },
  computed: {},
  methods: {
    getIssues() {
      axios
        .get("https://api.github.com/repos/gustavobtflores/github-blog-vue/issues")
        .then((res) => {
          this.issues = res.data;
        })
        .catch((err) => {
          console.log(err.response);
        });
    },
    searchIssues(event: any) {
      axios
        .get(
          `https://api.github.com/search/issues?q=${encodeURI(
            event.target.value
          )}repo:gustavobtflores/github-blog-vue`
        )
        .then((res) => (this.issues = res.data.items));
    },
    markdownToHtml(markdown: string) {
      return marked(markdown);
    },
    formatDistance(date: string) {
      return formatDistanceToNow(new Date(date), {
        addSuffix: true,
        locale: ptBR,
      });
    },
  },
});
</script>

<style lang="scss" scoped>
section {
  margin-top: 4.5rem;

  form {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;

    header {
      display: flex;
      align-items: center;
      justify-content: space-between;

      label {
        color: var(--base-subtitle);
        font-size: 1.125rem;
        font-weight: 700;
      }

      span {
        font-size: 0.875rem;
        color: var(--base-span);
      }
    }

    input {
      background-color: var(--base-input);
      padding: 0.75rem 1rem;
      border-radius: 6px;
      color: var(--base-text);
      border: 2px solid var(--base-border);
      transition: border 0.2s ease;

      &:focus {
        border-color: var(--brand-blue);
        outline: 0;
      }
    }
  }

  .articles {
    margin-top: 3rem;

    &__list {
      padding: 0;
      list-style: none;
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 2rem;

      &-item {
        display: flex;
        flex-direction: column;
        row-gap: 1.25rem;
        background: var(--base-post);
        border-radius: 10px;
        padding: 2rem;

        &__info {
          display: flex;
          flex-wrap: wrap;
          flex-direction: column;

          span {
            font-size: 0.875rem;
            color: var(--base-span);
          }
        }

        strong {
          color: var(--base-title);
        }

        p {
          line-height: 1.6;
        }
      }
    }
  }
}
</style>
