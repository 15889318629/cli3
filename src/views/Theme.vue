<template>
  <div>
    <el-col class="app-container">
      <el-card class="box-card">
        <div slot="header">
          <span style="line-height: 36px;">偏好设置</span>
        </div>
        <div class="mulColor">
          <el-radio-group v-model="themecolor">
            <el-radio label="20a0ff">默认-20a0ff</el-radio>
            <el-radio label="fa4f52">橙色-fa4f52</el-radio>
            <el-radio label="0000ff">紫色-0000ff</el-radio>
            <el-radio label="008000">草绿-008000</el-radio>
            <el-radio label="00a597">蓝绿-00a597</el-radio>
          </el-radio-group>
        </div>
      </el-card>
      <div class="block">
        <span class="demonstration">Button: </span>
        <span class="wrapper">
          <el-button type="primary">主要按钮</el-button>
          <el-button type="success">成功按钮</el-button>
          <el-button type="warning">警告按钮</el-button>
          <el-button type="danger">危险按钮</el-button>
          <el-button type="info">信息按钮</el-button>
        </span>
      </div>
      <div class="block">
        <el-tag
          class='tag-item'
          v-for="tag in tags"
          :type="tag.type"
          :key='tag.type'
        >
          {{tag.name}}
        </el-tag>
      </div>

      <div class="block">
        <el-alert
          class='alert-item'
          title="成功提示的文案"
          type="success"
        >
        </el-alert>
        <el-alert
          class='alert-item'
          title="消息提示的文案"
          type="info"
        >
        </el-alert>
        <el-alert
          class='alert-item'
          title="警告提示的文案"
          type="warning"
        >
        </el-alert>
        <el-alert
          class='alert-item'
          title="错误提示的文案"
          type="error"
        >
        </el-alert>
      </div>
      <div class="row">
        <el-checkbox
          :indeterminate="isIndeterminate"
          v-model="checkAll"
          @change="handleCheckAllChange"
        >全选</el-checkbox>
        <div style="margin: 15px 0;"></div>
        <el-checkbox-group
          v-model="checkedCities"
          @change="handleCheckedCitiesChange"
        >
          <el-checkbox
            v-for="city in cities"
            :label="city"
            :key="city"
          >{{city}}</el-checkbox>
        </el-checkbox-group>
      </div>
      <div class="row">
        <el-input
          v-model="input"
          placeholder="请输入内容"
        ></el-input>
      </div>
    </el-col>
  </div>
</template>
<script>
import * as types from '../store/mutation-types'
import { toggleClass } from '../components/utils/index'
export default {
  name: 'theme',
  components: {
  },
  data () {
    return {
      tags: [
        { name: '标签一', type: '' },
        { name: '标签三', type: 'info' },
        { name: '标签四', type: 'success' },
        { name: '标签五', type: 'warning' },
        { name: '标签六', type: 'danger' }
      ],
      checkAll: false,
      checkedCities: ['上海', '北京'],
      cities: ['上海', '北京', '广州', '深圳'],
      isIndeterminate: true,
      activeIndex: '1',
      activeIndex2: '1'
    }
  },
  mounted () {
    toggleClass(document.body, 'custom-' + this.themecolor)
  },
  methods: {
    handleSelect (key, keyPath) {
      console.log(key, keyPath)
    },
    toggleClass (element, className) {
      if (!element || !className) {
        return
      }
      element.className = className
    },
    handleCheckAllChange (val) {
      this.checkedCities = val ? this.cities : []
      this.isIndeterminate = false
    },
    handleCheckedCitiesChange (value) {
      let checkedCount = value.length
      this.checkAll = checkedCount === this.cities.length
      this.isIndeterminate = checkedCount > 0 && checkedCount < this.cities.length
    }
  },
  watch: {
    themecolor: {
      handler () {
        toggleClass(document.body, 'custom-' + this.themecolor)
      }
    }
  },
  computed: {
    themecolor: {
      get () {
        return this.$store.state.themecolor
      },
      set (val) {
        this.$store.commit(types.theme_color, val)
        console.log(this.$store.state.themecolor)
      }
    }
  }
}
</script>
<style lang='scss' scoped>
.sidemenu {
  float: left;
  .el-menu-vertical-demo {
    min-height: 700px;
  }
}
.app-container {
  float: right;
}
.box-card {
  width: 400px;
  margin: 20px auto;
}
.block {
  padding: 30px 24px;
}
.alert-item {
  margin-bottom: 10px;
}
.tag-item {
  margin-right: 15px;
}
.link-title {
  margin-left: 35px;
}
.mulColor {
  margin-top: 15px;
  padding-bottom: 5px;
}
.el-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
</style>
