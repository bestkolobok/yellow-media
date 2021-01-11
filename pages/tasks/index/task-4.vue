<template>
  <v-container class="task-four" fluid>
    <v-row wrap>
      <v-col
          v-for="(item, i) in goods"
          :key="i"
          justify-md
          cols="12"
          sm="6"
          md="4"
          lg="3"
      >
        <v-card class="task-four__card">
          <div class="task-four__card-title">
            <div># {{ item.id }}</div>
            <div>{{ item.title }}</div>
            <div>{{ item.sku }}</div>
          </div>
          <div>
            <img class="task-four__card-img" alt="item" :src="item.image">
          </div>
          <div class="task-four__card-options-container">
            <div class="task-four__card-options-title">
              PRODUCT OPTIONS:
            </div>
            <ul class="task-four__card-options">
              <li
                v-for="(el, ix) in item.options"
                :key="ix"
                class="task-four__card-option"
              >
                {{ `${el.title}: ${el.text}` }}
              </li>
            </ul>
          </div>
          <div class="task-four__card-price">
            {{ `${item.price} ${item.currency}` }}
          </div>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex';
  export default {
    name: "TaskFour",
    data() {
      return {
        optionsMap: [
          { name: '', field: '' }
        ]
      }
    },
    created() {
      this.fetchGoods();
    },
    methods: {
      ...mapActions({
        fetchGoods: 'fetchGoods'
      })
    },
    computed: {
      ...mapGetters({
        getGoods: 'getGoods'
      }),
      goods() {
        return this.getGoods.map((item) => {
          const options = item.options[0] || {};
          return {
            ...item,
            options: [
              { title: 'Metal type', text: options.metal_type },
              { title: 'Metal color', text: options.metal_color },
              { title: 'Stone shape', text: options.stone_shape },
              { title: 'Gemstone color', text: options.gemstone_color }
            ],
            price: (+item.price).toFixed(2)
          }
        })
      }
    }
  }
</script>

<style scoped lang="scss">
  .task-four{
    &__card{
      padding: 16px;
      font-size: 12px;
    }
    &__card-title{
      *{
        text-align: center;
      }
    }
    &__card-img{
      width: 100%;
    }
    &__card-options-title{
      margin-bottom: 4px;
      font-weight: bold;
      text-align: center;
    }
    &__card-options{
      padding: 0;
    }
    &__card-option{
      list-style: none;
    }
    &__card-price{
      margin-top: 8px;
      font-size: 16px;
      font-weight: bold;
      text-align: center;
    }
  }
</style>
