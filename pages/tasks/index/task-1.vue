<template>
  <div class="task-one">
    <v-text-field
        placeholder="Type text here"
        v-model.trim="string"
    />
    <div class="task-one__letter">
      {{ letter }}
    </div>
  </div>
</template>

<script>
  export default {
    name: "TaskOne",
    data() {
      return {
        string: ''
      }
    },
    computed: {
      letter() {
        const stringArr = this.string.split('').map(item => item.toLowerCase());
        const sortedStringArr = stringArr.sort((a, b) => a.localeCompare(b));
        const uniqLetters = [];
        const letter = sortedStringArr.reduce((acc, item, i, arr) => {
          const getSameLetters = () => arr.filter(el => el === item);
          if (i === 0) {
            uniqLetters.push(item);
            return getSameLetters();
          }
          const isUniq = !uniqLetters.includes(item);
          if (isUniq) {
            uniqLetters.push(item);
            const sameLetters = getSameLetters();
            if (sameLetters.length > acc.length) {
              return sameLetters;
            } else {
              return acc
            }
          } else {
            return acc
          }
        }, []);
        return letter[0] || ''
      }
    }
  }
</script>

<style scoped lang="scss">
  .task-one{
    &__letter{
      margin-top: 24px;
      padding: 16px;
      font-size: 110px;
      font-weight: bold;
      border: 1px solid black;
      width: 200px;
      height: 200px;
      text-align: center;
    }
  }
</style>
