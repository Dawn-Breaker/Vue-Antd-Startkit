<template>
  <div class="sider">
    <div class="sider-logo">
      <img class="sider-logo-img" src="../../../public/assets/img/logo.png" />
      <span :class="isCollapse ? 'sys-name sys-name-hide' : 'sys-name'">{{ system }}</span>
    </div>
    <el-menu default-active="1-1-2" :collapse="isCollapse" :router="true">
      <el-submenu v-for="(item, index) in menu" v-if="item.children" :index="item.index" class="sider-submenu" :key="'menu-' + index">
        <template slot="title">
          <i v-if="item.icon" :class="'icon anticon icon-' + item.icon"></i>
          <span slot="title">{{ item.title }}</span>
        </template>
        <el-menu-item-group v-if="item.children">
          <el-menu-item v-for="(m, index) in item.children" :key="'sub-' + index" :index="m.index" :route="m.route">
            <i v-if="m.icon" :class="'icon anticon icon-' + item.icon"></i>
            {{ m.title }}
          </el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-menu-item v-for="(item, index) in menu" v-if="!item.children" :index="item.index" :key="'menu-' + index" :route="item.route">
        <i v-if="item.icon" :class="'icon anticon icon-' + item.icon"></i>
        <span slot="title">{{ item.title }}</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { system, menu } from '@/config'

export default {
  data() {
    return {
      system,
      menu,
    }
  },
  computed: mapState({
    isCollapse: state => state.dashboard.isCollapse,
  }),
}

</script>

<style>

.sider {
  height: 100%;
}

.sider>.el-menu {
  height: 100%;
  background: #fff;
  transition: all 0.3s ease-out;
  box-shadow: 4px 4px 20px 0 rgba(0, 0, 0, .01);
  color: #999;
}

.sider .el-submenu>.el-menu {
  background: #fff;
  color: #999;
}

.sider .el-submenu .el-menu-item:hover,
.el-submenu__title:hover {
  background-color: rgba(16, 142, 233, 0.15);
}

.sider .el-menu--horizontal.el-menu--dark .el-submenu .el-menu-item:hover,
.el-menu--horizontal.el-menu--dark .el-submenu .el-submenu-title:hover,
.el-menu-item:hover {
  background-color: rgba(16, 142, 233, 0.15);
}

.sider .el-menu--horizontal.el-menu--dark .el-submenu .el-menu-item.is-active,
.el-menu-item.is-active {
  background-color: rgba(16, 142, 233, 0.15);
  border-bottom: 3px solid #108ee9;
}

.sider-logo {
  height: 60px;
  line-height: 60px;
  transition: all .3s ease-out;
}

.sider-logo-img {
  width: 40px;
  height: 40px;
  margin-top: 10px;
  margin-bottom: 8px;
  margin-left: 12px;
}

.sys-name {
  opacity: 1;
  margin-left: 10px;
  transition: all .3s ease-out;
  vertical-align: text-bottom;
  font-size: 16px;
  text-transform: uppercase;
  display: inline-block;
  color: #999;
}

.sys-name-hide {
  opacity: 0;
  transition: all .3s ease-out;
}

</style>
