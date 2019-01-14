import {
  UPDATE_KEY,
  GET_UPDATE_KEY,
  UPDATE_FORM,
  GET_UPDATE_FORM
}
  from './mutation-types'
export default {
  [UPDATE_KEY] ({ commit }, { key, value }) {
    commit(GET_UPDATE_KEY, { key, value })
  },
  [UPDATE_FORM] ({ commit }, { key, value }) {
    commit(GET_UPDATE_FORM, { key, value })
  }
}
