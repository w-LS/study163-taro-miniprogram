import Taro, { Config, useEffect, useState, useRouter } from '@tarojs/taro';
import { View } from '@tarojs/components';

import PropsTest from '@/components/props-test';

export default class PostDetail extends Taro.Component {
  static config = {

  }

  state = {
    name: '小明',
    age: 10
  }
  render () {
    const {
      name,
      age
    } = this.state;

    return (
      <View>
        <View>姓名：{name}</View>
        <PropsTest
          age={age}
        ></PropsTest>
      </View>
    )
  }
}
