import { FETCH_POSTS, FETCH_POST, DELETE_POST } from '../actions'
import _ from 'lodash'

export default function PostsReducer(state = {}, action) {
  switch (action.type) {
    case DELETE_POST:
      return _.omit(state, action.payload)
    case FETCH_POST:
      // append the newly loaded post with previous ones / overwrite same ids rather than add new elements
      return { ...state, [action.payload.data.id]: action.payload.data }
    case FETCH_POSTS:
      // convert array 'action.payload.data' into object, with each element has the key of 'id'
      return _.mapKeys(action.payload.data, 'id')
    default:
      return state
  }
}
