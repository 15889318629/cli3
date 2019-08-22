<template>
  <div>
    <canvas width="803" height="573" id="canvas"></canvas>
  </div>
</template>

<script>
export default {
  name: 'jtopo',
  mounted () {
    this.initTopo()
  },
  methods: {
    initTopo () {
      let canvas = document.getElementById('canvas')
      let stage = new JTopo.Stage(canvas)
      // stage.eagleEye.visible = true
      // stage.wheelZoom = 1.2 //缩放比例
      stage.wheelZoom = null
      let scene = new JTopo.Scene(stage)
      scene.mode = 'select'
      scene.areaSelect = false
      scene.background = 'static/img/bg.jpg'

      // var node = new JTopo.Node("难")
      // node.setLocation(409, 269)
      // scene.add(node)

      let from1 = this.newNode(scene, 0, 10, 3, 15)
      let to1 = this.newNode(scene, 500, 10, 3, 15)
      this.newArrowLink(scene, from1, to1, 'Link1')

      let from2 = this.newNode(scene, 100, 40, 3, 15)
      let to2 = this.newNode(scene, 700, 40, 3, 15)
      this.newArrowLink(scene, from2, to2, 'Link2')

      let from3 = this.newNode(scene, 95, 505, 30, 15, '', 'static/img/up.jpg')
      let to3 = this.newNode(scene, 195, 445, 30, 15, '', 'static/img/up.jpg')
      this.newLink(scene, from3, to3)

      for (let i = 0; i < 100; i++) {
        this.newLineNode(scene, 0, i * 30, 3000, 3)
      }

      for (let i = 0; i < 100; i++) {
        this.newLineNode(scene, i * 20, 0, 3, 3000)
      }

      // 将画布居中
      // stage.centerAndZoom()
    },
    // 背景线条节点
    newLineNode (scene, x, y, w, h, text, imgUrl) {
      var node = new JTopo.Node(text)
      node.dragable = false
      node.fillColor = '203,203,203'
      node.alpha = 1
      node.showSelected = false
      if (imgUrl) {
        node.setImage(imgUrl, true)
      }
      node.setLocation(x, y)
      node.setSize(w, h)
      scene.add(node)
      return node
    },
    // 节点
    newNode (scene, x, y, w, h, text, imgUrl) {
      var node = new JTopo.Node(text)
      node.dragable = false
      node.fillColor = '203,203,203'
      node.alpha = 1
      node.showSelected = false
      if (imgUrl) {
        node.setImage(imgUrl, true)
      }
      node.setLocation(x, y)
      node.setSize(w, h)
      node.zIndex = 20
      scene.add(node)
      return node
    },
    // 简单连线
    newArrowLink (scene, nodeA, nodeZ, text, dashedPattern) {
      var link = new JTopo.Link(nodeA, nodeZ, text)
      link.fontColor = '0,0,0'
      link.lineWidth = 3 // 线宽
      link.dashedPattern = dashedPattern // 虚线
      link.bundleOffset = 60 // 折线拐角处的长度
      link.bundleGap = 20 // 线条之间的间隔
      link.textOffsetY = 12 // 文本偏移量（向下3个像素）
      link.arrowsRadius = 15
      link.strokeColor = '0,200,255'
      link.zIndex = 20
      scene.add(link)
      return link
    },
    // 简单连线
    newLink (scene, nodeA, nodeZ) {
      var link = new JTopo.Link(nodeA, nodeZ)
      link.fontColor = '0,0,0'
      link.lineWidth = 3 // 线宽
      link.strokeColor = '0,200,255'
      link.zIndex = 20
      scene.add(link)
      return link
    }
  }
}
</script>
