export const setUser = (user) => {
  return {
    type: 'SIGN_IN',
    user
  }
}

export const clearUser = () => {
  return {
    type: 'SIGN_OUT'
  }
}

export const setUsers = (users) => {
  return {
    type: 'LOAD',
    users
  }
}

export const setTransactions = (transaction) => {
  return {
    type: 'GET',
    transaction
  }
}