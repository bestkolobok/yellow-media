<template>
  <div class="task-two">
    <p
        v-if="paragraph"
        class="task-two__paragraph"
        :class="`task-two__paragraph--${checkColor}`"
    >
      {{ paragraph }}
    </p>
    <task-form
      @submit="setLocalStorage"
      @clear="clearLocalStorage"
    />
  </div>
</template>

<script>
  import TaskForm from "~/components/TaskForm";
  export default {
    name: "TaskTwo",
    components: { TaskForm },
    data() {
      return {
        paragraph: null
      }
    },
    mounted() {
      this.getLocalStorage();
    },
    methods: {
      setLocalStorage(value) {
        localStorage.setItem('num23', value);
      },
      getLocalStorage() {
        this.paragraph = localStorage.getItem('num23') || '';
      },
      clearLocalStorage() {
        localStorage.removeItem('num23');
      }
    },
    computed: {
      checkColor() {
        if (!this.paragraph) return '';
        return (+this.paragraph)%2 === 0 ? 'even' : 'odd'
      }
    }
  }
</script>

<style scoped lang="scss">
  .task-two{
    &__paragraph{
      padding: 16px;
      border: 1px solid $c--general-border;
      &--odd{
        background-color: $c--main-red;
      }
      &--even{
        background-color: $c--main-green;
      }
    }
  }
</style>
