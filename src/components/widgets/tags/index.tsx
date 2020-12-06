import Taro  from '@tarojs/taro';
import { View } from '@tarojs/components';

import './index.less';

export default function Tag (props) {
  const { style, onClick, backgroundColor } = props;

  return (
    <View
      className="tag"
      style={
        [
          style,
          backgroundColor ? `background-color:${backgroundColor}`: ''
        ].join(';')
      }
      onClick={(event) => onClick && onClick(event)}
    >{this.props.children}</View>
  )
}
