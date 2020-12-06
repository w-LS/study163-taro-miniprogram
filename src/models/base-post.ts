import Model  from './core/model';

export default class BasePost extends Model {
  static isPost (obj: any): obj is BasePost {
    return obj instanceof BasePost;
  }

  get id (): string {
    return this.get('id');
  }

  get title (): string {
    return this.get('title');
  }

  get createTime (): number {
    return this.get('createTime');
  }

  get formattedCreateTime (): string {
    // 2000-01-10
    const time = this.createTime;
    const date = new Date(time)
    return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
  }

  get author (): {
    avatar: string,
    name: string
  } {
    return this.get('author');
  }

  get authorAvatar () {
    return this.author.avatar;
  }

  get authorName () {
    return this.author.name;
  }
}
