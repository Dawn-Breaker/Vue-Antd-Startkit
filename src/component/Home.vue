<template>
  <div class="home">
    <aside :class="left ? 'home-sider home-sider-left' : 'home-sider'">
      <Sider />
    </aside>
    <div :class="left ? 'home-main home-main-left' : 'home-main'">
      <div class="home-header">
        <SysHeader />
      </div>
      <div class="home-content">
        <Container>
          <router-view></router-view>
        </Container>
      </div>
      <div class="home-footer">
        {{footer}}
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { footer } from '@/config'
import SysHeader from './layout/SysHeader'
import Sider from './layout/Sider'
import Container from './layout/Container'

export default {
  data() {
    return {
      footer,
      msg: 'Home',
    }
  },
  computed: mapState({
    left: state => state.dashboard.left,
  }),
  components: {
    SysHeader,
    Sider,
    Container,
  },
}
</script>

<style lang="scss">
.home {
  height: 100%;
  &-sider {
    position: absolute;
    width: 64px;
    height: 100%;
    &-left {
      width: 200px;
    }
  }
  &-main {
    overflow: auto;
    margin-left: 64px;
    height: 100vh;
    &-left {
      margin-left: 200px;
      transition: all 0.3s ease-in-out;
    }
  }
  &-content {
    background: #F8F8F8;
    overflow: hidden;
  }
  &-footer {
    position: fixed;
    bottom: 0;
    height: 48px;
    line-height: 48px;
    text-align: center;
    font-size: 12px;
    color: #999;
    background: #fff;
    width: 100%;
  }
}
</style>
