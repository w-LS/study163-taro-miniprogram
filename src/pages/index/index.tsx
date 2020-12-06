import Taro, {
  useState,
  useRef,
  useEffect,
  Config,
  usePullDownRefresh,
  usePageScroll
} from '@tarojs/taro'
import { View } from '@tarojs/components'

import PostCard from '@/components/post-card';

import VideoPost from '@/models/video-post';

import {
  fetchPostList
} from '@/actions/post';
import {
  createPost,
  PostType
} from '@/models/post';

import './index.less'

const SCROLL_TIME = 200;

export default function Index () {
  const [postList, setPostList] = useState<PostType[]>([]);
  const scrollTimeout = useRef<any|null>(null);
  const postCardsRef = useRef<any[]>([]);
  const showingVideoCardRef = useRef<any|null>(null);

  const refresh = async () => {
    const response = await fetchPostList(1)
    const { data } = response;
    const newPosts = data.data.map((postData) => {
      return createPost(postData);
    })
    setPostList(newPosts);
  }

  usePullDownRefresh(async () => {
    await refresh();
    Taro.stopPullDownRefresh();
  })

  useEffect(() => {
    refresh();
  }, []);

  const checkWillShowVideoPost = () => {
    const query = Taro.createSelectorQuery();
    query.selectAll('.video-post')
      .boundingClientRect()
      .exec((res) => {
        const {
          windowHeight
        } = Taro.getSystemInfoSync();

        const current = res[0].find((rect) => {
          let {
            top,
            bottom,
            height
          } = rect;

          return (
            (bottom > height / 2) && (windowHeight - top > height / 2)
          )
        })

        if (current) {
          const postId = current.dataset.postId;
          const willShowPostCard = postCardsRef.current[postId];
          if (willShowPostCard) {
            if (
              showingVideoCardRef.current && showingVideoCardRef.current.postId === postId
            ) {
              showingVideoCardRef.current.resume();
            } else {
              willShowPostCard.play();
              if (showingVideoCardRef.current) {
                showingVideoCardRef.current.stop();
              }
              showingVideoCardRef.current = willShowPostCard;
            }
          }
        }
      })
  }

  usePageScroll(() => {
    if (showingVideoCardRef.current) {
      showingVideoCardRef.current.pause();
    }

    if (scrollTimeout.current) {
      clearTimeout(scrollTimeout.current);
    }
    scrollTimeout.current = setTimeout(() => {
      // finish
      checkWillShowVideoPost();
    }, SCROLL_TIME);
  })

  return (
    <View className='index'>
      {
        postList.map((post, index) => {
          const { id } = post;
          const isVideoPost = VideoPost.isVideoPost(post)
          return (
            <View
              key={id}
              className={ isVideoPost ? 'video-post' : ''}
              data-post-id={id}
            >
              <PostCard
                ref={(postCard) => { postCardsRef.current[id] = postCard }}
                key={`post-${id}`}
                post={post}
              />
            </View>
          )
        })
      }
    </View>
  )
}

Index.config = {
  navigationBarTitleText: '首页',
  enablePullDownRefresh: true
} as Config
