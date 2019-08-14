import * as mutationTypes from './mutation-types'

export default {
  [mutationTypes.SET_USER_TOKEN] (state, token) {
    state.token = token
  },

  [mutationTypes.SET_LAST_TIME] (state, lasttime) {
    state.lastTime = lasttime
  }
}
