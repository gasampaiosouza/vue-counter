Vue.component('counter-button', {
  data: () => ({
    count: 0,
  }),
  template:
    "<button v-on:click='count++'>{{ count }} {{ count == 1 ? 'click' : 'clicks' }} 😆</button>",
});

const app = new Vue({
  el: '#app',
  data: {
    title: 'Vue Counter!',
  },
});
