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

function usersReducer(state=null,action) {
  switch (action.type) {
    case 'LOAD':
      return action.users
  
    default:
      return state
  }
}

function transactionReducer(state=null,action) {
  switch (action.type) {
    case 'GET':
      return action.transaction
  
    default:
      return state
  }
}

let myReducer = combineReducers({
  user: userReducer,
  users: usersReducer,
  transaction: transactionReducer,
})

let store = createStore(myReducer)
export default store