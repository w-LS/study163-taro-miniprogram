import Taro, { Config, useEffect, useState, useRouter } from '@tarojs/taro';
import { View } from '@tarojs/components';

import PropsChildComponent from '@/components/props-test';

export default function PropsDemo () {
  const [name, setName] = useState('小明');
  const [age, setAge] = useState(18);

  const renderABC = (text) => {
    return (
      <View>{age}{text}</View>
    )
  }

  return (
    <View>
      <View>姓名：{name}</View>
      <PropsChildComponent
        age={age}
      ></PropsChildComponent>
      {renderABC('abc')}
    </View>
  )
}

PropsDemo.config = {
  navigationBarTitleText: '详情',
} as Config