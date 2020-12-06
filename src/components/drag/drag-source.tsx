import Taro, {
  useContext,
  useRef
} from '@tarojs/taro';
import { View } from '@tarojs/components';

import DragContext from './drag-context';

export default function DragSource ({
  children
}: {
  children
}) {
  const {
    startDrag,
    draggingSource,
    movePosition
  } = useContext(DragContext);
  const boxRef = useRef<null|any>(null);
  const offsetRef = useRef<null|{x: number, y: number}>(null);
  const thisRef = useRef({});

  const style = draggingSource === thisRef.current && movePosition ? {
    position: 'fixed' as 'fixed',
    left: 0,
    top: 0,
    transform: `translate3d(
      ${movePosition.x - (offsetRef.current ? offsetRef.current.x : 0) + 'px'},
      ${movePosition.y - (offsetRef.current ? offsetRef.current.y : 0) + 'px'},
      0
    )`
  } : {};

  const handleStartDarg = (position) => {
    const box = boxRef.current
    if (box) {
      box.boundingClientRect()
        .exec((res) => {
          const rect = res[0];
          offsetRef.current = {
            x: position.x - rect.left,
            y: position.y - rect.top,
          }

          startDrag(
            thisRef.current,
            position
          )
        })
    }
  }
  return (
    <View
      ref={boxRef as any}
      style={style}
      onLongPress={(event: any) => {
        const touch = event.touches[0];
        handleStartDarg({
          x: touch.clientX,
          y: touch.clientY
        });

      }}
    >
      {children}
    </View>
  )
}