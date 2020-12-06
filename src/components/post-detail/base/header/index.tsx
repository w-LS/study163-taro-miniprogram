import Taro from '@tarojs/taro';
import { View, Text } from '@tarojs/components';

import BasePost from '../../../../models/base-post';

export default function PostDetailHeader ({ post }: {
  post: BasePost
}) {
  const { title, formattedCreateTime } = post || {};

  return (
    <View>
      <Text>{title}</Text>
      <Text>{formattedCreateTime}</Text>
    </View>
  )
}