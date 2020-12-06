import Taro, { Config, useEffect, useState, useRouter } from '@tarojs/taro';
import { View } from '@tarojs/components';

import { fetchPostDetail } from '../../actions/post';
import { createPost, PostType } from '../../models/post';
import ImagePost from '../../models/image-post';
import VideoPost from '../../models/video-post';

import ImagePostDetail from '../../components/post-detail/image';
import VideoPostDetail from '../../components/post-detail/video';

export default function PostDetail () {
  const [post, setPost] = useState<PostType|null>(null);
  const [abc, setAbc] = useState(1);
  const { params } = useRouter()
  useEffect(() => {
    (async () => {
      const response = await fetchPostDetail(params.id);
      setPost(createPost(response.data.data));
    })()
  }, [])
  return (
    <View>
      {
        post && (
          ImagePost.isImagePost(post) ? (
            <ImagePostDetail post={post}></ImagePostDetail>
          ): VideoPost.isVideoPost(post) ? (
            <VideoPostDetail post={post}></VideoPostDetail>
          ): null
        )
      }
    </View>
  )
}

PostDetail.config = {
  navigationBarTitleText: '详情',
} as Config