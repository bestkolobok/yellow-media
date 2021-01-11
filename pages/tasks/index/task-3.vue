<template>
  <div class="task-three">
    <v-text-field
        placeholder="Type valid url with query params"
        v-model.trim="url"
    />
    <div>
      {
    </div>
    <ul>
      <li
        v-for="(item, i) in parseString"
        :key="i"
        class="task-three__list-item"
      >
        {{ `"${i}": "${item}"` }}
      </li>
    </ul>
    <div>
      }
    </div>
  </div>
</template>

<script>
  export default {
    name: "TaskThree",
    data() {
      return {
        url: 'http://localhost:63342/test/index.html?em=world&ew=book'
      }
    },
    computed: {
      parseString() {
        const queryString = this.url.split('?')[1];
        const paramsArr = queryString.split('&');
        return paramsArr.reduce((acc, item) => {
          const stringToArr = item.split('=');
          acc[stringToArr[0]] = stringToArr[1];
          return acc;
        }, {})
      }
    }
  }
</script>

<style scoped lang="scss">
  .task-three{
    &__list-item{
      list-style: none;
    }
  }
</style>
