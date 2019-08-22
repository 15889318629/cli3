<template>
  <div id="app">
    <el-container class="home">
      <el-header id="header">Header</el-header>
      <el-container>
        <el-aside :lg="12">
          <mainNav />
        </el-aside>
        <el-main>
          <router-view />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import './assets/css/theme/0000ff/index.css' // 换肤版本0000ff css
import './assets/css/theme/008000/index.css' // 换肤版本008000 css
import './assets/css/theme/fa4f52/index.css' // 换肤版本fa4f52 css
import './assets/css/theme/20a0ff/index.css' // 换肤版本20a0ff css
import './assets/css/theme/00a597/index.css' // 换肤版本00a597 css
import './assets/common.scss'
import mainNav from '@/components/mainNav.vue'
export default {
  name: 'app',
  components: {
    mainNav
  },
  mounted () {
    let curcolor = this.$store.state.themecolor
    document.getElementById('header').style.cssText = 'background-color:' + '#' + curcolor
  },
  methods: {},
  watch: {
    themecolor: {
      handler () {
        document.getElementById('header').style.cssText = 'background-color:' + '#' + this.$store.state.themecolor
      }
    }
  },
  computed: {
    themecolor: {
      get () {
        return this.$store.state.themecolor
      }
    }
  }
}
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#header {
  height: 70px;
  color: #fff;
  font-size: 30px;
  line-height: 70px;
}
</style>
