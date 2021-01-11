<template>
  <div>
    <validation-observer
        ref="observer"
    >
      <form
          class="task-form"
          @submit.prevent="onSubmit"
      >
        <validation-provider
            v-slot="{ errors }"
            name="Field"
            rules="required|numeric"
        >
          <v-text-field
              v-model="field"
              placeholder="Tape text here"
              :error-messages="errors"
              label="Field"
              outlined
          />
        </validation-provider>
        <v-row justify="space-around">
          <v-btn
              outlined
              rounded
              type="submit"
              :disabled="!field"
          >
            submit
          </v-btn>
          <v-btn
              outlined
              rounded
              @click="onClear"
          >
            clear
          </v-btn>
        </v-row>
      </form>
    </validation-observer>
  </div>

</template>

<script>
  import { required, numeric } from 'vee-validate/dist/rules';
  import { extend, ValidationObserver, ValidationProvider, setInteractionMode } from 'vee-validate';
  setInteractionMode('eager');
  extend('numeric', {
    ...numeric,
    message: '{_field_} needs to be numeric. ({_value_})',
  });
  extend('required', {
    ...required,
    message: '{_field_} can not be empty',
  });
  export default {
    name: "TaskForm",
    components: {
      ValidationProvider,
      ValidationObserver,
    },
    data() {
      return {
        field: ''
      }
    },
    methods: {
      onSubmit() {
        this.$refs.observer.validate();
        if (this.field && this.$refs.observer.flags.valid) {
          this.$emit('submit', this.field)
        }
      },
      onClear() {
        this.field = '';
        this.$emit('clear')
      }
    }
  }
</script>

<style scoped lang="scss">
  .task-form{
    padding: 16px;
    border: 1px solid $c--general-border;
  }
</style>
