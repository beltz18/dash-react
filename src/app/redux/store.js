import { createStore, combineReducers } from 'redux'

function userReducer(state=null,action) {
  switch (action.type) {
    case 'SIGN_IN':
      return action.user

    case 'SIGN_OUT':
      return null
  
    default:
      return state
  }
}

let myReducer = combineReducers({
  user: userReducer
})

let store = createStore(myReducer)

export default store