<template>
  <section class="home">

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

  }
</style>
