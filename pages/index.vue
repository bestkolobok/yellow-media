<template>
  <section class="home">
    <v-list>
      <v-list-item
        v-for="(item, i) in tasks"
        :key="i"
        class="home__list-item"
        :to="item.link"
      >
        {{ item.name }}
      </v-list-item>
    </v-list>
  </section>
</template>

<script>

export default {
  name: 'Home',
  components: {},
  data() {
    return {
      tasks: [
        { name: 'Task One', link: 'tasks/task-1' },
        { name: 'Task Two', link: 'tasks/task-2' },
        { name: 'Task Three', link: 'tasks/task-3' },
        { name: 'Task Four', link: 'tasks/task-4' }
      ]
    }
  }
}
</script>

<style scoped lang="scss">
  .home{
    &__list-item{
      margin-bottom: 4px;
      border: 1px solid $c--general-border;
      border-radius: 4px;
    }
  }
</style>
