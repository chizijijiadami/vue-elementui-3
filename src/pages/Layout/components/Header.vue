<template>
  <div class="app-header">
    <Menu v-if="menuLocation==='H'"/>
    <el-button v-if="menuLocation!=='H'" type="primary"  plain  @click='setMenuIsCollapse' :icon="isCollapse?'el-icon-s-fold':'el-icon-s-unfold'"></el-button>
  </div>
</template>

<script>
import Menu from "./Menu";
import { mapGetters } from "vuex";
export default {
  components:{
    Menu
  },
  computed: {
     ...mapGetters(["app"]),
    isCollapse() {
      return this.app.menu.isCollapse;
    },
    menuLocation() {
      return this.app.menu.location;
    }
  },
  methods:{
    setMenuIsCollapse(){
      this.$store.dispatch('setMenuIsCollapse');
    }
  }
};
</script>

<style>
</style>