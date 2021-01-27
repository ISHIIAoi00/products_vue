import Vue from 'vue';

Vue.filter('number_format', function(val) {
  return val.toLocaleString();
});