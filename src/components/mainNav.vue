<template>
  <el-row>
    <el-col class="sidemenu">
      <el-menu
        class="el-menu-vertical-demo"
        :default-active="$route.path"
        router="router"
      >
        <el-menu-item index="/theme">
          <i class="el-icon-edit"></i>
          <span slot="title">换肤</span>
        </el-menu-item>
        <el-submenu index="2">
          <template slot="title">
            <i class="iconfont icon-gongneng"></i>
            <span>功能一</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="/">首页</el-menu-item>
            <el-menu-item index="/about">图表</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="3">
          <template slot="title">
            <i class="iconfont icon-shezhi"></i>
            <span>功能二</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="/theme">换肤</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
      </el-menu>
    </el-col>
    <el-col
      :xs="24"
      :sm="0"
      :lg="0"
    >
      <el-menu
        :default-active="activeIndex"
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
      >
        <el-menu-item index="1">处理中心</el-menu-item>
        <el-submenu index="2">
          <template slot="title">我的工作台</template>
          <el-menu-item index="2-1">选项1</el-menu-item>
          <el-menu-item index="2-2">选项2</el-menu-item>
          <el-menu-item index="2-3">选项3</el-menu-item>
          <el-submenu index="2-4">
            <template slot="title">选项4</template>
            <el-menu-item index="2-4-1">选项1</el-menu-item>
            <el-menu-item index="2-4-2">选项2</el-menu-item>
            <el-menu-item index="2-4-3">选项3</el-menu-item>
          </el-submenu>
        </el-submenu>
        <el-menu-item
          index="3"
          disabled
        >消息中心</el-menu-item>
        <el-menu-item index="4"><a
            href="https://www.ele.me"
            target="_blank"
          >订单管理</a></el-menu-item>
      </el-menu>
    </el-col>
  </el-row>
</template>
<script>
export default {
  methods: {
    handleSelect (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>
