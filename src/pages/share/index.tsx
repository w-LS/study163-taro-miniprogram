import Taro, {
  useEffect,
  useState,
  useShareAppMessage
} from '@tarojs/taro';
import {
  View, Canvas, Button
} from '@tarojs/components';


const imageUrls = [
  'https://easyreadfs.nosdn.127.net/1592120750597/img_ODlFV2dPWEVGc3pJQ0ZEZk9jNjBCNkdXZ2xhWFJIOFJzaGlhZXl6RHRGU0Vpc01aTGl5cXJ3PT0.jpg',
  'https://easyreadfs.nosdn.127.net/1592120750597/img_ODlFV2dPWEVGc3pJQ0ZEZk9jNjBCNkdXZ2xhWFJIOFJzaGlhZXl6RHRGU0Vpc01aTGl5cXJ3PT0.jpg',
  'https://easyreadfs.nosdn.127.net/1592120750597/img_ODlFV2dPWEVGc3pJQ0ZEZk9jNjBCNkdXZ2xhWFJIOFJzaGlhZXl6RHRGU0Vpc01aTGl5cXJ3PT0.jpg',
  'https://easyreadfs.nosdn.127.net/1592120750597/img_ODlFV2dPWEVGc3pJQ0ZEZk9jNjBCNkdXZ2xhWFJIOFJzaGlhZXl6RHRGU0Vpc01aTGl5cXJ3PT0.jpg'
];

export default function SharePage () {
  const [shareImage, setShareImage] = useState('');

  useShareAppMessage((res) => {
    let shareInfo: any = {};
    if (res.from === 'button') {
      const target: any = res.target;
      if (
        target &&
        target.dataset &&
        target.dataset.shareInfo
      ) {
        shareInfo = target.dataset.shareInfo;
      }
    }
    console.log(shareInfo);
    return shareInfo;
  });

  useEffect(() => {
    const query = Taro.createSelectorQuery()
    query.select('#canvas')
      .fields({ node: true, size: true })
      .exec(async (res) => {
        const canvas = res[0].node;
        canvas.width = 200;
        canvas.height = 200;

        await Promise.all(
          imageUrls.map((imageUrl, index) => {
            return drawImage(canvas, imageUrl, {
              x: (index % 2) * 100,
              y: Math.floor(index / 2) * 100,
              width: 100,
              height: 100
            })
          })
        );

        const tempFileRes = await Taro.canvasToTempFilePath({
          canvas: canvas,
          canvasId: 'canvas'
        });

        setShareImage(tempFileRes.tempFilePath)
      })
  }, []);

  return (
    <View>
      <Button
        openType="share"
        data-share-info={{ title: '分享标题123123', imageUrl: shareImage }}
      >分享</Button>
      <Canvas
        style={{ width: '200px', height: '200px' }}
        id="canvas"
        canvasId="canvas"
        type="2d"
      />
    </View>
  )
}

function drawImage (canvas, imageUrl, position: {
  x: number,
  y: number,
  width: number,
  height: number
}) {
  return new Promise((resolve) => {
    const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;
    const image = canvas.createImage();
    image.src = imageUrl;
    image.onload = function () {
      ctx.drawImage(image, 0, 0, image.width, image.height, position.x, position.y, position.width, position.height);
      resolve();
    }
  })
}
