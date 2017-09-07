<template>
  <el-row>
    <el-col :span="12" class="content-box">
      <el-card class="box-card">
        <p>this is a content</p>
      </el-card>
    </el-col>
    <el-col :span="12" class="content-box">
      <el-card class="box-card">
        <p>this is another content</p>
      </el-card>
    </el-col>
  </el-row>
</template>

<script>
export default {
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

.content-box {
  padding-left: 12px;
  padding-right: 12px;
}

.box-card {
  transition: all .3s;
  border: none;
  border-radius: 0;
  box-shadow: none;
  &:hover {
    box-shadow: 4px 4px 40px rgba(0, 0, 0, .05);
    border-color: transparent;
  }
}
</style>
