import BasePost from './base-post';
import ImagePost from './image-post';
import VideoPost from './video-post';

const TypePostMap = {
  image: ImagePost,
  video: VideoPost
}

export type PostType = ImagePost|VideoPost|BasePost;

export function createPost (json: any) {
  let CurrentPost = TypePostMap[json.type];
  if (!CurrentPost) {
    CurrentPost = BasePost;
  }
  return new CurrentPost(json);
}
