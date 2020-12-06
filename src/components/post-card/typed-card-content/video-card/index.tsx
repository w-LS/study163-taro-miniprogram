import Taro from '@tarojs/taro';
import {
  View,
  Image,
  Video
} from '@tarojs/components';

import VideoPost from '@/models/video-post';
import { COLORS } from '@/constants/style';
import Tag from '@/components/widgets/tags';

import './index.less';

export default class VideoPostCard extends Taro.Component<{
  post: VideoPost
}> {
  static defaultProps = {
    post: {}
  }

  state = {
    playing: false
  }

  play () {
    this.setState({
      playing: true
    })
  }
  stop () {
    this.setState({
      playing: false
    })
  }
  pause () {
    const videoContext = Taro.createVideoContext('video-player', this);
    if (videoContext) {
      videoContext.pause()
    }
  }

  resume () {
    const videoContext = Taro.createVideoContext('video-player', this);
    if (videoContext) {
      videoContext.play()
    }
  }

  render () {
    const { post } = this.props;
    const {
      video,
      poster
    } = post;
    const {
      playing
    } = this.state;
    return (
      <View
        className="video-card"
      >
        {
          playing ? (
            <Video
              className="video-player"
              id="video-player"
              src={video}
              autoplay
            ></Video>
          ) : (
            <Image
              className="video-poster"
              src={poster}
              mode="aspectFill"
              lazyLoad
            />
          )
        }
        <View className="video-play-button"></View>
        <View className="tag">
          <Tag
            backgroundColor={COLORS.VIDEO_TAG_YELLOW}
          >视频</Tag>
        </View>
      </View>
    )
  }
}
