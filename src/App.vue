<template>
  <div id="app">
    <product-list v-bind:products="products"></product-list>
  </div>
</template>

<script>
import productList from './components/product-list.vue'

export default {
  name: 'app',
  components: {
    'product-list': productList
  },
  data: function() {
    return {
      products: [
        { id: 1, name: 'りんご', price: 1000, image: require('./assets/img/01.png'), delv: 0,isSale: true},
        { id: 2, name: 'さくらんぼ', price: 1050, image: require('./assets/img/02.png'), delv: 0,isSale: true},
        { id: 3, name: 'オレンジ', price: 980, image: require('./assets/img/03.png'), delv: 240,isSale: true},
        { id: 4, name: 'レモン', price: 1200, image: require('./assets/img/04.png'), delv: 0,isSale: true},
        { id: 5, name: 'バナナ', price: 1030, image: require('./assets/img/05.png'), delv: 0,isSale: false},
        { id: 6, name: 'メロン', price: 2000, image: require('./assets/img/06.png'), delv: 0,isSale: false},
      ]
    }
  }
}
</script>

<style>
body {
  background: #fff;
  color: #000;
}
</style>
