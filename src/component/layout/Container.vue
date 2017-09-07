<template>
  <el-row class="container">
    <el-col :span="24" class="container-crumb">
      <i class="el-icon-menu container-crumb-icon"></i>
      <el-breadcrumb separator="/" class="container-bread">
        <el-breadcrumb-item>{{ pathName }}</el-breadcrumb-item>
      </el-breadcrumb>
    </el-col>
    <el-col :span="24" class="container-content">
      <slot>no content show here</slot>
    </el-col>
  </el-row>
</template>

<script>
export default {
  data() {
    return {
      pathName: '',
    }
  },
  watch: {
    $route: 'routeChange',
  },
  methods: {
    routeChange() {
      this.pathName = this.$router.currentRoute.name
    },
  },
}
</script>

<style lang="scss">
.container {
  &-crumb {
    margin-top: 20px;
    margin-bottom: 20px;
    margin-left: 34px;
    &-icon {
      margin-bottom: 3px;
      color: #999;
      font-size: 13px;
      line-height: 13px;
      vertical-align: middle;
      display: inline-block;
    }
  }
  &-bread {
    margin-left: 5px;
    display: inline-block;
  }
  &-content {
    padding: 20px;
  }
}
</style>
