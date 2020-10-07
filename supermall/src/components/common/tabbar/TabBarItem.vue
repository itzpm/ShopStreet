<template>
  <div>
    <div class="tab-bar-item" @click="itemClick">
      <div style="display: inline" v-if="!isActive">
        <slot name="item-icon"></slot>
      </div>
      <div v-else style="display:inline;">
        <slot name="item-icon-active"></slot>
      </div>
      <div :style="activeStyle">
        <slot name="item-text"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabBarItem",
  props: {
    path: {
      type: String,
    },
    activeColor: {
      type: String,
      default: 'rgb(255, 87, 119)'
    }
  },
  computed: {
    isActive() {
      return this.$route.path == this.path
    },
    activeStyle() {
      return this.isActive ? {color: this.activeColor} : {}
    }
  },
  methods: {
    itemClick() {
      if (this.$route.path == this.path) {
        return
      }
      this.$router.replace(this.path);
    }
  }
}
</script>

<style scoped>
div, .tab-bar-item {
  /*一排元素平均分配*/
  flex: 1;
  text-align: center;
  height: 49px;
  /*line-height: 49px;*/
}

.tab-bar-item img {
  margin-top: 3px;
  height: 24px;
  vertical-align: middle;
  margin-bottom: 2px;
}

.tab-bar-item a {
  color: black;
  text-decoration: none;
}
</style>
