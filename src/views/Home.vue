<template>
  <el-row>
    <el-row class="tac">
      <el-col :span="20">
        <HelloWorld />
      </el-col>
    </el-row>
    <el-row :class="hhh">
      1111111111
    </el-row>
  </el-row>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
// import { nextTick } from "q";
import { getData } from '../api/home/home'
// import * as types from '../store/mutation-types'

export default {
  name: 'home',
  components: {
    HelloWorld
  },
  data () {
    return {
      active: 0,
      hhh: 'custome-20a0ff'
    }
  },
  mounted () {
    this.init()
    let curcolor = this.$store.state.themecolor
    this.hhh = 'custome-' + curcolor
    document.getElementsByClassName('header')[0].style.cssText = 'background-color:' + '#' + curcolor
  },
  methods: {
    init () {
      getData('province_quality/cityQualityControlScoreAndRankInCountry')
        .then(result => {
          console.log(11111111111)
        })
        .catch(err => {
          console.log('Inside error, fetching product line items failed', err)
        })
    },
    next () {
      if (this.active++ > 3) this.active = 0
    }
  }
}
</script>
<style lang="scss" scoped>
.header {
  height: 70px;
  color: #fff;
  font-size: 30px;
  line-height: 70px;
}
</style>
