import Taro from '@tarojs/taro';

export default Taro.createContext<{
  startDrag: (
    dragSource: any,
    startOffset: { x: number, y: number }
  ) => void,
  draggingSource: any|null,
  movePosition: null|{x: number, y: number},
  addDropListener: (
    callback: (
      dragSource,
      position: null|{x:number, y:number}
    ) => void
  ) => void,
  removeDropListener: (
    callback: (
      dragSource,
      position: null|{x:number, y:number}
    ) => void
  ) => void,
}>({
  startDrag: () => {},
  draggingSource: null,
  movePosition: null,
  addDropListener: () => {},
  removeDropListener: () => {}
})