// @ts-nocheck
import Taro, {
  useState
} from '@tarojs/taro';
import {
  View
} from '@tarojs/components';

export default function NativeComponentPage () {
  const [clickCount, setClickCount] = useState(0)
  return (
    <View>
      <native-component
        name="小明12"
        onClick={() => {
          setClickCount(clickCount + 1)
        }}
        clickCount={clickCount}
      ></native-component>
    </View>
  )
}

NativeComponentPage.config = {
  'usingComponents': {
    'native-component': '../../components/native/index'
  }
}