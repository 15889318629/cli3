import * as types from './mutation-types'

export default {
  [types.theme_searchLevel]: (state, value) => {
    state.searchLevel = value
  },
  [types.theme_color]: (state, value) => {
    state.themecolor = value
  }
}
