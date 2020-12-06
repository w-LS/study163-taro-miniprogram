import Taro from '@tarojs/taro';

export const POST_DETAIL = {
  url: '/pages/post-detail/index'
}

export function gotoPostDetail (id: string|number) {
  Taro.navigateTo({
    url: POST_DETAIL.url + '?id=' + id
  })
}