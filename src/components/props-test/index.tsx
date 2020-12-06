import Taro from '@tarojs/taro';
import { View } from '@tarojs/components';

export default function PropsTest ({
  age
}: {
  age: number
}) {
  return (
    <View>
      <View>年龄：{age}岁</View>
    </View>
  )
}
