import Vue from 'vue'
import App from './App'

export default () => {
  new Vue({ // eslint-disable-line no-new
    el: '#app',
    components: { App }
  })
}
