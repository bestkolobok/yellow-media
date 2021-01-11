<template>
  <div>
    <v-text-field
        placeholder="Type text here"
        v-model.trim="string"
    />
    <div class="mt-5">
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

<style scoped>

</style>
