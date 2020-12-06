import Taro from '@tarojs/taro';
import { View, Text, Video } from '@tarojs/components';

import VideoPost from '../../../models/video-post';

import PostDetailHeader from '../base/header';
import PostDetailFooter from '../base/footer';

export default function VideoPostDetail ({ post }: {
  post: VideoPost
}) {
  const { video } = post || {};
  return (
    <View>
      <PostDetailHeader
        post={post}
      ></PostDetailHeader>
      <Video src={video}></Video>
      <PostDetailFooter
        post={post}
      ></PostDetailFooter>
    </View>
  )
}