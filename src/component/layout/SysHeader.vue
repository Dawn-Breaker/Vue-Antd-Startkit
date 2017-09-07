<template>
  <el-row class="header">
    <el-col :span="24" class="clearfix">
      <div class="header-menu-action" @click="openMenu">
        <i :class="'icon anticon header-menu-open ' + (isCollapse ? 'icon-menufold' : 'icon-menuunfold')"></i>
      </div>
      <div class="header-loading" v-loading="isLoading"></div>
    </el-col>
  </el-row>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

export default {
  computed: mapState({
    isCollapse: state => state.dashboard.isCollapse,
    left: state => state.dashboard.left,
    isLoading: state => state.dashboard.isLoading,
  }),
  methods: {
    ...mapMutations(['EXPAND_MENU', 'CHANGE_HEADER_LEFT']),
    openMenu() {
      this.EXPAND_MENU({
        isCollapse: !this.isCollapse,
      })
      this.CHANGE_HEADER_LEFT({
        left: !this.left,
      })
    },
  },
}
</script>

<style lang="scss">
.header {
  height: 48px;
  &-menu-open {
    font-size: 18px;
    line-height: 48px;
  }
  &-menu-action {
    float: left;
    width: 48px;
    height: 48px;
    line-height: 47px;
    text-align: center;
    font-size: 18px;
    cursor: pointer;
    &:hover {
      color: #108ee9;
      background-color: rgba(16, 142, 233, 0.15);
    }
  }
  &-loading {
    width: 48px;
    height: 48px;
    position: absolute;
    right: 5px;
  }
}

</style>
