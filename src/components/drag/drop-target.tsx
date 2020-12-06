import Taro, {
  useContext,
  useEffect,
  useRef
} from '@tarojs/taro';
import {
  View
} from '@tarojs/components';

import DragContext from './drag-context';

export default function DropTarge ({
  children,
  onDrop
}: {
  children,
  onDrop: (draggingSource: any) => void
}) {
  const {
    addDropListener,
    removeDropListener
  } = useContext(DragContext);
  const boxRef = useRef<any|null>(null)

  useEffect(() => {
    const callback = (
      draggingSource,
      position: null|{x: number, y: number}
    ) => {
      if (position && draggingSource && boxRef.current) {
        boxRef.current.boundingClientRect()
          .exec((res) => {
            const rect = res[0];
            if (
              rect.left < position.x &&
              rect.right > position.x &&
              rect.top < position.y &&
              rect.bottom > position.y
            ) {
              onDrop && onDrop(draggingSource);
            }
          })
      }
    }

    addDropListener(callback);
    return () => {
      removeDropListener(callback);
    }
  }, [addDropListener, removeDropListener, onDrop])
  return (
    <View
      ref={boxRef as any}
    >
      {children}
    </View>
  )
}