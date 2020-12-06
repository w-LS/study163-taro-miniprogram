import Taro from '@tarojs/taro';
import { View, Image, Text } from '@tarojs/components';

import ImagePost from '@/models/image-post';
import Tag from '@/components/widgets/tags';

import './index.less';

export default function ImagePostCard (
  {
    post
  }: {
    post: ImagePost
  }
) {

  const images = post.images;
  const total = images.length;
  const showingImageMax = 9;
  const moreImageCount = total - showingImageMax;
  const lastShowingIndex = moreImageCount > 0 ? showingImageMax - 1 : showingImageMax;
  const moreImages = images.slice(0, lastShowingIndex);
  const lastMoreImage = images[lastShowingIndex];

  const topRightRadiusIndex = Math.min(
    lastShowingIndex,
    2
  );

  const bottomLeftRadiusIndex = 3 * Math.floor((moreImages.length - 1) / 3);

  return (
    <View className="album-box">
      <View className="album-list">
        {
          moreImages.map((image, index) => {
            return (
              <View
                key={image}
                className={
                  [
                    "album-item",
                    index === topRightRadiusIndex ? 'album-item-top-right': '',
                    index === bottomLeftRadiusIndex ? 'album-item-bottom-left': ''
                  ].join(' ')
                }
              >
                <Image
                  className="album-image"
                  src={image}
                  mode="aspectFill"
                  lazyLoad
                />
              </View>
            )
          })
        }
        {
          lastMoreImage && (
            <View
              key={lastMoreImage}
              className="album-item"
            >
              <Image
                className="album-image"
                src={lastMoreImage}
                mode="aspectFill"
                lazyLoad
              />
              <View className="more-image-count">
                <Text>+{moreImageCount}</Text>
              </View>
            </View>
          )
        }
      </View>
      <View className="tag">
        <Tag>图片</Tag>
      </View>
    </View>
  )
}

ImagePostCard.defaultProps = {
  post: {
    images: []
  }
}
