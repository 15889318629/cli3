<template>
  <div class="about">
    <jtopo />
  </div>
</template>
<script>
import jtopo from '../components/jTopo'
import * as types from '../store/mutation-types'
export default {
  name: 'about',
  components: {
    jtopo
  },
  mounted () {
    this.init()
  },
  methods: {
    init () {
      this.$store.commit(types.THEME_SEARCHLEVEL, 1)
    }
  }
}
</script>
