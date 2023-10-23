import Cookies from 'js-cookie';
const TokenKey = 'asr-token';
export const setToken = () => Cookies.set('token', TokenKey, { expires: 7, path: '' })
export const getToken = () => Cookies.get(TokenKey)
export const delToken = () => Cookies.remove(TokenKey)