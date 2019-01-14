/* eslint-disable camelcase */
import { GET_UPDATE_KEY, GET_UPDATE_FORM } from './mutation-types'
export default {
  [GET_UPDATE_KEY] (state, { key, value }) {
    state[key] = value
  },
  [GET_UPDATE_FORM] (state, { key, value }) {
    state['form'][key] = value
  }
}
