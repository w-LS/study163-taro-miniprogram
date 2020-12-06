import Taro from '@tarojs/taro';
import { View, Image, Text } from '@tarojs/components';

import ImagePost from '../../../models/image-post';

import PostDetailHeader from '../base/header';
import PostDetailFooter from '../base/footer';

export default function ImagePostDetail ({ post }: {
  post: ImagePost
}) {
  const { images } = post || {};
  return (
    <View>
      <PostDetailHeader
        post={post}
      ></PostDetailHeader>
      {
        images.map((image) => (
          <Image src={image} />
        ))
      }
      <PostDetailFooter
        post={post}
      ></PostDetailFooter>
    </View>
  )
}