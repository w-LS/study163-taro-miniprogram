import BasePost from './base-post';

export default class VideoPost extends BasePost {
  static isVideoPost (obj: any): obj is VideoPost {
    return obj instanceof VideoPost;
  }

  get video () {
    return this.get('Video');
  }

  get poster () {
    return this.get('poster');
  }
}
