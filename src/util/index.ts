export const getUserEmail = (headers) => {
  return headers.app_user_email
}

export const getResponseHeaders = () => {
  return {
    'Access-Control-Allow-Origin': '*'
  }
}

export const getCode = (headers) => {
  return headers.Authorization
}
