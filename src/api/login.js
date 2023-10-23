import request from '@/utils/request';

// 获取用户信息
export const getLogin = () => request({
  url: '/login',
  method: 'get',
});


// 获取用户信息
export const getUserInfo = () => request({
  url: '/info',
  method: 'get',
});

// 退出登录
export const logout = () => request({
  url: '/quit',
  method: 'post',
});
