<template>
  <div class="hello">
    <q-page class="flex flex-center">
      <q-select outlined v-model="model" :options="options" label="Outlined" class="mySelect" />
    </q-page>
  </div>
</template>

<style lang="scss" scoped>
.mySelect {
  width: 100px;
  height: 20px;
  :deep(.q-field__control) {
    min-height: 0;
    height: 30px;
  }
}

</style>

<script >
export default { 
   name: 'HelloWorld',
  data () {
    return {
      model: null,
      options: [
        'Google', 'Facebook', 'Twitter', 'Apple', 'Oracle'
      ]
    }
  }
}
</script>
