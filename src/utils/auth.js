import Cookies from 'js-cookie'

const TokenKey = 'vue_admin_template_token'
const IdKey = "vue_admin_template_id"
export function getToken() {
  return Cookies.get(TokenKey)
}

export function setToken(token) {
  return Cookies.set(TokenKey, token)
}

export function removeToken() {
  return Cookies.remove(TokenKey)
}

export function setId(id) {
  return Cookies.set(IdKey, id)
}

export function getId() {
  return Cookies.get(IdKey)
}