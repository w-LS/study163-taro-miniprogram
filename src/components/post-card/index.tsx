import Taro from '@tarojs/taro';
import { View, Image, Text } from '@tarojs/components';

import { PostType } from '@/models/post';
import ImagePost from '@/models/image-post';
import VideoPost from '@/models/video-post';

import { HOVER_START_TIME, HOVER_STAY_TIME } from '@/constants/hover-time';

import {
  gotoPostDetail
} from '@/router/routes';

import ImagePostCard from './typed-card-content/image-card';
import VideoPostCard from './typed-card-content/video-card';

import './index.less';


export default class PostCard extends Taro.Component<{
  key?: string;
  post: PostType;
}> {

  static defaultProps = {
    post: {}
  }

  get postId () {
    return this.props.post.id;
  }

  videoPost: any;

  play () {
    if (this.videoPost) {
      this.videoPost.play()
    }
  }
  stop () {
    if (this.videoPost) {
      this.videoPost.stop()
    }
  }
  pause () {
    if (this.videoPost) {
      this.videoPost.pause()
    }
  }
  resume () {
    if (this.videoPost) {
      this.videoPost.resume()
    }
  }

  render () {
    const {
      post
    } = this.props;

    const {
      authorName,
      authorAvatar,
      formattedCreateTime,
      title
    } = post;

    return (
      <View
        className="post-card"
        onClick={() => {
          gotoPostDetail(post.id)
        }}
        hoverClass="post-card-hover"
        hoverStartTime={HOVER_START_TIME}
        hoverStayTime={HOVER_STAY_TIME}
        hoverStopPropagation
      >
        <View
          className="card-header"
        >
          <View className="time">
            <Text
            >{formattedCreateTime}</Text>
          </View>
          <View
            className="title"
          >
            <Text
            >{title}</Text>
          </View>
        </View>
        <View className="card-body">
          {
            VideoPost.isVideoPost(post) && (
              <VideoPostCard
                ref={(videoPost) => this.videoPost = videoPost}
                post={post}
              />
            )
          }
          {
            ImagePost.isImagePost(post) && (
              <ImagePostCard
                post={post}
              />
            )
          }
        </View>
        <View
          className="card-footer"
        >
          <View
            className="author"
          >
            <View className="avatar">
              <Image
                className="avatar-image"
                src={authorAvatar}
                mode="aspectFill"
                lazyLoad
              />
            </View>
            <View className="name">
              <Text>{authorName} 记录</Text>
            </View>
          </View>
        </View>
      </View>
    )
  }
}

