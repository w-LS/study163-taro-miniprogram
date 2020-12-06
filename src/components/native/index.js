Component({
  data: {
    text: '这是一个原生组件'
  },

  properties: {
    name: String,
    clickCount: Number
  },

  methods: {
    handleTap: function () {
      this.triggerEvent('click')
    }
  }
})