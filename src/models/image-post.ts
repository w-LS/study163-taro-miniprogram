import BasePost from './base-post';

export default class ImagePost extends BasePost {
  static isImagePost (obj: any): obj is ImagePost {
    return obj instanceof ImagePost;
  }

  get images (): string[] {
    return this.get('images');
  }
}
