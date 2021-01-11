<template>
  <section class="tasks">
    <div class="tasks__home">
      <nuxt-link to="/">HOME</nuxt-link>
    </div>
    <nuxt-child />
  </section>
</template>

<script>
  export default {
    name: "Tasks"
  }
</script>

<style scoped lang="scss">
  .tasks{
    &__home{
      margin-bottom: 24px;
      font-weight: bold;
      font-size: 20px;
    }
  }
</style>
