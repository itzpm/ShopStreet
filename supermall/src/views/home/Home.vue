<template>
  <div id="home">
    <nav-bar class="home-nav"><div slot="center-nav">购物街</div></nav-bar>
    <home-swiper :banner="banner"></home-swiper>
    <recommend-view :recommend="recommend"></recommend-view>
  </div>
</template>

<script>
import NavBar from "@/components/common/navbar/NavBar";
import ChildComps from "@/views/home/childComps/HomeSwiper";
import RecommendView from "@/views/home/childComps/RecommendView";

import {getHomeMultidata} from "@/network/home";
import HomeSwiper from "@/views/home/childComps/HomeSwiper";

export default {
  name: "Home",
  components: {
    HomeSwiper,
    NavBar,
    ChildComps,
    RecommendView
  },
  data() {
    return {
      banner:[],
      recommend:[]
    }
  },
  created() {
    getHomeMultidata().then(res => {
      this.banner = res.data.banner.list;
      this.recommend = res.data.recommend.list;
    })
  }
}
</script>

<style scoped>
.home-nav {
  background-color: rgb(255, 142, 150);
  color: white;
}
</style>
