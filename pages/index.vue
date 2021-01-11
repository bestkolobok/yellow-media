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
// import debounce from 'lodash/debounce';
import { mapGetters, mapMutations } from 'vuex';

export default {
  name: 'Home',
  components: {},
  data() {
    return {
      tasks: [
        { name: 'Task One', link: 'task-1' },
        { name: 'Task Two', link: 'task-2' },
        { name: 'Task Three', link: 'task-3' },
        { name: 'Task Four', link: 'task-4' }
      ]
    }
  },
  methods: {
    ...mapMutations({
      // SET_BENDING: 'SET_BENDING'
    })
  },
  computed: {
    ...mapGetters({
      // getFallingShape: 'getFallingShape',
    })
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
