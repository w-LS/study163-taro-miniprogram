import Taro from '@tarojs/taro';

export function fetchPostDetail (id: number|string) {
  return Taro.request({
    url: 'http://127.0.0.1:9527/api/post/detail/' + id,
    method: 'GET'
  })
}

export function fetchPostList (pageNumber) {
  return Taro.request({
    url: 'http://127.0.0.1:9527/api/post/list/' + pageNumber,
    method: 'GET'
  })
}