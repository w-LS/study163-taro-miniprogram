import Taro, {
  useState,
  useCallback,
  useRef
} from '@tarojs/taro';
import {
  View
} from '@tarojs/components';

import DragContext from './drag-context'


export default function DragArea ({ children }) {
  const [draggingSource, setDraggingSource] = useState<null|any>(null);
  const [movePosition, setMovePosition] = useState<null|{x: number, y: number}>(null);
  const dropHandlersRef = useRef<((
    draggingSource: any, movePosition: null|{x: number, y: number}
  ) => {})[]>([])

  const addDropListener = useCallback((callback) => {
    dropHandlersRef.current.push(callback);
  }, []);

  const removeDropListener = useCallback((callback) => {
    const index = dropHandlersRef.current.findIndex((dropHandler) => dropHandler === callback);
    if (index >= 0) {
      dropHandlersRef.current.splice(index, 1);
    }
  }, []);

  return (
    <View
      onTouchMove={(event: any) => {
        const touch = event.changedTouches[0];
        if (draggingSource) {
          setMovePosition({
            x: touch.clientX,
            y: touch.clientY
          })
        }
      }}
      onTouchCancel={() => {
        setMovePosition(null);
        setDraggingSource(null);
      }}
      onTouchEnd={() => {
        // TODO: doDropListener
        dropHandlersRef.current.forEach((dropHandler) => {
          dropHandler(draggingSource, movePosition);
        })
        setMovePosition(null);
        setDraggingSource(null);
      }}
    >
      <DragContext.Provider
        value={{
          startDrag: (
            dragSource,
            initPosition
          ) => {
            setDraggingSource(dragSource);
            setMovePosition(initPosition);
          },
          draggingSource: draggingSource,
          movePosition: movePosition,
          addDropListener: addDropListener,
          removeDropListener: removeDropListener
        }}
      >
        {children}
      </DragContext.Provider>
    </View>
  )
}