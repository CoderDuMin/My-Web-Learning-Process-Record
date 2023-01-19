<template>
  <h2>App组件</h2>
  <button @click="changeTitle">改变标题</button>
  <button @click="getScroll">获取滚动位置</button>
  <hr />
  <button @click="currentTab = 'home'">home</button>
  <button @click="currentTab = 'about'">about</button>
  <hr />
  <component :is="currentTab" />
  <br /><br /><br /><br /><br />
  <br /><br /><br /><br /><br />
  <br /><br /><br /><br /><br />
  <br /><br /><br /><br /><br />
  <br /><br /><br /><br /><br />
</template>

<script>
import { ref } from "vue";
import Home from "./views/Home.vue";
import About from "./views/About.vue";
import { useTitle } from "./hooks/useTitle";
import { useScrollPosition } from "./hooks/useScrollPosition";
export default {
  components: {
    Home,
    About,
  },
  setup() {
    const title = useTitle("App项目");
    const currentTab = ref("home");
    const { scrollX, scrollY } = useScrollPosition();
    const changeTitle = () => {
      title.value = "hooks项目";
    };

    const getScroll = () => {
      console.log("滚动位置", { scrollX, scrollY });
    };
    return {
      title,
      currentTab,
      scrollX,
      scrollY,
      changeTitle,
      getScroll,
    };
  },
};
</script>
