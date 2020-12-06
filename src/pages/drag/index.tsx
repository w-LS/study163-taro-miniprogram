import Taro from '@tarojs/taro';
import { View } from '@tarojs/components';

import DragArea from '@/components/drag/drag-area';
import DragSource from '@/components/drag/drag-source';
import DropTarget from '@/components/drag/drop-target';

export default function DragPage () {
  return (
    <DragArea>
      <DragSource>
        <View>我可以拽起哦</View>
      </DragSource>
      <View style={{
        position: 'fixed',
        left: 0,
        bottom: 0
      }}>
        <DropTarget
          onDrop={() => {
            Taro.showToast({
              title: 'ok'
            })
          }}
        >
          <View>我可以放在这里</View>
        </DropTarget>
      </View>
    </DragArea>
  )
}