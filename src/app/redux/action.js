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