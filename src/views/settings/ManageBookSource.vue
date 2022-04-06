<template>
  <div id="main">
    <div class="mdui-appbar">
      <div class="mdui-toolbar mdui-color-theme">
        <a class="mdui-btn mdui-btn-icon" @click="$router.back()">
          <i class="mdui-icon material-icons">arrow_back</i>
        </a>
        <a href="javascript:;" class="mdui-typo-title">{{ title }}</a>
        <div class="mdui-toolbar-spacer"></div>
        <div class="mdui-textfield mdui-textfield-expandable mdui-float-right">
          <button class="mdui-textfield-icon mdui-btn mdui-btn-icon">
            <i class="mdui-icon material-icons">search</i>
          </button>
          <input class="mdui-textfield-input"type="text" placeholder="搜索" v-model="search_text" @keyup.enter="doSearch"/>
          <button class="mdui-textfield-close mdui-btn mdui-btn-icon">
            <i class="mdui-icon material-icons">close</i>
          </button>
        </div>
        <a href="javascript:;" class="mdui-btn mdui-btn-icon">
          <i class="mdui-icon material-icons">refresh</i>
        </a>
        <a href="javascript:;" class="mdui-btn mdui-btn-icon" id="btn_more"  @click="new $mdui.Menu('#btn_more','#more').open()">
          <i class="mdui-icon material-icons">more_vert</i>
        </a>
        <ul class="mdui-menu" id="more">
          <li class="mdui-menu-item">
            <a class="mdui-ripple">
              <i class="mdui-menu-item-icon mdui-icon material-icons">add</i>新建书源
            </a>
          </li>
          <li class="mdui-menu-item">
            <a class="mdui-ripple">
              <i class="mdui-menu-item-icon mdui-icon material-icons">import_export</i>本地导入
            </a>
          </li>
          <li class="mdui-menu-item">
            <a class="mdui-ripple">
              <i class="mdui-menu-item-icon mdui-icon material-icons">computer</i>网络导入
            </a>
          </li>
          <li class="mdui-menu-item">
            <a class="mdui-ripple">
              <i class="mdui-menu-item-icon mdui-icon material-icons">play_circle_outline</i>导出书源
            </a>
          </li>
        </ul>
      </div>
      <div class="mdui-tab mdui-color-theme" mdui-tab>
        <a class="mdui-ripple mdui-ripple-white" @click="showType=0">全部</a>
        <a class="mdui-ripple mdui-ripple-white" @click="showType=1">已启用</a>
        <a class="mdui-ripple mdui-ripple-white" @click="showType=2">已禁用</a>
      </div>
    </div>
  </div>
</template>

<script>
import mdui from "mdui";
const title = "书源管理"
export default {
  name: "ManageBookSource",
  data() {
    return {
      title,
      showType:0,
      search_text:"",
    }
  },

  mounted() {
    window.document.title = title
  },
  methods: {
    doSearch(){
      console.log("search:"+this.search_text)
    },
  },
}
</script>

<style scoped>

</style>
