module.exports = {
  'GET /api/post/detail/1': {
    code: 200,
    data: {
      id: 1,
      title: '图片文章1',
      type: 'image',
      createTime: 1577836800000,
      images: [
        'https://easyreadfs.nosdn.127.net/1592120750597/img_ODlFV2dPWEVGc3pJQ0ZEZk9jNjBCNkdXZ2xhWFJIOFJzaGlhZXl6RHRGU0Vpc01aTGl5cXJ3PT0.jpg',
        'https://easyreadfs.nosdn.127.net/1592120750597/img_ODlFV2dPWEVGc3pJQ0ZEZk9jNjBCNkdXZ2xhWFJIOFJzaGlhZXl6RHRGU0Vpc01aTGl5cXJ3PT0.jpg'
      ],
      author: {
        name: '小红',
        avatar: 'https://easyreadfs.nosdn.127.net/1592120750597/img_ODlFV2dPWEVGc3pJQ0ZEZk9jNjBCNkdXZ2xhWFJIOFJzaGlhZXl6RHRGU0Vpc01aTGl5cXJ3PT0.jpg'
      }
    }
  },
  'GET /api/post/detail/2': {
    code: 200,
    data: {
      id: 2,
      title: '视频文章1',
      type: 'video',
      createTime: 1577836800000,
      video: 'https://easyreadfs.nosdn.127.net/1592120820155/trailer.mp4',
      poster: 'https://easyreadfs.nosdn.127.net/1592120750597/img_ODlFV2dPWEVGc3pJQ0ZEZk9jNjBCNkdXZ2xhWFJIOFJzaGlhZXl6RHRGU0Vpc01aTGl5cXJ3PT0.jpg',
      author: {
        name: '小红',
        avatar: 'https://easyreadfs.nosdn.127.net/1592120750597/img_ODlFV2dPWEVGc3pJQ0ZEZk9jNjBCNkdXZ2xhWFJIOFJzaGlhZXl6RHRGU0Vpc01aTGl5cXJ3PT0.jpg'
      }
    }
  },
  'GET /api/post/list/1': {
    code: 200,
    data: [
      {
        id: 1,
        title: '图片文章1',
        type: 'image',
        createTime: 1577836800000,
        images: [
          'https://easyreadfs.nosdn.127.net/1592120750597/img_ODlFV2dPWEVGc3pJQ0ZEZk9jNjBCNkdXZ2xhWFJIOFJzaGlhZXl6RHRGU0Vpc01aTGl5cXJ3PT0.jpg',
          'https://easyreadfs.nosdn.127.net/1592120750597/img_ODlFV2dPWEVGc3pJQ0ZEZk9jNjBCNkdXZ2xhWFJIOFJzaGlhZXl6RHRGU0Vpc01aTGl5cXJ3PT0.jpg',
          'https://easyreadfs.nosdn.127.net/1592120750597/img_ODlFV2dPWEVGc3pJQ0ZEZk9jNjBCNkdXZ2xhWFJIOFJzaGlhZXl6RHRGU0Vpc01aTGl5cXJ3PT0.jpg'
        ],
        author: {
          name: '小红',
          avatar: 'https://easyreadfs.nosdn.127.net/1592120750597/img_ODlFV2dPWEVGc3pJQ0ZEZk9jNjBCNkdXZ2xhWFJIOFJzaGlhZXl6RHRGU0Vpc01aTGl5cXJ3PT0.jpg'
        }
      },
      {
        id: 2,
        title: '视频文章1',
        type: 'video',
        createTime: 1577836800000,
        video: 'https://easyreadfs.nosdn.127.net/1592120820155/trailer.mp4',
        poster: 'https://easyreadfs.nosdn.127.net/1592120750597/img_ODlFV2dPWEVGc3pJQ0ZEZk9jNjBCNkdXZ2xhWFJIOFJzaGlhZXl6RHRGU0Vpc01aTGl5cXJ3PT0.jpg',
        author: {
          name: '小红',
          avatar: 'https://easyreadfs.nosdn.127.net/1592120750597/img_ODlFV2dPWEVGc3pJQ0ZEZk9jNjBCNkdXZ2xhWFJIOFJzaGlhZXl6RHRGU0Vpc01aTGl5cXJ3PT0.jpg'
        }
      },
      {
        id: 3,
        title: '图片文章3',
        type: 'image',
        createTime: 1577836800000,
        images: [
          'https://easyreadfs.nosdn.127.net/1592120750597/img_ODlFV2dPWEVGc3pJQ0ZEZk9jNjBCNkdXZ2xhWFJIOFJzaGlhZXl6RHRGU0Vpc01aTGl5cXJ3PT0.jpg',
          'https://easyreadfs.nosdn.127.net/1592120750597/img_ODlFV2dPWEVGc3pJQ0ZEZk9jNjBCNkdXZ2xhWFJIOFJzaGlhZXl6RHRGU0Vpc01aTGl5cXJ3PT0.jpg',
          'https://easyreadfs.nosdn.127.net/1592120750597/img_ODlFV2dPWEVGc3pJQ0ZEZk9jNjBCNkdXZ2xhWFJIOFJzaGlhZXl6RHRGU0Vpc01aTGl5cXJ3PT0.jpg'
        ],
        author: {
          name: '小红',
          avatar: 'https://easyreadfs.nosdn.127.net/1592120750597/img_ODlFV2dPWEVGc3pJQ0ZEZk9jNjBCNkdXZ2xhWFJIOFJzaGlhZXl6RHRGU0Vpc01aTGl5cXJ3PT0.jpg'
        }
      },
      {
        id: 4,
        title: '视频文章4',
        type: 'video',
        createTime: 1577836800000,
        video: 'https://easyreadfs.nosdn.127.net/1592120820155/trailer.mp4',
        poster: 'https://easyreadfs.nosdn.127.net/1592120750597/img_ODlFV2dPWEVGc3pJQ0ZEZk9jNjBCNkdXZ2xhWFJIOFJzaGlhZXl6RHRGU0Vpc01aTGl5cXJ3PT0.jpg',
        author: {
          name: '小红',
          avatar: 'https://easyreadfs.nosdn.127.net/1592120750597/img_ODlFV2dPWEVGc3pJQ0ZEZk9jNjBCNkdXZ2xhWFJIOFJzaGlhZXl6RHRGU0Vpc01aTGl5cXJ3PT0.jpg'
        }
      }
    ]
  },
  'GET /api/post/list/2': {
    code: 200,
    data: [
      {
        id: 11,
        title: '图片文章11',
        type: 'image',
        createTime: 1577836800000,
        images: [
          'https://easyreadfs.nosdn.127.net/1592120750597/img_ODlFV2dPWEVGc3pJQ0ZEZk9jNjBCNkdXZ2xhWFJIOFJzaGlhZXl6RHRGU0Vpc01aTGl5cXJ3PT0.jpg',
          'https://easyreadfs.nosdn.127.net/1592120750597/img_ODlFV2dPWEVGc3pJQ0ZEZk9jNjBCNkdXZ2xhWFJIOFJzaGlhZXl6RHRGU0Vpc01aTGl5cXJ3PT0.jpg'
        ],
        author: {
          name: '小红',
          avatar: 'https://easyreadfs.nosdn.127.net/1592120750597/img_ODlFV2dPWEVGc3pJQ0ZEZk9jNjBCNkdXZ2xhWFJIOFJzaGlhZXl6RHRGU0Vpc01aTGl5cXJ3PT0.jpg'
        }
      },
      {
        id: 12,
        title: '视频文章12',
        type: 'video',
        createTime: 1577836800000,
        video: 'https://easyreadfs.nosdn.127.net/1592120820155/trailer.mp4',
        poster: 'https://easyreadfs.nosdn.127.net/1592120750597/img_ODlFV2dPWEVGc3pJQ0ZEZk9jNjBCNkdXZ2xhWFJIOFJzaGlhZXl6RHRGU0Vpc01aTGl5cXJ3PT0.jpg',
        author: {
          name: '小红',
          avatar: 'https://easyreadfs.nosdn.127.net/1592120750597/img_ODlFV2dPWEVGc3pJQ0ZEZk9jNjBCNkdXZ2xhWFJIOFJzaGlhZXl6RHRGU0Vpc01aTGl5cXJ3PT0.jpg'
        }
      },
      {
        id: 13,
        title: '图片文章13',
        type: 'image',
        createTime: 1577836800000,
        images: [
          'https://easyreadfs.nosdn.127.net/1592120750597/img_ODlFV2dPWEVGc3pJQ0ZEZk9jNjBCNkdXZ2xhWFJIOFJzaGlhZXl6RHRGU0Vpc01aTGl5cXJ3PT0.jpg',
          'https://easyreadfs.nosdn.127.net/1592120750597/img_ODlFV2dPWEVGc3pJQ0ZEZk9jNjBCNkdXZ2xhWFJIOFJzaGlhZXl6RHRGU0Vpc01aTGl5cXJ3PT0.jpg'
        ],
        author: {
          name: '小红',
          avatar: 'https://easyreadfs.nosdn.127.net/1592120750597/img_ODlFV2dPWEVGc3pJQ0ZEZk9jNjBCNkdXZ2xhWFJIOFJzaGlhZXl6RHRGU0Vpc01aTGl5cXJ3PT0.jpg'
        }
      },
      {
        id: 14,
        title: '视频文章14',
        type: 'video',
        createTime: 1577836800000,
        video: 'https://easyreadfs.nosdn.127.net/1592120820155/trailer.mp4',
        poster: 'https://easyreadfs.nosdn.127.net/1592120750597/img_ODlFV2dPWEVGc3pJQ0ZEZk9jNjBCNkdXZ2xhWFJIOFJzaGlhZXl6RHRGU0Vpc01aTGl5cXJ3PT0.jpg',
        author: {
          name: '小红',
          avatar: 'https://easyreadfs.nosdn.127.net/1592120750597/img_ODlFV2dPWEVGc3pJQ0ZEZk9jNjBCNkdXZ2xhWFJIOFJzaGlhZXl6RHRGU0Vpc01aTGl5cXJ3PT0.jpg'
        }
      }
    ]
  }
}