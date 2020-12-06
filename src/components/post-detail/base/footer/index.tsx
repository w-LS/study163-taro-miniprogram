import Taro from '@tarojs/taro';
import { View, Image, Text } from '@tarojs/components';

import BasePost from '../../../../models/base-post';

export default function PostDetailFooter ({ post }: {
  post: BasePost
}) {
  const { avatar, name } = post && post.author || {};
  return (
    <View>
      {/* <Image src={avatar} /> */}
      <Text>{name}</Text>
    </View>
  )
}